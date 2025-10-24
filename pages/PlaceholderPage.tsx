
import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      <p className="mt-4 text-lg text-text-secondary">
        This section is under construction. We are working hard to bring you the best content.
      </p>
      <div className="mt-8">
        <Link 
          to="/" 
          className="px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-blue-800 transition-colors"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;
