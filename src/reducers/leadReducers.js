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

export const getLeadReducer = (
  state = {
    leads: [
      {
        id: 4738,
        first_name: "Peter",
        last_name: "Awotola",
        mobile: 12345,
        location_type: "City",
        location_string: "naija",
      },
      {
        id: 903,
        first_name: "Susan",
        last_name: "Soji",
        mobile: 12345,
        location_type: "City",
        location_string: "canada",
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case GET_LEAD_REQUEST:
      return { loading: true };
    case GET_LEAD_SUCCESS:
      return {
        loading: false,
        leads: action.payload,
      };
    case GET_LEAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postLeadReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_LEAD_REQUEST:
      return { loading: true };
    case POST_LEAD_SUCCESS:
      return {
        loading: false,
        lead: action.payload,
      };
    case POST_LEAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateLeadReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LEAD_REQUEST:
      return { loading: true };
    case UPDATE_LEAD_SUCCESS:
      return {
        loading: false,
        update: action.payload,
      };
    case UPDATE_LEAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteLeadReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LEAD_REQUEST:
      return { loading: true };
    case DELETE_LEAD_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_LEAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
