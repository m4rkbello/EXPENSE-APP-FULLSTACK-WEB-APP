import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStudentRequest } from '../redux/actions/studentAction';
import { PiStudentFill } from "react-icons/pi";
import { BiSolidShow, BiEditAlt, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import AddStudentModal from './student/modal/AddStudentModal';
import EditStudentModal from './student/modal/EditStudentModal';
import DeleteStudentModal from './student/modal/DeleteStudentModal';

function Student(props) {
    const studentsData = props.studentData.students;

    useEffect(() => {
        props.fetchStudentRequest();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            <AddStudentModal id="add_student" title="Add Student" />
            <EditStudentModal id="edit_student" title="Edit Student" />
            <DeleteStudentModal id="delete_student" title="Delete Student" />

            <div className="w-full lg:w-1/4">
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
            </div>

            <div className="w-full lg:w-4/4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:ml-0">
                <div className="card bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl p-4">
                <span className="card-title text-black lg:text-8xl text-3xl pt-2 text-center">
                <PiStudentFill className='text-black lg:h-20 lg:w-20 h-12 w-12 mx-auto' />
                            {studentsData.length !== 0 ? studentsData.length : "0"}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:ml-0">
                <div className="card bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl p-4">
                <span className="card-title text-black lg:text-8xl text-3xl pt-2 text-center">
                <PiStudentFill className='text-black lg:h-20 lg:w-20 h-12 w-12 mx-auto' />
                            {studentsData.length !== 0 ? studentsData.length : "0"}
                        </span>
                    </div>
                </div>
                <br />

                <div className="overflow-x-auto w-full">
                    <table className="table bg-white w-full">
                        <thead className="bg-base-200">
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{`${student.std_fname} ${student.std_mname} ${student.std_lname}`}</td>
                                    <td>{student.std_age}</td>
                                    <td>{student.std_address}</td>
                                    <td>
                                        <div className="join join-vertical lg:join-horizontal">
                                            <button className="btn join-item" onClick={() => document.getElementById('view_student').showModal()}><BiSolidShow /></button>
                                            <button className="btn join-item" onClick={() => document.getElementById('edit_student').showModal()}><BiEditAlt /></button>
                                            <button className="btn join-item" onClick={() => document.getElementById('delete_student').showModal()}><MdDelete /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        studentData: state.studentReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudentRequest: () => dispatch(fetchStudentRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
