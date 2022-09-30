import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoListStyle: React.CSSProperties = {
  width: "80%",
};

const ToDoList: React.FC = () => {
  return (
    <div style={ToDoListStyle}>
      <ToDoListItem />
    </div>
  );
};

export default ToDoList;
