import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
// no assign just excute the code
import 'codemirror/mode/markdown/markdown';

class PensEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTitle: true
    }
  }

  onEditorChange(content) {
    Meteor.call('pens.update', this.props.pen, content);
  }

  handleTitle(e) {
    e.preventDefault();
    const title = this.refs.titleInput.value;
    Meteor.call('pens.updateTitle', this.props.pen, title);
    this.setState({
      toggleTitle: true
    })
  }

  render() {
    const titleInput = (
      <form onSubmit={this.handleTitle.bind(this)}>
        <label htmlFor='title'>Title:</label>
        <input type='text' ref='titleInput' name='title' />
      </form>
    )
    const plainTitle = (
      <div>
        {this.props.pen.title}
        <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.setState({ toggleTitle: false })}></i>
      </div>
    )
    return (
      <div className='col-xs-8'>
        <h5>Input</h5>
        <div>
          {this.state.toggleTitle ? plainTitle : titleInput}
        </div>
        <CodeMirror 
          value={this.props.pen.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    )
  }
}

export default PensEditor;