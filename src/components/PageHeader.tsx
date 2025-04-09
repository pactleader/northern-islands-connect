
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  background?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, background, children }: PageHeaderProps) => {
  return (
    <div 
      className={`w-full py-16 px-4 bg-cover bg-center text-white ${background ? '' : 'bg-ocean-dark'}`}
      style={background ? { backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background})` } : {}}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {children && (
          <div className="text-lg max-w-3xl opacity-90">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
