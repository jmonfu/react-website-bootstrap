import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import ServicesPage from "./components/pages/ServicesPage";
import SignUpPage from "./components/pages/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" exact component={ServicesPage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
