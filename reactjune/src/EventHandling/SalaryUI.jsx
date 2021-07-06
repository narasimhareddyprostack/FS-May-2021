import React, { Component } from "react";

class SalaryUI extends Component {
  state = {
    salary: 50000,
    hike: 0,
  };

  hikeHandler = (value) => {
    this.setState({ hike: value });
  };
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
              <div className="card">
                <div className="card-header"> Hike:{this.state.hike}</div>
                <div className="card-body">
                  <button
                    className="btn btn-success"
                    onClick={this.hikeHandler.bind(this, 5)}
                  >
                    Hike 5%
                  </button>
                  <button
                    className="btn btn-secondary mx-4"
                    onClick={this.hikeHandler.bind(this, 10)}
                  >
                    Hike 5%
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={this.hikeHandler.bind(this, 50)}
                  >
                    Hike 5%
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SalaryUI;
