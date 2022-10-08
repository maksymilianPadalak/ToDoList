import React from "react";
import { useAppDispatch } from "../app/hooks";
import {
  incrementAbandonedTasks,
  incrementCompletedTasks,
} from "../features/tasksCounter/tasksCounterSlice";
import {
  finishTask,
  ToDoListItemWithUuid,
} from "../features/toDoList/toDoListSlice";

interface Props {
  toDoItem: ToDoListItemWithUuid;
}

const ToListItem: React.FC<Props> = ({ toDoItem }) => {
  const dispatch = useAppDispatch();

  const handleCompleteTaskClick = () => {
    dispatch(finishTask(toDoItem.uuid));
    dispatch(incrementCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(finishTask(toDoItem.uuid));
    dispatch(incrementAbandonedTasks());
  };

  return (
    <div>
      <div className={"row"}>
        <div className={"col-sm-6 col-12 py-2 py-sm-0"}>
          <h2 className={"text-break"}>{toDoItem.name}</h2>
        </div>

        <div
          className={
            "col-sm-6 col-12 d-flex flex-row justify-content-center align-items-center"
          }
        >
          <div className={"col-6"}>
            <button
              className={"btn btn-success"}
              onClick={handleCompleteTaskClick}
            >
              Complete task
            </button>
          </div>

          <div className={"col-6"}>
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

export default ToListItem;
