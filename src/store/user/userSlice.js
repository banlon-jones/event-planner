import {logout, signIn, signUp} from "../../services/authService.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// thunk functiom
export const loginUser = createAsyncThunk("user/signIn", async (userCredentials) => {
  const response = await signIn(userCredentials.email, userCredentials.password)
  return response;
});

export const signUpUser = createAsyncThunk("user/signUp", async (userCredentials) => {
  const response = await signUp(userCredentials.email, userCredentials.password)
  return response;
});

export const logOutUser = createAsyncThunk('user/logOut',async () => {
      return await logout()
});

const userSlice = createSlice({
  name: "user",
  initialState: {loading: false, user:{}, error: null},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
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
      state.user = action.payload;
    })

    builder.addCase(signUpUser.pending, (state, action) => {
      state.loading = true;
    })

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
    })
  }
})

export default userSlice.reducer;
