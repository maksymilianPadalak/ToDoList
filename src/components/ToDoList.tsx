import React from "react";
import { useAppSelector } from "../app/hooks";
import ToDoListItem from "./ToDoListItem";
import ToDoItemForm from "./ToDoItemForm";

const ToDoListWrapperStyle: React.CSSProperties = {
  width: "80%",
};

const ToDoListStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
  marginTop: "50px",
};

const ToDoList: React.FC = () => {
  const toDoListItems = useAppSelector((state) => state.toDoListItems.value);

  return (
    <div style={ToDoListWrapperStyle}>
      <ToDoItemForm />
      <div style={ToDoListStyle}>
        {toDoListItems.map((item) => (
          <ToDoListItem toDoItem={item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
