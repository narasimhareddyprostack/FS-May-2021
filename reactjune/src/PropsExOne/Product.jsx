import React from "react";
import Cart from "./Cart";
class Product extends React.Component {
  product_Name = "Iphone SE";
  product_Price = 32000;
  product_Details = {
    product_Desc: " Produt Size - 5 ince",
    product_Usage: "It's easy to dismiss the iPhone SE as old wine in a new bottle."
  };
  getProductDetails(){
      console.log("Hello, This is class Method")
  }
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h4> Product Data</h4>
                </div>
                <div className="card-body">
                  <h5>Product Name: {this.product_Name}</h5>
                  <h5>Price: {this.product_Price}</h5>
                  <h6>Desc:{this.product_Details.product_Desc}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Cart
                props1={this.product_Name}
                props2={"Old Mobile"}
                props3={this.product_Details}
                props4={this.getProductDetails}
              />
              <h1 > Hello</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
//we are sending property/vairable as props 
// array as props
// object as props
// method as props
