import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pens } from '../../../imports/collections/pens';
import { Link } from 'react-router';
// why use fat arrow function onClick
// each button will create a function and pass unique pen into it
const DefaultContent = props => {
  return (
    <h1>Let's create a Pen</h1>
  )
}

class PensList extends Component {
  onPenRemove(pen) {
    Meteor.call('pens.remove', pen);
  }

  renderList() {
    return this.props.pens.map(pen => {
      const url = `/u/pens/${pen._id}`;
      return (
        <li className='list-group-item' key={pen._id}>
          <Link to={url}> {pen.title}</Link>
          <span className='pull-right'>
            <Link to={url}>
              <i className="fa fa-pencil fa-lg clickable" aria-hidden="true"></i>
            </Link>
            <i onClick={() => this.onPenRemove(pen)} className="fa fa-trash fa-lg clickable" aria-hidden="true"></i>
          </span>
        </li>
      )
    })
  }

  render() {
    return (
        <div className='container'>
          {
            this.props.pens.length > 0 ?  null : <DefaultContent />
          }
          <ul className='list-group'>
            {this.renderList()}          </ul>
        </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('pens');
  Meteor.subscribe('sharedPens');
  return { pens: Pens.find({}).fetch() };
}, PensList);

