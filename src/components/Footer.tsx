
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-dark text-white pt-12 pb-8 wave-animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Northern Islands Mayor's Office</h3>
            <p className="mb-2 text-sm opacity-90">
              Dedicated to serving the residents of the Northern Islands and preserving its natural beauty.
            </p>
            <div className="mt-6">
              <Link to="/about" className="text-sm text-ocean-light hover:text-white transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">(670) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@northernislands.gov.mp</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span className="text-sm">Northern Islands Mayor's Office<br />Saipan MP 96950</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Monday-Friday, 8:00 AM - 4:30 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/islands" className="text-sm hover:text-ocean-light transition-colors">
                  Northern Islands
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-ocean-light transition-colors">
                  Projects & Grants
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-ocean-light transition-colors">
                  Registration for Trips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-ocean-light transition-colors">
                  Marriage License Application
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ocean-light/30 pt-4 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Northern Islands Mayor's Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
