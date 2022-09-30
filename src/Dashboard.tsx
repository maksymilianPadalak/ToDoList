import React from "react";
import { useAppSelector } from "./app/hooks";

const Dashboard: React.FC = () => {
  const completedTasks = useAppSelector(
    (state) => state.completedTasksCounter.value
  );
  const uncompletedTasks = useAppSelector(
    (state) => state.uncompletedTasksCounter.value
  );
  return (
    <div>
      <h1>Number of completed tasks: {completedTasks}</h1>
      <h1>Number of uncompleted tasks: {uncompletedTasks}</h1>
    </div>
  );
};

export default Dashboard;
