import React from 'react'
import { Route, Switch } from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'
import './App.css'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Tenants from './components/Tenants'
import Landlords from './components/Landlords'
import Community from './components/Community'
import ServicePro from './components/ServicePro'
import Dashboard from './components/Dashboard'
import MaintenanceForm from './components/MaintenanceForm'
import Maintenance from './components/Maintenance'


function App() {
  return (
    <div className="App">
  
      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/maintenance'>
          <Maintenance/>
        </Route>
        <Route path='/maintenanceform'>
          <MaintenanceForm />
        </Route>
        <Route path='/serviceprovider'>
          <ServicePro />
        </Route>
        <Route path='/community'>
          <Community />
        </Route>
        <Route path='/tenants'>
          <Tenants />
        </Route>
        <Route path='/landlords'>
          <Landlords />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
     
    </div>
  )
}

export default App
