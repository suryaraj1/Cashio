import React from 'react';
import InputComponent from '../inputComponent/InputComponent';
import NotesTable from '../NotesTable/NotesTable';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <div className='main-content-wrapper'>
                <div className='main-input-wrapper'>
                    <InputComponent inputTitle="Bill Amount" />
                    <InputComponent inputTitle="Cash Given" />
                </div>
                <div className='main-btn-wrapper'>
                    <button className='main-btn'>
                        <p>Check</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
                <NotesTable />
            </div>
        )
    }
}

export default Main;