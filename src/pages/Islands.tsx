import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

const Islands = () => {
  const islands = [
    {
      name: 'Agrihan',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      description: 'Home to the highest peak in Micronesia, this volcanic island offers breathtaking views and unique biodiversity.',
      path: '/islands/agrihan'
    },
    {
      name: 'Alamagan',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'A lush, tropical paradise with rich cultural significance and scenic landscapes.',
      path: '/islands/alamagan'
    },
    {
      name: 'Anatahan',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      description: 'Known for its volcanic activity, this island features dramatic landscapes and endemic wildlife.',
      path: '/islands/anatahan'
    },
    {
      name: 'Farallon de Pajaros',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      description: 'The northernmost island of the CNMI, home to diverse bird populations and marine ecosystems.',
      path: '/islands/farallon-de-pajaros'
    },
    {
      name: 'Guguan',
      image: 'https://images.unsplash.com/photo-1542259009477-d6258e8c8e2d',
      description: 'An uninhabited wildlife conservation area with pristine beaches and clear waters.',
      path: '/islands/guguan'
    },
    {
      name: 'Maug',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      description: 'A group of three small islands forming the rim of a submerged volcano crater, rich in marine life.',
      path: '/islands/maug'
    },
    {
      name: 'Pagan',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      description: 'Known for its active volcanoes and beautiful black sand beaches, Pagan has a complex history and natural beauty.',
      path: '/islands/pagan'
    },
    {
      name: 'Sarigan',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'A wildlife sanctuary with lush forests recovering after successful conservation efforts.',
      path: '/islands/sarigan'
    },
    {
      name: 'Asuncion',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      description: 'A remote island with steep volcanic slopes and important seabird nesting sites.',
      path: '/islands/asuncion'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="The Northern Islands" 
        background="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      >
        <p>
          Discover the pristine beauty and rich cultural heritage of the Northern Islands of the CNMI.
          Each island offers unique landscapes, history, and natural wonders.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Explore Our Islands</h2>
          <CardGrid columns={3}>
            {islands.map((island) => (
              <Card 
                key={island.name}
                title={island.name}
                image={island.image}
                link={island.path}
              >
                <p>{island.description}</p>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-12 bg-ocean-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Northern Islands</h2>
            <p className="mb-4 text-gray-700">
              The Northern Islands of the CNMI comprise a chain of 9 islands extending northward from Saipan. 
              These islands are characterized by their volcanic origins, pristine beaches, diverse ecosystems, 
              and rich cultural heritage.
            </p>
            <p className="mb-4 text-gray-700">
              While most of these islands are currently uninhabited, they hold significant cultural and historical 
              importance for the Chamorro and Carolinian people who have traditionally inhabited them. The Northern 
              Islands Mayor's Office works to preserve these islands and support initiatives for sustainable visits 
              and potential resettlement.
            </p>
            <p className="text-gray-700">
              Each island has its own unique character and natural features, from the towering volcanic peak of 
              Agrihan to the crater lakes of Pagan and the wildlife sanctuaries of Sarigan and Guguan.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Islands;
