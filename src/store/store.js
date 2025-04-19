import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import eventReducer from "./event/eventSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer
  }
})

