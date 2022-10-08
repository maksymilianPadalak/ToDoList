import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import {
  addedToDoListItem,
  ToDoItem,
} from "../features/toDoList/toDoListSlice";
import { useAppDispatch } from "../app/hooks";

const TaskFormStyle: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
};

const TaskInputStyle: React.CSSProperties = {
  width: "50%",
};

const ToDoItemForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toDoListItem, setToDoListItem] = useState<ToDoItem>();

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
    <div style={TaskFormStyle}>
      <Input
        placeholder={"Please enter task name"}
        value={toDoListItem?.name ?? ""}
        onChange={handleTaskNameChange}
        style={TaskInputStyle}
        inputProps={{ maxLength: 40 }}
      />

      <Button onClick={handleAddToDoListItemClick}>Add ToDo List item</Button>
    </div>
  );
};

export default ToDoItemForm;
