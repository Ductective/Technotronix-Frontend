import EcomContext from "../../context/EcomContext"
import "../pages/Content.css"
import { useContext, useState } from 'react'
import { Link } from "react-router-dom"
function Products() {
  const {product, addToCart} = useContext(EcomContext)
  
   

  return (
    <div>
      <h1 className='text-[#fc6900] font-bold text-[2.5rem] bg-black  text-center'>Products</h1>
      
      <div id='body' className='md:flex md:justify-center md:flex-col md:items-center lg:flex-row   '>
      

      
      {
        product.map((item)=>(
        <section id='card' className='ml-[4%]' key={item.id}>
        <div className="img-container">
          <img src={"https://technotronix-backend.onrender.com"+ item.img} alt="" />
          <div className='desc'>
            <h1 className='text-[#fc6900] font-bold text-[1.5rem]'>{item.featured? "Featured" : 'Top Selling'}: {item.name}</h1>
            <p className='text-white font-bold text-[1rem]'>{item.price}</p>
          </div>
          
        </div>
        
        <section className="content">
          <Link to={`/details/${item._id}`}><h1>{item.name}</h1></Link>
          <p className='text-white font-bold text-[2rem]'>{item.price}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas a? Ipsa ipsum earum dolore.</p>
          <button className=' hover:bg-white hover:text-black font-bold hover:translate-y-2 '  onClick={()=> addToCart({...item, quantity:1})}>Add to Cart</button>
        </section>
      </section> ))
      }
    </div>
    </div>
  )
}

export default Products