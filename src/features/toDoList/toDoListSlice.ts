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
  name: "toDoListItems",
  initialState,
  reducers: {
    addToDoListItem(state, action: PayloadAction<ToDoItem>) {
      state.value.push({ ...action.payload, uuid: uuidv4() });
    },
    finishTask(state, action: PayloadAction<string>) {
      state.value = state.value.filter((task) => task.uuid !== action.payload);
    },
  },
});

export const { addToDoListItem, finishTask } = toDoListItemsSlice.actions;

export default toDoListItemsSlice.reducer;
