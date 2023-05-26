import React from 'react'

export const Card=({image,title,text})=> {
  return (
    <div className='card'>
        <div className="card-image">
            <img src={image} />
        </div>
        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-text">
            <p>{text}</p>
        </div>
    </div>
  )
}
