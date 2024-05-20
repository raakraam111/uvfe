// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

// Function to load the state from localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: loadFromLocalStorage(),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
