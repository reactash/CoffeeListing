import React from 'react'

const Card = ({props}) => {
  return (
    <div className='card'>
      <div className='img-wrapper'>    
        <img src={props.image}/>
      {props.popular ? <p className='popular'>Popular</p>:''}
      </div>
  
      <div className='card-details'>
        <p className='title'><span className='name'>{props.name}</span> <span className='price'>{props.price}</span></p>
       { props.rating ? <p className='rating'> <span> ⭐{props.rating} <span className='review'>({props.votes} votes)</span> </span> {!props.available ? <span className='sold-out'>Sold out</span>:'' } </p>:
          <p className='no-rating'><span> ☆ <span className='review'>No ratings </span></span> {!props.available? <span className='sold-out'>Sold out</span>:'' } </p>
       }
      </div>
    </div>
  )
}

export default Card