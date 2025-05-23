import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '../../public/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [imgError, setImgError] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Islands', path: '/islands' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Mayor', path: '/our-mayor' },
    { name: 'Staff', path: '/staff' },
    { name: 'Reports', path: '/reports' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[75px]">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                {!imgError ? (
                  <img 
                    src={logoImage}
                    alt="Northern Islands Mayor's Office Logo" 
                    className="h-12 w-auto"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex items-center">
                    <span className="text-[#0066B3] font-bold text-xl md:text-2xl">Northern Islands</span>
                    <span className="text-[#008A3C] font-bold text-xl md:text-2xl ml-1">Mayor's Office</span>
                  </div>
                )}
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0066B3] hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button 
                variant="ghost" 
                onClick={toggleMenu}
                className="p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - Modified to be more accessible */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#0066B3] hover:bg-gray-50 rounded-md border-b border-gray-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
