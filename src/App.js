import styles from './App.module.css';
import React from "react";
import TaskInput from "./Components/TaskInput/TaskInput";
import TaskList from "./Components/TaskList/TaskList";

console.log(styles)
function App() {
  return (
      <div className={styles.theme}>
          <h1>To-do List</h1>
        <TaskInput/>
        <TaskList/>
      </div>
  );
}

export default App;
