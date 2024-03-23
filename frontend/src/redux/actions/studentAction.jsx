import axios from 'axios';
import api from '../../Services/Api.jsx';


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

//FETCH STUDENT
export const fetchStudentRequest = () => {
    return async dispatch => {
        console.log("Fetching students...");
        dispatch({ type: FETCH_STUDENT_REQUEST });
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/students');
            console.log("Fetch students success:", response.data);
            dispatch({ type: FETCH_STUDENT_SUCCESS, payload: response.data });
        } catch (error) {
            console.error("Fetch students error:", error.message);
            dispatch({ type: FETCH_STUDENT_FAILURE, payload: error.message });
        }
    };
};


export const fetchStudentSuccess = (students) => ({
    type: FETCH_STUDENT_SUCCESS,
    payload: students,
});

export const fetchStudentFailure = (error) => ({
    type: FETCH_STUDENT_FAILURE,
    payload: error,

});

//CREATE STUDENT 
export const createStudentRequest = (student) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });
    try {
      const response = await api.post('/api/students', student);
      console.log('API Response:', response); // Add this line
      dispatch({ type: CREATE_STUDENT_SUCCESS, payload: response.data });
      console.log("ADD STUDENT POST", response.data);
    } catch (error) {
      dispatch({ type: CREATE_STUDENT_FAILURE, payload: error.message });
      console.error('Error creating student:', error.response.data);
      dispatch({ type: CREATE_STUDENT_FAILURE, payload: error.response.data });
    }
  };
};


export const createStudentSuccess = () => ({
    type: CREATE_STUDENT_SUCCESS,
});

export const createStudentFailure = (error) => ({
    type: CREATE_STUDENT_FAILURE,
    payload: error,
});

//READ STUDENT
export const readStudentRequest = (id) => {
    return async (dispatch) => {
      dispatch({ type: READ_STUDENT_REQUEST });
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/students/${id}`);
        dispatch({ type: READ_STUDENT_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: READ_STUDENT_FAILURE, payload: error.message });
      }
    };
  };

export const readStudentSuccess = (student) => ({
    type: READ_STUDENT_SUCCESS,
    payload: student,
});

export const readStudentFailure = (error) => ({
    type: READ_STUDENT_FAILURE,
    payload: error,
})


//UPDATE STUDENT
export const updateStudentRequest = (id, newStudent) => {
    return async (dispatch) => {
      dispatch({ type: UPDATE_STUDENT_REQUEST });
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/students/${id}`, newStudent);
        dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: { id, newStudent: response.data } });
      } catch (error) {
        dispatch({ type: UPDATE_STUDENT_FAILURE, payload: error.message });
      }
    };
};

export const updateStudentSuccess = () => ({
    type: UPDATE_STUDENT_SUCCESS,
});

export const updateStudentFailure = (error) => ({
    type: UPDATE_STUDENT_FAILURE,
    payload: error,
});

// Delete Student
export const deleteStudentRequest = (id) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_STUDENT_REQUEST });
      try {
        await axios.delete(`http://127.0.0.1:8000/api/students/${id}`);
        dispatch({ type: DELETE_STUDENT_SUCCESS, payload: id });
      } catch (error) {
        dispatch({ type: DELETE_STUDENT_FAILURE, payload: error.message });
      }
    };
};

export const deleteStudentSuccess = () => ({
    type: DELETE_STUDENT_SUCCESS,
}); 

export const deleteStudentFailure = (error) => ({
    type: DELETE_STUDENT_FAILURE,
    payload: error,
}); 











