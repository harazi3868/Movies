import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const navbar = [
  { to: '/', name: 'HOME' },
  { to: '/movies', name: 'MOVIES' },
  { to: '/series', name: 'SERIES' },
  { to: '/Search', name: 'SEARCH' }
];
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hover, setHover] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = navbar.findIndex((item) => item.to === currentPath);
    setHover(currentIndex);
  }, [location.pathname, navbar]);



  return (
    <header className="static flex justify-between items-center w-full h-16 px-5 pt-2">
      <Link to="/hero" className="text-white font-serif font-bold text-3xl">
        Moon<span className='text-red-500'>Flix</span>
      </Link>
      <nav className="flex">
        {navbar.map((item, index) => (
          <div key={index} className={`${hover ===index?'bg-[#f12121] rounded-lg':''} hidden md:flex`}>
            <Link
              to={item.to}
              className="text-white text-xl font-bold px-4 mx-2 py-2 hover:bg-[#f12121] rounded-lg"
            >
              {item.name}
            </Link>
          </div>
        ))}
        <FaBars
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
      </nav>
      {showMenu && (
        <div className="fixed top-0 right-0 md:hidden flex flex-col items-center pt-5 w-[55%] h-screen bg-gray-800 transition-all duration-300 z-50">
          <div className='flex justify-cente items-center wf'>
          <Link to="/hero" className="text-white font-serif font-bold text-3xl">
        Moon<span className='text-red-500'>Flix</span>
      </Link>
          <FaTimes
            className="text-white text-2xl cursor-pointer ml-5 "
            onClick={() => setShowMenu(!showMenu)}
          />
          </div>
          <div className="flex flex-col justify-start items-start pl-5 flex-grow w-full">
            <h2 className='text-4xl font-bold italic pt-5 '>MENU</h2>
            {navbar.map((item, index) => (
              <div key={index} className="my-4 ml-5">
                <Link
                  to={item.to}
                  className="text-white text-xl font-bold hover:bg-[#f12121] rounded-lg w-32 h-12 flex justify-center items-center "
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
