function CompB(props) {
  return (
    <>
      <h5> Component B:{props.one}</h5>
      <pre>{JSON.stringify(props)}</pre>
      <h3> Employee Name :{props.emp.name}</h3>
      <hr />
    </>
  );
}
export default CompB;
