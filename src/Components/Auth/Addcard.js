import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Addcard = () => {
    let navigate = useNavigate()

    let Loginhandel = () => {
        navigate("/")
        localStorage.setItem("loginstatus", true)
    }
    let [loginboxstatus, setloginboxstatus] = useState(true)

    let coordinatorlogin = () => {
        setloginboxstatus(false)
    }
    let userlogin = () => {
        setloginboxstatus(true)
    }

    return (
        <>

            {/* login page section */}
            <div className="py-5">
                <div className="container">
                    <div className="row mt-5" >
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
                                {/* login content */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 text-center">
                                            <span className="fw-bold">
                                                Add card were you can receive your Earnings
                                            </span>
                                        </div>
                                        <form className="needs-validation" noValidate>
                                            <div className="mb-3  row justify-content-center"  >
                                                <label className="form-label fw-bold">NAME ON CARD
                                                </label>
                                                <div className='col-lg-8 col-8'>
                                                    <input type="text" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputEmail1" required />
                                                </div>
                                            </div>
                                            <div className="mb-3 row justify-content-center">
                                                <label className="form-label fw-bold">CARD NUMBER</label>
                                                <div className='col-lg-10 col-10'>
                                                    <input type="number" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputPassword1" required />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between">
                                                <div className='col-lg-5 col-5'>
                                                <label className="form-label fw-bold">EXP DATE</label>
                                                    <input type="number" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputPassword1" required />
                                                </div>
                                                <div className='col-lg-5 col-5'>
                                                <label className="form-label fw-bold">CVV</label>
                                                    <input type="number" className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputPassword1" required />
                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <button type="submit" onClick={Loginhandel} className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" onclick="window.location.href='#';">Submit</button>
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

export default Addcard