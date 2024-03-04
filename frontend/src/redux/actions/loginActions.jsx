import api from '../../Services/Api';
import { useNavigate } from 'react-router-dom';

import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    READ_USER_REQUEST,
    READ_USER_FAILURE,
    READ_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS
} from '../types/loginTypes.jsx';

//FETCH STUDENT
export const fetchUserRequest = () => {
    return async dispatch => {
        console.log("Fetching students...");
        dispatch({ type: FETCH_USER_REQUEST });
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/students');
            console.log("Fetch students success:", response.data);
            dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
        } catch (error) {
            console.error("Fetch students error:", error.message);
            dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
        }
    };
};


export const fetchUserSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    payload: users,
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,

});

//CREATE User 
export const createUserPost = (userData) => {
    return async (dispatch) => {
      console.log("Creating user...");
      dispatch({ type: CREATE_USER_REQUEST });
      try {
        const response = await api.post('http://127.0.0.1:8000/api/login', userData);
        console.log("Create user success:", response.data);
        dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
        if (response.data && response.data.success) {
            const { token } = response.data;
    
            // Save token to localStorage
            localStorage.setItem('M4rkbelloFullstackPersonalAccessToken', token);
    
            // Save token to cookie
            document.cookie = `M4rkbelloFullstackPersonalAccessToken=${token}; expires=${new Date(Date.now() + 86400 * 1000).toUTCString()}; path=/`;
    
            // Clear email and password fields
            setEmail("");
            setPassword("");
          
        
            // Navigate to the desired route
    
          }
      } catch (error) {
          dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
          console.error("Create user error:", error.message);
   
      }
    };
  };
  
  

export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS,
});

export const createUserFailure = (error) => ({
    type: CREATE_USER_FAILURE,
    payload: error,
});

//READ User
export const readUserRequest = (id) => ({
    type: READ_USER_REQUEST,
    payload: id,
});

export const readUserSuccess = (user) => ({
    type: READ_USER_SUCCESS,
    payload: user,
});

export const readUserFailure = (error) => ({
    type: READ_USER_FAILURE,
    payload: error,
})


//UPDATE User
export const updateUserRequest = (id, newUser) => ({
    type: UPDATE_USER_REQUEST,
    payload: {id, newUser},
});

export const updateUserSuccess = () => ({
    type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
    type: UPDATE_USER_FAILURE,
    payload: error,
});

//DELETE User
export const deleteUserRequest = (id) => ({
    type: DELETE_USER_REQUEST,
    payload: id,
});

export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS,
}); 

export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    payload: error,
}); 











