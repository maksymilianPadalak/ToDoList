import { createSlice } from "@reduxjs/toolkit";

interface UncompletedTasksCounterState {
  value: number;
}

const initialState: UncompletedTasksCounterState = {
  value: 0,
};

const uncompletedTasksCounterSlice = createSlice({
  name: "uncompletedTasksCounter",
  initialState,
  reducers: {
    incrementedUncompletedTasks(state) {
      state.value++;
    },
    decrementedUncompletedTasks(state) {
      state.value--;
    },
  },
});

export const { incrementedUncompletedTasks, decrementedUncompletedTasks } =
  uncompletedTasksCounterSlice.actions;

export default uncompletedTasksCounterSlice.reducer;
