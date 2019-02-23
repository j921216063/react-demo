import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      flag: true
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps', nextProps, prevState)
  //   if (nextProps.flag === prevState.flag) {
  //     return null;
  //   }
  //   return {
  //     flag: nextProps.flag
  //   }
  // }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  handleChangeState = () => {
    this.setState({
      flag: !this.state.flag
    });
  }
  render() {
    console.log('render');
    return (
      <div>
        <h3>This is header</h3>
        <p>State is {`${this.state.flag}`}</p>
        <p>Prop is {`${this.props.flag}`}</p>
        <button className="btn btn-primary" onClick={this.handleChangeState}>change state</button>
      </div>
    )
  }
}
export default class Demo12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      flag: true
    };
  }
  handleClick = () => {
    this.setState({
      showHeader: !this.state.showHeader
    })
  }
  changeParentState = () => {
    this.setState({
      flag: !this.state.flag
    });
  }
  render() {
    let header = null;
    if (this.state.showHeader) {
      header = <Header flag={true} />
    }
    return (
      <div className="container">
        {header}
        <hr />
        <button className="btn btn-primary" onClick={this.changeParentState}>change parent state</button>

        <hr />
        <button className="btn btn-primary" onClick={this.handleClick}>(Un)mount Header </button>
      </div >
    )
  }
}