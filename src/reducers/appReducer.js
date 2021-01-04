import {createStore} from 'redux';
const initialState = {
  correctLetter: true,
  correctKeysPressed: 0,
  wrongKeysPressed: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CORRECTION_STATUS_HANDLER':
      return {
        ...state,
        correctLetter: action.payload,
      };
      break;
    case 'INCREMENT_CORRECT_KEYS':
      return {
        ...state,
        correctKeysPressed: state.correctKeysPressed + 1,
      };
      break;
    case 'INCREMENT_WRONG_KEYS':
      return {
        ...state,
        wrongKeysPressed: state.wrongKeysPressed + 1,
      };
  }

  return state;
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
