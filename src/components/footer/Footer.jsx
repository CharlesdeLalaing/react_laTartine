import React from 'react';

class Footer extends React.Component {
    render() {
        return (
                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', color:'white'}}>
                        © 2020 Copyright: la tartine
                    </div>
                </footer>
        );
    }
}

export default Footer;

