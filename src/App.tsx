import React from "react";
import Dashboard from "./components/Dashboard";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => (
  <div>
    <Dashboard />
    <ToDoList />
  </div>
);

export default App;
