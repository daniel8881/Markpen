import React, { Component } from 'react';
import { markdown } from 'markdown';

class PensViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.pen.content)
    return (
      <div className='col-xs-6'>
        <h3>Output</h3>
        <div>
        <h4>
          {this.props.pen.title}
        </h4>
      </div>
        <div className='penviewer' dangerouslySetInnerHTML={{ __html: rawHTML }} />
      </div>
    )
  }
}

export default PensViewer;