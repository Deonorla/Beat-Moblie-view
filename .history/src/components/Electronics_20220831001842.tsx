
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Features/cartSlice';

import ProductCard from './ProductCard'
const Electronics = () => {
    const {cartItem,} = useSelector((store: any) => store.cart)
      
    const dispatch = useDispatch()
     
    useEffect(() => {
       dispatch(fetchData())
    },[])
      
  return (
    <section className="products section" id="products">
    <h2 className="section_title section_title-gradient product_line">
        Electronics  
    </h2>
    <div className="products_container container grid">
    <div>
        { cartItem.map((item :any) =>{
           return  <ProductCard key={item.id} {...item} />
        })

        }
    </div>
    </div>
</section>
  )
}

export default Electronics