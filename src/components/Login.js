import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';

import altrestlogo2 from '../images/altrestlogo2.png';

const credentials = {
  email: "",
  password: ""
}
const Login = () => {
  
  const { push } = useHistory();

  const [userLogin, setUserLogin] = useState(credentials)

  const handleChange = e => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    const newUser = {
      email: userLogin.email.trim(),
      password: userLogin.password.trim(),
    }
    axios.post('https://altrest-app.herokuapp.com/api/auth/login', newUser)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        push('/dash');
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const error = ""
  // ((userLogin.username === "") || (userLogin.password === "")) &&  "Username or Password not valid" 

  return (
    <section>
      <header>
        <div className="logo">
          <Link to='/'><img src={altrestlogo2} alt="logo" /></Link>
        </div>
      </header>
      <div className="form_section">
        <div data-testid="loginForm" className="login-form">
          <h1>Login</h1><br />

          <form onSubmit={login}>
            <div className="form-group form-label mt-3">
              <label htmlFor="email">Email Address:  </label>
              <input
                className="form-control"
                type="text"
                name="email"
                data-testid="email"
                value={userLogin.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group form-label mt-3">
              <label htmlFor="password">Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                data-testid="password"
                value={userLogin.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <button>Login</button>
          </form>
        </div>
        <p data-testid="errorMessage" className="error">{error}</p>
      </div>
      <p className="signup_login"> Don't have an account? <Link to="/signup">Register</Link></p>
    </section>
  );
};

export default Login;



// import React, { useState } from 'react'
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { userLoginSuccess, userLoginFailure, userLoginStart } from '../store/actions';
// import { axiosWithAuth } from '../utils/axiosWithAuth';



// const LoginForm = (props) => {

//     const { push } = useHistory();
//     const [details, setDetails] = useState({username: "", password: ""});
//     const { userLoginSuccess, userLoginFailure, isCallingAPI, error } = props;

//     const submitHandler = evt => {
//         evt.preventDefault();
//         userLoginStart();
//         axiosWithAuth()
//           .post("/users/login", details)
//           .then( res => {
//             localStorage.setItem('token', JSON.stringify(res.data.access_token));
//             userLoginSuccess(res.data.user);
//             push(`/user/${res.data.user.user_id}/plants`);
//           })
//           .catch( err => {
//             console.log(err);
//             userLoginFailure(err);
//           })

//     }

//     return (
//       <div className="login">
//         { (isCallingAPI) ? (<h2>Please wait, checking credentials</h2>): 
//             (
//             <form onSubmit={submitHandler}>
//                 <StyledLogin>
//                    <h2>Welcome Back!</h2>
//                     {(error !== "") ? (<div className= "error">{error}</div>) : ""}
//                     <div className= "form-group">
//                         <label>Username: </label>
//                         <input
//                             type= "text"
//                             name= "username"
//                             placeholder= "Enter a username..."
//                             onChange= {evt => 
//                                 setDetails({...details, username: evt.target.value})} 
//                                 value= {details.username}/>
//                     </div>
//                     <div className= "form-group">
//                         <label>Password: </label>
//                         <input  
//                             type= "password"
//                             name= "password"
//                             placeholder= "Enter a password..."
//                             onChange= {evt => 
//                                 setDetails({...details, password: evt.target.value})} 
//                                 value= {details.password}/>
//                     </div>
//                     <button id="submit" type="submit">Login</button>
//                 </StyledLogin>
//             </form>
//             )}
//       </div>
//     )
// }

// const mapStateToProps = (state) => {
//   return {
//     isCallingAPI: state.user.isCallingAPI,
//     error: state.user.error,
//   }
// }

// export default connect(mapStateToProps, { userLoginSuccess, userLoginFailure, userLoginStart })(LoginForm);