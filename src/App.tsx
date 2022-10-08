import React from "react";
import Dashboard from "./components/Dashboard";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => (
  <div className={"w-100"}>
    <Dashboard />
    <ToDoList />
  </div>
);

export default App;
