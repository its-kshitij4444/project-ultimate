import React from 'react'

const ContainerComp = ({id,text,styles,children}) => {
  return (
    <div id={id} className={`relative left-[20%] my-7 p-6 flex ${styles} text-white border-2 border-white w-[75%] min-h-[600px] rounded-md`}>
      {text && <h1 className='text-3xl font-bold text-center m-4 text-yellow-200'>{text}</h1>}
      {children}
    </div>
  )
}

export default ContainerComp
