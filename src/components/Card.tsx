
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  image?: string;
  link?: string;
  children: ReactNode;
}

const Card = ({ title, image, link, children }: CardProps) => {
  const cardContent = (
    <>
      {image && (
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-700 mb-4">{children}</div>
        {link && (
          <div className="flex items-center text-ocean-dark font-medium">
            <span>Learn more</span>
            <ArrowRight size={18} className="ml-1" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {link ? (
        <Link to={link} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default Card;
