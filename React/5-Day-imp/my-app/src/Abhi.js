import React from "react";

class Abhi extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");

    this.state = {
      name: "harshit",
      count: 1,
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
    setTimeout(() => {
      this.setState({ name: "CV" }); // update phase
    }, 2000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name == "Akhila" || nextState.name == "Moni") {
      return true;
    } else {
      alert("Not update since name is not Akhila");
      return false;
    }
  }

  componentWillUnmount() {}

  render() {
    console.log("render() called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add By 1
        </button>
      </div>
    );
  }
}

export default Abhi;
