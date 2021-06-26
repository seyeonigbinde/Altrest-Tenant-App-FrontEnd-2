import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'

const MaintenanceList = () => {

	const [maintenance, setMaintenance] = useState([]);
	// const [delRequest, setDelRequest] = useState(false);

	const { maintenance_id } = useParams();
	const { push } = useHistory();

	useEffect(() => {
		axiosWithAuth().get("/maintenance")
			.then(res => {
				setMaintenance(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	})

	const handleDeleteClick = () => {
		axiosWithAuth().delete(`/maintenance/${maintenance_id}`)
			.then(res => {
				setMaintenance(res.data);
				push('/dashboard');
				console.log(res.data)
			})
			.catch(err => {
				console.log(err);
			})
	}



	// const deleteConfirm = (e) => {
	// 	e.preventDefault();
	// 	setDelRequest(true);
	// }


	return (
		<>
			<section>
				<div className="dashboard_container">
					{maintenance.map((maintain, i) => {
						return (
							<div className="dashboard_card" key={i}>
								<h5>{maintain.title}</h5>
								<p>{maintain.request}</p>
								<p><b>{maintain.urgency}</b></p>
								{/* <img src={maintain.image}/> */}
								<button className="btn btn-danger" onClick={handleDeleteClick}>Completed</button>
								{/* <button onClick={handleClick} className="clear-btn">
                        Clear Completed
                        </button> */}
							</div>
						);
					})}
				</div>
			</section>
		</>
	);

}

export default MaintenanceList;


