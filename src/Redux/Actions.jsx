//action types
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
const MARKS_TASK = 'MARK_TASK';
const CLEAR_TASK = 'CLEAR_TASK';



export function addNewTaskCreator(name) {
    return { type: ADD_NEW_TASK, name:name }
}

