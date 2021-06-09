import React from 'react';

import './search_bar.css'

class Search_bar extends React.Component{
    render() {
        return(
            <div className='search_bar_div'>
                <form className='search_bar_div_form'>
                    <label className='search_bar_div_form_label'>
                        Search : 
                        <input type="text" />
                    </label>
                    <input className='search_bar_div_form_input' type="submit" value="Go" />
                </form>                
            </div>
        );
    }
}

export default Search_bar;