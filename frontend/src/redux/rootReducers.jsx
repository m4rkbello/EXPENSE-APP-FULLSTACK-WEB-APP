import { combineReducers } from 'redux';
import studentReducer from '../redux/reducer';
import loginReducer from '../redux/reducers/loginReducer'

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    loginReducer: loginReducer,
    // Add other reducers here if needed
});

export default rootReducer;
