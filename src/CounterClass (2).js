import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterinc: 0,
      counterinc2: 0,

      dummy: 5,
    };
  }

  componentDidMount() {
    // console.log("did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState.counterinc", prevState.counterinc);
    // console.log("curent state", this.state.counterinc);

    if (prevState.counterinc !== this.state.counterinc) {
      console.log("did update");
    }
  }

  inc = () => {
    this.setState({ counterinc: this.state.counterinc + 1 });
  };

  dec = () => {
    this.state.counterinc > 0 &&
      this.setState({ counterinc: this.state.counterinc - 1 });
  };

  reset = () => {
    this.setState({ counterinc: 0 });
  };

  inc2 = () => {
    this.setState({ counterinc2: this.state.counterinc2 + 1 });
  };

  dec2 = () => {
    this.state.counterinc2 > 0 &&
      this.setState({ counterinc2: this.state.counterinc2 - 1 });
  };

  reset2 = () => {
    this.setState({ counterinc2: 0 });
  };
  render() {
    console.log("0000");
    return (
      <div>
        <button onClick={this.inc}>+</button>
        {this.state.counterinc}
        <button onClick={this.dec}>-</button>
        <button onClick={this.reset}>reset</button>
        <br />
        <button onClick={this.inc2}>+</button>
        {this.state.counterinc2}
        <button onClick={this.dec2}>-</button>
        <button onClick={this.reset2}>reset</button>
      </div>
    );
  }
}

export default CounterClass;
