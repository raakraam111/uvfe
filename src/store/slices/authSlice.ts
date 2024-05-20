// // authSlice.ts
// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isUserLoggedIn: false,
//     user: null,
//     token: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isUserLoggedIn = true;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     logout: (state) => {
//       state.isUserLoggedIn = false;
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isUserLoggedIn: false,
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Save to localStorage
      localStorage.setItem('auth', JSON.stringify({
        isUserLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      }));
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.user = null;
      state.token = null;
      // Clear localStorage
      localStorage.removeItem('auth');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
