import React from 'react';
import styles from './Task.module.css'


const Task = (props) => {
    return <div className={styles.task}>
        <button>X</button>
        <button>Y</button>
        <button>Y</button>
        <button>T</button>

        <input type="checkbox" checked={props.checked} />
        <span>{props.name}</span>
        </div>
}



export default Task;