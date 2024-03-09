import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudentRequest } from '../redux/actions/studentAction';
import { useEffect } from 'react';


function Wallet(props) {

    const studentsData = props && props.studentData && props.studentData.students;
    console.log("DATAS", props && props)
    console.log("VARIABLE STUDENTS", studentsData);

    function extractStudentsData(studentsData) {
        const students = [];
        for (let i = 0; i < studentsData.length; i++) {
            const student = studentsData[i]; // Retrieve each student
            students.push(student); // Add the student to the 'students' array
        }
        return students;
    }

    const studentsDetails = extractStudentsData(studentsData);
    console.log("FUNCTION SA STUDENTDATA", extractStudentsData(studentsData));

    useEffect(() => {
        props.fetchStudentRequest();
    }, []);

    return (
        <div>
            <div className="flex">
                <div className="flex-none w-64 h-14">
                </div>
                <div className="flex-1 w-64 ...">
                    <div className="flex-1 w-64 ... pt-10">
                        <div className="card w-96 h-30 bg-red-100 shadow-xl">
                            <div className="card-body">
                                <span className="card-title text-black text-7xl">
                                User
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    console.log("DATA", state.studentReducer)
    return {
        studentData: state.studentReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudentRequest: () => dispatch(fetchStudentRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);