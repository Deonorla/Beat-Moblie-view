 import { createSlice } from "@reduxjs/toolkit";

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