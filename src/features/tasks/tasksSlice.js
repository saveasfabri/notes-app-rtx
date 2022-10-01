import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id:'1', title:'Todo 1', description: 'Despription 1'},
  { id:'2', title:'Todo 2', description: 'Despription 2'},
  { id:'3', title:'Todo 3', description: 'Despription 3'}
];

const tasksSlice = createSlice({

  name: 'tasks',
  initialState, //Esto gracias ECMA6 es lo mismo que poner: initialState: initialState,
  reducer: {},
});

export default tasksSlice.reducer;