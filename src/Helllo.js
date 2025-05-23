import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Helllo = () => {
    return (
        <div>

            <section className="tournaments py-5">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Live
                                Tournament  Events</p>
                            <h2 className="display-5 mb-3 font-black max">Bets in the Championship Games</h2>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-6" style={{ height: "170px", border: "1px solid" }}>
                            <h1>box 1</h1>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae non aliquid magnam ipsam vero nulla tempora suscipit ut libero? Repellendus nihil architecto asperiores iusto. Libero rem dolores ipsum deleniti velit.
                        </div>
                        <div
                            className="col-lg-6"
                            style={{
                                height: "170px",
                                border: "1px solid",
                                opacity: 0.5, // Reduces the visibility
                                pointerEvents: "none", // Disables interaction
                            }}
                        >
                            <h1>box 2</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti adipisci, repudiandae excepturi nihil magni quibusdam voluptate sunt nostrum eveniet minus officia quis labore! Voluptates fuga delectus ea aspernatur ducimus.
                        </div>
                    </div>


                    <div className="row my-5">
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International
                                        T20 Series</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">England, Premier League</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">FEFA. Champions League</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International
                                        Coppa Italia</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International League Series</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                        <div className="col-12 col-lg-6 animate__animated wow animate__fadeInUp" >
                            <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                                <div className="head-sec py-3 px-3 pb-0">
                                    <span className="d-inline-flex rounded-pill py-2 tag">International League Series</span>
                                    <span style={{ lineHeight: "12px", color: "red" }} className="d-inline-flex small">Live <GoDotFill /></span>
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
                                    <button className="rounded-pill btn custom-link font-small" type="button" >Join Now</button>
                                </div>
                            </div>
                        </div>
                        {/* tournament card */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Helllo