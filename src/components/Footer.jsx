import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black/40 text-white p-3 border-t-2 rounded-t-[10px] border-white'>
      <p>&copy; {new Date().getFullYear()} Kshitij Jagtap. All rights reserved.</p>
    </div>
  )
}

export default Footer
