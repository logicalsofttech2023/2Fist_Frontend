import axios from 'axios'
import { ProgressSpinner } from 'primereact/progressspinner'
import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const Coordinator_Forgot_password = () => {
    let navigate = useNavigate()
    let [loader, setloader] = useState(true)
    let [resetpassloader, setresetpassloader] = useState(true)
    let [errorvalue, setErrorValue] = useState({})
    let [store_email, setstore_email] = useState("")
    let [showstatus, setshowstatus] = useState(true)

    // forgotpassword form handel
    let handleFormValue = (e) => {
        e.preventDefault()
        let form = e.target
        let formdata = new FormData(form)
        let obj = Object.fromEntries(formdata.entries())
        let errors = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (obj.email === '') {
            errors = { ...errors, email: "Email is required." }
        }
        else if (!emailPattern.test(obj.email)) {
            errors = { ...errors, email: "Please enter a valid email address." }
        }
        // If no errors, log the form data
        if (Object.keys(errors).length === 0) { 
            setloader(false)
            axios.post(`${process.env.REACT_APP_API_KEY}coordinatorForgotPassword`, obj).then((res) => {

                if (res.data.result == "true") {
                    toast.success(res.data.message);
                    setstore_email(obj.email)
                    setloader(true)
                    setshowstatus(false)
                    // setTimeout(() => {
                    //     navigate("/")
                    //     localStorage.setItem("loginstatus", true)
                    // }, 1000);
                } else {
                    setloader(true)
                }
            }).catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message);
                    setloader(true)

                } else {
                    toast.error("Invalid Data Entered by you.");
                    setloader(true)
                }
            })

        } else {
            setErrorValue(errors) // Set validation errors if found
        }
    }

    let handleInputChange = (e) => {
        const { name, value } = e.target
        setErrorValue((prevErrors) => {
            const newErrors = { ...prevErrors }
            if (value.trim() !== "") {
                delete newErrors[name] // Remove error when value is entered
            }
            return newErrors
        })
    }

    // reset password 
    let handle_reset_FormValue = (e) => {
        e.preventDefault()
        let form = e.target
        let formdata = new FormData(form)
        let obj = Object.fromEntries(formdata.entries())
        let errors = {}
        if (obj.password === '') {
            errors = { ...errors, password: "password is required..." }
        } else if (obj.password.length < 6) {
            errors = { ...errors, password: "Password must be at least 6 characters long." }
        }
        if (obj.conformPassword === '') {
            errors = { ...errors, conformPassword: "confirm password is required..." }
        }
        // Check if passwords match
        if (obj.password && obj.conformPassword && obj.password !== obj.conformPassword) {
            errors = { ...errors, conformPassword: "Passwords do not match." }
        }
        // If no errors, log the form data
        if (Object.keys(errors).length === 0) {
            setresetpassloader(false)
            let objdata = {
                "email": store_email,
                "password": obj.password 
            }
            axios.post(`${process.env.REACT_APP_API_KEY}coordinatorResetPassword`, objdata).then((res) => {

                if (res.data.result == "true") {
                    toast.success(res.data.message);
                    setresetpassloader(true)
                    setshowstatus(true)
                    setTimeout(() => {
                        navigate("/coordinatorLogin")
                    }, 1000);
                } else {
                    setresetpassloader(true)
                }
            }).catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message);
                    setresetpassloader(true)
                } else {
                    toast.error("Invalid Data Entered by you.");
                    setresetpassloader(true)
                }
            })

        } else {
            setErrorValue(errors) // Set validation errors if found
        }
    }

    return (
        <div>
            <Toaster />
            {/* breadcrumb section */}
            <div className="breadcrumb-area">
                <div className="container">
                    {/* row */}
                    <div className="row ">
                        {/* col */}
                        <div className="col-12 col-lg-6 align-self-center">
                            {/* breadcrumb */}
                            <div className="page-breadcrumb">
                                <div className="mb-3">
                                    <ul className="list">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Forgot Password</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Forgot Password</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/forgot-password.png" className="img-fluid " alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forgot Password page section */}
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
                                {/* Forgot Password content */}
                                {showstatus == true ? (
                                    <div className="row">
                                        <div className="col-12">
                                            <form className="needs-validation" onSubmit={handleFormValue}>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">COORDINATOR EMAIL
                                                        </label>
                                                    <input type="email" name='email' onChange={handleInputChange} className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                                                    <small className='text-danger'>{errorvalue.email && <>{errorvalue.email}</>}</small>
                                                </div>
                                                <div className="mt-4 mb-3">
                                                    {loader == true ? (
                                                        <button type="submit" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Login</button>
                                                    ) : (
                                                        <div className='text-center'>
                                                            <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3 text-center">
                                                    <span className="font-small">
                                                        <span className="me-3">Not a member ?</span>
                                                        <Link to="/signup">Register</Link>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <div className="col-12 text-center">
                                        <span className="login-app-title">Or continue with</span>
                                        <ul className="login-app">
                                            <li><a href="#" className="fb" title="google" /></li>
                                            <li><a href="#" className="go" title="Facebook" /></li>
                                            <li><a href="#" className="in" title="twitter" /></li>
                                        </ul>
                                    </div> */}
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-12">
                                            <form className="needs-validation" onSubmit={handle_reset_FormValue}>
                                                <div className='text-center'>
                                                    <span className="me-3">Reset Password</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">PASSWORD</label>
                                                    <input type="password" placeholder="Enter Your Password" name='password' className="form-control form-control-th rounded-pill" onChange={handleInputChange} id="password" />
                                                    <small className='text-danger'>{errorvalue.password && <>{errorvalue.password}</>}</small>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">CONFIRM PASSWORD</label>
                                                    <label htmlFor="conformPassword" className="form-label fw-bold"></label>
                                                    <input type="password" placeholder="Enter Your Confirm Password" name='conformPassword' className="form-control form-control-th rounded-pill" onChange={handleInputChange} id="conformPassword" />
                                                    <small className='text-danger'>{errorvalue.conformPassword && <>{errorvalue.conformPassword}</>}</small>
                                                </div>
                                                <div className="mt-4 mb-3">
                                                    {resetpassloader == true ? (
                                                        <button type="submit" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Reset</button>
                                                    ) : (
                                                        <div className='text-center'>
                                                            <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                                                        </div>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coordinator_Forgot_password