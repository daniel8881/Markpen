import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }


  onPenClick(e) {
    e.preventDefault();
    
    //meteor method accept last parameter as a callback
    Meteor.call('pens.insert', (err, penId) => {
      browserHistory.push(`/u/pens/${penId}`);
    });
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(() => {
      browserHistory.push('/');
    }); 
  }

  render() {
    const { user } = this.props;
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>
            <img src='/images/markpen_logo.svg' className='logo' />
          </Link>
        </div>
        <ul className='nav nav-pills pull-right login'>
          <li>
            <a href="#" onClick={this.onPenClick.bind(this)}>Create Pen</a>
          </li>
          <li>
            <a>Hi { user ? user.username : ''}</a>
          </li>
          <li>
            <a href="#" onClick={this.logout.bind(this)}>Logout</a>
          </li>
        </ul>
        
      </nav>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  };
}, Header);