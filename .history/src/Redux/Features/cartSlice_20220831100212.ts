 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface Props {
    cartItem: Array<string | number>,
    item: Array<string | number>,
    amount: any,
    quantity: number,
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
    amount: 0,
    total: 0,
    quantity: 0, 
    isLoading: true,
 }
 
 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart(state, action) {
          state.item.push(action.payload)
          state.amount = state.amount + 1
       },
       clearCart(state){
          state.item = []
          state.amount = 0
       },
       remove(state, action){
        const itemId = action.payload.id
        const exit = state.item.filter((item: any) => item.id === itemId)
        state.item = state.item.filter((_:any, i:any) => i !== exit);
       },
    //    increase(state, {payload}){
    //     const add = state.item.find((item: any) => item.id === payload.id)
    //     add.amount = add.amount + 1;
    //    }
       calculateTotals : (state) =>{
        let quantity = 0;
        let total = 0;
        state.item.forEach((element: any) => {
            state.quantity += element.quantity
            total += element.quantity * element.price
        });
        state.amount = quantity;
        state.total = total
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

 export const { addToCart, clearCart, remove, calculateTotals } = cartSlice.actions;
 
 export default cartSlice.reducer;