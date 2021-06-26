import React from 'react';
import altrestlogo2 from '../images/altrestlogo2.png';
import banner_image from '../images/banner_image.png'
import servicepro_1 from '../images/servicepro_1.jpeg'
import servicepro_2 from '../images/servicepro_2.jpeg'
import { Link } from "react-router-dom";
import Footer from './Footer';


const ServicePro = () => {

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
                    <h1><strong>Service Providers</strong></h1><br /><br />
                    <p>Service providers in the real estate value chain can create a business profile, receive work order from  and manage orders and </p>
                    <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
                </div>
                <div className="features_top">
                    <img src={banner_image} alt="top_image" />
                </div>
            </section>
            <section className="servicepro_container">
                <div className="features_notes">
                    <div className="features_container">
                        <h3> <b>Business Profile </b></h3>
                        <p> Service Providers can create their business profile and complete it with their skills, experience, work descriptions, and photos.</p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b>Online Payment </b></h3>
                        <p>  They can accept payments for completed work orders online through our ALTPay Platform.</p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b> Communication </b> </h3>
                        <p>  With ALTREST Messenger, they can keep conversations with their clients in their account and access them any time they need to.</p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b>Management of Invoices </b> </h3>
                        <p>  Access and track each order’s status and progress in our complete maintenance request management system where photo and video materials are available.</p>
                    </div>
                </div>
                <div className="features_portrait">
                    <img src={servicepro_1} alt="features_pix" />
                    <img src={servicepro_2} alt="features_pix" />
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default ServicePro;