
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { FormCard } from '@/components/FormCard';
import { UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from '@/components/ui/use-toast';
import { submitForm } from '@/utils/formSubmission';
import { AbalatMzgebaFormData } from '@/types/forms';

const AbalatMzgebaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data: AbalatMzgebaFormData = {
        fullName: formData.get('fullName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        birthDate: formData.get('birthDate') as string,
        gender: formData.get('gender') as string,
        education: formData.get('education') as string,
        occupation: formData.get('occupation') as string,
        experience: formData.get('experience') as string,
        motivation: formData.get('motivation') as string,
        references: formData.get('references') as string,
      };
      
      submitForm('abalatMzgeba', data);
      
      toast({
        title: "Registration submitted successfully!",
        description: "Your Abalat Mzgeba registration is pending approval.",
        duration: 5000,
      });
      
      // Navigate back to home page after successful submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Error submitting registration",
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
            title="Abalat Mzgeba Registration" 
            description="Please complete all fields below to register for Abalat Mzgeba." 
            icon={<UserCheck className="h-6 w-6 text-dataBlue" />}
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
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="birthDate">Date of Birth</Label>
                    <Input id="birthDate" name="birthDate" type="date" required />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <RadioGroup name="gender" defaultValue="male" className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="education">Education</Label>
                  <Input id="education" name="education" required />
                </div>
                
                <div>
                  <Label htmlFor="occupation">Current Occupation</Label>
                  <Input id="occupation" name="occupation" required />
                </div>
                
                <div>
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea 
                    id="experience" 
                    name="experience" 
                    rows={4}
                    placeholder="Describe your relevant experience..."
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="motivation">Motivation for Joining</Label>
                  <Textarea 
                    id="motivation" 
                    name="motivation" 
                    rows={4}
                    placeholder="Why do you want to join Abalat Mzgeba?"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="references">References</Label>
                  <Textarea 
                    id="references" 
                    name="references" 
                    rows={3}
                    placeholder="List any references..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-dataBlue hover:bg-dataBlue-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          </FormCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default AbalatMzgebaForm;
