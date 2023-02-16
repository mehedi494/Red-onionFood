import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./Signup.css"
import { useLocation, useNavigate } from 'react-router';






const Signup = () => {
    const { RegistrationHandler, } = useFirebase();

    const [email, SetEmail] = useState(" ")
    const [password, SetPassword] = useState(" ")
    const [name, SetUserName] = useState(" ")
    const [error, SetError] = useState(" ")

    const location = useLocation()
    const navigate = useNavigate()

    const handleRegistrationForm = e => {
        e.preventDefault()

        RegistrationHandler(email, password)
            .then(result => {
                navigate("/")
                alert("You are Succesfully Registration")

                // console.log(RegisterUser);

            })





    }
    const handleEmailChange = e => {

        SetEmail(e.target.value)
    }
    const handlePassword = e => {
        SetPassword(e.target.value)

    }
    // const updateName = () => {
    //     updateUserName(name)


    // }
    const handleName = e => {

        SetUserName(e.target.value)
    }




    return (


        <div className='pb-5 my-5'>
            <h1><span className=' text-primary' >Resgistration !</span> <span className='text-info'>for first time </span></h1>
            <div className="form_wrapper ">
                <div className="form_container">
                    <div className="title_container">

                    </div>
                    <div className="row clearfix">
                        <div className="mt-4">
                            <form onSubmit={handleRegistrationForm}>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input onBlur={handleEmailChange} type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input onBlur={handlePassword} type="password" name="password" placeholder="Re-type Password" required />

                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input onBlur={handleName} type="text" name="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field radio_option mt-3">
                                    <input type="radio" name="radiogroup1" id="rd1" />
                                    <label htmlFor="rd1">Male</label>
                                    <input type="radio" name="radiogroup1" id="rd2" />
                                    <label htmlFor="rd2">Female</label>

                                    <input className="button" type="submit" value="Register" />
                                </div>




                            </form>
                        </div>
                    </div>
                </div>
                <div><h2 style={{ color: "#07C273" }}>Are you exitsting user? <Link className='text-decoration-none' to='/login'>Click here</Link></h2></div>
            </div>
            <h5 className='text-danger'>{error}</h5>

        </div>
    );
};

export default Signup;