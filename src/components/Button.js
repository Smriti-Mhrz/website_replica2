import React from 'react'

export const Button=({type, label,name})=> {
  return (
    <div className='button'>
      <button type={type} label={label} >{name}</button>
    </div>
  )
}
