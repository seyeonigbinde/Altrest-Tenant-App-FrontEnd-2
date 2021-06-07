import React from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import './App.css';
import altrest from './images/altrest.png';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to='/'><img src={altrest} alt="logo"/></Link>
        </div>
        <div className="links">
        <Link>Products</Link>
        <Link>Pricing</Link>
        <Link>Company</Link>
        </div>
        <div className="login">
        <Link to='/login'><button className="btn btn-primary">Login</button></Link>
        </div>
      </header>
      <Switch>

        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
