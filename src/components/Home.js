import React from 'react'
import top_img_1 from '../images/top_img_1.jpeg'
import banner_image from '../images/banner_image.png'
import tenant_home from '../images/tenant_home.png'
import features_2 from '../images/features_2.jpeg'
import features_3 from '../images/features_3.jpeg'
import * as Icon from 'react-bootstrap-icons'
import {  Link } from "react-router-dom"


const Home = ()=> {

    return(
        <>
        <section className="homepage">
          <div className="top_content">
              <h1><strong>ALTREST Tenant Management App</strong></h1><br/>
              <p>ALTREST is a digital facility management App that helps tenants and landlords manage communications, requests and payments </p><br/>
              <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
          </div>
          <div className="top_image">
              <img src={banner_image} alt="top_image"/>
          </div>
          </section>
          <section className="middlepage">
          <div className="body_image">
              <img src={tenant_home} alt="top_image"/>
          </div>
          <div className="services_items"> 
            <h2>Landlords</h2>
              <br/><br/>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Manage Maintenance Request</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Account Summary</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Rental Agreements</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Notices</li>
                </ul><br/>
             <Link to='/signup'><button className=" btn btn-primary">Get Started</button></Link> 
          </div>
        </section>
        <section className="middlepage">
          <div className="services_items">
            <h2>Tenants</h2>
            <br/><br/>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Online Maintenance Request</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Rental Agreements & E-sign</li>
                </ul><br/>
                <Link>  <button className=" btn btn-primary">Get Started</button></Link> 
          </div>
          <div className="body_image">
              <img src={top_img_1} alt="top_image"/>
          </div>
        </section>
        <section className="middlepage">
        <div className="body_image">
              <img src={features_2} alt="top_image"/>
          </div>
          <div className="services_items">
            <h2>Community Associations</h2>
            <br/><br/>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Communication with Home Ownwers and Non-owner Residents</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Organize and Share Documents like Bye-Laws, Financials, Minutes</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Online Payment of Dues</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Violation Reports</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Community Announcements </li>
                </ul><br/>
                <Link> <button className=" btn btn-primary">Get Started</button></Link> 
          </div>
        </section>
        <section className="middlepage">
          <div className="services_items">
            <h2>Service Providers</h2>
            <br/><br/>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Manage Invoices</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Online Payments</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Communicate with Clients</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Stay Organized with Calendar</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Build Business Profile</li>
                </ul><br/>
                <Link> <button className=" btn btn-primary">Get Started</button></Link> 
          </div>
          <div className="body_image">
              <img src={features_3} alt="top_image"/>
          </div>
        </section>
        <div className="howitworks-container"> 
        <div className="howitworks-header">
        <h2>
            How It Works
        </h2>
        </div>
        <section className="howitworks">
        <div>
            <i className="fas fa-plus-circle fa-2x"></i><br/>
            <h3>Create An Account</h3>
            <p>Register your details by filling our signup form</p>
        </div>
        <div>
            <i class="fas fa-envelope-open fa-2x"></i><br/>
            <h3>Verify Your Email</h3>
            <p>Check your email for the verification link.</p>
        </div>
        <div>
            <i className="fas fa-hand-pointer fa-2x"></i><br/>
            <h3>Select Your Role</h3>
            <p>Select your role on the platform (Landlord, Tenant or Community Association).</p>
        </div>
        <div>
            <i className="fas fa-users fa-2x"></i><br/>
            <h3>Select Features</h3>
            <p>Select the services you want to have access to on the platform</p>
        </div>
    </section>
    </div>
        </>
    )
}

export default Home;