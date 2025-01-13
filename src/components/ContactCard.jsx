import React from 'react'

const ContactCard = ({link,item,hover,children}) => {
  return (
    <div className={`rounded-lg h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] ${hover} border border-white flex flex-col justify-evenly items-center`}>
        {children}
      <a href={link} target="_blank" className='text-white text-base sm:text-lg mt-4 sm:mt-6 no-underline hover:text-yellow-300 transition-colors'>
        Follow on {item}
      </a>
    </div>
  )
}

export default ContactCard