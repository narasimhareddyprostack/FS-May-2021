import { Fragment } from "react";

let CompB = (props) => {
  return (
    <Fragment>
      <h2> Component B</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h3>Name:{props.props1}</h3>
      <h3>Employee Loc: {props.props2[1]}</h3>
      <h4>Product Name:{props.a.productName}</h4>
      {props.getData()}
    </Fragment>
  );
};
export default CompB;
