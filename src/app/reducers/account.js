import { ACCOUNT } from "../actions/types";

const DEFAULT_ACCOUNT = {
  loggedIn: false
};

const account = (state = DEFAULT_ACCOUNT, action) => {
  switch (action.type) {
    case ACCOUNT.FETCH:
      return { ...state };
    case ACCOUNT.FETCH_ERROR:
      return {
        ...state,
        message: action.message
      };
    case ACCOUNT.FETCH_SUCCESS:
      return {
        ...state,
        message: action.message,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default account;
