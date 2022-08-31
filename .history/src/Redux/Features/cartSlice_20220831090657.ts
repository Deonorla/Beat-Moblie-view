 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface Props {
    cartItem: Array<string | number>,
    item: Array<string | number>,
    amount: any,
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
       },
       clearCart(state){
          state.item = []
       },
       remove(state, action){
        const itemId = action.payload
        state.item = state.item.filter((item: any) => item.id !== itemId)
       },
    //    increase(state, {payload}){
    //     const add = state.item.find((item: any) => item.id === payload.id)
    //     add.amount = add.amount + 1;
    //    }
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
 export const { clearCart } = cartSlice.actions;
 export const { remove } = cartSlice.actions;


 export default cartSlice.reducer;