import { createSlice } from '@reduxjs/toolkit';
import { LogOut } from 'lucide-react';

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   login: (state,action)=>{
    state.status = true;
    state.userData = action.payload
   },
   logout: (state)=>{
    state.status= false
   }
   
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
