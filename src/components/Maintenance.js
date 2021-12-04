import React, { useEffect, useState } from "react"

import { axiosWithAuth } from "./../utils/axiosWithAuth"
import { useParams } from "react-router-dom"
import Dashboard from "./Dashboard"

const Maintenance = () => {
  const [maintenance, setMaintenance] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axiosWithAuth()
      .get("/maintenance")
      .then((res) => {
        setMaintenance(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <>
      <div>
        {maintenance.map((maintain) => (
          <Dashboard maintain={maintain} key={maintain.id} />
        ))}
      </div>
    </>
  )
}

export default Maintenance
