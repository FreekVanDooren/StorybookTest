import {combineReducers} from "redux";
import CardsReducer from "./CardsReducer";

let rootReducer = combineReducers({
    cards: CardsReducer
});
export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
