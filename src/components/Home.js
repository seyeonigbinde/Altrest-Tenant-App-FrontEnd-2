import React from 'react';
import top_img_1 from '../images/top_img_1.jpeg'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


const Home = ()=> {

    return(
        <>
        <section className="homepage">
          <div className="top_content">
              <h1><strong>ALTREST Tenant Management App</strong></h1><br/><br/>
              <p>ALTREST helps tenants and landlords manage payments and communications </p>
              <button className="btn btn-lg btn-secondary">Get Started</button>
          </div>
          <div className="top_image">
              <img src={top_img_1} alt="top_image"/>
          </div>
          </section>
          <section className="middlepage">
          <div className="top_image">
              <img src={top_img_1} alt="top_image"/>
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
                </ul>
             <Link><button className=" btn btn-primary">Get Started</button></Link> 
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
                </ul>
                <Link>  <button className=" btn btn-primary">Get Started</button></Link> 
          </div>
          <div className="top_image">
              <img src={top_img_1} alt="top_image"/>
          </div>
        </section>
        <section className="middlepage">
        <div className="top_image">
              <img src={top_img_1} alt="top_image"/>
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
                </ul>
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
                </ul>
                <Link> <button className=" btn btn-primary">Get Started</button></Link> 
          </div>
          <div className="top_image">
              <img src={top_img_1} alt="top_image"/>
          </div>
        </section>
        </>
    )
}

export default Home;