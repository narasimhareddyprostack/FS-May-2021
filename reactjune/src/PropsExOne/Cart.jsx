import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h4> Cart Component</h4>
            <pre>{JSON.stringify(this.props)}</pre>
          </div>
          <div className="card-body bg-primary">
            <h5> Name: {this.props.props1}</h5>
            <h6> Descriptin: {this.props.props3.product_Desc}</h6>
            <h6> Descriptin: {this.props.props3.product_Usage}</h6>
            <h6>{this.props.props4()}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
