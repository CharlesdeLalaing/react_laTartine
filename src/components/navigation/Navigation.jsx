import React, { Component } from 'react';

import './navigation.css'
import Search_bar from '../search_bar/Search_bar'

class Navigation extends React.Component{

    showAccueil = () => {
        console.log('Accueil');
    }

    showGalerie = () => {
        console.log('Galerie');
    }

    showContact = () => {
        console.log('Contact');
    }

    render() {
        return(
            <div className='navigation_div'>
                <nav className='navigation_div_nav'>
                    <div className="navigation_div_nav_left">
                        <ul>
                            <li onClick={this.showAccueil} ><a>Link 1</a></li>
                            <li onMouseOver={this.showGalerie} ><a>Link 2</a></li>
                            <li onDoubleClick={this.showContact} ><a>Link 3</a></li>
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