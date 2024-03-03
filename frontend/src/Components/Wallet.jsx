import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchStudentRequest} from '../redux/actions';
import { useEffect } from 'react';


function Wallet(props) {


    useEffect(() => {
        // Dispatch the fetchStudentRequest action when the component mounts
        props.fetchStudentRequest();
    }, []);

    return (
        <div>
            <div className="flex">
                <div className="flex-none w-64 h-14">
                </div>
                <div className="flex-initial w-64 ...">


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
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
        students: state.studentReducer.students
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudentRequest: () => dispatch(fetchStudentRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);