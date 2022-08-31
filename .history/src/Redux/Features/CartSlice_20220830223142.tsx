 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";

interface Props {
    cartItem: Array<string | number>,
    amount: number,
    total: number,
    isLoading: boolean
}

const url = "https://fakestoreapi.com/products/categories"

export  const fetchData: any = createAsyncThunk('cart/fetchData', async () => {
  try{
     const response = await axios.get(url)
     return [...response.data]
  } catch(error: any) {
     return error.message;
  }
      
});

 const initialState: Props = {
    cartItem: [],
    amount: 1,
    total: 0,
    isLoading: true,
 }
 
 const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchData.pending]: (state: any) =>{
            state.isLoading = true;
        },
        [fetchData.fulfilled] : (state: any, action: any) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItem = action.payload;
        },
        [fetchData.rejected]: (state) => {
            state.isLoading = false;
        },
    }
    
 });

console.log(CartSlice)

 export default CartSlice.reducer