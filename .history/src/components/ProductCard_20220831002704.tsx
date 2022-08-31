import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const ProductCard = ({id, image, price}: any) => {
  return (
    <article className="card">
           <div className="">
               <img 
               src={image}
               alt="" 
               className="card_img"/>

            <div className='flex '>
                <h3 className="product_title">Black</h3>
                <span className="product_price">{price}</span>

                <button className="button buttom--flex ">
                <BsCart3 className='button_icon' />
                </button>
            </div>
           </div>
       </article>
  )
}

export default ProductCard;