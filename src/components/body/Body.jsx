import React from 'react';

import './body.css';
import Article from '../article/Article'


class Body extends React.Component {
    
    articlesEnCours = 2;

    render() {
        return (
            //Condition à la volée avec l’opérateur logique &&
            <div className='body_div'> 

                { this.articlesEnCours >= 2 &&
                    <div className="articles">
                        <Article/>
                        <Article/>                        
                    </div>
                }                


                { this.articlesEnCours < 2 &&
                    <div className="articles text-center text-white">
                        <h1>fuck you m8</h1>                    
                    </div>
                }

            </div>
        );
    }
}

export default Body;