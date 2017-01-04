import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import { Link } from 'react-router';
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
        <label htmlFor='title'><h5>Title: </h5></label>
        <input type='text' ref='titleInput' name='title' />
      </form>
    )
    const plainTitle = (
      <div>
        <h4>
          {this.props.pen.title}
          <i className="fa fa-pencil-square-o clickable" aria-hidden="true" onClick={() => this.setState({ toggleTitle: false })}></i>
        </h4>
      </div>
    )
    return (
      <div className='col-xs-6'>
        <h3>Input</h3>
        <div>
          {this.state.toggleTitle ? plainTitle : titleInput}
        </div>
        <CodeMirror 
          value={this.props.pen.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
        <Link className="btn btn-warning save" to='/u/pens'>SAVE</Link>
       
      </div>
    )
  }
}

export default PensEditor;