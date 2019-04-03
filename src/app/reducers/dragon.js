import { DRAGON } from "../actions/types";

const DEFAULT_DRAGON = {
  dragonId: "",
  birthdate: "",
  traits: [],
  generationId: "",
  nickname: ""
};

const dragonReducer = (state = DEFAULT_DRAGON, action) => {
  switch (action.type) {
    case DRAGON.FETCH:
      return { ...state };
    case DRAGON.FETCH_ERROR:
      return { ...state, message: action.message };
    case DRAGON.FETCH_SUCCESS:
      return { ...state, ...action.dragon };
    default:
      return state;
  }
};

export default dragonReducer;
