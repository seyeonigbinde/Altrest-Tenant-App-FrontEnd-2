import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import altrestlogo2 from './images/altrestlogo2.png';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Tenants from './components/Tenants';
import Landlords from './components/Landlords'
import Community from './components/Community'
import ServicePro from './components/ServicePro'


function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to='/'><img src={altrestlogo2} alt="logo"/></Link>
        </div>
        <div className="links">
        <Link> 
          <ul className="nav nav-tabs w-100 ">
            <li className="nav-item dropdown w-100">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><b>Products</b></Link>
                <ul className="dropdown-menu p-2">
                  <li><Link className="dropdown-item p-3" to='/landlords'>Landlords</Link></li>
                  <li><Link className="dropdown-item p-3" to='/tenants'>Tenants</Link></li>
                  <li><Link className="dropdown-item p-3" to='/community'>Community Associations</Link></li>
                  <li><Link className="dropdown-item p-3" to='/serviceprovider'>Service Providers</Link></li>
                </ul>
            </li>
          </ul>
        </Link>
        <Link><b>Pricing</b></Link>
        <Link to='/about'><b>Company</b></Link>
       
        </div>
        <div className="login">
        <Link to='/login'><button className="btn btn-primary">Login</button></Link>
        </div>
      </header>
      <Switch>
        <Route path='/serviceprovider'>
          <ServicePro/>
        </Route>
        <Route path='/community'>
          <Community/>
        </Route>
        <Route path='/tenants'>
          <Tenants/>
        </Route>
        <Route path='/landlords'>
          <Landlords/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
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
