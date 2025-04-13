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
          Learn more about Saipan Mayor Ramon "RB" Jose Blas Camacho and his vision for our community.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6 max-w-[500px] max-h-[500px] mx-auto">
                  <img 
                    src="/images/mayor-camacho.webp"
                    alt="Mayor Ramon 'RB' Jose Blas Camacho"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4 border-b pb-2">Contact Information</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Mail className="mr-3 text-ocean-dark" size={18} />
                      <span>saipanmayor@mos.gov.mp</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Phone className="mr-3 text-ocean-dark" size={18} />
                      <span>(670) 234-6208</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-3 text-ocean-dark" size={18} />
                      <span>Elected in 2022</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-ocean-dark" size={18} />
                      <span>2799 Teer Drive Suite A, Saipan MP, 96950</span>
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
              <h1 className="text-3xl font-bold mb-6">Mayor Ramon "RB" Jose Blas Camacho</h1>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  Mayor Ramon "RB" Jose Blas Camacho has steadfastly dedicated his life to serving the community. Early in his journey, Camacho ventured into the realm of law enforcement, completing his training and graduating from the 3rd Cycle class at the Police Academy in November 1982. Over the course of the 1980s, he climbed the ranks within the Department of Public Safety, gaining experience across various departments.
                </p>
                
                <p className="mb-4">
                  In the 1990s and early 2000s, Camacho assumed the role of Assistant Police Chief and took charge of several key departmental sections. In 2002, he retired from law enforcement, embarking on a new chapter committed to community service and aiding the people.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                  <Award className="mr-2 text-island-dark" size={24} />
                  Vision for Saipan
                </h2>
                
                <p className="mb-4">
                  Guided by his three core principles of "Safe Community, Safe Village, and A Clean Island," Mayor RB is committed to serving the people to the best of his ability and utilizing his full capacity as Mayor.
                </p>
                
                <p className="mb-4">
                  The Mayor of Saipan is responsible for administering government programs, public services, and appropriations provided by law, for the island of Saipan. Furthermore, the Mayor coordinates various federal programs extended to the island. The core responsibilities of the Mayor of Saipan primarily involve services, programs, and other efforts that target the community.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Accomplishments</h2>
                
                <p className="mb-4">
                  Throughout the years, Camacho's contributions have been diverse and impactful:
                </p>
                
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2">Served on the Board of Parole</li>
                  <li className="mb-2">Contributed to the Farm Service Agency</li>
                  <li className="mb-2">Participated in soil and water conservation efforts</li>
                  <li className="mb-2">Held the position of President of the Farmers Association</li>
                  <li className="mb-2">Dedicated seven years to the Municipal Council</li>
                  <li className="mb-2">Elected as the 16th Mayor of Saipan in 2022</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Programs and Services</h2>
                
                <p className="mb-4">
                  Under Mayor Camacho's leadership, the Municipality of Saipan offers various programs and services to the community:
                </p>
                
                <ul className="list-disc pl-5 mb-6">
                  <li className="mb-2"><strong>Adopt A Place</strong> - Community beautification initiative</li>
                  <li className="mb-2"><strong>Dog Control</strong> - Animal management services</li>
                  <li className="mb-2"><strong>International Exchange Program</strong> - Cultural and educational exchanges</li>
                  <li className="mb-2"><strong>Neighborhood Watch</strong> - Community safety program</li>
                  <li className="mb-2"><strong>Saipan Higher Education Financial Assistance (SHEFA)</strong> - Support for students pursuing higher education</li>
                  <li className="mb-2"><strong>Public Services</strong> - Including employment applications, farmers registration, house numbering, ID services, and marriage services</li>
                </ul>
                
                <blockquote className="italic border-l-4 border-ocean-dark pl-4 my-6">
                  "My commitment is to serve with integrity, transparency, and dedication to the needs of all our residents."
                  <footer className="text-right">— Mayor Ramon "RB" Jose Blas Camacho</footer>
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
