import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Index";
import ProductState from "./context/productState";
function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ProductState>
    </>
  );
}

export default App;
