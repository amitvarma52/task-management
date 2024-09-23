/** @format */

import { configureStore, createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
  },
});
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    initial: (state, action) => {
      return action.payload;
    },
    delete: () => {
      return null;
    },
  },
});
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    user: userSlice.reducer,
  },
});
export const taskActions = taskSlice.actions;
export const userActions = userSlice.actions;
