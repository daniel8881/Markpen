import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
// no assign just excute the code
import 'codemirror/mode/markdown/markdown';

class PensEditor extends Component {
  onEditorChange(content) {
    Meteor.call('pens.update', this.props.pen, content);
  }

  render() {
    return (
      <div className='col-xs-8'>
        <h5>Input</h5>
        <CodeMirror 
          value={this.props.pen.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    )
  }
}

export default PensEditor;