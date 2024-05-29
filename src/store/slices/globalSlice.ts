"use client"
import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'globalData',
  initialState: {
    globalData: null,
  },
  reducers: {
    changeGlobalData: (state, action) => {
      state.globalData = action.payload.globalData;
      // Save to localStorage
      localStorage.setItem('global', JSON.stringify({
        globalData: action.payload.globalData,
      }));
    } 
  },
});

export const { changeGlobalData } = globalSlice.actions;
export default globalSlice.reducer;
