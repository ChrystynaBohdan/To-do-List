import React from 'react';
import Task from "../Task/Task";
import styles from './TaskList.module.css';


const TaskList = (props) => {
    const tasksElements = props.tasks.map((task) => <Task name={task.name} checked={task.checked}/>)

    if(props.loading === true) {
        return <div>Loading....</div>
    } else {
        return <div className={styles.list}>
            {tasksElements}
            <button onClick={props.clear}>Clear</button>
        </div>
    }
}


export default TaskList;