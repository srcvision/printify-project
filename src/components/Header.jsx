import React,{useState} from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyPrint</div>
        <ul className="hidden md:flex space-x-4">
          <li className="hover:text-green-500">Home</li>
          <li className="hover:text-green-500">Products</li>
          <li className="hover:text-green-500">Pricing</li>
          <li className="hover:text-green-500">Contact</li>
        </ul>
        <button onClick={toggleMenu} className="md:hidden text-green-500">{isMenuOpen ? "X" : "="}</button>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-100 p-4">
          <li className="hover:text-green-500 py-2">Home</li>
          <li className="hover:text-green-500 py-2">Products</li>
          <li className="hover:text-green-500 py-2">Pricing</li>
          <li className="hover:text-green-500 py-2">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
