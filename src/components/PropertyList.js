import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const PropertyList = () => {
  const [property, setProperty] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("/property")
      .then((res) => {
        setProperty(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <section className='dashboard_top'>
        <h4>My Property</h4>
        <div className='dashboard_container'>
          {property.map((property, id) => {
            return (
              <div className='dashboard_card' key={id}>
                <h5>Name: {property.owner}</h5>
                <p>
                  <b>Property Address:</b> {property.property_address},
                  {property.property_city},{property.property_state} State
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default PropertyList
