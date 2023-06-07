import React from 'react'

export const Button=({type, label,name,className})=> {
  return (
    <div className='button'>
      <button type={type} label={label} className={className
      }>{name}</button>
    </div>
  )
}
