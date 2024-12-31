import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredEvents: null,
  purchasedServices: null,
};

const userEvents = createSlice({
  name: 'Events',
  initialState,
  reducers: {
   registerdEvent: (state,action)=>{
    state.registeredEvents = action.payload
   },
   purchaseEvent: (state)=>{
    state.purchasedServices= action.payload
   }
   
  },
});

export const { registerdEvent, purchaseEvent } = userEvents.actions;

export default userEvents.reducer;
