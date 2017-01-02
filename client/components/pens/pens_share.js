import React, { Component } from 'react';

class PensShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('pens.share', this.props.pen, email);
  }

  renderShareList() {
    return this.props.pen.sharedWith.map(email => {
      return <button
        key={email}
        className='btn btn-default'>
          {email}
        </button>

    });
  }

  render() {
    return (
      <footer className='pens-share'>
        <div className='input-group'>
          <input ref='email' className='form-control' />
          <div className='input-group-btn'>
            <button 
              onClick={this.onShareClick.bind(this)}
              className='btn btn-success'>
              Share Pen
            </button>
          </div>
        </div>
        <div>
          Shared With:
        </div>
        <div className='btn-group'>
          {this.renderShareList()}
        </div>
      </footer>
    )
  }
}

export default PensShare;