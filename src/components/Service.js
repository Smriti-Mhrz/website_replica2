import React from 'react'

export const Service=({image, text})=> {
  return (
    <div className='service'>
        <div className="service-image">
      <img src={image}/>
        </div>
      <p>{text}</p>
    </div>
  )
}
