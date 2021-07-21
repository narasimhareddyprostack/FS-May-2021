import React, { Component } from "react";

class DigtalClock extends Component {
  constructor(props) {
    console.log("First Constructor-1");
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    console.log("3rd - Comp Did Mount - Birth");
    let timer = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("comp will update....");
  }

  componentWillUnmount() {
    console.log("Finally - unmounting comp - Death");
  }
  render() {
    console.log("Second Render Method");
    return (
      <div>
        <pre>{JSON.stringify(this.state.currentTime)}</pre>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary">
                  Digital: {this.state.currentTime}
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DigtalClock;
