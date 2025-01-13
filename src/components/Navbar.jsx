import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navClasses = isMobile
    ? 'fixed bottom-0 left-0 w-full h-16 bg-black/40 border-t border-white flex justify-center items-center z-50'
    : 'fixed top-[30%] left-[2%] sm:left-[4%] flex justify-center items-center w-16 sm:w-24 h-[40vh] bg-black/40 border border-white rounded-full text-white p-2 sm:p-4';

  const ulClasses = isMobile
    ? 'flex flex-row justify-around w-full px-4'
    : 'flex flex-col space-y-4 sm:space-y-7 list-none';

  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>
        <NavbarItem id='#home' item='Home'/>
        <NavbarItem id='#about' item='About me'/>
        <NavbarItem id='#projects' item='Projects'/>
        <NavbarItem id='#contact' item='Contact'/>
      </ul>
    </nav>
  );
}

export default Navbar