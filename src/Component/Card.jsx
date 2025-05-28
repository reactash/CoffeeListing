import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <img src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg"/>
      <div className='card-details'>
        <p className='title'><span className='name'>House Coffee</span> <span className='price'>$3.50</span></p>
        <p> ⭐4.85 <span className='review'>(320 votes)</span></p>
      </div>
    </div>
  )
}

export default Card