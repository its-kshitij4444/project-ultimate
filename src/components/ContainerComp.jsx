import React from 'react'

const ContainerComp = ({id,text,styles,children}) => {
  return (
    <div id={id} className={`relative mx-auto md:ml-[20%] my-4 sm:my-7 p-3 sm:p-6 flex ${styles} text-white border-2 border-white w-[90%] md:w-[75%] min-h-[600px] rounded-md mb-20 md:mb-7`}>
      {text && <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center m-2 sm:m-4 text-yellow-200'>{text}</h1>}
      {children}
    </div>
  );
}

export default ContainerComp