import React from 'react';
import './Part.css'
import {useAppSelector} from "../../store/hooks/useAppSelector";
import InputCountry from "../inputs/InputCountry";
import InputMoney from "../inputs/InputMoney";
import {useAppDispatch} from "../../store/hooks/useAppDispatch";
import {VariablesType} from "../../store/types/VariablesTypes";

const RightPart: React.FC = () => {
    const dispatch = useAppDispatch()
    const {enteredValue, secondCountry} = useAppSelector(state => state.variables)
    const {info} = useAppSelector(state => state.currency)
    const coefficient = info.rates[secondCountry]

    return (
        <div className={'part'}>
            <InputCountry country={secondCountry} rates={info.rates} styleName={'part-country'}
                          onChangeHandler={(value) => {
                              dispatch({type: VariablesType.CHANGE_SECOND_COUNTRY, payload: value})
                          }}/>
            <InputMoney styleName={'part-money'} onChangeHandler={(value) => {
                dispatch({type: VariablesType.CHANGE_ENTERED_VALUE, payload: Number(value) / coefficient})
            }}
                        value={enteredValue * coefficient}/>
        </div>
    );
};

export default RightPart;