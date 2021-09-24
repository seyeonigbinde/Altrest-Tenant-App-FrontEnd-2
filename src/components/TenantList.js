import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const TenantList = () => {
  const [tenant, setTenant] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/tenants')
      .then((res) => {
        setTenant(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <section className='dashboard_top'>
        <h4>My Tenants</h4>
        <div className='dashboard_container'>
          {tenant.map((tenant, i) => {
            return (
              <div className='dashboard_card' key={i}>
                <p>
                  <b>Apartment No:</b> {tenant.apartment}
                </p>
                <p>
                  <b>Tenant Name:</b> {tenant.tenant_name}
                </p>
                <p>
                  <b>Email Address:</b> {tenant.tenant_email}
                </p>
                <p>
                  <b>Phone Number:</b> {tenant.tenant_phone}
                </p>
                <p>
                  <b>Occupation:</b> {tenant.tenant_occupation}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default TenantList
