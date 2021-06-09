import React, { Component } from 'react';

import './navigation.css'
import Search_bar from '../search_bar/Search_bar'

class Navigation extends React.Component{
    render() {
        return(
            <div className='navigation_div'>
                <nav className='navigation_div_nav'>
                    <div className="navigation_div_nav_left">
                        <ul>
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                            <li><a>Link 3</a></li>
                        </ul>
                    </div>
                    <div className="navigation_div_nav_right">
                        <Search_bar/>
                    </div>
                </nav>
            </div>
            
        );
    }
}

export default Navigation;