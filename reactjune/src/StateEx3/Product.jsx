import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Name: "Iphone 5s",
      price: 5000,
      product_Details: {
        priceDrop: { july: "10%" },

        usage: "lorem lorem 2222",
        desc:
          "Apple iPhone 5s smartphone was launched in September 2013. The phone comes with a 4.00-inch touchscreen display with a resolution",
      },
    };
  }
  changeProduct = () => {
    //this.state.product_Name = "Iphone 12";
    this.setState({ product_Name: "Iphone 12", price: 60000 });
  };
  render() {
    return (
      <div>
        <h1>Product Name :{this.state.product_Name}</h1>
        <h2>Price: {this.state.price}</h2>
        <h2>Usage:{this.state.product_Details.desc}</h2>
        <button type="submit" onClick={this.changeProduct}>
          Change Product Name
        </button>
      </div>
    );
  }
}

export default Product;
