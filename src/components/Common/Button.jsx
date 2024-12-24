import React from 'react'

const Button = ({text,onClick,colorClass,...props}) => {
  return (
    <>
    <div className={` bg-[#60B0F4] px-2 py-2 md:px-6 rounded-full text-white ${colorClass}`} onClick={onClick} props={props}>
     {text}
    </div>
    
    </>
  )
}

export default Button