import React from 'react'

const AddStudentModal = () => {
  return (
    <div>
    <dialog id="add_student" className="modal">
    <div className="modal-box max-w-4xl">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">View Employee</h3>
            <h1>OHAHA!</h1>
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
