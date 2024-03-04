import axios from 'axios';


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
export const createUser = (user) => ({
    type: CREATE_USER_REQUEST,
    payload: user,
});

export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS,
});

export const createUserFailure = (error) => ({
    type: CREATE_USER_FAILURE,
    payload: error,
});

//READ User
export const readUser = (id) => ({
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
export const updateUser = (id, newUser) => ({
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
export const deleteUser = (id) => ({
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











