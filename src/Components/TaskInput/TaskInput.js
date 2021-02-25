import React from 'react';
import s from './TaskInput.module.css';


 const TaskInput = () => {
    return <div className={s.taskinput}>
        <input className={s.input} type="text"/>
        <button>add</button>
    </div>
}


export default TaskInput;