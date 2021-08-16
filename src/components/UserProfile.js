import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const UserProfile = () => {

	const [profile, setProfile] = useState([])

	useEffect(() => {
		axiosWithAuth().get("/users")
			.then(res => {
				setProfile(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	})


	return (
		<>
			<section>
				<div className="dashboard_container">
					{profile.map((user, i) => {
						return (
							<>
								<div className="dashboard_profile" key={i}>
									<img src="https://avatars.githubusercontent.com/u/79403650?v=4" alt="user" width="68" height="68" class="rounded-circle" />
									<h5> {user.firstName} {user.lastName}</h5>
									<p>{user.address}, {user.location}</p>
								</div>
								<div className="dashboard_profile2" key={i}>
									<p> <b>Email:</b> {user.email}</p>
									<p><b>Phone Number:</b> {user.phone}</p>
									<p><b>Location:</b> {user.location}</p>
								</div>
							</>
						)
					})}
				</div>
			</section>
		</>
	)
}

export default UserProfile
