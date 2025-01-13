import React from 'react'

const Footer = () => {
  return (
    <div className='max-sm:relative max-sm:bottom-[73px] max-sm:border-2 max-sm:rounded-none flex justify-center bg-black/40 text-white p-3 border-t-2 rounded-t-[10px] border-white'>
      <p>&copy; {new Date().getFullYear()} Kshitij Jagtap. All rights reserved.</p>
    </div>
  )
}

export default Footer
