import React from 'react';
import {useAppDispatch} from "../../store/hooks/useAppDispatch";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRightLeft} from '@fortawesome/free-solid-svg-icons'
import {VariablesType} from "../../store/types/VariablesTypes";
import {useAppSelector} from "../../store/hooks/useAppSelector";

const ExchangeCountry = () => {
    const {firstCountry, secondCountry} = useAppSelector(state => state.variables)
    const dispatch = useAppDispatch()
    return (
        <FontAwesomeIcon icon={faRightLeft} onClick={() => {
            dispatch({type: VariablesType.CHANGE_FIRST_COUNTRY, payload: secondCountry})
            dispatch({type: VariablesType.CHANGE_SECOND_COUNTRY, payload: firstCountry})
        }}/>

    );
};

export default ExchangeCountry;