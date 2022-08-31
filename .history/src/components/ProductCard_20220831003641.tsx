import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const ProductCard = ({title, image, price}: any) => {
  return (
    <article className="card">
           <div className=" flex flex-col justify-between">
               <img 
               src={image}
               alt="" 
               className="card_img"/>

            <div className='flex flex-col mt-7 '>
                <div className=''>
                  <h3 className="text-lg font-semibold text-center mb-4 truncate  max-w-[50px]">{title}</h3>
                </div>
                <div className='flex justify-between items-center'>
                    <span className="product_price "> ${price}</span>
                    <button className="button buttom--flex ">
                    <BsCart3 className='button_icon' />
                    </button>
                </div>
            </div>
           </div>
       </article>
  )
}

export default ProductCard;