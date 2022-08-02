import React from 'react';
import {useAppSelector} from "../store/hooks/useAppSelector";
import './Main.css'
import LeftPart from "./part/LeftPart";
import RightPart from "./part/RightPart";
import ExchangeCountry from "./inputs/ExchangeCountry";

const Main: React.FC = () => {


    const {loading, error} = useAppSelector(state => state.currency)

    if (loading) {
        return <div className={'main'}>
            <h1>Loading</h1>
        </div>
    }
    if (error) {
        return <div className="main">
            <h1>Error</h1>
        </div>
    }

    return (
        <div className={'main'}>
            <LeftPart/>
            <ExchangeCountry/>
            <RightPart/>
        </div>
    );
};

export default Main;