import {actionState, CurrencyTypes, ICurrency, initialState} from "../types/CurrencyTypes";

export const currencyReducer = (state = initialState, action: actionState): ICurrency => {
    switch (action.type) {
        case CurrencyTypes.FETCHING_DATA: {
            return ({...state, loading: true})
        }

        case CurrencyTypes.FETCHING_DATA_ERROR: {
            return ({...state, error: true, loading: false})
        }
        case CurrencyTypes.FETCHING_DATA_SUCCESS: {
            return ({
                loading: false, error: false,
                info: {
                    date: action.payload.date,
                    rates: action.payload.rates,
                    base: action.payload.base
                }
            })
        }

        default: {
            return state
        }
    }
}