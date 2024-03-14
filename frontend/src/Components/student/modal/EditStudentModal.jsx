import React from 'react'

const EditStudentModal = () => {
  return (
    <div>
    <dialog id="edit_student" className="modal">
    <div className="modal-box">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Edit Employee</h3>
            <div className='justify-items-end'>
                <button className="btn">Close</button>
            </div>
        </form>
    </div>
</dialog>
    </div>
  )
}

export default EditStudentModal