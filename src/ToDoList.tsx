import React from "react";
import { useAppDispatch } from "./app/hooks";
import { incrementedCompletedTasks } from "./features/tasksCounter/completed-tasks-counter-slice";
import { Button } from "@mui/material";
import { incrementedUncompletedTasks } from "./features/tasksCounter/uncompleted-tasks-counter-slice";

const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleCompleteTaskClick = () => {
    dispatch(incrementedCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(incrementedUncompletedTasks());
  };

  return (
    <div>
      <Button onClick={handleCompleteTaskClick}>Complete task</Button>
      <Button onClick={handleAbandonTask}>Abandon task</Button>
    </div>
  );
};

export default ToDoList;
