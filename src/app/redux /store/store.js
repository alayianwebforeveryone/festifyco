import { configureStore } from '@reduxjs/toolkit'
import  authReducers from '../Slices/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
})