import React from "react";
import { useAppSelector } from "../app/hooks";

const Dashboard: React.FC = () => {
  const tasksCounter = useAppSelector((state) => state.tasksCounter.value);

  return (
    <div>
      <h2>Number of completed tasks: {tasksCounter.completed}</h2>
      <h2>Number of abandoned tasks: {tasksCounter.abandoned}</h2>
    </div>
  );
};

export default Dashboard;
