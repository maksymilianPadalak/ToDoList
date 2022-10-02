import React from "react";
import { useAppDispatch } from "../app/hooks";
import { incrementedCompletedTasks } from "../features/tasks-counter/completed-tasks-counter-slice";
import { incrementedUncompletedTasks } from "../features/tasks-counter/uncompleted-tasks-counter-slice";
import { Button } from "@mui/material";
import {
  finishedTask,
  ToDoListItemWithUuid,
} from "../features/to-do-list/to-do-list-slice";

const ToDoListItem: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

const ToDoListItemGridFragment: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ToDoListButtons: React.CSSProperties = {
  marginInline: "10px",
};

interface Props {
  toDoItem: ToDoListItemWithUuid;
}

const ToListItem: React.FC<Props> = ({ toDoItem }) => {
  const dispatch = useAppDispatch();

  const handleCompleteTaskClick = () => {
    dispatch(finishedTask(toDoItem.uuid));
    dispatch(incrementedCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(finishedTask(toDoItem.uuid));
    dispatch(incrementedUncompletedTasks());
  };

  return (
    <div>
      <div style={ToDoListItem}>
        <div style={ToDoListItemGridFragment}>
          <h3>{toDoItem.name}</h3>
        </div>

        <div style={ToDoListItemGridFragment}>
          <Button
            variant={"contained"}
            color={"success"}
            onClick={handleCompleteTaskClick}
            style={ToDoListButtons}
          >
            Complete task
          </Button>
          <Button
            color={"error"}
            variant={"contained"}
            onClick={handleAbandonTask}
            style={ToDoListButtons}
          >
            Abandon task
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ToListItem;
