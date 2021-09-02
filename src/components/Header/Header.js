import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <p className='header-main'>Cashio</p>
                <p className='header-sub'>A friendly cash register app.</p>
            </div>
        </div>
    )
}

export default Header;