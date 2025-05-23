import React from 'react'
import { MdArrowUpward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate()
    return (
        <>
            {/* Footer Part */}
            <footer className=" footer">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 animate__animated wow animate__fadeInUp">
                            <img src="./logo/logonew.png" style={{ width: "18%" }} className="img-fluid mb-4 mb-lg-0" alt="Brand light" />
                        </div>
                        <div className="col-12 col-lg-8 animate__animated wow animate__fadeInUp">
                            <div className="row">
                                <div className="col-12 col-md-4 mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 svg-icon">
                                            
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="h5 fw-bold mb-0">Phone</p>
                                            <p className="mb-0">(+254) 3256 9857</p>
                                            <p className="mb-0" onClick={()=>navigate("/livematchpage")}>goLive</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-4 mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 svg-icon">
                                            
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="h5 fw-bold mb-0">Support</p>
                                            <p className="mb-0">2fist@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-4 mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 svg-icon">
                                            
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="h5 fw-bold mb-0">Location</p>
                                            <p className="mb-0">New Youk World</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 animate__animated wow animate__fadeInUp">
                            <h3 className="h5 fw-bold mb-4 mt-0 mt-lg-5">About Us</h3>
                            <p className="mb-0 font-small pe-0 pe-lg-5">Bearing a simple yet catchy concept of earning money via the best
                                fantasy game
                                Apps
                                while watching your favourite sports</p>
                            <h3 className="mt-4 h5 fw-bold mb-4">Social Network</h3>
                            <div className="d-flex social mt-3">
                                <a href="javascript:void(0)" className="h2 pe-3"><i className="bi bi-facebook" /></a>
                                <a href="javascript:void(0)" className="h2 px-3"><i className="bi bi-twitter" /></a>
                                <a href="javascript:void(0)" className="h2 px-3"><i className="bi bi-linkedin" /></a>
                                <a href="javascript:void(0)" className="h2 px-3"><i className="bi bi-instagram" /></a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="py-2 mt-5 text-center copyright">
                    <p className="mb-0 font-small">© Copyright 2024 by <a href="javascript:void(0)">Fist</a>, All rights
                        reserved.</p>
                    <span className="font-extra-small">game involves an element of financial risk and may be addictive. Please play
                        responsibly and at your own risk</span>
                </div>
                <a href="#wrapper" data-type="section-switch" className="scrollup back-top"><MdArrowUpward className="bi bi-chevron-double-up" /></a>
            </footer>
        </>
    )
}

export default Footer