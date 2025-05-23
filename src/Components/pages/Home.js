import React, { useEffect, useState } from 'react'
import Videobanner from './banner/Videobanner'
import Image_banner from './banner/Image_banner'
import Slider_banner from './banner/Slider_banner'
import Games_category from './Games_category'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
    let navigate = useNavigate()

    let letfightdetails = () => {
        navigate("/tournamentsdetails")
    }



    return (
        <>
            <Videobanner />
            {/* <Image_banner/> */}
            {/* <Slider_banner/> */}

            <Games_category />

            {/* <div style={{ position: "relative", height: "300px" }}>
                <img
                    src="./imglist/menuimg.png"
                    alt=""
                    style={{
                        height: "300px",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "90px",
                        left: "80px",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        color: "white", // Adjust text color
                    }}
                >
                    <p>
                        <span style={{ border: "1px solid", padding: "7px 10px", borderRadius: "10px" }}>
                            <FaUserCircle style={{ fontSize: "17px" }} /> <span style={{ fontSize: "10px", paddingLeft: "5px" }}> User profile </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ border: "1px solid", padding: "4px 10px", borderRadius: "10px" }}>
                            <FaUserCircle style={{ fontSize: "17px" }} /> <span style={{ fontSize: "10px", paddingLeft: "5px" }}> Privacy and Safety </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ border: "1px solid", padding: "4px 10px", borderRadius: "10px" }}>
                            <FaUserCircle style={{ fontSize: "17px" }} /> <span style={{ fontSize: "10px", paddingLeft: "5px" }}> Settings </span>
                        </span>
                    </p>
                    <p>
                        <span style={{ border: "1px solid", padding: "4px 10px", borderRadius: "10px" }}>
                            <FaUserCircle style={{ fontSize: "17px" }} /> <span style={{ fontSize: "10px", paddingLeft: "5px" }}> Sign-Out </span>
                        </span>
                    </p>
                </div>
            </div> */}



            {/* subscribe section */}
            <section className="subscribe py-5">
                <div className="container">
                    <div className="row justify-content-center animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-10">
                            <div className="px-2 px-sm-5 text-center">
                                <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Subscribe Newsletter</p>
                                <h2 className="display-5 mb-3 font-black">Don't miss out on Fantastic Games</h2>
                                <p className="mb-5">Subscribe to our newsletter and be the first to receive news</p>
                                <div className="my-5">
                                    <form className="form">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-lg-7">
                                                <div className="d-flex p-2 rounded-pill theme-border theme-transparent-bg">
                                                    <input type="text" className="form-control" placeholder="Enter your email address" />
                                                    <button type="button" className="btn custom-btn-subscribe"><i className="bi bi-envelope-fill" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* tournaments section */}
            {/* <section className="tournaments py-5">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Top Upcoming Events</p>
                            <h2 className="display-5 mb-3 font-black max">Bets in the Championship Games</h2>
                            <p className="mb-0 ">Explore multiple options for maximum fun Use the power of mind Bets Fast, Anonymous, Secured,
                                Automatic, Trustworthy</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International
                                        T20 Series</span>
                                    <span className="d-inline-flex small">22nd Match, April 15, 2023</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">Gaming Team</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">GRD</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-01.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-02.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">Soccer Club</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">SCB</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-1" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">England, Premier League</span>
                                    <span className="d-inline-flex small">23rd Match, April 16, 2023</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">West Ham</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">WHT</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-03.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-04.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">Barcelona FC</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">BFC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-2" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">FEFA. Champions League</span>
                                    <span className="d-inline-flex small">12th Match, April 11, 2023</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">True Madrid</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">TMD</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-05.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-06.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">Manchester Club</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">MHC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-3" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International
                                        Coppa Italia</span>
                                    <span className="d-inline-flex small">22nd Match, April 16, 2024</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">Inter Conta</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">ICT</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-07.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-08.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">Brentford United</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">BUD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-4" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International League Series</span>
                                    <span className="d-inline-flex small">02nd Match, April 18, 2023</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">Leeds United</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">LUD</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-09.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-10.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">Crystal Palace</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">CPC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-5" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={letfightdetails} className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International League Series</span>
                                    <span className="d-inline-flex small">03rd Match, April 19, 2023</span>
                                </div>
                                <div className="body-sec py-3 px-3">
                                    <div className="d-flex align-self-center align-items-center">
                                        <div className="me-3">
                                            <h3 className="fs-6 fw-bold mb-2">Forest Nottingham</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">FNH</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-11.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                    </div>
                                    <div className="vs">VS</div>
                                    <div className="d-flex align-self-center align-items-center text-end">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-12.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="ms-3">
                                            <h3 className="fs-6 fw-bold mb-2">United Madrid</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">UMD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot py-2 px-3">
                                    <div className="text-center">
                                        <p className="mb-0 fw-bold">Start at <span id="countdown-timer-6" /></p>
                                    </div>
                                    <button className="rounded-pill btn custom-link font-small" type="button">Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </>
    )
}

export default Home