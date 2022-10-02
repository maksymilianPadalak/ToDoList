import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addedToDoListItem,
  ToDoItem,
} from "../features/toDoList/to-do-list-slice";
import ToDoListItem from "./ToDoListItem";

const ToDoListStyle: React.CSSProperties = {
  width: "80%",
};

const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toDoListItem, setToDoListItem] = useState<ToDoItem>();

  const toDoListItems = useAppSelector((state) => state.toDoListItems.value);

  const handleAddToDoListItemClick = () => {
    if (toDoListItem != null) {
      dispatch(addedToDoListItem(toDoListItem));
    }
  };

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoListItem({ name: e.target.value });
  };

  return (
    <div style={ToDoListStyle}>
      <div>
        {toDoListItems.map((item) => {
          return <ToDoListItem toDoItem={item} key={item.uuid} />;
        })}
      </div>

      <Input
        placeholder={"Please enter the name"}
        value={toDoListItem?.name}
        onChange={handleTaskNameChange}
      />
      <Button onClick={handleAddToDoListItemClick}>Add ToDo List item</Button>
    </div>
  );
};

export default ToDoList;
