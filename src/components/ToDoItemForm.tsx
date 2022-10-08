import React, { useState } from "react";
import { Button } from "@mui/material";
import { addToDoListItem, ToDoItem } from "../features/toDoList/toDoListSlice";
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

  const handleAddToDoListItemClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDoListItem != null) {
      dispatch(addToDoListItem(toDoListItem));
      setToDoListItem(undefined);
    }
  };

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoListItem({ name: e.target.value });
  };
  return (
    <form style={TaskFormStyle} onSubmit={handleAddToDoListItemClick}>
      <input
        placeholder={"Please enter task name"}
        value={toDoListItem?.name ?? ""}
        onChange={handleTaskNameChange}
        style={TaskInputStyle}
        maxLength={40}
        required
      />

      <Button type="submit">Add ToDo List item</Button>
    </form>
  );
};

export default ToDoItemForm;
