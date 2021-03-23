import React from 'react';
import TaskList from "./TaskList";
import {connect} from "react-redux";
import {addNewTaskCreator, clearTaskCreator} from "../../Redux/Actions";


let mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNew: (name) => {
            dispatch(addNewTaskCreator(name))
        },
        clear: () => {
            dispatch(clearTaskCreator())
        }
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;