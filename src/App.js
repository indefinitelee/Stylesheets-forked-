import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStylesheet from "./styles/globalStylesheet";
import NavBar from "./components/NavBar";
import Global from "./components/Global";
import Head from "./components/Head";
import LoadModule from "./components/LoadModule";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <GlobalStylesheet />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Global} />
        <Route exact path="/module" component={LoadModule} />
        <Route exact path="/head" component={Head} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
