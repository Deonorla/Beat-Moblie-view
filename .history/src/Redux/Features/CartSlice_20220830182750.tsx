 import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


const Data =() => {
    useEffect(() => {
      
       fetch('https://fakestoreapi.com/products/category/electronics')
       .then(res=>res.json())
       .then((data) => {
         const response = data;
         console.log(response)
       })
   },[])
   
      
   
}


interface Props {
    cartItem: Array<string | number>,
    amount: number,
    total: number,
    isLoading: boolean
}

 const initialState: Props = {
    cartItem:[],
    amount: 0,
    total: 0,
    isLoading: true,
 }
 
 const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers :{

    }
 });

console.log(CartSlice)

 export default CartSlice.reducer