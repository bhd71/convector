import axios from "axios";
import getDateWithZero from "./getDateWithZero";


export default async function getResponseData(value: Promise<any>, secondCountry: string, firstCountry: string): Promise<number[]> {
    const arr = await value
    let arr_of_second_country: number[] = []
    let arr_of_first_country: number[] = []
    for (const arrElement in arr) {
        if (arrElement.split('-')[2] === '01') {
            arr_of_second_country = [...arr_of_second_country, (arr[arrElement][secondCountry])]
            arr_of_first_country = [...arr_of_first_country, (arr[arrElement][firstCountry])]
        }
    }
    let finalArr: number[] = []
    for (let i = 0; i < arr_of_first_country.length; i++) {
        finalArr[i] = arr_of_second_country[i] / arr_of_first_country[i]
    }
    return finalArr
}


export function fetchData(today: string, pastYear: string, firstCountry: string, secondCountry: string): Promise<any> {
    return axios.get(`https://api.exchangerate.host/timeseries?` +
        `start_date=${getDateWithZero(pastYear)}&end_date=${getDateWithZero(today)}` +
        `&symbols=${firstCountry},${secondCountry}`).then(data => {
        return data.data.rates
    })
}