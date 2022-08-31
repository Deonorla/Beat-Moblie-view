 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";

interface Props {
    cartItem: Array<string | number>,
    amount: number,
    total: number,
    isLoading: boolean
}

// const url = "https://fakestoreapi.com/products/category/electronics"

export const fetchData: any = createAsyncThunk(
    'cart/fetchData',  
    (arg, { rejectWithValue}) => {
  try{
     const { data }: any =  axios.get("https://fakestoreapi.com/products/category/electronics")
     return data;
  } catch(error: any) {
     return rejectWithValue(error.response.data)
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


 export default cartSlice.reducer