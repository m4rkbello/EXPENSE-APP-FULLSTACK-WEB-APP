import { combineReducers } from 'redux';
import studentReducer from '../redux/reducer';

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    // Add other reducers here if needed
});

export default rootReducer;
