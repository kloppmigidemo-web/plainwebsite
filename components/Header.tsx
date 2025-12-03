
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
          Understanding Primary Colors
        </h1>
      </div>
    </header>
  );
};
