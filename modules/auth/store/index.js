import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    savePhoto: (state, action) => {
      state.user.data.profile_photo_url = action.payload;
      // state.user = {
      //   ...state.user,
      //   data: {
      //     ...state.user.data,

      //   }
      // }
    },
  },
});

export default auth.reducer;

export const { login, logout, savePhoto } = auth.actions;
