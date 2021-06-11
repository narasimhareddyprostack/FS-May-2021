class Name {
  constructor(a) {
    this.name = a;
  }
}

class Message extends Name {
  constructor(message, name) {
    super(name);// execute parent class constructor
    this.message = message;
  }
  getName() {
    console.log();
  }
}
let m1 = new Message("Good Morning", "Mr.Prakash");
console.log(m1);
