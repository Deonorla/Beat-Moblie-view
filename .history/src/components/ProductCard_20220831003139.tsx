import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const ProductCard = ({id, image, price}: any) => {
  return (
    <article className="card">
           <div className=" flex flex-col justify-between">
               <img 
               src={image}
               alt="" 
               className="card_img"/>

            <div className='flex flex-col '>
                <div>
                  <h3 className="product_title">Black</h3>
                </div>
                <div className='flex justify-center items-center'>
                    <span className="product_price">{price}</span>
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