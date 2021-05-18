import React from "react";
import { useDispatch } from "react-redux";
import { showAddLeadModal } from "../actions/uiActions";

const AddLeadBtn = () => {
  const dispatch = useDispatch();

  const toggleBtn = () => {
    dispatch(showAddLeadModal());
  };

  return (
    <button onClick={toggleBtn} className="btn black_bg add_lead_modal_btn">
      Add Lead
    </button>
  );
};

export default AddLeadBtn;
