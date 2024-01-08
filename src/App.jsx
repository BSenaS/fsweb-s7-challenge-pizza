import React from "react";
import Home from "./pages/Home.jsx";
import OrderPizza from "./pages/OrderPizza.jsx";
import Success from "./pages/Success.jsx";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";
//Reset css ' i projeye ekleme
import "./reset.css"; 
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/orderpizza" exact>
          <OrderPizza/>
        </Route>

        <Route path="/success" exact>
          <Success/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
