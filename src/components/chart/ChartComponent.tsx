import React, {useMemo, useState} from 'react';
import './ChartComponent.css'

import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useAppSelector} from "../../store/hooks/useAppSelector";
import getDateString from "../../assets/functions/getDateString";
import getChartData, {options} from "../../assets/functions/getChartData";
import getPastMonth from "../../assets/functions/getPastMonth";
import getResponseData, {fetchData} from "../../assets/functions/getResponseData";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const ChartComponent: React.FC = () => {
        const [data, setData] = useState()
        const {firstCountry, secondCountry} = useAppSelector(state => state.variables)
        const [today, pastYear] = getDateString()
        useMemo(() => {
            const getPromise = async () => {
                const res: any = await getChartData(getPastMonth(),
                    getResponseData(
                        fetchData(today, pastYear, firstCountry, secondCountry),
                        secondCountry, firstCountry))

                setData(res)

            }
            getPromise()
        }, [firstCountry, secondCountry])
        if (data) {
            return <div className={'chart'}>
                <Line options={options}
                      data={data}/>
            </div>
        }

        return (
            <div className={'chart'}>
                Loading
            </div>
        );
    }
;

export default ChartComponent;