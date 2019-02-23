import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Demo02 extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Main Content</h1>
        <Footer />
      </div>
    )
  }
}

export default Demo02;