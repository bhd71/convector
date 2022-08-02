interface ICurrencyInfo {
    base: string,
    rates: any
    date: string
}

export interface ICurrency {
    loading: boolean
    error: boolean
    info: ICurrencyInfo
}

export const initialState: ICurrency = {
    loading: false,
    error: false,
    info: {
        base: '',
        date: '',
        rates: {}
    }
}

export enum CurrencyTypes {
    FETCHING_DATA = 'FETCHING_DATA',
    FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS',
    FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR',
}

interface CurrencyActionLoading {
    type: CurrencyTypes.FETCHING_DATA
}

interface CurrencyActionSuccess {
    type: CurrencyTypes.FETCHING_DATA_SUCCESS,
    payload: any
}

interface CurrencyActionError {
    type: CurrencyTypes.FETCHING_DATA_ERROR,
}


export type actionState = CurrencyActionSuccess | CurrencyActionLoading | CurrencyActionError