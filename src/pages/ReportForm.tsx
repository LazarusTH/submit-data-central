
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { FormCard } from '@/components/FormCard';
import { FileBarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from '@/components/ui/use-toast';
import { submitForm } from '@/utils/formSubmission';
import { ReportFormData } from '@/types/forms';

const ReportForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [incidentType, setIncidentType] = useState<string>("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data: ReportFormData = {
        fullName: formData.get('fullName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        incidentDate: formData.get('incidentDate') as string,
        incidentLocation: formData.get('incidentLocation') as string,
        incidentType: incidentType,
        incidentDetails: formData.get('incidentDetails') as string,
        witnessInfo: formData.get('witnessInfo') as string,
      };
      
      submitForm('report', data);
      
      toast({
        title: "Report submitted successfully!",
        description: "Your report has been received.",
        duration: 5000,
      });
      
      // Navigate back to home page after successful submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Error submitting report",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <PageLayout>
      <div className="container py-12">
        <div className="mx-auto max-w-2xl">
          <Button variant="outline" onClick={() => navigate('/')} className="mb-8">
            &larr; Back to home
          </Button>
          
          <FormCard 
            title="Report Submission Form" 
            description="Please complete all fields below to submit your report." 
            icon={<FileBarChart className="h-6 w-6 text-dataBlue" />}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name (optional)</Label>
                  <Input id="fullName" name="fullName" placeholder="You may submit anonymously" />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input id="phone" name="phone" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input id="email" name="email" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="incidentDate">Incident Date</Label>
                    <Input id="incidentDate" name="incidentDate" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="incidentLocation">Incident Location</Label>
                    <Input id="incidentLocation" name="incidentLocation" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="incidentType">Incident Type</Label>
                  <Select onValueChange={setIncidentType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="safety">Safety Concern</SelectItem>
                      <SelectItem value="ethics">Ethics Violation</SelectItem>
                      <SelectItem value="corruption">Corruption</SelectItem>
                      <SelectItem value="harassment">Harassment</SelectItem>
                      <SelectItem value="discrimination">Discrimination</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="incidentDetails">Incident Details</Label>
                  <Textarea 
                    id="incidentDetails" 
                    name="incidentDetails" 
                    rows={6}
                    placeholder="Please describe what happened in detail..."
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="witnessInfo">Witness Information (if any)</Label>
                  <Textarea 
                    id="witnessInfo" 
                    name="witnessInfo" 
                    rows={3}
                    placeholder="List any witnesses or additional evidence..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-dataBlue hover:bg-dataBlue-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Report'}
                </Button>
              </div>
            </form>
          </FormCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReportForm;
