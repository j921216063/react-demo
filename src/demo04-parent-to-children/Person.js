import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Person extends Component {
  render() {
    // Step1 查看傳過來的屬性
    console.log(this.props)
    return (
      <div>
        <div>My name is {this.props.name}, age is {this.props.age}</div>
        <h4>Hobbies</h4>
        <ul>
          {this.props.info.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <div>{this.props.children}</div>
      </div>
    );

  }
}

// Step2 定義 prop 型態
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  info: PropTypes.shape({
    job: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
  }),
  children: PropTypes.element,
}