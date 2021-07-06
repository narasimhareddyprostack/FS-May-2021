import React from "react";
class Salary extends React.Component {
  state = {
    salary: 50000,
    hike: 0,
  };
  hikeHanlder = (value, rating) => {
    console.log(this);

    console.log(value);
    console.log(rating);
    this.setState({ hike: value });
  };

  render() {
    return (
      <React.Fragment>
        <h4> Hike : {this.state.hike}</h4>
        <button onClick={this.hikeHanlder.bind(this, 5, "A")}>5 %</button>
        <button onClick={this.hikeHanlder.bind(this, 10)}>10 %</button>
        <button onClick={this.hikeHanlder.bind(this, 50)}>50 %</button>
      </React.Fragment>
    );
  }
}
export default Salary;
