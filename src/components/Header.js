import React from 'react'
import altrestlogo2 from '../images/altrestlogo2.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img src={altrestlogo2} alt='logo' />
        </Link>
      </div>
      <nav>
        <div className='links'>
          <Link>
            <ul className='nav nav-tabs w-100 '>
              <li className='nav-item dropdown w-100'>
                <Link
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-expanded='false'
                >
                  <b>Products</b>
                </Link>
                <ul className='dropdown-menu p-2'>
                  <li>
                    <Link className='dropdown-item p-3' to='/landlords'>
                      Landlords
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item p-3' to='/tenants'>
                      Tenants
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item p-3' to='/community'>
                      Community Associations
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item p-3' to='/serviceprovider'>
                      Service Providers
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Link>
          <Link to='/pricing/pricing_monthly'>
            <b>Pricing</b>
          </Link>
          <Link to='/about'>
            <b>Company</b>
          </Link>
        </div>
        <div className='login'>
          <Link to='/login'>
            <button className='btn btn-primary'>Login</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
