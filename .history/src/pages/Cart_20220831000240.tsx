import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { fetchData } from '../Redux/Features/cartSlice'

const Cart = () => {
    const {cartItem, amount} = useSelector((store: any) => store.cart)
      
     const dispatch = useDispatch()
      
     useEffect(() => {
        dispatch(fetchData())
     },[])

    if(amount < 1){
        return (
        <section className='w-full h-screen flex justify-center items-center'>
             <h2>Your Bag <br /> Is currently empty</h2>
            
        </section> 
    )} 

  return (
    <div>
        { cartItem.map((item :any) =>{
           return  <ProductCard key={item.id} {...item} />
        })

        }
    </div>
  )
}

export default Cart;