import React, { Component } from 'react';
import Person from './Person';

class Demo04 extends Component {
  render() {
    const info = {
      job: 'Engineer',
      hobbies: ['Sports', 'Reading']
    };
    return (
      <div className="container">
        <Person name="Joe" age={12} info={info} />
        <Person name="Li" age={14} info={info}>
          <p>I am child</p>
        </Person>
      </div>
    )
  }
}

export default Demo04;