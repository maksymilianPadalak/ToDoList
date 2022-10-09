import React, { useState } from "react";
import { addToDoListItem, ToDoItem } from "../features/toDoList/toDoListSlice";
import { useAppDispatch } from "../app/hooks";

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
    <form
      onSubmit={handleAddToDoListItemClick}
      className={"row align-items-center my-5"}
    >
      <div className={"col-sm-8 col-md-9 col-lg-10 col-12 py-3 py-sm-0"}>
        <input
          className={"w-100"}
          placeholder={"Please enter task name"}
          value={toDoListItem?.name ?? ""}
          onChange={handleTaskNameChange}
          maxLength={40}
          required
        />
      </div>

      <div className={"col-sm-4 col-md-3 col-lg-2 col-12"}>
        <button type="submit">Add task</button>
      </div>
    </form>
  );
};

export default ToDoItemForm;
