import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createdEventsServices from '../../pages/appwrite/eventServices';
import availableEventsServices from '../../pages/appwrite/availableEvents';

// purchasedServices
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

// AvailableEventsServices
export const fetchAvailableServicesData = createAsyncThunk(
  "data/fetchAvailableServicesData",
  async (_, { rejectWithValue }) => {
    try {
      const availableEventsData = await availableEventsServices.getAllEvents();
      console.log("Available events data in store:", availableEventsData);
      return availableEventsData; // Fixed return variable name
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  registeredEvents: null,
  purchasedServices: [],
  availableEvents: []
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
      // Handle purchasedServices
      .addCase(fetchPurchasedServicesData.fulfilled, (state, action) => {
        state.purchasedServices = action.payload;
        console.log("Purchased services data in extra builder:", state.purchasedServices);
      })
      .addCase(fetchPurchasedServicesData.rejected, (state, action) => {
        console.log("Error fetching purchased services data in store:", action.payload);
      })
      // Handle availableEvents
      .addCase(fetchAvailableServicesData.fulfilled, (state, action) => {
        state.availableEvents = action.payload;
        console.log("Available services data in extra builder:", state.availableEvents);
      })
      .addCase(fetchAvailableServicesData.rejected, (state, action) => {
        console.log("Error fetching available services data in store:", action.payload);
      });
  }
});

export const { registerdEvent } = userEvents.actions;

export default userEvents.reducer;
