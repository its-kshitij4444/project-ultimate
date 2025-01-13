import React from 'react'
import NavbarItem from './NavbarItem'
const Navbar = () => {
  return (
    <nav className='fixed top-[30%] left-[6%] flex justify-center items-center w-24 h-[40vh] bg-black/40 border border-white rounded-full text-white p-4'>
        <ul className='flex flex-col space-y-7 list-none'>
          <NavbarItem id='#home' item='Home'/>
          <NavbarItem id='#about' item='About me'/>
          <NavbarItem id='#projects' item='Projects'/>
          <NavbarItem id='#contact' item='Contact'/>
        </ul>
      </nav>
  )
}

export default Navbar
