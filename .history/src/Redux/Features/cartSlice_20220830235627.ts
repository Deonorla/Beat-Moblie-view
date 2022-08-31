 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface Props {
    cartItem: Array<string | number>,
    amount: number,
    total: number,
    isLoading: boolean
}

 const url = "https://fakestoreapi.com/products/category/electronics"

export const fetchData: any = createAsyncThunk(
    'cart/fetchData', () => {
    return fetch(url)
    .then((res)=> res.json())
    .catch((err) =>  console.log(err))
});



 const initialState: Props = {
    cartItem: [],
    amount: 1,
    total: 0,
    isLoading: true,
 }
 
 const cartSlice = createSlice({
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