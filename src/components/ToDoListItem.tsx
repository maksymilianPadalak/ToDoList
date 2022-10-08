import React from "react";
import { useAppDispatch } from "../app/hooks";
import {
  incrementAbandonedTasks,
  incrementCompletedTasks,
} from "../features/tasksCounter/tasksCounterSlice";
import { Button } from "@mui/material";
import {
  finishedTask,
  ToDoListItemWithUuid,
} from "../features/toDoList/toDoListSlice";

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
    dispatch(incrementCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(finishedTask(toDoItem.uuid));
    dispatch(incrementAbandonedTasks());
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
