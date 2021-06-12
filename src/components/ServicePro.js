import React from 'react';
import features_3 from '../images/features_3.jpeg'
import servicepro_1 from '../images/servicepro_1.jpeg'
import servicepro_2 from '../images/servicepro_2.jpeg'
import { BrowserRouter as Router, Link } from "react-router-dom";


const ServicePro = ()=> {

    return(
        <section>
        <section className="features_banner">
          <div className="features_content">
              <h1><strong>Service Providers</strong></h1><br/><br/>
              <p>Service providers in the real estate value chain can create a business profile, receive work order from  and manage orders and </p>
              <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
          </div>
          <div className="features_top">
              <img src={features_3} alt="top_image"/>
          </div>
          </section>
        <section className="servicepro_container">
            <div className="features_notes">
            <div className="features_container">
                <h3> <b>Business Profile </b></h3>
                <p> Service Providers can create their business profile and complete it with their skills, experience, work descriptions, and photos.</p><br/>
            </div>
            <div className="features_container">
                <h3> <b>Online Payment </b></h3>
                <p>  They can accept payments for completed work orders online through our ALTPay Platform.</p><br/>
            </div>
            <div className="features_container">
                <h3> <b> Communication </b> </h3>
                <p>  With ALTREST Messenger, they can keep conversations with their clients in their account and access them any time they need to.</p><br/>
            </div>
            <div className="features_container">
                <h3> <b>Management of Invoices </b> </h3>
                <p>  Access and track each order’s status and progress in our complete maintenance request management system where photo and video materials are available.</p>
            </div>
            </div>
            <div className="features_portrait">
                <img src={servicepro_1} alt="features_pix"/>
                <img src={servicepro_2} alt="features_pix"/>
            </div>
        </section>
        </section>
    )
}

export default ServicePro;