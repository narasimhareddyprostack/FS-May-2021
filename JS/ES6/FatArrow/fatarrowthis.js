function Test() {
  console.log(this);
}
//Test();
//------------
let value = () => {
  console.log(this);
};
value();
