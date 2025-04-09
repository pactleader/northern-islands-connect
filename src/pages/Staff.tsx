
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Staff = () => {
  // Sample staff data - in a real application this would come from an API or database
  const staffMembers = [
    {
      name: 'Mayor John Santos',
      position: 'Mayor of the Northern Islands',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', // Replace with actual photo
      email: 'mayor@northernislands.gov.mp',
      phone: '(670) 555-1234',
      bio: 'Mayor Santos has been serving as the Northern Islands Mayor since 2020. Born to a family with roots in Pagan, he is dedicated to preserving the islands\' heritage while creating sustainable development opportunities for current and future generations.'
    },
    {
      name: 'Maria Mafnas',
      position: 'Chief of Staff',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21', // Replace with actual photo
      email: 'chiefofstaff@northernislands.gov.mp',
      phone: '(670) 555-1235',
      bio: 'Maria oversees the daily operations of the Mayor\'s Office and coordinates with various government agencies and community partners. Her family originally comes from Agrihan, and she is passionate about creating opportunities for Northern Islands residents.'
    },
    {
      name: 'Thomas Camacho',
      position: 'Environmental Programs Director',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb', // Replace with actual photo
      email: 'environment@northernislands.gov.mp',
      phone: '(670) 555-1236',
      bio: 'With a background in environmental science, Thomas leads conservation initiatives for the Northern Islands. He works closely with federal and local agencies to protect the islands\' unique ecosystems while balancing the needs of potential resettlement.'
    },
    {
      name: 'Ana Sablan',
      position: 'Cultural Affairs Coordinator',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', // Replace with actual photo
      email: 'culture@northernislands.gov.mp',
      phone: '(670) 555-1237',
      bio: 'Ana leads efforts to document and preserve the cultural heritage of the Northern Islands. Her work includes oral history projects, cultural site preservation, and educational programs about Northern Islands traditions.'
    },
    {
      name: 'James Pangelinan',
      position: 'Community Development Director',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff', // Replace with actual photo
      email: 'community@northernislands.gov.mp',
      phone: '(670) 555-1238',
      bio: 'James coordinates community engagement and development initiatives, working closely with former residents of the Northern Islands and their descendants to plan for potential resettlement and sustainable economic opportunities.'
    },
    {
      name: 'Elena Hofschneider',
      position: 'Administrative Services Manager',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', // Replace with actual photo
      email: 'admin@northernislands.gov.mp',
      phone: '(670) 555-1239',
      bio: 'Elena manages administrative operations for the Mayor\'s Office, including budgeting, procurement, and human resources. She ensures the office runs efficiently while maintaining compliance with government regulations.'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Our Staff" 
        background="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
      >
        <p>
          Meet the dedicated team at the Northern Islands Mayor\'s Office who work every day
          to serve our communities and preserve our islands.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((staff) => (
              <Card key={staff.name} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{staff.name}</h3>
                  <p className="text-ocean-dark font-medium mb-3">{staff.position}</p>
                  <p className="text-gray-700 mb-4 text-sm">{staff.bio}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Mail size={16} className="mr-2 text-ocean-dark" />
                      <span>{staff.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone size={16} className="mr-2 text-ocean-dark" />
                      <span>{staff.phone}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Work With Us</h2>
            <p className="mb-4 text-gray-700">
              The Northern Islands Mayor\'s Office is committed to serving our communities and preserving our islands 
              for future generations. We occasionally have employment and volunteer opportunities for dedicated 
              individuals who share our vision.
            </p>
            <p className="text-gray-700">
              To learn about current openings or to inquire about volunteer opportunities, please visit our Contact page 
              or reach out to our Administrative Services Manager.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
