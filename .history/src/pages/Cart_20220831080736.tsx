import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosArrowBack} from 'react-icons/io'
import { clearCart, fetchData } from '../Redux/Features/cartSlice'
import CheckoutCard from '../components/CheckoutCard'
import { IonContent } from '@ionic/react'

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
    <IonContent>
    <div>
        <div className='flex mt-9'>
            <div className='text-white text-3xl mx-4 '>
              <IoIosArrowBack />
            </div>
            <h2 className=" text-center mt-12 font-semibold text-3xl section_title-gradient product_line">
                Checkout  
            </h2>
        </div>

        <button 
          className=" flex  bg-zinc-900 rounded-[4px] py-1 px-3 text-white text-lg cursor-pointer"
          onClick={() => dispatch(clearCart())}
         >
            Clear Cart
         </button>

        <div>
            { item.map((data: any, index:any)=>{
                return(

                    <CheckoutCard  key={index} {...data} />
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
    </IonContent>
  )
}

export default Cart;