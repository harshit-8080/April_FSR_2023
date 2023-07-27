import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      counter: 100,
      name: "Navya",
    };

    console.log("Product Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Product Renders");
    return (
      <div>
        <h1>Counter X - {this.state.counter}</h1>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Add By 1
        </button>

        <br />
        <br />
        <input
          type="text"
          placeholder="Write Your Name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <h1>Name - {this.state.name}</h1>

        {/* <img src={this.props.url} alt="" />
        <h1>{this.props.title}</h1>
        <h1>{this.props.desc}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.country}</h1> */}
      </div>
    );
  }
}

export default Product;
