import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>&copy; 2024 MyPrint. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-green-500">Facebook</a>
        <a href="#" className="hover:text-green-500">Twitter</a>
        <a href="#" className="hover:text-green-500">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
