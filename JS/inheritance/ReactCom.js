class Component {
  name = "React";
  render() {
    return "Compoent Render Method";
  }
}

class Message extends Component {}
let m1 = new Message();
console.log(m1);
console.log(m1.render());
