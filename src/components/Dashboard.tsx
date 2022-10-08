import React from "react";
import { useAppSelector } from "../app/hooks";

const Dashboard: React.FC = () => {
  const completedTasks = useAppSelector(
    (state) => state.tasksCounter.value.completed
  );
  const uncompletedTasks = useAppSelector(
    (state) => state.tasksCounter.value.abandoned
  );
  return (
    <div>
      <h2>Number of completed tasks: {completedTasks}</h2>
      <h2>Number of abandoned tasks: {uncompletedTasks}</h2>
    </div>
  );
};

export default Dashboard;
