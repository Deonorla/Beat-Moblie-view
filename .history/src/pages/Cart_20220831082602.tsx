import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {IoIosArrowBack} from 'react-icons/io'
import { clearCart, fetchData } from '../Redux/Features/cartSlice'
import CheckoutCard from '../components/CheckoutCard'
import { IonContent } from '@ionic/react'
import { Link } from 'react-router-dom'

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
        <Link to="/">
        <div className='text-white text-3xl mx-4 mt-6 cursor-pointer '>
            <IoIosArrowBack />
        </div>
        </Link>
        <div className='flex justify-between items-center'>
            <h2 className=" ml-12 font-semibold text-3xl section_title-gradient product_line">
                Checkout  
            </h2>

                    <button 
                    className="bg-zinc-900 rounded-[4px] mr-6 w-[7rem] h-[3.3rem] text-white text-lg cursor-pointer"
                    onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
        
        </div>

        <div>
            { item.map((data: any, index:any)=>{
                return(

                    <CheckoutCard  key={index} {...data} />
                )
            })
            }

        </div>
      
    </div>
    </IonContent>
  )
}

export default Cart;