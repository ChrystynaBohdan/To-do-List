import React from 'react';
import TaskList from "./TaskList";
import {connect} from "react-redux";
import {addNewTaskCreator, clearTaskCreator, loadingCreator} from "../../Redux/Actions";
import {request} from "../../fakebackend";


let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        loading: state.loading,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNew: (name) => {
            dispatch(addNewTaskCreator(name))
        },
        clear: () => {
            dispatch(loadingCreator())

            request().then(() => {
                dispatch(clearTaskCreator())
            })
        }
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskListContainer;