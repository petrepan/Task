import React from "react";
import { useDispatch } from "react-redux";
import { showDeleteLeadModal } from "../actions/uiActions";

const DeleteLeadBtn = ({ setCurrentId, leadId }) => {
  const dispatch = useDispatch();

  const toggleBtn = () => {
    setCurrentId(leadId);
    dispatch(showDeleteLeadModal());
  };

  return (
    <button onClick={toggleBtn} className="btn black_bg delete_lead_modal_btn">
      Delete
    </button>
  );
};

export default DeleteLeadBtn;
