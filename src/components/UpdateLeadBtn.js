import React from "react";
import { useDispatch } from "react-redux";
import { showUpdateLeadModal } from "../actions/uiActions";

const UpdateLeadBtn = ({ setCurrentId, leadId }) => {
  const dispatch = useDispatch();

  const toggleBtn = () => {
    setCurrentId(leadId);
    dispatch(showUpdateLeadModal());
  };
  return (
    <button
      onClick={toggleBtn}
      className="btn black_bg mr-10 update_lead_modal_btn">
      Mark Update
    </button>
  );
};

export default UpdateLeadBtn;
