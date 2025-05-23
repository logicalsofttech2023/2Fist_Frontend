import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signupfightcoordinator = () => {
    let navigate = useNavigate()



    return (
        <>
            <div className="py-5 ">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-lg-6 offset-lg-3 mt-5">
                            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
                                {/* login content */}
                                <div className="row">
                                    <div className='text-center'>
                                        <label className="form-label fw-bold">
                                            Signup Fight Coordinator</label>
                                        <h5>

                                        </h5>
                                    </div>
                                    <div className="col-12">
                                    <form className="needs-validation" noValidate>
                                            <div className="mb-3">
                                                <label htmlFor="floatingInput" className="form-label fw-bold">Your Name</label>
                                                <input type="text" className="form-control form-control-th rounded-pill" id="floatingInput" placeholder="Your Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="floatingInput2" className="form-label fw-bold">Email Address</label>
                                                <input type="email" className="form-control form-control-th rounded-pill" id="floatingInput2" placeholder="Email address" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="floatingInput3" className="form-label fw-bold">Number</label>
                                                <input type="number" className="form-control form-control-th rounded-pill" id="floatingInput3" placeholder="Number" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="floatingInput4" className="form-label fw-bold">OTP</label>
                                                <input type="number" className="form-control form-control-th rounded-pill" id="floatingInput4" placeholder="OTP" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="floatingPassword" className="form-label fw-bold">Password</label>
                                                <input type="password" className="form-control form-control-th rounded-pill" id="floatingPassword" placeholder="Password" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="floatingPassword2" className="form-label fw-bold">Confirm Password</label>
                                                <input type="password" className="form-control form-control-th rounded-pill" id="floatingPassword2" placeholder="Password" />
                                            </div>
                                            <div className="mb-3 d-flex">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                                <label className="form-check-label font-small w-75" htmlFor="exampleCheck2">By clicking
                                                    on register, I Understand &amp; agree to world travel <a href="#">Terms and
                                                        condition</a>
                                                    and <a href="#">Privacy Policy</a></label>
                                            </div>
                                            <div className="mb-3">
                                                <button  type="submit" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Register</button>
                                            </div>
                                            <div className="mb-3 text-center">
                                                <span className="font-small">
                                                    <span className="me-3">Already a member?</span>
                                                    <Link  to="/loginfightcoordinator">Login</Link>
                                                </span>
                                            </div>
                                        </form>
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

export default Signupfightcoordinator