import { Route } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { LoginPage } from "./pages/LoginPage";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/products">
        <ProductsPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default App;
