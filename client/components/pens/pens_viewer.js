import React, { Component } from 'react';
import { markdown } from 'markdown';

class PensViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.pen.content)
    return (
      <div className='col-xs-4'>
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      </div>
    )
  }
}

export default PensViewer;