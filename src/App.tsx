import "./App.scss";
import React from "react";
import Dashboard from "./Dashboard";
import ToDoList from "./ToDoList";

const App: React.FC = () => (
  <div className="App">
    <Dashboard />
    <ToDoList />
  </div>
);

export default App;
