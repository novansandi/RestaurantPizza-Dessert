import React from "react";
import {
  BrowserRouter as Router,
  Route,

  Switch,


} from 'react-router-dom'
import Hero from "./component/Hero";
import { GlobalStyle } from "./globalStyles";
import Pizza from "./component/PIzzas";
import Desserts from "./component/desserts/Desserts";
import FullMenu from "./component/FullMenu/FullMenu";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path='/pizza'>
          <Pizza />
        </Route>
        <Route path='/dessert'>
          <Desserts />
        </Route>
        <Route path='/fullmenu'>
          <FullMenu />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
