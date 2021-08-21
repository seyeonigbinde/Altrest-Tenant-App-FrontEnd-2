import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'


const PricingYearly = () => {



    return (
        <>
            <div className="pricing_items">
                <h4>Free</h4>
                <hr />
                <h5>&#x20A6;0/month</h5>
                <button className="btn btn-lg btn-primary"><Link to="/signup">Get Started</Link></button>
                <p>Everything you get with free</p>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Listings</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Rent payment</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Maintenance</li>
                </ul>
                <br />
            </div>
            <div className="pricing_items">
                <h4>Start</h4>
                <hr />
                <h5>&#x20A6;4,000/month</h5>
                <h6>&#x20A6;48,000 a year</h6>
                <button className="btn btn-lg btn-primary">Get Started</button>
                <p>Everything you get with free, plus:</p>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Vendor Network</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Vendor Management</li>
                </ul>
                <br />
            </div>
            <div className="pricing_items">
                <h4>Growth</h4>
                <hr />
                <h5>&#x20A6;10,000/month</h5>
                <h6>&#x20A6;120,000 a year</h6>
                <button className="btn btn-lg btn-primary" >Get Started</button>
                <p>Everything you get with starter, plus:</p>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item p-3"> <Icon.Check2Square /> Owner Portal</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Tenant Management</li>
                    <li class="list-group-item p-3"><Icon.Check2Square /> Management Fees</li>
                </ul>
                <br />
            </div>
        </>

    )
}
export default PricingYearly
