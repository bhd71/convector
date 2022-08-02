import React, {useMemo} from 'react';
import InputCountry from "../inputs/InputCountry";
import {useAppSelector} from "../../store/hooks/useAppSelector";
import InputMoney from "../inputs/InputMoney";
import './Part.css'
import {useAppDispatch} from "../../store/hooks/useAppDispatch";
import {VariablesType} from "../../store/types/VariablesTypes";

const LeftPart: React.FC = () => {
    const {info} = useAppSelector(state => state.currency)
    const dispatch = useAppDispatch()

    const {enteredValue} = useAppSelector(state => state.variables)
    return (
        <div className={'part'}>
            <InputCountry country={info.base} rates={info.rates} styleName={'part-country'}
                          onChangeHandler={(value) => {
                              dispatch({type: VariablesType.CHANGE_FIRST_COUNTRY, payload: value})
                          }}/>
            <InputMoney styleName={'part-money'} onChangeHandler={(e) => {
                e = Number(e)
                dispatch({type: VariablesType.CHANGE_ENTERED_VALUE, payload: e})
            }}
                        value={enteredValue}
            />

        </div>
    );
};

export default LeftPart;