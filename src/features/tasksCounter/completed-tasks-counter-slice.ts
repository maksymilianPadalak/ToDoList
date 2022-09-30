import { createSlice } from "@reduxjs/toolkit";

interface CompletedTasksCounterState {
  value: number;
}

const initialState: CompletedTasksCounterState = {
  value: 0,
};

const completedTasksCounterSlice = createSlice({
  name: "completedTasksCounter",
  initialState,
  reducers: {
    incrementedCompletedTasks(state) {
      state.value++;
    },
    decrementedCompletedTasks(state) {
      state.value--;
    },
  },
});

export const { incrementedCompletedTasks, decrementedCompletedTasks } =
  completedTasksCounterSlice.actions;

export default completedTasksCounterSlice.reducer;
