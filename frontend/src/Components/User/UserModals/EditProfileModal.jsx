import React, { forwardRef } from 'react';

const EditProfileModal = forwardRef((props, ref) => {
  return (
    <div>
      <dialog id="add_student" className="modal">
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
               
                  <input type="text" placeholder="Firstname" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Middlename</span>
                  </label>
                  <input type="text" placeholder="Middlename" className="input input-bordered" />
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
                  <input type="text" placeholder="Lastname" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text"  placeholder="Address" className="input input-bordered" />
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
                  <input type="text"  placeholder="Age" className="input input-bordered" />
                </div>

              </div>
              <div className="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">
                <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select className="select w-full max-w-md">
              <option disabled value="">Select Student Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
            
                </div>

              </div>
              <br />
            </div>
            <div className='grid justify-items-end'>
              <button className="btn" type="submit">Add</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
});

export default EditProfileModal;
