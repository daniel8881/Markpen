import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pens } from '../../../imports/collections/pens';
import { Link } from 'react-router';
// why use fat arrow function onClick
// each button will create a function and pass unique pen into it
class PensList extends Component {
  onPenRemove(pen) {
    Meteor.call('pens.remove', pen);
  }

  renderList() {
    return this.props.pens.map(pen => {
      const url = `/pens/${pen._id}`;
      return (
        <li className='list-group-item' key={pen._id}>
          <Link to={url}> {pen.title}</Link>
          <span className='pull-right'>
            <button
              className='btn btn-danger'
              onClick={() => this.onPenRemove(pen)}>
              Remove
            </button>

          </span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('pens');
  Meteor.subscribe('sharedPens');
  return { pens: Pens.find({}).fetch() };
}, PensList);

