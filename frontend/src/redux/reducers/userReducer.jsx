import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    READ_USER_REQUEST,
    READ_USER_SUCCESS,
    READ_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
  } from '../types/userTypes.jsx';
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
      case CREATE_USER_REQUEST:
      case READ_USER_REQUEST:
      case UPDATE_USER_REQUEST:
      case DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USER_SUCCESS:
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: [...state.users, action.payload],
          error: null,
        };
      case READ_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: null,
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: state.users.map(user => user.id === action.payload.id ? action.payload : user),
          error: null,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: state.users.filter(user => user.id !== action.payload),
          error: null,
        };
      case FETCH_USER_FAILURE:
      case CREATE_USER_FAILURE:
      case READ_USER_FAILURE:
      case UPDATE_USER_FAILURE:
      case DELETE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  