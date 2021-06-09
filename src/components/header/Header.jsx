import React from 'react';

import './header.css'
import Navigation from '../navigation/Navigation';

class Header extends React.Component{
    render() {
        return(
            <div className='header_div'>
                <header className='header_div_header'>
                    <Navigation/>
                </header>                
            </div>

        );
    }
}

export default Header;