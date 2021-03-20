import {createStore} from "redux";


let initialState = {tasks: [
        {name: "Vanilla.js",
            checked: true},
        {name: "Vue.js",
            checked: false},
        {name: "React.js",
            checked: true},
        {name: "Node.js",
            checked: true}
    ]};

function reducer(state = initialState, action) {
    return state;
}

let store = createStore(reducer);

export default store;