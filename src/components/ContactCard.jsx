import React from 'react'

const ContactCard = ({link,item,hover,children}) => {
  return (
    <div className={`rounded-lg h-[400px] w-[300px] ${hover} border border-white flex flex-col justify-evenly items-center`}>
        {children}
      <a href={link} target="_blank" className='text-white text-lg mt-6 no-underline hover:text-yellow-300 transition-colors'>
        Follow on {item}
      </a>
    </div>
  )
}

export default ContactCard
