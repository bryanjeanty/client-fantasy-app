import generationReducer from "./generation";
import dragonReducer from "./dragon";
import accountReducer from "./account";

export default combineReducers({
  account: accountReducer,
  dragon: dragonReducer,
  generation: generationReducer
});
