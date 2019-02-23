import React, { Component } from 'react';

/**
 *  組件間傳遞
 */
class Child extends Component {
  handleClick = () => {
    this.props.linkChange('Changed link');
  }
  render() {
    return (
      <button onClick={this.handleClick} className="btn btn-primary">Change link</button>
    )
  }
}

const Header = (props) => (
  <p>{props.link}</p>
)

export default class Demo10 extends Component {
  constructor() {
    super();
    this.state = {
      link: 'Original link'
    }
  }
  handleLinkChange = (link) => {
    this.setState({
      link: link
    })
  }
  render() {
    return (
      <div className="container">
        <Child linkChange={this.handleLinkChange} />
        <hr />
        <Header link={this.state.link} />
      </div>
    )
  }
}