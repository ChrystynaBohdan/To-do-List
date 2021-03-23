import {createStore} from "redux";
import {ADD_NEW_TASK} from "./Actions";


const initialState = {
    test: true,
    tasks: [
        {
            name: "Vanilla.js",
            checked: true
        },
        {
            name: "Vue.js",
            checked: false
        },
        {
            name: "React.js",
            checked: true
        },
        {
            name: "Node.js",
            checked: true
        }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {name: action.name, checked: false}],
            }
        default:
            return state;
    }
}
    let store = createStore(reducer);

    export default store;