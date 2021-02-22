import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from "../src/components/Cards";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Cards />
        <Footer />
        {/* <Switch>
          <Route
            // path="https://evanepperson.github.io/NewPortfolio/"
            path="/"
            exact
            component={Home}
          />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;