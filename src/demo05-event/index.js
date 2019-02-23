import React, { Component } from 'react';
import Person from './Person';

class Demo05 extends Component {
  render() {
    const info = {
      job: 'Engineer',
      hobbies: ['Sports', 'Reading']
    };
    return (
      <div className="container">
        <Person name="Joe" age={12} info={info} />
      </div>
    )
  }
}

export default Demo05;