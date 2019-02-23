import React, { Component } from 'react';

/**
 *  子組件傳送資料給父組件
 */
class Child extends Component {
  handleClick = () => {
    this.props.dataChange('Child data changed');
  }
  render() {
    return (
      <button onClick={this.handleClick} className="btn btn-primary">Change Data</button>
    )
  }
}

export default class Demo09 extends Component {
  handleDataChange = (data) => {
    alert(data);
  }
  render() {
    return (
      <div className="container">
        <Child dataChange={this.handleDataChange} />
      </div>
    )
  }
}