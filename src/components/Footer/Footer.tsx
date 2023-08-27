// create footer component
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 absolute bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-sm">&copy; 2023 My Awesome Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;