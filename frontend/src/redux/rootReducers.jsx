import { combineReducers } from 'redux';
import studentReducer from '../redux/reducer';
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    userReducer: userReducer,
    // Add other reducers here if needed
});

export default rootReducer;
