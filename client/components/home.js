import React, { Component } from 'react';
import HeaderIndex from './headerIndex';

class Home extends Component {

  render() {
   
    return (
      <div>
        <HeaderIndex />
        <div className='home'>
          <h3>Online Markdown Editor</h3>
          <h1>Markpen</h1>  
          <button type='button' className='btn'>
            START
          </button>      
        </div>
        
      </div>
    )
  }
}

export default Home;