import "./App.scss";
import React from "react";
import Dashboard from "./components/Dashboard";
import ToDoList from "./components/ToDoList";

const AppStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const App: React.FC = () => (
  <div style={AppStyle}>
    <Dashboard />
    <ToDoList />
  </div>
);

export default App;
