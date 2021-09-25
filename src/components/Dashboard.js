import React from 'react'
import altrestlogo2 from '../images/altrestlogo2.png'
import { Route, Switch, Link } from 'react-router-dom'

import Maintenance from './Maintenance'
import MaintenanceForm from './MaintenanceForm'
import MaintenanceList from './MaintenanceList'
import DashFooter from './DashFooter'
import Dashboard_Home from './Dashboard_Home'
import PropertyForm from './PropertyForm'
import AddTenant from './AddTenant'
import TenantList from './TenantList'
import PropertyList from './PropertyList'
import UserProfile from './UserProfile'

const Dashboard = () => {
  const logOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <section>
      <header>
        <div className='logo'>
          <Link to='/dashboard'>
            <img src={altrestlogo2} alt='logo' />
          </Link>
        </div>
        {/* <div className="links">
                    <Link><b>Make Payment</b></Link>
                    <Link to='/maintenanceform'><b>Add Request</b></Link>
                </div>
                <div className="login">
                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                </div> */}
      </header>
      <section className='the_dashboard'>
        <section className='the_dashboard_links'>
          <div
            className='d-flex flex-column flex-shrink-0 p-3 text-dark bg-white'
            style={{ width: 280 }}
          >
            <Link className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
              <svg className='bi me-2' width='40' height='32'>
                <use xlinkHref='#speedometer2' />
              </svg>
              <span className='fs-4'>My Dashboard</span>
            </Link>
            <hr />
            <ul className='nav nav-pills flex-column mb-auto align-items-start'>
              <li className='nav-item'>
                <Link
                  to='/dashboard'
                  className='nav-link active'
                  aria-current='page'
                >
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#home' />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/addproperty'
                  className='nav-link text-dark'
                >
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#home' />
                  </svg>
                  Add Property
                </Link>
              </li>
              <li>
                <Link to='/dashboard/addtenant' className='nav-link text-dark'>
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#collection' />
                  </svg>
                  Add Tenant
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/maintenancerequest'
                  className='nav-link text-dark'
                >
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#grid' />
                  </svg>
                  Add Request
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/propertylist'
                  className='nav-link text-dark'
                >
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#home' />
                  </svg>
                  My Property
                </Link>
              </li>
              <li>
                <Link to='/dashboard/tenantlist' className='nav-link text-dark'>
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#collection' />
                  </svg>
                  My Tenants
                </Link>
              </li>
              <li>
                <Link to='/dashboard/request' className='nav-link text-dark'>
                  <svg className='bi me-2' width='16' height='16'>
                    <use xlinkHref='#grid' />
                  </svg>
                  My Requests
                </Link>
              </li>
            </ul>
            <hr />
            <div className='dropdown'>
              <a
                href='#'
                className='d-flex align-items-center text-dark text-decoration-none dropdown-toggle'
                id='dropdownUser1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src='https://avatars.githubusercontent.com/u/79403650?v=4'
                  alt=''
                  width='32'
                  height='32'
                  class='rounded-circle me-2'
                />
                <strong>Profile</strong>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-dark text-small shadow'
                aria-labelledby='dropdownUser1'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <Link to='/dashboard/profile' className='dropdown-item'>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' onClick={logOut}>
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='the_dashboard_links2'>
          <div
            class='d-flex flex-column flex-shrink-0 bg-light'
            style={{ width: 4.5 + 'rem' }}
          >
            <Link
              class='d-block p-3 link-dark text-decoration-none'
              title='Icon-only'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              <svg class='bi' width='40' height='32'>
                <use xlinkHref='#speedometer2' />
              </svg>
              <span class='visually-hidden'>Icon-only</span>
            </Link>
            <ul class='nav nav-pills nav-flush flex-column mb-auto text-center'>
              <li class='nav-item'>
                <Link
                  to='/dashboard'
                  class='nav-link active py-3 border-bottom'
                  aria-current='page'
                  title='Home'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg
                    class='bi'
                    width='24'
                    height='24'
                    role='img'
                    aria-label='Dashboard'
                  >
                    <use xlinkHref='#home' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/addproperty'
                  class='nav-link py-3 border-bottom'
                  title=' My Property'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#home' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/addtenant'
                  class='nav-link py-3 border-bottom'
                  title='Add Tenant'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#table' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/maintenancerequest'
                  class='nav-link py-3 border-bottom'
                  title='Add Request'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#grid' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/propertylist'
                  class='nav-link py-3 border-bottom'
                  title='My Property'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#home' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/tenantlist'
                  class='nav-link py-3 border-bottom'
                  title='My Tenants'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#collection' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/request'
                  class='nav-link py-3 border-bottom'
                  title='My Requests'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                >
                  <svg class='bi' width='24' height='24'>
                    <use xlinkHref='#grid' />
                  </svg>
                </Link>
              </li>
            </ul>
            <div class='dropdown border-top'>
              <Link
                href='#'
                class='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle'
                id='dropdownUser3'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src='https://avatars.githubusercontent.com/u/79403650?v=4'
                  alt='mdo'
                  width='24'
                  height='24'
                  class='rounded-circle'
                />
              </Link>
              <ul
                class='dropdown-menu text-small shadow'
                aria-labelledby='dropdownUser3'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <Link to='/dashboard/profile' className='dropdown-item'>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link className='dropdown-item' onClick={logOut}>
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='the_dashboard_content'>
          <Switch>
            <Route exact path='/dashboard'>
              <Dashboard_Home />
            </Route>
            <Route exact path='/dashboard/request'>
              <MaintenanceList />
            </Route>
            <Route path='/dashboard/maintenance'>
              <Maintenance />
            </Route>
            <Route path='/dashboard/maintenancerequest'>
              <MaintenanceForm />
            </Route>
            <Route path='/dashboard/addproperty'>
              <PropertyForm />
            </Route>
            <Route path='/dashboard/addtenant'>
              <AddTenant />
            </Route>
            <Route path='/dashboard/tenantlist'>
              <TenantList />
            </Route>
            <Route path='/dashboard/propertylist'>
              <PropertyList />
            </Route>
            <Route path='/dashboard/profile'>
              <UserProfile />
            </Route>
          </Switch>
        </section>
      </section>
      <DashFooter />
    </section>
  )
}

export default Dashboard
