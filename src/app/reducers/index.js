import { combineReducers } from "redux";
import generationReducer from "./generation";
import dragonReducer from "./dragon";
import accountReducer from "./account";
import accountDragonsReducer from "./accountDragons";
import accountInfoReducer from "./accountInfo";

export default combineReducers({
  account: accountReducer,
  dragon: dragonReducer,
  generation: generationReducer,
  accountDragons: accountDragonsReducer,
  accountInfo: accountInfoReducer
});
