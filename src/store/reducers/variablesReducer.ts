import {initialVariableState, IVariables, variablesState, VariablesType} from "../types/VariablesTypes";


export const variablesReducer = (state = initialVariableState, action: variablesState): IVariables => {
    switch (action.type) {
        case VariablesType.CHANGE_ENTERED_VALUE: {
            return {...state, enteredValue: action.payload}
        }
        case VariablesType.CHANGE_RESULT_VALUE: {
            return {...state, resultValue: action.payload}
        }
        case VariablesType.CHANGE_SECOND_COUNTRY: {
            return {...state, secondCountry: action.payload}
        }
        case VariablesType.CHANGE_FIRST_COUNTRY: {
            return {...state, firstCountry: action.payload}
        }
        default:
            return state
    }
}