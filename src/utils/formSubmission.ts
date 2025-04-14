
import { v4 as uuidv4 } from 'uuid';
import { FormSubmission } from '@/types/forms';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

// Submit form data to Supabase
export async function submitForm(formType: FormSubmission['formType'], data: any): Promise<FormSubmission | null> {
  try {
    const newSubmission: Omit<FormSubmission, 'id'> = {
      formType,
      status: formType === 'abalatMzgeba' ? 'pending' : undefined,
      submittedAt: new Date(),
      data
    };
    
    // Insert submission into Supabase
    const { data: insertedData, error } = await supabase
      .from('submissions')
      .insert({
        form_type: formType,
        status: formType === 'abalatMzgeba' ? 'pending' : null,
        data: data,
      })
      .select('*')
      .single();
    
    if (error) {
      console.error('Error submitting form to Supabase:', error);
      
      // Fallback to localStorage if there's an error (offline mode)
      const submissions = getLocalSubmissions();
      const localSubmission: FormSubmission = {
        id: uuidv4(),
        ...newSubmission
      };
      submissions.push(localSubmission);
      localStorage.setItem('dataCentralSubmissions', JSON.stringify(submissions));
      
      return localSubmission;
    }
    
    // Transform the Supabase response into our FormSubmission type
    return {
      id: insertedData.id,
      formType: insertedData.form_type,
      status: insertedData.status,
      submittedAt: new Date(insertedData.submitted_at),
      data: insertedData.data
    };
  } catch (error) {
    console.error('Error in submitForm:', error);
    toast.error('Error submitting form. Data saved locally.');
    
    // Fallback to localStorage
    const submissions = getLocalSubmissions();
    const localSubmission: FormSubmission = {
      id: uuidv4(),
      formType,
      status: formType === 'abalatMzgeba' ? 'pending' : undefined,
      submittedAt: new Date(),
      data
    };
    submissions.push(localSubmission);
    localStorage.setItem('dataCentralSubmissions', JSON.stringify(submissions));
    
    return localSubmission;
  }
}

// Get submissions from Supabase with localStorage fallback
export async function getSubmissions(): Promise<FormSubmission[]> {
  try {
    // Get submissions from Supabase
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('submitted_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching submissions from Supabase:', error);
      // Fallback to local storage
      return getLocalSubmissions();
    }
    
    // Transform the Supabase data into our FormSubmission type
    return data.map((item: any) => ({
      id: item.id,
      formType: item.form_type,
      status: item.status,
      submittedAt: new Date(item.submitted_at),
      data: item.data
    }));
  } catch (error) {
    console.error('Error in getSubmissions:', error);
    // Fallback to local storage
    return getLocalSubmissions();
  }
}

// Update submission status in Supabase
export async function updateSubmissionStatus(id: string, status: 'accepted' | 'rejected'): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('submissions')
      .update({ status })
      .eq('id', id);
    
    if (error) {
      console.error('Error updating submission status in Supabase:', error);
      
      // Fallback to localStorage
      const submissions = getLocalSubmissions();
      const updatedSubmissions = submissions.map(sub => {
        if (sub.id === id) {
          return { ...sub, status };
        }
        return sub;
      });
      
      localStorage.setItem('dataCentralSubmissions', JSON.stringify(updatedSubmissions));
      return true;
    }
    
    return true;
  } catch (error) {
    console.error('Error in updateSubmissionStatus:', error);
    
    // Fallback to localStorage
    const submissions = getLocalSubmissions();
    const updatedSubmissions = submissions.map(sub => {
      if (sub.id === id) {
        return { ...sub, status };
      }
      return sub;
    });
    
    localStorage.setItem('dataCentralSubmissions', JSON.stringify(updatedSubmissions));
    return false;
  }
}

// Helper function to get submissions from localStorage
function getLocalSubmissions(): FormSubmission[] {
  const STORAGE_KEY = 'dataCentralSubmissions';
  const storageData = localStorage.getItem(STORAGE_KEY);
  
  if (!storageData) return [];
  
  try {
    const data = JSON.parse(storageData);
    return data.map((item: any) => ({
      ...item,
      submittedAt: new Date(item.submittedAt)
    }));
  } catch (error) {
    console.error('Error parsing submissions data from localStorage:', error);
    return [];
  }
}

// Export submissions as CSV
export function exportAsCsv(submissions: FormSubmission[]) {
  if (submissions.length === 0) {
    toast.error('No submissions to export');
    return;
  }
  
  // Get all possible headers from all submissions
  const headers = new Set<string>();
  submissions.forEach(submission => {
    Object.keys(submission.data).forEach(key => headers.add(key));
  });
  
  const allHeaders = ['ID', 'Form Type', 'Status', 'Submitted Date', ...Array.from(headers)];
  
  const rows = submissions.map(submission => {
    const row: Record<string, any> = {
      'ID': submission.id,
      'Form Type': submission.formType,
      'Status': submission.status || 'N/A',
      'Submitted Date': submission.submittedAt.toLocaleString()
    };
    
    // Add data fields
    Array.from(headers).forEach(header => {
      row[header] = submission.data[header] || '';
    });
    
    return row;
  });
  
  // Convert to CSV
  const csvContent = [
    allHeaders.join(','),
    ...rows.map(row => allHeaders.map(header => `"${row[header] || ''}"`).join(','))
  ].join('\n');
  
  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `data-central-export-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
