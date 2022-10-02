import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToDoItem {
  name: string;
}

interface ToDoListItemsState {
  value: ToDoItem[];
}

const initialState: ToDoListItemsState = {
  value: [],
};

const toDoListItemsSlice = createSlice({
  name: "completedTasksCounter",
  initialState,
  reducers: {
    addedToDoListItem(state, action: PayloadAction<ToDoItem>) {
      state.value.push(action.payload);
    },
  },
});

export const { addedToDoListItem } = toDoListItemsSlice.actions;

export default toDoListItemsSlice.reducer;
