import React, {useMemo} from 'react';

import './App.css';
import Main from "./components/Main";
import {useAppDispatch} from "./store/hooks/useAppDispatch";
import {FETCH_DATA} from "./store/action-creator/CurrencyCreators";
import {useAppSelector} from "./store/hooks/useAppSelector";
import ChartComponent from "./components/chart/ChartComponent";


function App() {
    const {firstCountry} = useAppSelector(state => state.variables)
    const dispatch = useAppDispatch()

    useMemo(() => {
        FETCH_DATA(dispatch, firstCountry)
    }, [dispatch, firstCountry])

    return (
        <div className="App">
            <Main/>
            <ChartComponent/>
        </div>
    );
}

export default App;
