import React from 'react';
import Task from "../Task/Task";
import styles from './TaskList.module.css';


const TaskList = () => {
    const tasks = [
        {name: "Vanilla.js",
        checked: true},
        {name: "Vue.js",
            checked: true},
        {name: "React.js",
            checked: true},
        {name: "Node.js",
            checked: true}
    ];
    const tasksElements = tasks.map((task) => <Task name={task.name} checked={task.checked}/>)
    return <div className={styles.list}>
        {tasksElements}

    <button>Clear</button>
    </div>
}


export default TaskList;