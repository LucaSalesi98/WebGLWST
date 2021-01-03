import { createStore } from 'redux';
const initialState = {
    correctLetter: true,
}

function rootReducer(state = initialState, action){

    switch(action.type) {
        case 'CORRECTION_STATUS_HANDLER':
            return{
                ...state,
                correctLetter: action.payload
            }
    }

    return state
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store