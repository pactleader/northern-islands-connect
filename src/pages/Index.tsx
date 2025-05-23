import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToResources = () => {
    const resourcesSection = document.getElementById('resources-section');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  // Hero images
  const heroImages = [
    '/images/northern-islands-3.jpg',  // Natural landscape
    '/images/northern-islands-2.jpg',  // Cultural scene
    '/images/northern-islands-1.jpg'   // Beautiful beach scene
  ];

  return (
    <Layout>
      {/* Hero section with slider */}
      <section className="hero-section relative min-h-[60vh] flex items-center justify-center">
        {isClient && (
          <div className="absolute inset-0 z-0">
            <Slider {...sliderSettings}>
              {heroImages.map((image, index) => (
                <div key={index} className="relative h-[60vh]">
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-ocean-dark/70 to-ocean-dark/90 z-10"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
        
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Northern Islands Mayor's Office
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Serving the communities of Alamagan, Agrihan, Asuncion, Maug, Farallon de Pajaros, Guguan and Pagan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link to="/islands">Explore Our Islands</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-medium" onClick={scrollToResources}>
              <span>Citizen Resources</span>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="wave-animation h-20"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Welcome to the Northern Islands</h2>
            <p className="text-lg text-gray-600 mb-10">
              The Northern Islands of the Commonwealth of the Northern Mariana Islands (CNMI) are a chain of 
              active volcanic islands in the Western Pacific. Our office serves as the local government 
              entity representing these unique and beautiful islands.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-ocean-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-ocean-dark">Our Mission</h3>
                <p className="text-gray-700">To represent Northern Islands residents and work towards sustainable resettlement.</p>
              </div>
              <div className="bg-island-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-island-dark">Conservation</h3>
                <p className="text-gray-700">To protect and preserve the unique environments and cultural heritage.</p>
              </div>
              <div className="bg-sand-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-sand-dark">Development</h3>
                <p className="text-gray-700">To promote responsible development that benefits island communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources-section" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Resident Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-ocean-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ocean-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">NAP Applications</h3>
              <p className="text-gray-600 mb-4">Application forms for the Nutrition Assistance Program.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/resources">View Forms</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-island-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-island-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register for a Trip</h3>
              <p className="text-gray-600 mb-4">Registration for Northern Islands visits and field trips.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/trips">Register Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-sand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Homestead Claims</h3>
              <p className="text-gray-600 mb-4">Information about homestead claims in the Northern Islands.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/homesteads">Learn More</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-coral-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education Resources</h3>
              <p className="text-gray-600 mb-4">Educational materials about the Northern Islands.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/education">Access Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Experience Section - Updated with new background color */}
      <section className="py-16 md:py-20 bg-[hsl(198.99deg,89.34%,47.84%)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the Northern Islands?</h2>
            <p className="text-lg mb-8">
              Whether you're interested in visiting, researching, or learning more about our unique islands, 
              we're here to assist you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="font-medium bg-white text-[hsl(198.99deg,89.34%,47.84%)] hover:bg-gray-100">
                <Link to="/islands">Explore Islands</Link>
              </Button>
              <Button asChild size="lg" className="font-medium bg-white text-[hsl(198.99deg,89.34%,47.84%)] hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                className="w-full h-48 object-cover" 
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Island fishing project" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sustainable Fishing Project Launched</h3>
                <p className="text-gray-600 mb-4">New initiative aims to support traditional fishing methods while ensuring sustainable practices.</p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">April 2, 2025</span>
                  <Link to="/news/fishing-project" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 ml-auto">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                className="w-full h-48 object-cover" 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Solar panel installation" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar Energy Coming to Pagan</h3>
                <p className="text-gray-600 mb-4">Renewable energy project set to bring sustainable power to future resettlement areas.</p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">March 25, 2025</span>
                  <Link to="/news/solar-energy" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 ml-auto">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                className="w-full h-48 object-cover" 
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Cultural preservation workshop" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cultural Heritage Preservation Workshop</h3>
                <p className="text-gray-600 mb-4">Community members gathered to share and document traditional knowledge and practices.</p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">March 18, 2025</span>
                  <Link to="/news/cultural-workshop" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 ml-auto">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/news">View All Updates</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
