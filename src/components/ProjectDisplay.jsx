import React from 'react'
import { useState } from 'react'

const ProjectDisplay = ({item,images,children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className='relative overflow-hidden border border-white h-[450px] w-[80] rounded-lg'>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <div className="flex justify-between w-full mt-4 px-4">
      <button className='text-black text-2xl bg-white hover:bg-yellow-300' onClick={handlePrev}>&#8592;</button>
      <button className='text-black text-2xl bg-white hover:bg-yellow-300' onClick={handleNext}>&#8594;</button>
    </div>
    <br />
    <p className='text-2xl text-yellow-400'>{item}</p>
    {children}
    </>
  )
}

export default ProjectDisplay
