//action types
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
const MARKS_TASK = 'MARK_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';
export const LOADING = "LOADING";


export function addNewTaskCreator(name) {
    return {type: ADD_NEW_TASK, name: name}
}

export function clearTaskCreator() {
    return {type: CLEAR_TASK};
}

export function loadingCreator( ){
    return {type: LOADING};
}