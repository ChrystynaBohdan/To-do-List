import React from 'react';
import TaskList from "./TaskList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}


const TaskListContainer = connect(mapStateToProps,)(TaskList);

export default TaskListContainer;