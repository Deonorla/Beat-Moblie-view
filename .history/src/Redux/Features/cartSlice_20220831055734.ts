 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface Props {
    cartItem: Array<string | number>,
    item: Array<string | number>,
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
    item: [],
    amount: 1,
    total: 0,
    isLoading: true,
 }
 
 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart(state, action) {
          state.item.push(action.payload)
       }
    },
    extraReducers: {
        [fetchData.pending]: (state: any) =>{
            state.isLoading = true;
        },
        [fetchData.fulfilled]: (state: any, action: any) => {
             console.log(action);
            state.isLoading = false;
            state.cartItem = action.payload;
        },
        [fetchData.rejected]: (state) => {
            state.isLoading = false;
        },
    }
    
 });

 export const { addToCart } = cartSlice.actions;

 export default cartSlice.reducer;