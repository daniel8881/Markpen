import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Pens } from '../../../imports/collections/pens';
import PensEditor from './pens_editor';
import PensViewer from './pens_viewer';
import PensShare from './pens_share';

class PensMain extends Component {
  render() {
    if(!this.props.pen) { return <div>Loading...</div>; }
    return (
      <div>
        <PensEditor pen={this.props.pen} />
        <PensViewer pen={this.props.pen} />
        <PensShare pen={this.props.pen} />
      </div>
    )
  }
}

// props both show here, and PensMain
export default createContainer((props) => {
  const { penId } = props.params;
  Meteor.subscribe('pens');
  Meteor.subscribe('sharedPens');
  return { pen: Pens.findOne(penId) };
}, PensMain);