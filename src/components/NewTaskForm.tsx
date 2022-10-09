import React, { useState } from "react";
import { addTask, Task } from "../features/toDoList/toDoListSlice";
import { useAppDispatch } from "../app/hooks";

const NewTaskForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<Task>();

  const handleAddTaskClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task != null) {
      dispatch(addTask(task));
      setTask(undefined);
    }
  };

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ name: e.target.value });
  };
  return (
    <form
      onSubmit={handleAddTaskClick}
      className={"row align-items-center my-5"}
    >
      <div className={"col-sm-8 col-md-9 col-lg-10 col-12 py-3 py-sm-0"}>
        <input
          className={"w-100"}
          placeholder={"Please enter task name"}
          value={task?.name ?? ""}
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

export default NewTaskForm;
