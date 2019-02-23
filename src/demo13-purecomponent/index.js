import React, { Component, PureComponent } from 'react';

// const Demo1 = (props) => {
//   console.log('redner Demo1');
//   return (
//     <div>{props.val}</div>
//   )
// }

class Demo1 extends PureComponent {
  render() {
    console.log('redner Demo1');
    return (
      <div>{this.props.val}</div>
    )
  }
}

class Demo2 extends PureComponent {
  render() {
    console.log('render Demo2');
    return (
      <div>{this.props.items.toString()}</div>
    )
  }
}

class UseDefaultDemo extends PureComponent {
  render() {
    console.log('render UseDefaultDemo');
    return (
      <div>{this.props.values.toString()}</div>
    )
  }
}

class WrapChildDemo extends PureComponent {
  render() {
    console.log('render WrapChild')
    return <div>{this.props.children}</div>;
  }
}

class BindEventDemo extends PureComponent {
  render() {
    console.log('render BindEventDemo');
    return <button>BindEventDemo</button>;
  }
}
class App extends Component {
  static defaultProps = {
    values: [2, 2, 2]
  }
  state = {
    val: 1,
    items: []
  };

  handleClick = () => {
    this.setState({
      val: 1
    })
  }

  handleClick2 = () => {
    const { items } = this.state;
    items.push(1);
    this.setState({
      items
    });
  }

  handleClick3 = () => {
    const { items } = this.state;
    this.setState({
      items: items.concat([1])
    });
  }

  handleButton = () => {
    console.log('click')
  }

  render() {
    console.log('render App');
    return (
      <div className="container">
        <button className="btn btn-primary mr-2" onClick={this.handleClick}>Change Demo1</button>
        <button className="btn btn-danger mr-2" onClick={this.handleClick2}>Change Demo2- wrong way </button>
        <button className="btn btn-primary mr-2" onClick={this.handleClick3}>Change Demo2</button>
        <Demo1 val={this.state.val} />
        <Demo2 items={this.state.items} />
        {/* <UseDefaultDemo values={this.props.values || []} /> */}
        <UseDefaultDemo values={this.props.values} />
        <WrapChildDemo>
          <div>I have child</div>
        </WrapChildDemo>

        {/* <BindEventDemo onClick={() => console.log('click')} /> */}
        <BindEventDemo onClick={this.handleButton} />
      </div>
    );
  }
}

export default App;

