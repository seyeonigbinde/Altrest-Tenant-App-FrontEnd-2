import React from 'react'
import altrestlogo2 from '../images/altrestlogo2.png';
import tenants from '../images/tenants.jpeg'
import tenant_1 from '../images/tenant_1.jpeg'
import { Link } from "react-router-dom"

const Tenants = () => {

    return (
        <section>
            <header>
                <div className="logo">
                    <Link to='/'><img src={altrestlogo2} alt="logo" /></Link>
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
            <section className="features_banner">
                <div className="features_content">
                    <h1><strong>Tenants</strong></h1><br /><br />
                    <p>ALTREST's Tenants Portal allows you to schedule your rent payment, log maintenance requests and sign rental agreements online with ease. </p>
                    <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
                </div>
                <div className="features_top">
                    <img src={tenants} alt="top_image" />
                </div>
            </section>
            <section className="tenant_container">
                <div className="features_notes">
                    <div className="features_container">
                        <h3><b>Online Payment</b></h3>
                        <p>It allows tenants to make rent payments automatically on or before the due date. They can also generate automatic receipts for their payments.</p><br />
                    </div>
                    <div className="features_container">
                        <h3><b>Maintenance Requests </b> </h3>
                        <p>It has auto-notifications feature for pending requests and their status. It also has Google Calendar Sync features, repair pictures and 10 seconds video uploads. </p><br />
                    </div>
                    <div className="features_container">
                        <h3><b>Rental Agreements</b>  </h3>
                        <p> Tenants can get all the documents from their landlords online and sign them with built-in e-signature.</p>
                    </div>
                </div>
                <div className="features_portrait">
                    <img src={tenant_1} alt="features_pix" />
                </div>
            </section>
        </section>
    )
}

export default Tenants;