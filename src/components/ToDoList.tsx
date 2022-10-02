import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addedToDoListItem,
  ToDoItem,
} from "../features/toDoList/to-do-list-slice";
import ToDoListItem from "./ToDoListItem";

const ToDoListWrapperStyle: React.CSSProperties = {
  width: "80%",
};

const ToDoListStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
  overflow: "scroll",
  marginTop: "50px",
};

const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toDoListItem, setToDoListItem] = useState<ToDoItem>();

  const toDoListItems = useAppSelector((state) => state.toDoListItems.value);

  const handleAddToDoListItemClick = () => {
    if (toDoListItem != null) {
      dispatch(addedToDoListItem(toDoListItem));
      setToDoListItem(undefined);
    }
  };

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoListItem({ name: e.target.value });
  };

  return (
    <div style={ToDoListWrapperStyle}>
      <Input
        placeholder={"Please enter the name"}
        value={toDoListItem?.name ?? ""}
        onChange={handleTaskNameChange}
      />

      <Button onClick={handleAddToDoListItemClick}>Add ToDo List item</Button>

      <div style={ToDoListStyle}>
        {toDoListItems.map((item) => (
          <ToDoListItem toDoItem={item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
