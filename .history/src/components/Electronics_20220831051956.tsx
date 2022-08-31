
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Features/cartSlice';
import { BsSearch } from "react-icons/bs";

import ProductCard from './ProductCard'
const Electronics = () => {
    const {cartItem} = useSelector((store: any) => store.cart);
    const [filter, setFilter] = useState<string>("");
      
    const dispatch = useDispatch()
     
    useEffect(() => {
       dispatch(fetchData())
    },[])

    const searchText = (event :any) =>{
        setFilter(event.target.value)
    }
    
      let filterSearchHandler = cartItem.filter( (data: any) => {
         return (Object.keys(data).some( key => 
           data[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
         ))
    
      })

  return (
    <section className="products section" id="products">
    <h2 className="section_title section_title-gradient product_line">
        Electronics  
    </h2>


    <div className="relative  flex  justify-center items-center text-sm ">
             <BsSearch  className="absolute  top-2 w-3 h-3 text-xs left-[-3rem]" />
           
            <input
              className=" input_bar pl-[25px] w-full h-[30px] border border-solid 
              rounded-[200px] "
              type="search"
              placeholder="Enter a search.... "
              value={filter}
              onChange={searchText.bind(this)}
             
            />
          </div>
    <div className="products_container box grid">
        { filterSearchHandler.map((item :any) =>{
           return  <ProductCard key={item.id} {...item} />
        })

        }
  
    </div>
</section>
  )
}

export default Electronics