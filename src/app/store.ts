import { configureStore } from "@reduxjs/toolkit";
import completedTasksCounterReducer from "../features/tasksCounter/completedTasksCounterSlice";
import uncompletedTasksCounterReducer from "../features/tasksCounter/uncompletedTasksCounterSlice";
import toDoListItemsReducer from "../features/toDoList/toDoListSlice";

export const store = configureStore({
  reducer: {
    completedTasksCounter: completedTasksCounterReducer,
    uncompletedTasksCounter: uncompletedTasksCounterReducer,
    toDoListItems: toDoListItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
