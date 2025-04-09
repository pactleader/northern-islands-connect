
import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  columns?: number;
}

const CardGrid = ({ children, columns = 3 }: CardGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {children}
    </div>
  );
};

export default CardGrid;
