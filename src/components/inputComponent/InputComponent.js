import React from 'react';
import './InputComponent.css';

const validatePlaceholder = title => {
    return title === 'Bill Amount' ? 'Enter the bill amount' : 'Enter the cash given by customer';
}

const InputComponent = ({ inputTitle }) => {
    return (
        <div className='input-wrapper'>
            <div className='input-header-wrapper'>
                <p className='input-header'>{inputTitle}</p>
            </div>
            <div className='input-box-wrapper'>
                <input className='input-box' placeholder={validatePlaceholder(inputTitle)}/>
            </div>
        </div>
    )
}

export default InputComponent;