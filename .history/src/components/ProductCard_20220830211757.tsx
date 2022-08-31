import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const ProductCard = () => {
  return (
    <article className="product_card">
           <div className="products_content">
               <img 
               src="assets/images/product1.png" 
               alt="" 
               className="product_img"/>

               <h3 className="product_title">Black</h3>
               <span className="product_price">$249</span>

               <button className="button buttom--flex products_button">
               <BsCart3 className='button_icon' />
               </button>
           </div>
       </article>
  )
}

export default ProductCard;