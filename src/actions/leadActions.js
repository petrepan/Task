import axios from "axios";
import {
  GET_LEAD_REQUEST,
  GET_LEAD_SUCCESS,
  GET_LEAD_FAIL,
  POST_LEAD_REQUEST,
  POST_LEAD_SUCCESS,
  POST_LEAD_FAIL,
  UPDATE_LEAD_REQUEST,
  UPDATE_LEAD_SUCCESS,
  UPDATE_LEAD_FAIL,
  DELETE_LEAD_REQUEST,
  DELETE_LEAD_FAIL,
  DELETE_LEAD_SUCCESS,
} from "../types/leadTypes";
import { RESET_MODAL } from "../types/uiTypes";

export const getAllLead = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LEAD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/leads/?location_string=india`,
      config
    );

    dispatch({
      type: GET_LEAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LEAD_FAIL,
      payload: "An Error Occured",
    });
  }
};

export const postNewLead =
  (first_name, last_name, email, mobile, location_type, location_string) =>
  async (dispatch) => {
    try {
      dispatch({ type: POST_LEAD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/leads/`,
        {
          first_name,
          last_name,
          email,
          mobile,
          location_string,
          location_type,
        },
        config
      );

      dispatch({
        type: POST_LEAD_SUCCESS,
        payload: res.data,
      });

      dispatch({
        type: RESET_MODAL,
      });
    } catch (error) {
      dispatch({
        type: POST_LEAD_FAIL,
        payload: "An Error Occured",
      });
    }
  };

export const updateLeadCom = (communication, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LEAD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/mark_lead/${id}`,
      {
        communication,
      },
      config
    );

    dispatch({
      type: UPDATE_LEAD_SUCCESS,
      payload: res.data,
    });

    dispatch({
      type: RESET_MODAL,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_LEAD_FAIL,
      payload: "An Error Occured",
    });
  }
};

export const deleteALead = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LEAD_REQUEST });

    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/leads/${id}`
    );

    dispatch({
      type: DELETE_LEAD_SUCCESS,
      payload: res.data,
    });

    window.location.reload();
  } catch (error) {
    dispatch({
      type: DELETE_LEAD_FAIL,
      payload: "An Error Occured",
    });
  }
};
