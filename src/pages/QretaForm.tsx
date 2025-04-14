
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { FormCard } from '@/components/FormCard';
import { ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { submitForm } from '@/utils/formSubmission';
import { QretaFormData } from '@/types/forms';

const QretaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data: QretaFormData = {
        fullName: formData.get('fullName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        topic: formData.get('topic') as string,
        location: formData.get('location') as string,
        date: formData.get('date') as string,
        details: formData.get('details') as string,
        witnesses: formData.get('witnesses') as string,
      };
      
      submitForm('qreta', data);
      
      toast({
        title: "Form submitted successfully!",
        description: "Your Qreta form has been received.",
        duration: 5000,
      });
      
      // Navigate back to home page after successful submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Error submitting form",
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
            title="Qreta Form" 
            description="Please complete all fields below to submit your Qreta information." 
            icon={<ClipboardList className="h-6 w-6 text-dataBlue" />}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" required />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="topic">Topic</Label>
                  <Input id="topic" name="topic" required />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" required />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="details">Details</Label>
                  <Textarea 
                    id="details" 
                    name="details" 
                    rows={5} 
                    placeholder="Please provide detailed information..." 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="witnesses">Witnesses (if any)</Label>
                  <Textarea 
                    id="witnesses" 
                    name="witnesses" 
                    rows={3} 
                    placeholder="List any witnesses or additional contacts..." 
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-dataBlue hover:bg-dataBlue-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Qreta Form'}
                </Button>
              </div>
            </form>
          </FormCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default QretaForm;
