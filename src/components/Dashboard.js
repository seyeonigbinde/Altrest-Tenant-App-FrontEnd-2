import React from 'react';
import altrestlogo2 from '../images/altrestlogo2.png';
import { Link } from "react-router-dom"
import { axiosWithAuth }from '../utils/axiosWithAuth'

const Dashboard = () => {


    const logOut = () => {
        axiosWithAuth().post('/logout')
        .then(()=> {
          localStorage.removeItem("token");
          window.location.href = "/";
        })
        .catch(err=> {
          console.log(err);
        })
      };
    
    
     
    return (
        <section>
            <header>
                <div className="logo">
                    <Link to='/dashboard'><img src={altrestlogo2} alt="logo" /></Link>
                </div>
                <div className="links">
                    <Link><b>Pricing</b></Link>
                    <Link to='/about'><b>Company</b></Link>
                </div>
                <div className="login">
                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                </div>
            </header>
            <section>
                <div>
                    <p> Welcome {}</p>
                </div>
                <div>
                    <Link>Create a New Request</Link>
                </div>
            </section>

        </section>


    )

}

export default Dashboard;