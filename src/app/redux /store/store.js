import { configureStore } from '@reduxjs/toolkit'
import  authReducers from '../Slices/authSlice'
import eventReducers from '../Slices/userEventSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
    events: eventReducers
  },
 
})