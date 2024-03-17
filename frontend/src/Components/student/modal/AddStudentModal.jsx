import React from 'react'

const AddStudentModal = () => {
  return (
    <div>
      <dialog id="add_student" className="modal">
        <div className="modal-box max-w-4xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Add Student</h3>
            <div class="flex">
              <div class="flex-1 w-64 ... ps-5 pe-5 pb-5 pt-2">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Firstname</span>
                  </label>
                  <input type="text" placeholder="first name" className="input input-bordered" />
                </div>

              </div>
              <div class="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
                <div className="form-control">

                  <label className="label">
                    <span className="label-text">Middlename</span>
                  </label>
                  <input type="text" placeholder="middle name" className="input input-bordered" />
                </div>

              </div>
              <br />
            </div>
            <div class="flex">
            <div class="flex-1 w-64 ... ps-5 pe-5 pb-5 pt-2">
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Lastname</span>
                </label>
                <input type="text" placeholder="first name" className="input input-bordered" />
              </div>

            </div>
            <div class="flex-1 w-64 ... ps-5 pe-5 pt-2 pb-5">
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" placeholder="middle name" className="input input-bordered" />
              </div>

            </div>
            <br />
          </div>
            <div className='justify-items-end'>
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default AddStudentModal
