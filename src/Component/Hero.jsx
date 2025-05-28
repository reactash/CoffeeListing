
import { useEffect, useState } from 'react'
import Card from './Card'

const Hero = () => {

  const [products,setProducts] = useState();

  useEffect(()=>{

  },[]);


  return (
    <>
    <div className='header'>
    
    <div className='header-img'>
        
    </div>

    <div className='child-hero'>
           <h1>Our Collection</h1>
           <label>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</label>
           <p><span className='product-btn'> All Products </span>   <span className='available-btn'> Available Now</span></p>      
          <div className='cards'>
             <Card/>  
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
          </div>    
    </div>

       

     </div>
    </>
  )
}

export default Hero