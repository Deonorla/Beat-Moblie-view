
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


    <div className="relative w- ">
             <BsSearch  className="absolute  top-2 w-3 h-3 text-xs left-[-3rem]" />
           
            <input
              className=" input_bar pl-[25px] w-full "
              type="search"
              placeholder="Search Everything "
              value={filter}
              onChange={searchText.bind(this)}
              style={{
                height: "25px",
                border: "1px solid #E5E5E5",
                borderRadius: "200px",
                marginLeft: "4rem",
                fontSize:'12px'
              }}
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