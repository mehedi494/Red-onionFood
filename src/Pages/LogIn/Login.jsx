import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Login.css"

import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

import { useLocation, useNavigate } from 'react-router';




const Login = () => {
    const [email, SetEmail] = useState(' ')
    const [password, SetPassword] = useState(' ')
    const { googleHandler, error, logInEmailandPass } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    console.log(error);

    const GoogleHandlder = () => {
        googleHandler()
            .then((result) => {

                navigate(location.state?.from)



            })
        // console.log(location.state.from)



    }
    const handleLogIn = (e) => {
        e.preventDefault()
        logInEmailandPass(email, password)

        // console.log(email,password);
    }
    const handleLogInPassword = e => {
        SetPassword(e.target.value)
    }
    const handleLogInEmail = e => {
        SetEmail(e.target.value)
    }
    // console.log(user);
    return (
        <div className=''>

            <div className="panda">
                <div className="ear"></div>
                <div className="face">
                    <div className="eye-shade"></div>
                    <div className="eye-white">
                        <div className="eye-ball"></div>
                    </div>
                    <div className="eye-shade rgt"></div>
                    <div className="eye-white rgt">
                        <div className="eye-ball"></div>
                    </div>
                    <div className="nose"></div>
                    <div className="mouth"></div>
                </div>
                <div className="body"> </div>
                <div className="foot">
                    <div className="finger"></div>
                </div>
                <div className="foot rgt">
                    <div className="finger"></div>
                </div>
            </div>
            <form onSubmit={handleLogIn}>
                <div className="hand"></div>
                <div className="hand rgt"></div>
                <h1>Log in with us</h1>
                <div className="form-group">
                    <input onBlur={handleLogInEmail} required="required" className="form-control" />
                    <label className="form-label">Email    </label>
                </div>
                <div className="form-group">
                    <input onBlur={handleLogInPassword} id="password" type="password" required="required" className="form-control" />
                    <label className="form-label">Password</label>
                    <p className="alert">Invalid Credentials..!!</p>
                    <p>{ error}</p>
                    <button className="btnLogin">Login </button>
                </div>
            </form>
            <div className='bottom-body'>
                 {/* <hr /> */}
                <p style={{ color: "#78B83C", fontWeight:"10px" }} >Sign up for new users ! <NavLink className="text-decoration-none" to="/signup">  sign up..</NavLink></p>
               
                <p style={{ color: "#298031" }}>Altrenative Log in with </p>
                <div>

                    <button className='btn btn-secondary text-white my-1 mx-3' onClick={GoogleHandlder} >Google</button>
                    {/* <p className='d-inline'>or</p>
                    <button className='btn btn-secondary text my-3 mx-3'>Facebook</button> */}

                </div>
          </div>

        </div>
    );
};

export default Login;