import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { toggleBtns } from "./reducers/uiReducers";
import {
  getLeadReducer,
  postLeadReducer,
  updateLeadReducer,
  deleteLeadReducer,
} from "./reducers/leadReducers";

const reducer = combineReducers({
  toggleBtns,
  getLead: getLeadReducer,
  postLead: postLeadReducer,
  updateLead: updateLeadReducer,
  deleteLead: deleteLeadReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
