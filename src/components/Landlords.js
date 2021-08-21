import React from 'react'
import features_1 from '../images/features_1.jpeg'
import banner_image from '../images/banner_image.png'
import landlord_1 from '../images/landlord_1.jpeg'
import Footer from './Footer'
import { Link } from "react-router-dom"
import Header from './Header'

const Landlords = () => {

    return (
        <section>
            <Header/>
            <section className="features_banner">
                <div className="features_content">
                    <h1><strong>Landlords</strong></h1><br /><br />
                    <p>ALTREST's Landlords Portal allows you to rent payments notices to tenants, view their historical records and upload the rent agreements. It also allows you to receive maintenance requests and gives a summary financial and rental reports.</p>
                    <Link to='/signup'><button className="btn btn-lg btn-primary">Get Started</button></Link>
                </div>
                <div className="features_top">
                    <img src={banner_image} alt="top_image" />
                </div>
            </section>
            <section className="landlord_container">
                <div className="features_notes">
                    <div className="features_container">
                        <h3> <b>Online Payments </b></h3>
                        <p> Landlord can organize tenants' payments, view history of payments and notify tenants on rent payments due. Landlord can easily track when tenants don't pay, paying late, or paying the wrong amount.</p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b> Maintenance Requests</b></h3>
                        <p>Landlord can manage and store one-time and recurring visual maintenance requests and assign them to their service providers on the App. It has auto-notifications feature for pending requests and their status. </p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b>Rental Agreements & Notices</b> </h3>
                        <p>Landlord can add their own rent agreements and notices easily with a document builder and ready-to-use presets. It makes you go paperless and collect signatures on every form and any device with ALTREST’s built-in e-sign feature.</p><br />
                    </div>
                    <div className="features_container">
                        <h3> <b>Accounting Summary</b> </h3>
                        <p>Our various financial and rental reports provide landlords with the most relevant data quickly and easily for them. It allows them to review the report summary or apply filtering, sorting, totalling, and grouping criteria to generate the report they need. Print or export reports to PDF/Excel files. </p>
                    </div>
                </div>
                <div className="features_portrait">
                    <img src={features_1} alt="features_pix" />
                    <img src={landlord_1} alt="features_pix" />
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Landlords;
