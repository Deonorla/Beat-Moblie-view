import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cartItems, total, amount} = useSelector((store: any) => store.cart)

    if(amount < 1){
        return (
        <section className='flex justify-center items-center'>
             <h2>Your Bag <br /> Is currently empty</h2>
            
        </section> 
    )} 

  return (
    <div>Cart</div>
  )
}

export default Cart