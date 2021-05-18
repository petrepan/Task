import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUpdateLeadModal } from "../actions/uiActions";
import { getAllLead, updateLeadCom } from "../actions/leadActions";
import Message from "../components/Message";

const UpdateModal = ({ currentId }) => {
  const [communication, setCommunication] = useState("");

  const dispatch = useDispatch();

  const toggleBtns = useSelector((state) => state.toggleBtns);

  const { showUpdateLead } = toggleBtns;

  const updateLead = useSelector((state) => state.updateLead);

  const { loading, error } = updateLead;

  const getLead = useSelector((state) => state.getLead);

  const { leads } = getLead;

  useEffect(() => {
    dispatch(getAllLead());
  }, [getAllLead]);

  useEffect(() => {
    if (
    leads !== undefined &&
    leads !== null &&
    Object.keys(leads).length
  ) {
    setCommunication(leads.communication);
  }
  }, [getAllLead]);

  const closeBtn = (e) => {
    e.preventDefault();
    dispatch(showUpdateLeadModal());
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(updateLeadCom(communication, currentId));
  };

  return (
    <div className={`${showUpdateLead ? "d-block" : "d-none"} modal`}>
      <div>
        <div className="modal_header">
          <h3>Mark Communication</h3>
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
        <form onSubmit={submitForm} className="update_lead_form">
          <div>
            <label htmlFor="location string">
              Location String<span className="color-red">*</span>
            </label>
            <textarea
              rows="8"
              name="communication"
              value={communication}
              onChange={(e) => {
                setCommunication(e.target.value);
              }}
              required></textarea>
          </div>
          <div className="modal_btns">
            {error && <Message variant="danger">{error}</Message>}
            <button onClick={closeBtn} className="btn">
              Close
            </button>
            <button className="update_lead_btn btn black_bg">
              {loading ? <span className="spinner"></span> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
