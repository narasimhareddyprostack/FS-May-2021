import CompB from "./CompB";
let CompA = () => {
  let name = "Kavitha";
  let loc = ["Bangalore", "USA"];
  let compAssets = { productName: "ThinkPad e450", monitor: "23inc Dell" };
  let getData = () => {
    console.log("Employee Preferred Loca:", loc[0]);
  };
  return (
    <>
      <h1> Component A</h1>
      <h5>Employee Name: {name}</h5>
      <hr />
      <CompB props1={name} props2={loc} a={compAssets} getData={getData} />
    </>
  );
};
export default CompA;
