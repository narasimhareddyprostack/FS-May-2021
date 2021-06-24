import Message from "./components/Message/Message";
import "./assets/css/kgf.css";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";
let App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Message />
      <hr />
      <Counter />
    </>
  );
};
export default App;
