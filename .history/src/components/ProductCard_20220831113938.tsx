import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Features/cartSlice'

const ProductCard = ({title, image, price}: any) => {
    const dispatch = useDispatch();
    const handleAddToCart = ({...item}: any) => {
          dispatch(addToCart({...item}))
    }

  return (
    <article className="card">
           <div className=" flex flex-col justify-between">
               <img 
               src={image}
               alt="" 
               className="card_img"/>

            <div className='flex flex-col mt-7 '>
                <div className=''>
                  <h3 className="text-lg font-semibold sm:text-base text-center mb-4 truncate sm:max-w-[6rem] max-w-[7.5rem]">{title}</h3>
                </div>
                <div className='flex justify-between items-center '>
                    <span className="product_price "> ${price}</span>
                    <button className="button buttom--flex sm:py-2 sm:px-1 sm:text-base cursor-pointer "
                     onClick ={() => handleAddToCart({title, image, price})}
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