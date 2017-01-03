import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  onPenClick(e) {
    e.preventDefault();
    
    //meteor method accept last parameter as a callback
    Meteor.call('pens.insert', (err, penId) => {
      browserHistory.push(`/u/pens/${penId}`);
    });
  }

  render() {

    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>Markpen</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <a href="#" onClick={this.onPenClick.bind(this)}>Create Pen</a>
          </li>
        </ul>
        <ul className='nav nav-pills pull-right login'>
          <Accounts />
        </ul>
        
      </nav>
    )
  }
}

export default Header;