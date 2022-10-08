import React from "react";
import { useAppSelector } from "../app/hooks";
import ToDoListItem from "./ToDoListItem";
import ToDoItemForm from "./ToDoItemForm";

const ToDoList: React.FC = () => {
  const toDoListItems = useAppSelector((state) => state.toDoListItems.value);

  return (
    <div className={"w-100"}>
      <ToDoItemForm />
      <div>
        {toDoListItems.map((item) => (
          <ToDoListItem toDoItem={item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
