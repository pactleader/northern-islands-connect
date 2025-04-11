
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurMayor = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Mayor" 
        background="https://images.unsplash.com/photo-1472396961693-142e6e269027"
      >
        <p>
          Learn more about Northern Islands Mayor Valentino N. Taisacan Jr. and his vision for our community.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                    alt="Mayor Valentino N. Taisacan Jr."
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">Contact Information</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Mail className="mr-3 text-ocean-dark" size={18} />
                      <span>mayor@nimo.mp</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Phone className="mr-3 text-ocean-dark" size={18} />
                      <span>(670) 555-1234</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-3 text-ocean-dark" size={18} />
                      <span>Elected in 2023</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-ocean-dark" size={18} />
                      <span>Office: Saipan, CNMI</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link to="/contact">Schedule a Meeting</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-6">Mayor Valentino N. Taisacan Jr.</h1>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Mayor Valentino N. Taisacan Jr. was elected as the Mayor of the Northern Islands in 2023. With deep roots in the Northern Islands, Mayor Taisacan brings a strong commitment to preserving the unique cultural heritage of the islands while working towards sustainable development and improved services for island residents.
                </p>
                
                <p className="mb-4">
                  Born and raised in the CNMI, Mayor Taisacan has a lifelong connection to the Northern Islands through his family lineage. His grandparents were among the last permanent residents of Pagan before the volcanic eruption necessitated evacuation in 1981.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                  <Award className="mr-2 text-island-dark" size={24} />
                  Vision for the Northern Islands
                </h2>
                
                <p className="mb-4">
                  Mayor Taisacan's administration is focused on several key priorities:
                </p>
                
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2"><strong>Sustainable Resettlement</strong> - Supporting families who wish to return to the Northern Islands with sustainable infrastructure and regular transportation.</li>
                  <li className="mb-2"><strong>Environmental Protection</strong> - Preserving the pristine natural environments of the Northern Islands through conservation partnerships and responsible development.</li>
                  <li className="mb-2"><strong>Cultural Preservation</strong> - Documenting and celebrating the unique cultural heritage of the Northern Islands for future generations.</li>
                  <li className="mb-2"><strong>Economic Opportunities</strong> - Developing responsible tourism and sustainable industries to provide economic opportunities for Northern Islands residents.</li>
                  <li className="mb-2"><strong>Improved Services</strong> - Enhancing access to essential services like healthcare, education, and communications in the Northern Islands.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Accomplishments</h2>
                
                <p className="mb-4">
                  Since taking office in 2023, Mayor Taisacan has:
                </p>
                
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">Secured additional funding for Northern Islands transportation infrastructure</li>
                  <li className="mb-2">Established new partnerships with federal agencies for conservation initiatives</li>
                  <li className="mb-2">Expanded outreach programs for Northern Islands descendants</li>
                  <li className="mb-2">Launched a digital archive to preserve Northern Islands cultural heritage</li>
                  <li className="mb-2">Improved emergency preparedness planning for the Northern Islands</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Education and Background</h2>
                
                <p className="mb-4">
                  Mayor Taisacan holds a Bachelor's degree in Public Administration from the University of Guam and has previously served in various community leadership roles, including as a member of the Northern Islands Advisory Council and as a cultural preservationist.
                </p>
                
                <p className="mb-4">
                  Before his election as Mayor, he worked closely with community groups focused on Northern Islands heritage preservation and sustainable development planning, giving him valuable experience in the issues facing the Northern Islands community.
                </p>
                
                <blockquote className="italic border-l-4 border-ocean-dark pl-4 my-6">
                  "Our Northern Islands represent not just our past, but our future. My commitment is to preserve what makes these islands special while creating new opportunities for our people to thrive there once again."
                  <footer className="text-right">— Mayor Valentino N. Taisacan Jr.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurMayor;
