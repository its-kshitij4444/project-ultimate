import React from 'react'

const NavbarItem = ({id,item}) => {
  return (
    <li>
        <a href={id} className='block text-white text-center hover:text-yellow-300 transition-colors'>{item}</a>
    </li>
  )
}

export default NavbarItem
