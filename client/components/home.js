import React, { Component } from 'react';
import HeaderIndex from './headerIndex';

class Home extends Component {

  render() {
   
    return (
      <div className='home'>
        <HeaderIndex />
        <h2>HomePage</h2>        
      </div>
    )
  }
}

export default Home;