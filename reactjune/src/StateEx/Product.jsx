import React, { Component } from "react";
class Product extends Component {
  state = {
    product_Name: "boat Headset",
  };

  change_Product_Name = () => {
    this.setState({ product_Name: "boad New Headset" });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h5>Product Name:{this.state.product_Name}</h5>
                </div>
                <div class="card-body">
                  <button
                    className="btn btn-success"
                    onClick={this.change_Product_Name}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
