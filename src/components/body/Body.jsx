import React from 'react';

import './body.css';
import Article from '../article/Article'


class Body extends React.Component {
    render() {
        return (
            <div className='body_div'>
                    <Article/>
                    <Article/>
            </div>
        );
    }
}

export default Body;