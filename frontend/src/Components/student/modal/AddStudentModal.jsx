import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStudentRequest } from '../../../redux/actions/studentAction';


const AddStudentModal = ({ createStudentRequest }) => {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");


  const handleCreateStudent = async (event) => {
    event.preventDefault(); // Add this line to prevent form submission
  
    try {
      const postAndResponseCreateStudent = await createStudentRequest({
        std_fname: firstName,
        std_mname: middleName,
        std_lname: lastName,
        std_address: address,
        std_age: age,
        status: selectedStatus,
      });

      
  
      console.log("RESPONSE SA LOGIN!", postAndResponseCreateStudent);
      // navigate("/home");
      // window.location.reload();
    } catch (error) {
      toast.error("Student lack of informations");
    }
  };

  console.log('Form Data:', { firstName, middleName, lastName, address, age, selectedStatus });

  return (
    <div>
      <dialog id="add_student" className="modal lg:w-4/4">
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Add Student</h3>
            <div className="flex">
              <div className="flex-1 w-64 ... ps-5 pe-5 pb-5 pt-2">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Firstname</span>
                  </label>
               
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Middlename</span>
                  </label>
                  <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middlename" className="input input-bordered" />
                </div>

              </div>
              <br />
            </div>
            <div className="flex">
              <div className="flex-1 w-64 ... ps-5 pe-5 pb-5 pt-2">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Lastname</span>
                  </label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Lastname" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="input input-bordered" />
                </div>

              </div>
              <br />
            </div>
            <div className="flex">
              <div className="flex-1 w-64 ... ps-5 pe-5 pb-5 pt-2">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">
                <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="select w-full max-w-md">
              <option disabled value="">Select Student Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
            
                </div>

              </div>
              <br />
            </div>
            <div className='grid justify-items-end'>
            <button
            className="btn"
            type="submit"
            onClick={(event) => handleCreateStudent(event)}
          >
            Add
          </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default connect(null, { createStudentRequest })(AddStudentModal);
