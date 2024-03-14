import React from 'react'

const DeleteStudentModal = () => {
  return (
    <div>
     
    <dialog id="delete_student" className="modal">
    <div className="modal-box">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Are you sure you want to delete this Student?</h3>
            <div className='justify-items-end'>
                <button className="btn">Yes</button>
                <button className="btn">No</button>
            </div>
        </form>
    </div>
</dialog>
    </div>
  )
}

export default DeleteStudentModal