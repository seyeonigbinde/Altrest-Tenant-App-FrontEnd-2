import React from 'react'
import altrestlogo2 from '../images/altrestlogo2.png'
import top_img_1 from '../images/top_img_1.jpeg'
import banner_image from '../images/banner_image.png'
import features_1 from '../images/features_1.jpeg'
import community_2 from '../images/community_2.jpeg'
import features_3 from '../images/features_3.jpeg'
import * as Icon from 'react-bootstrap-icons'
import { Link } from "react-router-dom"
import Footer from './Footer'


const Home = () => {

    return (
        <>
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
            <section className="homepage">
                <div className="top_content">
                    <h1><strong>ALTREST Tenant Management App</strong></h1><br />
                    <p><b>ALTREST </b>is a digital facility management App that helps tenants and landlords manage communications, maintenance requests and payments. </p><br />
                    <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
                </div>
                <div className="top_image">
                    <img src={banner_image} alt="top_image" />
                </div>
            </section>
            <section className="middlepage">
                <div className="body_image">
                    <img src={features_1} alt="features_pix" />
                </div>
                <div className="services_items">
                    <h2>Landlords</h2>
                    <br />
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item p-3"> <Icon.Check2Square /> Manage Maintenance Request</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Account Summary</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Rental Agreements</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Notices</li>
                    </ul><br />
                    <Link to='/signup'><button className=" btn btn-primary">Get Started</button></Link>
                </div>
            </section>
            <section className="middlepage">
                <div className="services_items">
                    <h2>Tenants</h2>
                    <br />
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item p-3"> <Icon.Check2Square /> Online Maintenance Request</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Rental Agreements & E-sign</li>
                    </ul><br />
                    <Link to='/signup'>  <button className=" btn btn-primary">Get Started</button></Link>
                </div>
                <div className="body_image">
                    <img src={top_img_1} alt="top_image" />
                </div>
            </section>
            <section className="middlepage">
                <div className="body_image">
                    <img src={community_2} alt="top_image" />
                </div>
                <div className="services_items">
                    <h2>Community Associations</h2>
                    <br />
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item p-3"> <Icon.Check2Square /> Communication with Home Ownwers and Non-owner Residents</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Organize and Share Documents like Bye-Laws, Financials, Minutes</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Online Payment of Dues</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Violation Reports</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Community Announcements </li>
                    </ul><br />
                    <Link to='/signup'> <button className=" btn btn-primary">Get Started</button></Link>
                </div>
            </section>
            <section className="middlepage">
                <div className="services_items">
                    <h2>Service Providers</h2>
                    <br />
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item p-3"> <Icon.Check2Square /> Manage Invoices</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Communicate with Clients</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Stay Organized with Calendar</li>
                        <li class="list-group-item p-3"><Icon.Check2Square /> Build Business Profile</li>
                    </ul><br />
                    <Link to='/signup'> <button className=" btn btn-primary">Get Started</button></Link>
                </div>
                <div className="body_image">
                    <img src={features_3} alt="top_image" />
                </div>
            </section>
            <section className="newsletter">
                <div className="newsletter_content" >
                    <h3>Stay Connected</h3>
                    <p>Join our newsletter and get the latest real estate insights delivered straight to your inbox</p>
                </div>
                <div className="newsletter_button">
                    <Link> <button className=" btn btn-lg bg-white">Sign up</button></Link>
                </div>
            </section>
            <div className="howitworks-container">
                <div className="howitworks-header">
                    <h2>
                        How It Works
                    </h2>
                </div>
                <section className="howitworks">
                    <div className="howitworks_content">
                        <span>
                            <span className="fas fa-plus-circle fa-2x" style={{ color: '#185adb' }}></span><br />
                        </span>
                        <h3>Create An Account</h3>
                        <p>Lanlord registers his details by filling our signup form</p>
                    </div>
                    <div className="howitworks_content">
                        <i class="fas fa-envelope-open fa-2x" style={{ color: '#185adb' }}></i><br />
                        <h3>Verify Your Email</h3>
                        <p>Check your email for the verification link.</p>
                    </div>
                    <div className="howitworks_content">
                        <i className="fas fa-home fa-2x" style={{ color: '#185adb' }}></i><br />
                        <h3>Add Property</h3>
                        <p>Landlord adds the details of his property.</p>
                    </div>
                    <div className="howitworks_content">
                        <i className="fas fa-users fa-2x" style={{ color: '#185adb' }}></i><br />
                        <h3>Add Tenants</h3>
                        <p>Landlord adds tenants details to each property</p>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Home
