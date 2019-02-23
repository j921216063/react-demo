
import React, { Component } from 'react';

class Demo03 extends Component {
  render() {
    const string = 'String';
    const element = <div>Element</div>

    return (
      <div className="container">
        {1 + 1}
        <br />
        {'Hello World'}
        <br />
        {string}
        <br />
        {element}
        <br />
        {true ? 'Hello' : 'World'}
        <br />
        {
          [<div key="1">item1</div>, <p key="2">item2</p >]
        }
      </div>
    )
  }
}
export default Demo03;