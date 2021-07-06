import React from "react";
class Mobile extends React.Component {
  state = {
    product_Name: "Iphone SE",
    price: 32000,
    color: ["red", "white", "black"],
  };

  changeColorHandler = () => {
    this.setState({ color: ["Brown", "white", "black"] });
  };
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Apple SE Mobile color:{this.state.color[0]}</h1>
        <button onClick={this.changeColorHandler}>Change Color</button>
      </>
    );
  }
}
export default Mobile;
