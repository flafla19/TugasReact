import { createStore } from 'redux';

// Initial state
const initialState = {
  profile: {
    name: '',
    nim: ''
  }
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
