let add = () => {
  console.log(this);
};

add();

function getData() {
  console.log(this);
}
getData();
