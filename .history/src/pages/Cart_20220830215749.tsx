import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Cart = () => {
    const {cartItem, total, amount} = useSelector((store: any) => store.cart)

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