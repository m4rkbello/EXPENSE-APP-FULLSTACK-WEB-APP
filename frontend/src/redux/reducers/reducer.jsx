import {
    FETCH_STUDENT_REQUEST,
    FETCH_STUDENT_FAILURE,
    FETCH_STUDENT_SUCCESS,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_FAILURE,
    CREATE_STUDENT_SUCCESS,
    READ_STUDENT_REQUEST,
    READ_STUDENT_FAILURE,
    READ_STUDENT_SUCCESS,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_FAILURE,
    UPDATE_STUDENT_SUCCESS,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_FAILURE,
    DELETE_STUDENT_SUCCESS
} from '../types/studentTypes.jsx';

const initialState = {
    students: [],
    loading: false,
    error: null,
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload,
                error: null,
            };
        case FETCH_STUDENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action. payload,
            };
        case CREATE_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_STUDENT_SUCCESS:
            return {
                ...state,
                loading: true,
                students: [...state.students, action.payload],
                error: null,
            };
        case CREATE_STUDENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case READ_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case READ_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload,
                error: null,
            };
        case READ_STUDENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                students: state.students.map(student => student.id === action.payload.id ? action.payload : student),
                error: null,
            }
        case UPDATE_STUDENT_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload,
            };
        case DELETE_STUDENT_REQUEST:
            return {
                ...state,
                loading:true,
            };
        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                students: state.students.filter(student => student.id !== action.payload),
                error: null,
            };
        case DELETE_STUDENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            default:
                return state;
        }
    };
    
export default studentReducer;
