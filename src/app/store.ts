import { configureStore } from "@reduxjs/toolkit";
import completedTasksCounterReducer from "../features/tasksCounter/completed-tasks-counter-slice";
import uncompletedTasksCounterReducer from "../features/tasksCounter/uncompleted-tasks-counter-slice";
import toDoListItemsReducer from "../features/toDoList/to-do-list-slice";

export const store = configureStore({
  reducer: {
    completedTasksCounter: completedTasksCounterReducer,
    uncompletedTasksCounter: uncompletedTasksCounterReducer,
    toDoListItems: toDoListItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
