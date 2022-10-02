import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ToDoItem {
  name: string;
}

export interface ToDoListItemWithUuid extends ToDoItem {
  uuid: string;
}

interface ToDoListItemsState {
  value: ToDoListItemWithUuid[];
}

const initialState: ToDoListItemsState = {
  value: [],
};

const toDoListItemsSlice = createSlice({
  name: "completedTasksCounter",
  initialState,
  reducers: {
    addedToDoListItem(state, action: PayloadAction<ToDoItem>) {
      state.value.push({ ...action.payload, uuid: uuidv4() });
    },
    finishedTask(state, action: PayloadAction<string>) {
      state.value = state.value.filter((task) => task.uuid !== action.payload);
    },
  },
});

export const { addedToDoListItem, finishedTask } = toDoListItemsSlice.actions;

export default toDoListItemsSlice.reducer;
