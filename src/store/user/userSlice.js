import {getCurrentUser, logout, signIn, signUp} from "../../services/authService.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// thunk functiom
export const loginUser = createAsyncThunk("user/signIn", async (userCredentials) => {
  const response = await signIn(userCredentials.email, userCredentials.password)
  console.log(response)
  return response;
});

export const signUpUser = createAsyncThunk("user/signUp", async (userCredentials) => {
  const response = await signUp(userCredentials.email, userCredentials.password)
  return response;
});




const userSlice = createSlice({
  name: "user",
  initialState: {loading: false, user:null, error: null},
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    logOutUser: (state, action) => {
      state.user = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })

    builder.addCase(signUpUser.pending, (state, action) => {
      state.loading = true;
    })

  }
})

export const {addUser, logOutUser} = userSlice.actions;
export default userSlice.reducer;
