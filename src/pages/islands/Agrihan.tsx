import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Agrihan = () => {
  return (
    <Layout>
      <PageHeader 
        title="Agrihan"
        background="https://images.unsplash.com/photo-1472396961693-142e6e269027"
      >
        <p>
          Home to the highest peak in Micronesia, Agrihan offers breathtaking views and unique biodiversity.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">About Agrihan</h2>
              <p className="text-gray-700 mb-4">
                Agrihan is a volcanic island in the Northern Mariana Islands, known for its dramatic landscape 
                and rich biodiversity. The island's highest point, Mount Agrihan, rises to 3,166 feet (965 meters), 
                making it the highest peak in Micronesia.
              </p>
              <p className="text-gray-700 mb-4">
                The island's volcanic nature has created a unique ecosystem, with diverse plant and animal species 
                adapted to its challenging environment. The steep slopes and rugged terrain make it a fascinating 
                destination for scientific research and nature enthusiasts.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/islands">Back to Islands</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-ocean-light/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Quick Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Highest peak in Micronesia</li>
                  <li>• Active volcanic island</li>
                  <li>• Rich biodiversity</li>
                  <li>• Unique ecosystem</li>
                </ul>
              </div>
              <div className="bg-island-light/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Conservation Status</h3>
                <p className="text-gray-700">
                  Agrihan is recognized for its ecological importance and is protected as part of the 
                  Northern Islands conservation efforts. The island's unique flora and fauna are carefully 
                  monitored and preserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agrihan; 