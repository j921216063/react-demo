import React, { Component } from 'react';

/**
 * use stateless component
 */
class Header extends Component {
  render() {
    return (
      <div>I am header!</div>
    )
  }
}
// const Header = (props) => {
//   return (
//     <div>I am header!</div>
//   )
// }
export default class Demo08 extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        content
      </div>
    )
  }
}