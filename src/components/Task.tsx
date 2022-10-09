import React from "react";
import { useAppDispatch } from "../app/hooks";
import {
  incrementAbandonedTasks,
  incrementCompletedTasks,
} from "../features/tasksCounter/tasksCounterSlice";
import { finishTask, TasksWithUuid } from "../features/toDoList/toDoListSlice";

interface Props {
  task: TasksWithUuid;
}

const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleCompleteTaskClick = () => {
    dispatch(finishTask(task.uuid));
    dispatch(incrementCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(finishTask(task.uuid));
    dispatch(incrementAbandonedTasks());
  };

  return (
    <div>
      <div className={"row"}>
        <div
          className={
            "col-sm-6 col-12 py-2 py-sm-0 d-flex flex-row justify-content-center align-items-center"
          }
        >
          <h2 className={"text-break"}>{task.name}</h2>
        </div>

        <div
          className={
            "col-sm-6 col-12 d-flex flex-row justify-content-center align-items-center"
          }
        >
          <div className={"col-6 px-1"}>
            <button
              className={"btn btn-success"}
              onClick={handleCompleteTaskClick}
            >
              Complete task
            </button>
          </div>

          <div className={"col-6 px-1"}>
            <button className={"btn btn-danger"} onClick={handleAbandonTask}>
              Abandon task
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Task;
