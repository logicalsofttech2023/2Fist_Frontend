import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import secureLocalStorage from 'react-secure-storage';

const CoordinatorLogin = () => {
    let navigate = useNavigate()
    let [loader, setloader] = useState(true)
    let [errorvalue, setErrorValue] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    let loginstatus = localStorage.getItem("loginstatus");



    let userlogin = () => {
        navigate("/login")
    }

    // remember me handel
    useEffect(() => {
        const rememberedEmail = secureLocalStorage.getItem('coordinator_rememberedEmail');
        const rememberedPassword = secureLocalStorage.getItem('coordinator_rememberedPassword');
        if (rememberedEmail && rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setRememberMe(true);
        }
    }, []);

    // login form handel
    let handleFormValue = (e) => {
        e.preventDefault()
        let form = e.target
        let formdata = new FormData(form)
        let obj = Object.fromEntries(formdata.entries())
        let errors = {}
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        if (obj.email === '') {
            errors = { ...errors, email: "Email is required." }
        }
        else if (!emailPattern.test(obj.email)) {
            errors = { ...errors, email: "Please enter a valid email address." }
        }
        if (obj.password === '') {
            errors = { ...errors, password: "Password is required." }
        }

        // If no errors, log the form data
        if (Object.keys(errors).length === 0) {
            setloader(false)
            axios.post(`${process.env.REACT_APP_API_KEY}coordinatorLogin`, obj).then((res) => {
                if (res.data.result == "true") {
                    console.log(res);
                    secureLocalStorage.setItem("userId", res.data.data._id);
                    
                    secureLocalStorage.setItem('coordinator_userid', res.data.data._id);
                    toast.success(res.data.message);
                    if (rememberMe) {
                        secureLocalStorage.setItem('coordinator_rememberedEmail', obj.email);
                        secureLocalStorage.setItem('coordinator_rememberedPassword', obj.password);
                    } else {
                        secureLocalStorage.removeItem('coordinator_rememberedEmail');
                        secureLocalStorage.removeItem('coordinator_rememberedPassword');
                    }
                    setloader(true)
                    setTimeout(() => {
                        secureLocalStorage.setItem("coordinator_loginstatus", "true")
                        secureLocalStorage.setItem("coordinatorloginstatus", "true")
                        navigate("/coordinator_dashboard")
                    }, 1000);
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
    // login form handel
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



    useEffect(() => {
        // Scroll by a fixed number of pixels (e.g., 100px)
        window.scrollTo({
            top: 500,  // Adjust this value to the number of pixels you want to scroll
            behavior: "smooth"
        });
    }, []);



    return (
        <>
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
                                        <li>Signin</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Signin for Betting</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="https://www.2fist.com/assets/images/breadcrumb/signin.png" className="img-fluid " alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* login page section */}
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
                                {/* login content */}
                                <div className="row">
                                    <div className="col-12" id='title-id'>
                                        {loginstatus === "true" ? (
                                            <div className="mb-4 row justify-content-center ">
                                                <div className='col-5 p-0 text-center' style={{ backgroundColor: "#40408b", borderRadius: "10px", border: "3px solid #571ce0", backgroundColor: "rgb(46, 0, 153)" }}>
                                                    <button type="submit" className=" btn p-0 align-items-center text-white " style={{ border: "none" }} >Coordinator Login</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="mb-4 row justify-content-around ">
                                                <div className='col-5 p-0 text-center' style={{ backgroundColor: "#40408b", borderRadius: "10px" }} onClick={userlogin}>
                                                    <button type="submit" className=" btn p-0 align-items-center text-white " style={{ border: "none" }} >User Login</button>
                                                </div>
                                                <div className='col-5 p-0 text-center' style={{ backgroundColor: "#40408b", borderRadius: "10px", border: "3px solid #571ce0", backgroundColor: "rgb(46, 0, 153)" }}>
                                                    <button type="submit" className=" btn p-0 align-items-center text-white " style={{ border: "none" }} >Coordinator Login</button>
                                                </div>
                                            </div>
                                        )}

                                        <div className="mb-3 ">
                                            <span className="font-small">
                                                <>
                                                    {loginstatus === "true" ? (
                                                        ""
                                                    ) : (
                                                        <div className='text-center'>
                                                            <span className="me-3">Coordinator Login</span>
                                                        </div>
                                                    )}

                                                    <form className="needs-validation" onSubmit={handleFormValue}>
                                                        <div className="mb-3" style={{ display: "none" }}>
                                                            <input type="text" name='fcmId' value={"1111"} className="form-control form-control-th rounded-pill" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label fw-bold">COORDINATOR EMAIL</label>
                                                            <input type="email" name='email' defaultValue={email} onChange={handleInputChange} className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" placeholder="Enter Your Email" required />
                                                            <small className='text-danger'>{errorvalue.email && <>{errorvalue.email}</>}</small>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label fw-bold">PASSWORD</label>
                                                            <input type="password" name='password' defaultValue={password} onChange={handleInputChange} className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" placeholder="Enter Your Password" required />
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                                                    checked={rememberMe}
                                                                    onChange={(e) => setRememberMe(e.target.checked)} />
                                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember
                                                                    Me</label>
                                                            </div>
                                                            <Link to="/coordinator_Forgot_password" className="font-small">Forgot Password?</Link>
                                                        </div>
                                                        <div className="my-3">
                                                            {loader == true ? (
                                                                <button style={{ backgroundColor: "#2e0099" }} type="submit" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Login</button>
                                                            ) : (
                                                                <div className='text-center'>
                                                                    <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="mb-3 text-center">
                                                            <span className="font-small">
                                                                <span className="me-3">Not a member ?</span>
                                                                <Link to="/coordinatorRegister">Register</Link>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </>
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoordinatorLogin