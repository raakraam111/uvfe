// "use client"
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import globalReducer from './slices/globalSlice';

// // Function to load the state from localStorage for auth
// function loadAuthFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('auth');
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.error("Could not load auth state", e);
//     return undefined;
//   }
// }

// // Function to load the state from localStorage for globalData
// function loadGlobalFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('global');
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.error("Could not load global data state", e);
//     return undefined;
//   }
// }

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     globalData: globalReducer,
//   },
//   preloadedState: {
//     auth: loadAuthFromLocalStorage(),
//     globalData: loadGlobalFromLocalStorage(),
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

"use client"
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import globalReducer from './slices/globalSlice';

// Helper to check if it's a client-side
const isClient = typeof window !== 'undefined';

// Function to load the state from localStorage for auth
function loadAuthFromLocalStorage() {
  if (!isClient) return undefined;
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load auth state", e);
    return undefined;
  }
}

// Function to load the state from localStorage for globalData
function loadGlobalFromLocalStorage() {
  if (!isClient) return undefined;
  try {
    const serializedState = localStorage.getItem('global');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load global data state", e);
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    globalData: globalReducer,
  },
  preloadedState: {
    auth: loadAuthFromLocalStorage(),
    globalData: loadGlobalFromLocalStorage(),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
