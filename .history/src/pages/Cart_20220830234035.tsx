import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'



const Cart = () => {
    const {cartItem, amount} = useSelector((store: any) => store.cart)
    let Data: Array<string | number>;
    

    useEffect(() => {
       fetch('https://fakestoreapi.com/products/category/jewelery')
           .then(res=>res.json())
           .then(json=>{
                Data = json
           })
      
    },[])

    console.log(Data)

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