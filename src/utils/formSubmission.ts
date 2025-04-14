
import { v4 as uuidv4 } from 'uuid';
import { FormSubmission } from '@/types/forms';

// In a real application, this would be replaced with API calls to a backend
const STORAGE_KEY = 'dataCentralSubmissions';

// Mock database functions
export function getSubmissions(): FormSubmission[] {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (!storageData) return [];
  
  try {
    const data = JSON.parse(storageData);
    return data.map((item: any) => ({
      ...item,
      submittedAt: new Date(item.submittedAt)
    }));
  } catch (error) {
    console.error('Error parsing submissions data:', error);
    return [];
  }
}

export function submitForm(formType: FormSubmission['formType'], data: any): FormSubmission {
  const submissions = getSubmissions();
  
  const newSubmission: FormSubmission = {
    id: uuidv4(),
    formType,
    status: formType === 'abalatMzgeba' ? 'pending' : undefined,
    submittedAt: new Date(),
    data
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  
  return newSubmission;
}

export function updateSubmissionStatus(id: string, status: 'accepted' | 'rejected') {
  const submissions = getSubmissions();
  const updatedSubmissions = submissions.map(sub => {
    if (sub.id === id) {
      return { ...sub, status };
    }
    return sub;
  });
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
  return updatedSubmissions;
}

export function exportAsCsv(submissions: FormSubmission[]) {
  if (submissions.length === 0) {
    alert('No submissions to export');
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
