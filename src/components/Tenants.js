import React from 'react'
import tenants from '../images/tenants.jpeg'
import tenant_1 from '../images/tenant_1.jpeg'
import { BrowserRouter as Router, Link } from "react-router-dom"

const Tenants = ()=> {

    return(
        <section>
       <section className="features_banner">
          <div className="features_content">
              <h1><strong>Tenants</strong></h1><br/><br/>
              <p>ALTREST's Tenants Portal allows you to schedule your rent payment, log maintenance requests and sign rental agreements online with ease. </p>
              <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
          </div>
          <div className="features_top">
              <img src={tenants} alt="top_image"/>
          </div>
          </section>
        <section className="tenant_container">
            <div className="features_notes">
            <div className="features_container">
                <h3><b>Online Payment</b></h3>
                <p>It allows tenants to make rent payments automatically on or before the due date. They can also generate automatic receipts for their payments.</p><br/>
            </div>
            <div className="features_container">
                <h3><b>Maintenance Requests </b> </h3>
                <p>It has auto-notifications feature for pending requests and their status. It also has Google Calendar Sync features, repair pictures and 10 seconds video uploads. </p><br/>
            </div>
            <div className="features_container">
            <h3><b>Rental Agreements</b>  </h3>
            <p> Tenants can get all the documents from their landlords online and sign them with built-in e-signature.</p>
            </div>
            </div>
            <div className="features_portrait">
                <img src={tenant_1} alt="features_pix"/>
            </div>
        </section>
        </section>
    )
}

export default Tenants;