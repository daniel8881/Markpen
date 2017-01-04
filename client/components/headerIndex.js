import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  onPenClick(e) {
    e.preventDefault();
    
    //meteor method accept last parameter as a callback
    Meteor.call('pens.insert', (err, penId) => {
      browserHistory.push(`/pens/${penId}`);
    });
  }

  render() {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>
            <img src='/images/markpen_logo.svg' className='logo'/>
          </Link>
        </div>
        <ul className='nav navbar-nav pull-right'>
          <li>
            <a href="#" onClick={this.onPenClick.bind(this)}>Create Pen</a>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Register</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;