import React, { Component } from 'react';

/*
  1. 不同元素
  2. 相同類型 DOM 元素
  3. 相同類型 Component 元素
  4. list use key
*/
class Child extends Component {
  componentWillMount() {
    console.log('Child componentWillMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Child componentWillReceiveProps');
  }

  componentDidMount() {
    console.log('Child componentDidMount ');
  }
  componentWillUnmount() {
    console.log('Child componentWillUnmount')
  }
  render() {
    console.log('Child rendering');
    return (
      <div>
        Child
      </div>
    );
  }
}

class Child2 extends Component {
  componentWillMount() {
    console.log('Child2 componentWillMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Child2 componentWillReceiveProps');
  }

  componentDidMount() {
    console.log('Child2 componentDidMount ');
  }
  componentWillUnmount() {
    console.log('Child2 componentWillUnmount')
  }
  render() {
    console.log('Child2 rendering');
    return (
      <div>
        Child2 {`${this.props.first}`}
      </div>
    );
  }
}

const data = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' }
];

const newData = [
  { id: 3, name: 'item3' },
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' }
];
class Demo07 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useDiv: true,
      usePrimary: true,
      first: true,
      origin: true
    };
  }

  handleChangeElement = () => {
    this.setState({
      useDiv: !this.state.useDiv
    });
  }

  handleChangeElementProps = () => {
    this.setState({
      usePrimary: !this.state.usePrimary
    });
  }

  handleChangeCompnentProps = () => {
    this.setState({
      first: !this.state.first
    });
  }

  handleChangeList = () => {
    this.setState({
      origin: !this.state.origin
    });
  }
  render() {
    const lists = (this.state.origin) ? data : newData;
    return (
      <div className="container">
        {
          (this.state.useDiv)
            ? <div><Child /></div>
            : <span><Child /></span>
        }
        {
          (this.state.usePrimary)
            ? (
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
            )
            : (
              <div className="alert alert-success" role="alert">
                A simple primary alert—check it out!
              </div>
            )
        }
        <Child2 first={this.state.first} />

        <ul>
          {lists.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
        <button className="btn btn-primary mr-2" onClick={this.handleChangeElement}>change element</button>
        <button className="btn btn-primary mr-2" onClick={this.handleChangeElementProps}>change element props</button>
        <button className="btn btn-primary mr-2" onClick={this.handleChangeCompnentProps}>change component props</button>
        <button className="btn btn-primary" onClick={this.handleChangeList}>change list item</button>
      </div>
    )
  }
}

export default Demo07;