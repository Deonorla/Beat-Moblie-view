import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cartItems, total, amount} = useSelector((store: any) => store.cart)

    if(amount < 1){
        return (
        <section className='flex justify-center items-start'>
             <h2>Your Bag</h2>
             <h4>Is currently empty</h4>
        </section> 
    )} 

  return (
    <div>Cart</div>
  )
}

export default Cart