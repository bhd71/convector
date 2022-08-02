import {CurrencyTypes} from "../types/CurrencyTypes";
import axios from "axios";

export function FETCH_DATA(dispatch: any, base: string = 'UAH') {
    return (async () => {
        try {
            dispatch({type: CurrencyTypes.FETCHING_DATA})
            const res = await axios.get(`https://api.exchangerate.host/latest?base=${base}`)
            setTimeout(() => {
                dispatch({type: CurrencyTypes.FETCHING_DATA_SUCCESS, payload: res.data})
            }, 0)

        } catch (err) {
            dispatch({type: CurrencyTypes.FETCHING_DATA_ERROR})
        }
    })()
}