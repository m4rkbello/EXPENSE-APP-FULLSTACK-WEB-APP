import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudentRequest } from '../redux/actions/studentAction';
import { useEffect } from 'react';
import { PiStudentFill } from "react-icons/pi";
import { BiSolidShow, BiEditAlt, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import AddStudentModal from './student/modal/AddStudentModal';
import EditStudentModal from './student/modal/EditStudentModal';
import DeleteStudentModal from './student/modal/DeleteStudentModal';


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

    console.log("FUNCTION SA STUDENTDATA", studentsDetails);

    useEffect(() => {
        props.fetchStudentRequest();
    }, []);

    return (
        <div>

        <AddStudentModal id="add_student" title="add student" />
        <EditStudentModal id="edit_student" title="add student" />
        <DeleteStudentModal id="edit_student" title="add student" />
        

            <dialog id="view_student" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                       
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">View Student</h3>
                        <div className='justify-items-end'>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>

    


            <div className="flex">
                <div className="flex-none w-64 h-14">
                </div>
                <div className="flex-1 w-64">
                    <div className="flex-1 w-64">
                        <div className="card w-96 h-30 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl">
                            <div className="card-body">
                                <div class="items-center">
                                    <div class="inline-block">
                                        <PiStudentFill className='text-black h-40 w-40' />
                                    </div>
                                    <div class="inline-block ">
                                        <span className="card-title text-black text-9xl pt-5 pb-15">
                                            {studentsDetails.length !== 0 ? studentsDetails.length : "0"}
                                        </span>

                                    </div>
                                </div>

                                {/**
                            
                            */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table bg-white">

                        <thead className="bg-base-200">
                            <div>STUDENTS LIST</div>
                            <tr className="hover">
                                <th>Id</th>
                                <th>FULLNAME</th>
                                <th>AGE</th>
                                <th>ADDRESS</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>

                        {studentsDetails.map((student, index) => (

                            student.length !== 0 && student ? (
                                <>
                                    <tr key={student.id} className="hover">
                                        <td className="hover">{student.id}</td>
                                        <td className="hover">{student.std_fname} {student.std_mname} {student.std_lname}</td>
                                        <td className="hover">{student.std_age}</td>
                                        <td className="hover">{student.std_address}</td>
                                        <td>
                                            <div className="join join-vertical lg:join-horizontal">
                                            <button className="btn join-item" onClick={() => document.getElementById('view_student').showModal()}><BiSolidShow /></button>
                                                <button className="btn join-item" onClick={() => document.getElementById('add_student').showModal()}><BiPlus /></button>
                                                <button className="btn join-item" onClick={() => document.getElementById('edit_student').showModal()}><BiEditAlt /></button>
                                                <button className="btn join-item" onClick={() => document.getElementById('delete_student').showModal()} ><MdDelete /></button>
                                            </div>


                                        </td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    <div className="join">
                                        <div>
                                            <div>
                                                <input className="input input-bordered join-item" placeholder="Search" />
                                            </div>
                                        </div>
                                        <select className="select select-bordered join-item">
                                            <option disabled selected>Filter</option>
                                            <option>Sci-fi</option>
                                            <option>Drama</option>
                                            <option>Action</option>
                                        </select>
                                        <div className="indicator">
                                            <span className="indicator-item badge badge-secondary">new</span>
                                            <button className="btn join-item">Search</button>
                                        </div>
                                    </div>
                                </>

                            )
                        ))
                        }

                    </table>
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