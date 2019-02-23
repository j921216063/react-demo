import React, { Component } from 'react';

/**
 *  1. 無綁定
 *  2. Model 綁定 View 
 *  3. 雙向綁定
 */
export default class Demo11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'inital name'
    }
  }

  handleClick = () => {
    this.setState({
      name: 'changed name'
    })
  }

  handleTextChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h3>無綁定:</h3>
        <input type="text" />
        <hr />
        <h3>Model 綁定 View :</h3>
        <input className="mr-2" type="text" value={this.state.name} readOnly />
        <button className="btn btn-primary" onClick={this.handleClick}>Change Modle</button>
        <hr />
        <h3>雙向綁定 :</h3>
        <input className="mr-2" type="text" value={this.state.name} onChange={this.handleTextChange} />
      </div >
    )
  }
}