import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginfightcoordinator = () => {
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
                                            Login Fight Coordinator</label>
                                        <h5>

                                        </h5>
                                    </div>
                                    <div className="col-12">
                                        <form className="needs-validation" noValidate>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Email
                                                    Address</label>
                                                <input type="email" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputEmail1" placeholder="Enter Your Email" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Password</label>
                                                <input type="password" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember
                                                        Me</label>
                                                </div>
                                                <Link href="/forgot_password" className="font-small">Forgot Password?</Link>
                                            </div>
                                            <div className="my-3">
                                                <button type="submit"  className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Login</button>
                                            </div>
                                            <div className="mb-3 text-center">
                                                <span className="font-small">
                                                    <span className="me-3">Not a member ?</span>
                                                    <Link to="/Signupfightcoordinator">Register</Link>
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

export default Loginfightcoordinator