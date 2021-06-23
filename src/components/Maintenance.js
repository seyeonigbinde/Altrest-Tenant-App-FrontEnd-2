import React, {useEffect, useState} from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';
import { useParams  } from 'react-router-dom';
// import Dashboard from './Dashboard';

const Maintenance = () => {


    const [maintenance, setMaintenance] = useState([])

    const { id } = useParams();

    useEffect(()=>{
        axiosWithAuth().get('/maintenance/:id')
        .then(res => {
         setMaintenance(res.data)
     })
        .catch(err => {
        console.log(err)
    })
    }, [id] );

    return (
        <>
        <div>
        {/* {
        maintenance.map(maintenance=><Dashboard maintenance={maintenance} key={maintenance.id}/>)
        }  */}
        </div>
        <div className="container">
                    <div key={maintenance.id} >
                    <h1>Title: {maintenance.title}</h1>
                    <h3>Request: {maintenance.request}</h3>
                    </div>
                </div>

        </>

        
    )
}

export default Maintenance;
