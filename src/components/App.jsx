import React from 'react';
import './app.css'

import Header from '../components/header/Header'
import Body from '../components/body/Body'
import Footer from '../components/footer/Footer'

class App extends React.Component {
  render() {
    return (
      <div className='app_div'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;