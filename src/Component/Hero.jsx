
import { useEffect, useState } from 'react'
import Card from './Card'

const Hero = () => {

  const [products,setProducts] = useState();

  useEffect(()=>{

const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("API error:", error);
      }
    };
    fetchData();
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
            { 
            products?
             products.map((product)=>{
                // console.log( product.id);
              return  <Card props={product} key={product.id}/> 
              })

             :''

            }
           
          </div>    
    </div>

       

     </div>
    </>
  )
}

export default Hero