import { configureStore } from "@reduxjs/toolkit";
import tasksCounterReducer from "../features/tasksCounter/tasksCounterSlice";
import toDoListReducer from "../features/toDoList/toDoListSlice";

export const store = configureStore({
  reducer: {
    tasksCounter: tasksCounterReducer,
    toDoList: toDoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
