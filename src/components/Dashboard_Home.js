import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'


const Dashboard_Home = () => {

    const [user, setUser] = useState([]);
   
	useEffect(() => {
		axiosWithAuth().get(`/users`)
			.then(res => {
				setUser(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	})

    return (
        <>
       <section>
				<div className="modal-header">
                    <h1>Welcome!</h1> {user.firstName}
                    <hr/>            
				</div>
                <br/>
                <div className="dashboard_container">
					<div className="dashboard_card">
					    <Link to='/dashboard/addproperty'>Add New Property </Link>
					</div>
                    <div className="dashboard_card">
					    <Link to='/dashboard/addtenant' >Add New Tenant </Link>
					</div>
				</div>
			</section>
        </> 
    )
}

export default Dashboard_Home
