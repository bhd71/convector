import React from 'react';

interface IInput {
    styleName: any,
    onChangeHandler: (value: string | number) => void
    value: number
}

const InputMoney: React.FC<IInput> = ({styleName, onChangeHandler, value}) => {
    return (
        <input type={'number'} className={styleName} onChange={(event => {
            onChangeHandler(event.target.value)
        })} value={value}/>
    );
};

export default InputMoney;