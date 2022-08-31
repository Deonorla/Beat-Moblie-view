import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosArrowBack} from 'react-icons/io'
import { clearCart, fetchData } from '../Redux/Features/cartSlice'
import CheckoutCard from '../components/CheckoutCard'

const Cart = () => {
    const {item, amount} = useSelector((store: any) => store.cart)
      
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


        <div>
            { item.map((data: any)=>{
                return(
                    <CheckoutCard {...data} />
                )
            })
            }

        </div>
         <button 
          className=""
          onClick={() => dispatch(clearCart())}
         >
            Clear Cart
         </button>
    </div>
  )
}

export default Cart;