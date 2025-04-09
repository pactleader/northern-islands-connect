
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

const Projects = () => {
  const projects = [
    {
      title: 'Northern Islands Conservation Initiative',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      description: 'A comprehensive program dedicated to preserving the unique ecosystems and biodiversity of the Northern Islands through monitoring, research, and conservation efforts.',
      path: '/projects/conservation'
    },
    {
      title: 'Community Resettlement Program',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      description: 'Supporting families who wish to return and settle in the Northern Islands through infrastructure development, transportation assistance, and community building.',
      path: '/projects/resettlement'
    },
    {
      title: 'Cultural Heritage Preservation',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      description: 'Documenting and preserving the rich cultural heritage, traditions, languages, and historical sites of the Northern Islands for future generations.',
      path: '/projects/heritage'
    },
    {
      title: 'Sustainable Tourism Development',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      description: 'Creating sustainable tourism opportunities that showcase the islands\' natural beauty while ensuring minimal environmental impact and maximum benefit to local communities.',
      path: '/projects/tourism'
    },
    {
      title: 'Emergency Management & Disaster Preparedness',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'Building resilience through comprehensive emergency response planning, disaster preparedness, and climate change adaptation strategies for the Northern Islands.',
      path: '/projects/emergency'
    },
    {
      title: 'Maritime Transportation Improvement',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      description: 'Enhancing transportation infrastructure and services to improve accessibility to the Northern Islands for residents, visitors, and essential services.',
      path: '/projects/transportation'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Projects & Programs" 
        background="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
      >
        <p>
          Discover the key initiatives being undertaken by the Northern Islands Mayor's Office
          to preserve, develop, and support our islands and communities.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Current Projects</h2>
          <CardGrid columns={3}>
            {projects.map((project) => (
              <Card 
                key={project.title}
                title={project.title}
                image={project.image}
                link={project.path}
              >
                <p>{project.description}</p>
              </Card>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="py-12 bg-ocean-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Get Involved</h2>
            <p className="mb-4 text-gray-700">
              The Northern Islands Mayor's Office welcomes community participation in our various projects and initiatives.
              Whether you're interested in conservation, cultural preservation, or community development, there are many 
              ways to contribute to the future of the Northern Islands.
            </p>
            <p className="mb-4 text-gray-700">
              To learn more about how you can get involved, attend our community meetings, volunteer for projects, 
              or share your expertise, please visit our Contact page or reach out to our office directly.
            </p>
            <p className="text-gray-700">
              Together, we can build a sustainable and thriving future for the Northern Islands while preserving their 
              natural beauty and cultural heritage.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
