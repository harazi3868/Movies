import React from "react";
import { navbar } from "../header/Header";
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white mt-10
     flex justify-between md:flex-row flex-col p-4 gap-2 items-center">
      <Link to="/hero" className="text-white font-serif font-bold text-3xl">
        Moon<span className='text-red-500'>Flix</span>
      </Link>
      <nav className="flex">
        {navbar.map((item, index) => (
          <div key={index} className="md:flex">
            <Link
              to={item.to}
              className="text-white text-xl font-bold px-4 py-2 hover:bg-[#f12121] rounded-lg"
            >
              {item.name}
            </Link>
          </div>
        ))}
        </nav>
    </footer>
  );
};

export default Footer;
