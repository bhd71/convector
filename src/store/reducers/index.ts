import {currencyReducer} from "./currencyReducer";
import {store} from "../index";
import {variablesReducer} from "./variablesReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    currency: currencyReducer,
    variables: variablesReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

