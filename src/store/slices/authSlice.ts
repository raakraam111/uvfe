 
// // import { createSlice } from '@reduxjs/toolkit';

// // export const authSlice = createSlice({
// //   name: 'auth',
// //   initialState: {
// //     isUserLoggedIn: false,
// //     user: null,
// //     token: null,
// //   },
// //   reducers: {
// //     login: (state, action) => {
// //       state.isUserLoggedIn = true;
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       // Save to localStorage
// //       localStorage.setItem('auth', JSON.stringify({
// //         isUserLoggedIn: true,
// //         user: action.payload.user,
// //         token: action.payload.token
// //       }));
// //     },
// //     logout: (state) => {
// //       state.isUserLoggedIn = false;
// //       state.user = null;
// //       state.token = null;
// //       // Clear localStorage
// //       localStorage.removeItem('auth');
// //     },
// //   },
// // });

// // export const { login, logout } = authSlice.actions;
// // export default authSlice.reducer;


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
//       // Save to localStorage
//       localStorage.setItem('auth', JSON.stringify({
//         isUserLoggedIn: true,
//         user: action.payload.user,
//         token: action.payload.token
//       }));
//     },
//     updateUser: (state, action) => {
//       // Update user data in the state
//       state.user = { ...state.user, ...action.payload };
//       // Update localStorage
//       const authData = localStorage.getItem('auth');
//       if (authData) {
//         const authJson = JSON.parse(authData);
//         localStorage.setItem('auth', JSON.stringify({
//           ...authJson,
//           user: { ...authJson.user, ...action.payload }
//         }));
//       }
//     },
//     logout: (state) => {
//       state.isUserLoggedIn = false;
//       state.user = null;
//       state.token = null;
//       // Clear localStorage
//       localStorage.removeItem('auth');
//     },
//   },
// });

// export const { login, logout, updateUser } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the user object
interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: any;  // This line allows for additional properties dynamically if needed
}

// Define the initial state with types
interface AuthState {
  isUserLoggedIn: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isUserLoggedIn: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{user: User, token: string}>) => {
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
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      // Update user data in the state
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        // Update localStorage
        const authData = localStorage.getItem('auth');
        if (authData) {
          const authJson = JSON.parse(authData);
          localStorage.setItem('auth', JSON.stringify({
            ...authJson,
            user: { ...authJson.user, ...action.payload }
          }));
        }
      }
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

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
