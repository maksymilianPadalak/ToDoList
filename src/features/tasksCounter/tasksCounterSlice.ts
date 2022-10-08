import { createSlice } from "@reduxjs/toolkit";

interface TasksCounter {
  completed: number;
  abandoned: number;
}

interface TasksCounterState {
  value: TasksCounter;
}

const initialState: TasksCounterState = {
  value: {
    completed: 0,
    abandoned: 0,
  },
};

const tasksSlice = createSlice({
  name: "tasksCounter",
  initialState,
  reducers: {
    incrementCompletedTasks(state) {
      state.value.completed++;
    },
    incrementAbandonedTasks(state) {
      state.value.abandoned++;
    },
  },
});

export const { incrementCompletedTasks, incrementAbandonedTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
