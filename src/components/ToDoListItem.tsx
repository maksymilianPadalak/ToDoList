import React from "react";
import { useAppDispatch } from "../app/hooks";
import { incrementedCompletedTasks } from "../features/tasksCounter/completed-tasks-counter-slice";
import { incrementedUncompletedTasks } from "../features/tasksCounter/uncompleted-tasks-counter-slice";
import { Button } from "@mui/material";

const ToDoListItemBody: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

const ToDoListButtons: React.CSSProperties = {
  marginInline: "10px",
};

const ToListItem: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleCompleteTaskClick = () => {
    dispatch(incrementedCompletedTasks());
  };

  const handleAbandonTask = () => {
    dispatch(incrementedUncompletedTasks());
  };

  return (
    <div>
      <div style={ToDoListItemBody}>
        <h3>Zrób zakupy</h3>
        <div>
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
