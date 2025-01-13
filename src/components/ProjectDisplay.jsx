import React from 'react'

const ProjectDisplay = ({item,children}) => {
  return (
    <>
    <div className='relative border border-white h-[450px] w-[80]'></div>
    <p className='text-2xl'>{item}</p>
    {children}
    </>
  )
}

export default ProjectDisplay
