import React, { Component } from 'react';

class PensShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      text: ''
    }
  }

  onShareClick() {
    const email = this.refs.email.value;
    if(!email) { return }
    Meteor.call('pens.share', this.props.pen, email);
    debugger;
    this.setState({ text: 'false' });
  }

  componentDidMount() {
    document.querySelector('footer').addEventListener('click', e => {
      this.setState({
        show: true
      })
    });

    document.querySelector('.colorwhite').addEventListener('click', e => {
      e.preventDefault();
     
    });
  }

  // showModal() {
  //   this.setState({ show: true })
  // }

  hideModal(e) {
    e.preventDefault();
    this.setState({ show: false })
  }

  renderShareList() {
    return this.props.pen.sharedWith.map(email => {
      return <li
        className='list-group-item'
        key={email}>
          {email}
        </li>

    });
  }

  render() {
    const style = this.state.show ? 'pens-share showModal' : 'pens-share';
    return (
      <footer className={style}>
        <div className='input-group'>
          <input ref='email' className='form-control' value={this.state.text} onChange={(e) => this.setState({ text: e.target.value})} />
          <div className='input-group-btn'>
            <button 
              onClick={this.onShareClick.bind(this)}
              className='btn btn-success'>
              Share
            </button>
          </div>
        </div>
        <div>
          Shared With:
        </div>
        <ul className='list-group'>
          {this.renderShareList()}
        </ul>
        <i className="fa fa-times fa-lg clickable colorwhite" aria-hidden="true" onClick={this.hideModal.bind(this)}></i>
      </footer>
    )
  }
}

export default PensShare;

