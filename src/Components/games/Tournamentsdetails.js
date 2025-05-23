import React from 'react'

const Tournamentsdetails = () => {
    return (
        <>
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
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="tournaments.html">Tournaments</a></li>
                                        <li>Tournaments Details</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Tournaments Details</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-games.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* tournaments details section */}
            <section className="tournaments pt-5">
                <div className="container">
                    {/* tournaments content */}
                    <div className="row">
                        <div className="col-12">
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International T20 Series, 22nd Match</span>
                                    <span className="d-inline-flex">Today, 7:00 pm</span>
                                </div>
                                <div className="body-sec py-3 px-5 flex-column flex-lg-row">
                                    <div className="d-flex flex-column align-self-center align-items-center text-center">
                                        <div className="mb-3">
                                            <h3 className="fs-6 fw-bold mb-2">Gaming Team</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">GRD</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-01.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="mt-3">
                                            <h3 className="fs-6 fw-bold mb-2 theme-text-secondary">Place your Bets</h3>
                                            <ul className="bet-list">
                                                <li><a href="javascript:void(0)">1x<span className="point">8.75</span></a></li>
                                                <li><a href="javascript:void(0)">1.5x<span className="point">9.00</span></a></li>
                                                <li><a href="javascript:void(0)">2x<span className="point">9.55</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="vs p-4 mb-4 mt-3 mt-lg-0">VS</div>
                                        <div className="text-center">
                                            <h2 className="mb-3 fs-4">Start at</h2>
                                            <div id="countdown">
                                                <div id="days">00</div>
                                                <div id="hours">00</div>
                                                <div id="minutes">00</div>
                                                <div id="seconds">00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-self-center align-items-center text-end text-center">
                                        <div className="mb-3">
                                            <h3 className="fs-6 fw-bold mb-2">Soccer Club</h3>
                                            <span className="fs-5 fw-bold theme-text-secondary">SCB</span>
                                        </div>
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/teams/game-logo-02.png" className="img-fluid" alt="Games team" />
                                        </figure>
                                        <div className="mt-3">
                                            <h3 className="fs-6 fw-bold mb-2 theme-text-secondary">Place your Bets</h3>
                                            <ul className="bet-list">
                                                <li><a href="javascript:void(0)">1x<span className="point">8.75</span></a></li>
                                                <li><a href="javascript:void(0)">1.5x<span className="point">9.00</span></a></li>
                                                <li><a href="javascript:void(0)">2x<span className="point">9.55</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tournament card/repetable */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tournamentsdetails