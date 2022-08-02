export interface IVariables {
    secondCountry: string
    firstCountry: string
    enteredValue: number
    resultValue: number
}

export enum VariablesType {
    CHANGE_ENTERED_VALUE = 'CHANGE_ENTERED_VALUE',
    CHANGE_RESULT_VALUE = 'CHANGE_RESULT_VALUE',
    CHANGE_SECOND_COUNTRY = 'CHANGE_SECOND_COUNTRY',
    CHANGE_FIRST_COUNTRY = 'CHANGE_FIRST_COUNTRY'
}

interface VariablesActionChangeEnteredValue {
    type: VariablesType.CHANGE_ENTERED_VALUE;
    payload: number
}

interface VariablesActionChangeResultValue {
    type: VariablesType.CHANGE_RESULT_VALUE;
    payload: number
}

interface VariablesActionChangeSecondCountry {
    type: VariablesType.CHANGE_SECOND_COUNTRY;
    payload: string
}

interface VariablesActionChangeFirstCountry {
    type: VariablesType.CHANGE_FIRST_COUNTRY;
    payload: string
}

export type variablesState =
    VariablesActionChangeResultValue
    | VariablesActionChangeEnteredValue
    | VariablesActionChangeFirstCountry
    | VariablesActionChangeSecondCountry

export const initialVariableState: IVariables = {
    enteredValue: 1,
    resultValue: 1,
    secondCountry: 'USD',
    firstCountry: 'UAH'
}