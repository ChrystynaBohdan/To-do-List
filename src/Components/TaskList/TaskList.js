import React from 'react';
import Task from "../Task/Task";
import styles from './TaskList.module.css';


const TaskList = () => {
    return <div className={styles.list}>
        <Task name="Vanilla.js" checked={true} />
        <Task name="Vue.js" checked={true}/>
        <Task name="React.js" checked={false}/>
        <Task name="Node.js" checked={false}/>
    <button>Clear</button>
    </div>
}


export default TaskList;