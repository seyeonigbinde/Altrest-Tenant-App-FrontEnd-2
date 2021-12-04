import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { Switch, Route, NavLink } from "react-router-dom"
import PricingMonthly from "./PricingMonthly"
import PricingYearly from "./PricingYearly"

const Pricing = () => {
  return (
    <section>
      <Header />
      <section className='pricing_container'>
        <div className='pricing_title'>
          <h2> Plans & Pricing</h2>
          <br />
          <h5>
            <NavLink
              activeStyle={{
                borderBottom: "4px solid ##F4D03F",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                backgroundColor: "#185adb",
                borderRadius: "5px",
                padding: "1%",
              }}
              to='/pricing/pricing_monthly'
            >
              Monthly
            </NavLink>
            ||
            <NavLink
              activeStyle={{
                borderBottom: "4px solid ##F4D03F",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                backgroundColor: "#185adb",
                borderRadius: "5px",
                padding: "1%",
              }}
              to='/pricing/pricing_yearly'
            >
              Yearly
            </NavLink>
          </h5>
          <br />
          <p> Save 20% by paying annually</p>
        </div>
        <section className='pricing_categories'>
          <Switch>
            <Route path='/pricing/pricing_monthly'>
              <PricingMonthly />
            </Route>
            <Route path='/pricing/pricing_yearly'>
              <PricingYearly />
            </Route>
          </Switch>
        </section>
      </section>
      <Footer />
    </section>
  )
}
export default Pricing
