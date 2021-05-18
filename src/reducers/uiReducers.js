import {
  TOGGLE_ADD_LEAD_MODAL,
  TOGGLE_UPDATE_LEAD_MODAL,
  TOGGLE_DELETE_LEAD_MODAL,
  RESET_MODAL,
} from "../types/uiTypes";

export const toggleBtns = (
  state = {
    showAddLead: false,
    showUpdateLead: false,
    showDeleteLead: false,
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_ADD_LEAD_MODAL:
      return { ...state, showAddLead: !state.showAddLead };
    case TOGGLE_UPDATE_LEAD_MODAL:
      return { ...state, showUpdateLead: !state.showUpdateLead };
    case TOGGLE_DELETE_LEAD_MODAL:
      return { ...state, showDeleteLead: !state.showDeleteLead };
    case RESET_MODAL:
      return {
        showAddLead: false,
        showUpdateLead: false,
        showDeleteLead: false,
      };
    default:
      return state;
  }
};
