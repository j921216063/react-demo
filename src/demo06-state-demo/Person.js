import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  1. state 初始化
  2. 更新 state
*/
export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    };
  }
  /* enable stage-2 in Babel */
  handleAddAge = (e) => {
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    return (
      <div>
        <div>My name is {this.props.name}, age is {this.state.age}</div>
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