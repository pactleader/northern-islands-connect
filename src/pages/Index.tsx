
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Featured islands
  const featuredIslands = [
    {
      name: 'Agrihan',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      description: 'Home to the highest peak in Micronesia, this volcanic island offers breathtaking views.',
      path: '/islands/agrihan'
    },
    {
      name: 'Pagan',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      description: 'Known for its active volcanoes and beautiful black sand beaches.',
      path: '/islands/pagan'
    },
    {
      name: 'Alamagan',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'A lush, tropical paradise with rich cultural significance.',
      path: '/islands/alamagan'
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      title: 'Northern Islands Conservation',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      description: 'Protecting the natural resources and biodiversity of our islands for future generations.',
      path: '/projects/conservation'
    },
    {
      title: 'Community Resettlement Program',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      description: 'Supporting families who wish to return and settle in the Northern Islands.',
      path: '/projects/resettlement'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section h-[80vh] flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Northern Islands Mayor's Office
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Preserving our heritage and building our future in the Northern Islands of the CNMI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-ocean-dark hover:bg-ocean text-white">
              <Link to="/islands">Explore Our Islands</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-ocean-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="h-1 w-20 bg-ocean mx-auto my-4"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              The Northern Islands Mayor's Office is committed to representing, preserving, and developing the Northern Islands 
              while protecting their natural beauty and cultural heritage for current and future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conservation</h3>
              <p className="text-gray-600">
                Protecting the pristine environment and unique ecosystems of our Northern Islands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-island rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Supporting the people of the Northern Islands and maintaining our rich cultural heritage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-sand rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
                Creating sustainable economic opportunities for residents while preserving our natural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Islands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Discover Our Islands</h2>
              <div className="h-1 w-20 bg-ocean my-4"></div>
              <p className="text-lg text-gray-700">Explore the beauty and charm of the Northern Islands</p>
            </div>
            <Link to="/islands" className="text-ocean-dark font-medium flex items-center hover:underline">
              <span>View all islands</span>
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <CardGrid>
            {featuredIslands.map((island) => (
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

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
              <div className="h-1 w-20 bg-ocean my-4"></div>
              <p className="text-lg text-gray-700">Discover the important work being done by the Mayor's Office</p>
            </div>
            <Link to="/projects" className="text-ocean-dark font-medium flex items-center hover:underline">
              <span>View all projects</span>
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <CardGrid columns={2}>
            {featuredProjects.map((project) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the Northern Islands?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register for trips to the Northern Islands or get in touch with our office for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-ocean-dark hover:bg-gray-100">
              <Link to="/contact">Register for Trips</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
