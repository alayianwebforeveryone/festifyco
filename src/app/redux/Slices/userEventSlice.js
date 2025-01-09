// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import  createdEventsServices from '../../pages/appwrite/eventServices';



// export const fetchPurchasedServicesData = createAsyncThunk("data/fetchPurchasedServicesData", async () => {
//   try {
//    const eventsData = await createdEventsServices.getAllEvents();
//    console.log("Events data in store:",eventsData )
//    return eventsData;
//   } catch (error) {
//   }
// })


// const initialState = {
//   registeredEvents: null,
//   purchasedServices: [],
// };
// console.log("initialState", initialState.purchasedServices);

// const userEvents = createSlice({
//   name: 'Events',
//   initialState,
//   reducers: {
//    registerdEvent: (state,action)=>{
//     state.registeredEvents = action.payload
//    },

  
   
//   }, 
//   extraReducers: (builder)=>{
//     builder
//     .addCase(fetchPurchasedServicesData.fulfilled, (state, action)=>{
//       state.purchasedServices = action.payload;
//       console.log("Purchased services data in extra builder:", state.purchasedServices);
//     })
//       .addCase(fetchPurchasedServicesData.rejected, ( action)=>{
//         console.log("Error fetching purchased services data in store:", action.error);

//     })
//   }
// });

// export const { registerdEvent } = userEvents.actions;

// export default userEvents.reducer;



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createdEventsServices from '../../pages/appwrite/eventServices';

export const fetchPurchasedServicesData = createAsyncThunk(
  "data/fetchPurchasedServicesData",
  async (_, { rejectWithValue }) => {
    try {
      const eventsData = await createdEventsServices.getAllEvents();
      console.log("Events data in store:", eventsData);
      return eventsData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  registeredEvents: null,
  purchasedServices: [],
};

const userEvents = createSlice({
  name: 'Events',
  initialState,
  reducers: {
    registerdEvent: (state, action) => {
      state.registeredEvents = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchasedServicesData.fulfilled, (state, action) => {
        state.purchasedServices = action.payload;
        console.log("Purchased services data in extra builder:", state.purchasedServices);
      })
      .addCase(fetchPurchasedServicesData.rejected, (state, action) => {
        console.log("Error fetching purchased services data in store:", action.payload);
      });
  },
});

export const { registerdEvent } = userEvents.actions;

export default userEvents.reducer;
