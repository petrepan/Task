import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDeleteLeadModal } from "../actions/uiActions";
import { deleteALead } from "../actions/leadActions";
import Message from "../components/Message";

const DeleteModal = ({ currentId }) => {
  const dispatch = useDispatch();

  const toggleBtns = useSelector((state) => state.toggleBtns);

  const { showDeleteLead } = toggleBtns;

  const deleteLead = useSelector((state) => state.deleteLead);

  const { loading, error } = deleteLead;

  const closeBtn = (e) => {
    e.preventDefault();
    dispatch(showDeleteLeadModal());
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteALead(currentId));
  };

  return (
    <div className={`${showDeleteLead ? "d-block" : "d-none"} modal`}>
      <div>
        <div className="modal_header">
          <h3>Do you wish to delete this lead?</h3>
          <svg
            onClick={closeBtn}
            className="w-6 h-6 pointer"
            fill="none"
            stroke="currentColor"
            width="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form className="delete_lead_form">
          <div className="modal_btns text-center">
            {error && <Message variant="danger">{error}</Message>}
            <button onClick={handleDelete} className="btn red_bg">
              {loading ? <span className="spinner"></span> : "Delete"}
            </button>
            <button onClick={closeBtn} className="delete_lead_btn btn black_bg">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;
