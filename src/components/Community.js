import React from 'react'
import community from '../images/community.jpeg'
import community_1 from '../images/community_1.jpeg'
import community_2 from '../images/community_2.jpeg'
import { BrowserRouter as Router, Link } from "react-router-dom"

const Community = ()=> {

    return(
        <section>
        <section className="features_banner">
          <div className="features_content">
              <h1><strong>Community Association</strong></h1><br/><br/>
              <p>Community Associations and Estates can communicate, share minutes and bye-laws with residents. They can also collect dues via this Portal. </p>
              <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
          </div>
          <div className="features_top">
              <img src={community} alt="top_image"/>
          </div>
          </section>
        <section className="community_container">
            <div className="features_notes">
            <div className="features_container">
                <h3> <b>Communication </b> </h3>
                <p> Help build relationships by offering residents a directory and community discussion portal. Automate and track all homeowner, non-owner resident, and community executives communications, anytime, via email and text. </p><br/>
            </div>
            <div className="features_container">
                <h3> <b> Documents Sharing</b> </h3>
                    <p>Organize and share unlimited documents, such as by-laws, community financials, and meeting minutes from any device. </p><br/>
            </div>
            <div className="features_container">
                <h3><b> Online Payment</b> </h3>
                <p> Give residents easy access to a professional portal to pay online, collect fees and pay bills online. It allows to automate late fees – and identify habitually late payers. </p><br/>
            </div>
            <div className="features_container">
                <h3> <b>Maintenance Request & Violation Reports</b> </h3>
                <p> It allows submission of maintenance tickets, resolve issues and streamline maintenance requests from any device. Convert work orders into vendor bills for easy payment. Track and manage violation reports within the community. </p>
            </div>
            </div>
            <div className="features_portrait">
                <img src={community_1} alt="features_pix"/>
                <img src={community_2} alt="features_pix"/>
            </div>
        </section>
        </section>
    )
}

export default Community;