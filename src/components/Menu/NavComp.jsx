import Link from 'next/link'
import React from 'react'

const NavComp = ({link,title,isActive}) => {
  return (
   <>
   <Link
      href={link}
      className={`block ${isActive ? 'text-[#9747FF] font-bold' : 'text-black font-medium'} xl:pl-3    text-sm md:font-[400px] leading-[1.21]  hover:border-b-2  border-[#FCE0C5]  hover:text-[#9747FF] sm:text-[1rem] `}
    >
      {title}
    </Link>
    
   
   </>
  )
}

export default NavComp