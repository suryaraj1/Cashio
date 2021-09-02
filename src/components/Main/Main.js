import React from 'react';
import InputComponent from '../inputComponent/InputComponent';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <div className='main-content-wrapper'>
                <div className='main-input-wrapper'>
                    <InputComponent inputTitle="Bill Amount" />
                    <InputComponent inputTitle="Cash Given" />
                </div>
            </div>
        )
    }
}

export default Main;