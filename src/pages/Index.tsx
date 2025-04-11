
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

  // Resources
  const resources = [
    {
      title: 'Marriage License Application',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      link: '/contact'
    },
    {
      title: 'Register for Northern Islands Trip',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      link: '/contact'
    },
    {
      title: 'Upcoming Events',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      link: '/contact'
    },
    {
      title: 'NAP Applications',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      link: '/contact'
    },
    {
      title: 'Medical Referral',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      link: '/contact'
    },
    {
      title: 'Contact Us',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      link: '/contact'
    }
  ];

  const scrollToResources = () => {
    document.getElementById('resources-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section h-[80vh] flex items-center justify-center text-white" 
               style={{ 
                 backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzYzYTY3NzJkNmYwMWI3MjA5ZV9hbmF0YWhhbi1pc2xhbmQtMDIuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Northern Islands Mayor's Office
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Preserving our heritage and building our future in the Northern Islands of the CNMI
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#0066B3] hover:bg-[#0052A2] text-white"
              onClick={scrollToResources}
            >
              Citizen Resources
            </Button>
            <Button asChild size="lg" className="bg-ocean-dark hover:bg-ocean text-white">
              <Link to="/islands">Explore Our Islands</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section (formerly Mission Section) */}
      <section id="resources-section" className="py-16 bg-ocean-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Resources</h2>
            <div className="h-1 w-20 bg-[#0066B3] mx-auto my-4"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Access important resources and services provided by the Northern Islands Mayor's Office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {resources.map((resource, index) => (
              <Link to={resource.link} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#0066B3] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Islands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Discover Our Islands</h2>
              <div className="h-1 w-20 bg-[#0066B3] my-4"></div>
              <p className="text-lg text-gray-700">Explore the beauty and charm of the Northern Islands</p>
            </div>
            <Link to="/islands" className="text-[#0066B3] font-medium flex items-center hover:underline">
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
              <div className="h-1 w-20 bg-[#0066B3] my-4"></div>
              <p className="text-lg text-gray-700">Discover the important work being done by the Mayor's Office</p>
            </div>
            <Link to="/projects" className="text-[#0066B3] font-medium flex items-center hover:underline">
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
      <section className="py-16 bg-[#0066B3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the Northern Islands?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register for trips to the Northern Islands or get in touch with our office for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#0066B3] hover:bg-gray-100">
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
