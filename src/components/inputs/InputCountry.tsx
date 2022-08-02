import React from 'react';

interface ISelect {
    country: string
    rates: object,
    styleName: any
    onChangeHandler: (value: string | number) => void
}

interface ICountry {
    [value: string]: string
}

function getUniqueValues(primaryArray: Array<string>, values: Array<string>): Array<string> {

    let array_of_currency = primaryArray

    array_of_currency = [
        ...(array_of_currency.filter((element: string) => {
            return values.includes(element)
        })),
        ...array_of_currency
    ]


    let finalArray: ICountry = {}
    array_of_currency.forEach((element: string) => {
        if (Object.keys(finalArray).includes(element)) return
        finalArray[element] = element
    })


    return Object.keys(finalArray)
}

const InputCountry: React.FC<ISelect> = ({country, rates, styleName, onChangeHandler}) => {
    const popular_currency = ['UAH', 'USD', 'EUR', 'RUB']
    return (
        <select defaultValue={country} className={styleName} onChange={event => onChangeHandler(event.target.value)}>
            {getUniqueValues(Object.keys(rates), popular_currency).map((element: any) => {
                return <option value={element} key={element}>
                    {element}
                </option>
            })}
        </select>
    );
};

export default InputCountry;