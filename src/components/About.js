import React from 'react';
import altrestlogo2 from '../images/altrestlogo2.png';
import { Link } from "react-router-dom"
import Footer from './Footer';

const About = () => {

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
            <div className="aboutimg"></div>
            <div className="about">
                <p><b>ALTREST</b> is a digital marketplace for real estate and it is located in Nigeria. Our core real estate solution is the Tenant Management System which focuses on creating interactive personal portals for Landlords/Property Managers, Tenants, Community Associations and Service Providers where they can pay and collect rent online, communicate, store rental information, upload move-in/out pictures, manage maintenance requests, and much more. The company is founded by four young innovative Nigerians with extensive experiences in Tech., Banking and Real Estate</p><br />

                <h2>Our Goal </h2><br />
                <p>Our goal is to make ALTREST the most efficient real estate marketplace and solution portal that is meeting the needs of individuals on real estate and providing convenience.
                </p>
                <br />
                <div className="about_vision">
                    <h2>Our Vision </h2><br />
                    <p> "Our vision is to be the only real estate company that provides an excellent & consistent customer experience 100 per cent of the time." </p>
                </div>
                <br /><br />
                <p>In everything we do, we think of our clients, the company and the individual team members respectively. Our strengths lie in our deep understanding of the market, our expertise and the understanding of the needs of the people.</p>
                <br />
                <h2> Our Core Values</h2><br />
                <p>
                    <b>Authenticity</b> – This is important to us as we honour our commitments, treat our clients fairly, speak the truth always, communicate clearly and listen attentively.</p><br />
                <p>
                    <b>Excellence</b> – We ensure excellent service delivery to our clients and our solution portals and staff function in the best manner with the least waste of time and effort.
                </p><br />
                <p>
                    <b>Safety</b> - We have created a secured and safe environment for our clients to transact while we hold our loyal customers with high esteem and reward them accordingly.
            </p>
            </div>
            <Footer/>
        </section>
    )
}

export default About;