import { configureStore } from "@reduxjs/toolkit";
import completedTasksCounterReducer from "../features/tasks-counter/completed-tasks-counter-slice";
import uncompletedTasksCounterReducer from "../features/tasks-counter/uncompleted-tasks-counter-slice";
import toDoListItemsReducer from "../features/to-do-list/to-do-list-slice";

export const store = configureStore({
  reducer: {
    completedTasksCounter: completedTasksCounterReducer,
    uncompletedTasksCounter: uncompletedTasksCounterReducer,
    toDoListItems: toDoListItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
