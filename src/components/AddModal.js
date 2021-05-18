import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAddLeadModal } from "../actions/uiActions";
import { postNewLead } from "../actions/leadActions";
import Message from "../components/Message";

const AddModal = () => {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [mobile, set_mobile] = useState("");
  const [location_type, set_location_type] = useState("Country");
  const [location_string, set_location_string] = useState("");

  const dispatch = useDispatch();

  const toggleBtns = useSelector((state) => state.toggleBtns);

  const { showAddLead } = toggleBtns;

  const postLead = useSelector((state) => state.postLead);

  const { loading, error } = postLead;

  const closeBtn = (e) => {
    e.preventDefault();
    dispatch(showAddLeadModal());
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      postNewLead(
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string
      )
    );
  };
  return (
    <div className={`${showAddLead ? "d-block" : "d-none"} modal`}>
      <div>
        <div className="modal_header">
          <h3>Add Lead</h3>
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
        <form onSubmit={submitForm} className="add_lead_form">
          <div>
            <div className="input">
              <label htmlFor="first name">
                First Name<span className="color-red">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                onChange={(e) => {
                  set_first_name(e.target.value);
                }}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="last name">
                Last Name<span className="color-red">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                onChange={(e) => {
                  set_last_name(e.target.value);
                }}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="Email Address">
                Email Address<span className="color-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  set_email(e.target.value);
                }}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="Mobile">
                Mobile<span className="color-red">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                onChange={(e) => {
                  set_mobile(e.target.value);
                }}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="location type">
                Location Type<span className="color-red">*</span>
              </label>
              <select
                name="location_type"
                onChange={(e) => {
                  set_location_type(e.target.value);
                }}
                required>
                <option value="Country">Country</option>
                <option value="City">City</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="location string">
                Location String<span className="color-red">*</span>
              </label>
              <input
                type="text"
                name="location_string"
                onChange={(e) => {
                  set_location_string(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="modal_btns">
            {error && <Message variant="danger">{error}</Message>}
            <button onClick={closeBtn} className="btn">
              Close
            </button>
            <button className="add_lead_btn btn black_bg">
              {loading ? <span className="spinner"></span> : "SAVE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
