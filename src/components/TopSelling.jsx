import React from 'react'
import Card from './shared/Card'
import { useContext } from 'react'
import EcomContext from '../context/EcomContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function TopSelling() {
    const {topSelling, addTocart, cartItems} = useContext(EcomContext)

    // console.log(cartItems);

  const [state, dispatch] = useContext(AuthContext)
  const isAuthenticated = state.accessToken !== null
  const redirect = useNavigate()

  const login = ()=> {
    if (!isAuthenticated) {
      redirect("/login")
    }
  }

  return (
    <div className='my-[20px] mx-[30px] pl-[70px]'>
        <h1 className='mb-[10px] text-orange-500 font-bold text-2xl'>Top Selling Products</h1>
        <div className='flex gap-5 flex-wrap justify-evenly'>

            {topSelling.map((item) =>(
                <Card key={item._id}>
                    <Link to={`/detail/${item._id}`}><img src={"http://localhost:3000/" +  item.img} alt="" className='h-[280px]' /></Link>
                    <p className='font-semibold'>{item.name}</p>
                    <p>₦{item.price}</p>
                    <button onClick={isAuthenticated ? ()=> addTocart(item._id) : login} className='bg-orange-500 text-white p-[10px] rounded mt-[10px]'>
                        Add to cart
                    </button>
                </Card>
            ))}
        </div>


    </div>
  )
}

export default TopSelling