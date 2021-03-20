import React from 'react';
import Task from "../Task/Task";
import styles from './TaskList.module.css';


const TaskList = (props) => {

    const tasksElements = props.tasks.map((task) => <Task name={task.name} checked={task.checked}/>)
    return <div className={styles.list}>
        {tasksElements}

    <button>Clear</button>
    </div>
}


export default TaskList;