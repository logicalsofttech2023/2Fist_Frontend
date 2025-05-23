import React from 'react'

const Bets = () => {
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
                                        <li>Game Bett</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">All Game Bett</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-soccer.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* prize pool section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tournament-card p-3">
                                <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
                                    <div className="d-flex align-items-center flex-column flex-lg-row mb-3 mb-lg-0">
                                        <img src="assets/images/games/tournaments-logo-1.png" alt="icon" className="img-fluid mb-3 mb-lg-0" />
                                        <div className="ms-3">
                                            <h3 className="fs-3 mb-3">International T20 Series, 22nd Match</h3>
                                            <ul>
                                                <li>
                                                    <span><i className="bi bi-calendar3" /></span>
                                                    May 11 23:00 - Jun 21 14:00
                                                </li>
                                                <li>
                                                    <span><i className="bi bi-people-fill" /></span>
                                                    129+ PARTICIPANTS
                                                </li>
                                            </ul>
                                            <p className="fs-4 mb-0">Game Prize Pool <span className="ms-2 theme-text-secondary">$1699.00</span></p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="theme-text-accent-three mb-2">
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <span>5.0</span>
                                        </div>
                                        <p className="small mb-3">All Registered Players</p>
                                        <a href="signin.html" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex justify-content-center align-items-center">Join
                                            Now</a>
                                    </div>
                                </div>
                                {/* end card */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* tournaments section */}
            <section className="faq pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Top Upcoming Events</p>
                            <h2 className="display-5 mb-3 font-black max">Bets in the Championship Games</h2>
                            <p className="mb-0 ">Explore multiple options for maximum fun Use the power of mind Bets Fast, Anonymous, Secured,
                                Automatic, Trustworthy</p>
                        </div>
                    </div>
                    {/* tournaments tab */}
                    <div className="d-flex justify-content-center my-5 faq-tab">
                        <ul className="nav nav-pills mb-3" id="pills-tab3" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-first-tab" data-bs-toggle="pill" data-bs-target="#pills-first" type="button" role="tab" aria-controls="pills-first" aria-selected="true">Upcoming</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-second-tab" data-bs-toggle="pill" data-bs-target="#pills-second" type="button" role="tab" aria-controls="pills-second" aria-selected="false">Live</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-third-tab" data-bs-toggle="pill" data-bs-target="#pills-third" type="button" role="tab" aria-controls="pills-third" aria-selected="false">Completed</button>
                            </li>
                        </ul>
                    </div>
                    {/* tournaments content */}
                    <div className="tab-content" id="pills-tab3Content">
                        <div className="tab-pane fade show active" id="pills-first" role="tabpanel" aria-labelledby="pills-first-tab" tabIndex={0}>
                            {/* tab content 01 / upcoming */}
                            <div className="row">
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                            </div>
                            {/* row end */}
                            {/* pagination */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}><i className="bi bi-arrow-left" /></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"><i className="bi bi-arrow-right" /></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-second" role="tabpanel" aria-labelledby="pills-second-tab" tabIndex={0}>
                            {/* tab content 02 / live */}
                            <div className="row">
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                                <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp">
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
                                {/* tournament card */}
                            </div>
                            {/* row end */}
                            {/* pagination */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}><i className="bi bi-arrow-left" /></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"><i className="bi bi-arrow-right" /></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-third" role="tabpanel" aria-labelledby="pills-third-tab" tabIndex={0}>
                            {/* tab content 03 / completed */}
                            <div className="row">
                                <h3 className="text-center mb-0">you have no completed matches</h3>
                            </div>
                            {/* row end */}
                            {/* pagination */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}><i className="bi bi-arrow-left" /></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"><i className="bi bi-arrow-right" /></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bets