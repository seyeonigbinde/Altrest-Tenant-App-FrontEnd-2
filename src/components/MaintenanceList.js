import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useHistory } from "react-router-dom"

const MaintenanceList = () => {
  const [maintenance, setMaintenance] = useState([])

  const { push } = useHistory()

  useEffect(() => {
    axiosWithAuth()
      .get("/maintenance")
      .then((res) => {
        setMaintenance(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const handleDeleteClick = () => {
    axiosWithAuth()
      .delete(`/maintenance`)
      .then((res) => {
        setMaintenance(res.data)
        push("/dashboard")
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <section className='dashboard_top'>
        <h4>Tenants Requests</h4>
        <div className='dashboard_container'>
          {maintenance.map((maintain, i) => {
            return (
              <div className='dashboard_card' key={i}>
                <h5>{maintain.title}</h5>
                <p>{maintain.request}</p>
                <p>
                  <b>{maintain.urgency}</b>
                </p>
                <button className='btn btn-danger' onClick={handleDeleteClick}>
                  Completed
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default MaintenanceList
