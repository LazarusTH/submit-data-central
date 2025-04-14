
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { FormCard } from '@/components/FormCard';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { submitForm } from '@/utils/formSubmission';
import { AbetutaFormData } from '@/types/forms';

const AbetutaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data: AbetutaFormData = {
        fullName: formData.get('fullName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        address: formData.get('address') as string,
        city: formData.get('city') as string,
        region: formData.get('region') as string,
        description: formData.get('description') as string,
      };
      
      submitForm('abetuta', data);
      
      toast({
        title: "Form submitted successfully!",
        description: "Your Abetuta form has been received.",
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
            title="Abetuta Form" 
            description="Please complete all fields below to submit your Abetuta information." 
            icon={<FileText className="h-6 w-6 text-dataBlue" />}
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
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" required />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <Input id="region" name="region" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    rows={5} 
                    placeholder="Please provide detailed information..." 
                    required 
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-dataBlue hover:bg-dataBlue-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Abetuta Form'}
                </Button>
              </div>
            </form>
          </FormCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default AbetutaForm;
