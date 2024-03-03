import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudentRequest } from '../redux/actions';
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
        // Dispatch the fetchStudentRequest action when the component mounts
        props.fetchStudentRequest();
    }, []);

    return (
        <div>
            <div className="flex">
                <div className="flex-none w-64 h-14">
                </div>
                
                <div className="flex-1 w-64 ...">
                    {studentsDetails !== 0 && studentsDetails.map((student, index) => (
                       
                            <div className="flex-1 w-64 ... pt-10">

                                <div key={index} className="card w-96 bg-red-100 shadow-xl">
                                    <div className="card-body">
                                        <span className="card-title text-black text-7xl">
                                            {student.id}
                                        </span>
                                        <p>{student.std_fname}  {student.std_lname} {student.std_address}</p>
                                        <p>{student.std_address} {student.std_age} {student.status}</p>
                                        
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                      
                    ))};

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