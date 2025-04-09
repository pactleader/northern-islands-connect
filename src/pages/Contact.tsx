
import { useState } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, FileText, Sailboat } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState('contact');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        background="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
      >
        <p>
          Get in touch with the Northern Islands Mayor's Office. We're here to answer your questions, 
          provide assistance, and hear your feedback.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="p-6 shadow-md h-full">
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Office Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin size={20} className="text-ocean-dark mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        Northern Islands Mayor's Office<br />
                        P.O. Box 10007<br />
                        Saipan, MP 96950
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone size={20} className="text-ocean-dark mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">(670) 555-1234</p>
                      <p className="text-gray-600">Fax: (670) 555-1235</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail size={20} className="text-ocean-dark mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@northernislands.gov.mp</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock size={20} className="text-ocean-dark mt-1" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-gray-600">Monday-Friday: 8:00 AM - 4:30 PM</p>
                      <p className="text-gray-600">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="p-6 shadow-md">
                <div className="mb-6 border-b pb-4">
                  <RadioGroup 
                    defaultValue="contact" 
                    className="flex flex-wrap gap-4"
                    value={formType}
                    onValueChange={setFormType}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="contact" id="contact" />
                      <Label htmlFor="contact" className="flex items-center">
                        <Mail size={16} className="mr-1 text-ocean-dark" />
                        General Contact
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="trip" id="trip" />
                      <Label htmlFor="trip" className="flex items-center">
                        <Sailboat size={16} className="mr-1 text-ocean-dark" />
                        Trip Registration
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="marriage" id="marriage" />
                      <Label htmlFor="marriage" className="flex items-center">
                        <FileText size={16} className="mr-1 text-ocean-dark" />
                        Marriage License
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formType === 'contact' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} required />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">Submit</Button>
                  </form>
                )}

                {formType === 'trip' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Trip Registration</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tripFirstName">First Name</Label>
                        <Input id="tripFirstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tripLastName">Last Name</Label>
                        <Input id="tripLastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tripEmail">Email</Label>
                        <Input id="tripEmail" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tripPhone">Phone</Label>
                        <Input id="tripPhone" placeholder="Enter your phone number" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="island">Destination Island</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an island" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agrihan">Agrihan</SelectItem>
                          <SelectItem value="alamagan">Alamagan</SelectItem>
                          <SelectItem value="anatahan">Anatahan</SelectItem>
                          <SelectItem value="guguan">Guguan</SelectItem>
                          <SelectItem value="pagan">Pagan</SelectItem>
                          <SelectItem value="sarigan">Sarigan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants</Label>
                        <Input id="participants" type="number" min="1" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input id="preferredDate" type="date" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tripPurpose">Purpose of Trip</Label>
                      <Textarea id="tripPurpose" placeholder="Describe the purpose of your trip" rows={4} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea id="specialRequirements" placeholder="Any special requirements or notes" rows={3} />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">Submit Registration</Button>
                  </form>
                )}

                {formType === 'marriage' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Marriage License Application</h3>
                    
                    <div className="bg-ocean-light/30 p-4 rounded-md mb-4">
                      <p className="text-sm">
                        This form allows you to start your marriage license application process. Once submitted, 
                        our office will contact you with further instructions. The completed application will need 
                        to be signed in person before the license can be issued.
                      </p>
                    </div>
                    
                    <h4 className="font-medium border-b pb-2 mb-3">Applicant 1 Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="app1FirstName">First Name</Label>
                        <Input id="app1FirstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="app1LastName">Last Name</Label>
                        <Input id="app1LastName" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="app1Dob">Date of Birth</Label>
                        <Input id="app1Dob" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="app1Phone">Phone</Label>
                        <Input id="app1Phone" required />
                      </div>
                    </div>
                    
                    <h4 className="font-medium border-b pb-2 mb-3 mt-6">Applicant 2 Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="app2FirstName">First Name</Label>
                        <Input id="app2FirstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="app2LastName">Last Name</Label>
                        <Input id="app2LastName" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="app2Dob">Date of Birth</Label>
                        <Input id="app2Dob" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="app2Phone">Phone</Label>
                        <Input id="app2Phone" required />
                      </div>
                    </div>
                    
                    <h4 className="font-medium border-b pb-2 mb-3 mt-6">Ceremony Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ceremonyDate">Planned Ceremony Date</Label>
                        <Input id="ceremonyDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ceremonyLocation">Planned Ceremony Location</Label>
                        <Input id="ceremonyLocation" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea id="additionalInfo" placeholder="Any additional information or questions" rows={3} />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">Submit Application</Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
