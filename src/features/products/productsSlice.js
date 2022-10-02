import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id:'1', title:'Product 1', description: 'Despription Product 1'},
  { id:'2', title:'Product 2', description: 'Despription Product 2'},
  { id:'3', title:'Product 3', description: 'Despription Product 3'}
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducer: {},
});

export default productsSlice.reducer;
