import "./assets/css/kgf.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./PropsExOne/Product";
import ProductData from "./StateEx/Product";
let App = () => {
  return (
    <>
      <Navbar />

      <Product />
      <ProductData />
    </>
  );
};
export default App;
