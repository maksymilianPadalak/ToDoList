import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  name: string;
}

export interface TaskWithUuid extends Task {
  uuid: string;
}

interface ToDoListState {
  value: TaskWithUuid[];
}

const initialState: ToDoListState = {
  value: [],
};

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.value.push({ ...action.payload, uuid: uuidv4() });
    },
    finishTask(state, action: PayloadAction<string>) {
      state.value = state.value.filter((task) => task.uuid !== action.payload);
    },
  },
});

export const { addTask, finishTask } = toDoListSlice.actions;

export default toDoListSlice.reducer;
