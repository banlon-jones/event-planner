import {createSlice} from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: []
  },
  reducers: {
    fetchMyEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    editEvent: (state, action) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      state.events[index] = action.payload;
    }
  }

})

export const {fetchMyEvents ,addEvent, removeEvent, editEvent} = eventSlice.actions;
export default eventSlice.reducer;
