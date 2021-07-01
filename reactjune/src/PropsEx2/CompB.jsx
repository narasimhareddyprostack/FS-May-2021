import React from "react";
class CompB extends React.Component {
  // properties and methods - class member
  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Employee Target Loc:{this.props.props2[1]}</h4>
        {this.props.getData()}
      </React.Fragment>
    );
  }
}

export default CompB;
