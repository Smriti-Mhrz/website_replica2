import Aos from 'aos'
import React from 'react'
import "aos/dist/aos.css";


export const Button=({type, label,name,className,aos})=> {
  return (
    <div className='button'>
      <button type={type} label={label} className={className
      } data-aos={aos}>{name}</button>
    </div>
  )
}
