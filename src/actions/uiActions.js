import {
  TOGGLE_ADD_LEAD_MODAL,
  TOGGLE_UPDATE_LEAD_MODAL,
  TOGGLE_DELETE_LEAD_MODAL,
} from "../types/uiTypes";

export const showAddLeadModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_ADD_LEAD_MODAL });
};

export const showUpdateLeadModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_UPDATE_LEAD_MODAL });
};

export const showDeleteLeadModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_DELETE_LEAD_MODAL });
};
