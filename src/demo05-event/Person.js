import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  1. 綁定事件方式
  2. constructor 建立方式
  3. 發生錯誤 - 無法更新，該如何解決
*/
export default class Person extends Component {
  constructor(props) {
    super(props);
    // console.log('props is', this.props);
    this.age = props.age;
  }
  /* enable stage-2 in Babel */
  handleAddAge = (e) => {
    this.age += 1;
    // console.log(this.age);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>My name is {this.props.name}, age is {this.age}</div>
        <button className="btn btn-primary" onClick={this.handleAddAge}>Add age</button>
      </div >
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  info: PropTypes.shape({
    job: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
  }),
  children: PropTypes.element,
}
