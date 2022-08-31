import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Features/cartSlice'

const ProductCard = (item: any) => {
    const dispatch = useDispatch();
    const handleAddToCart = (item: any) => {
          dispatch(addToCart(item))
    }
     console.log(item.image)
  return (
    <article className="card">
           <div className=" flex flex-col justify-between">
               <img 
               src={item.image}
               alt=""
               className="card_img"/>

            <div className='flex flex-col mt-7 '>
                <div className=''>
                  <h3 className="text-lg font-semibold text-center mb-4 truncate  max-w-[120px]">{item.title}</h3>
                </div>
                <div className='flex justify-between items-center'>
                    <span className="product_price "> ${item.price}</span>
                    <button className="button buttom--flex "
                     onClick ={() => handleAddToCart(item)}
                    >
                    <BsCart3 className='button_icon' />
                    </button>
                </div>
            </div>
           </div>
       </article>
  )
}

export default ProductCard;