import React from "react";
import { useAppSelector } from "../app/hooks";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

const ToDoList: React.FC = () => {
  const toDoList = useAppSelector((state) => state.toDoList.value);

  return (
    <div className={"w-100"}>
      <NewTaskForm />
      <div>
        {toDoList.map((task) => (
          <Task task={task} key={task.uuid} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
