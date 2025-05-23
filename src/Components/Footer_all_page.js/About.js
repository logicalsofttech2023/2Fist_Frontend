import React from 'react'

const About = () => {
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
                                        <li>About Us</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">About OnTheBett</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-about.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* about section */}
            <section className="about py-5 theme-gradient-bg">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">An online betting world</p>
                            <h2 className="display-5 mb-3 font-black max">Bets on every game &amp; reach at the top</h2>
                            <p className="mb-0 ">Fantasy games are all about creating your own team and making your own winning strategy.</p>
                        </div>
                    </div>
                    <div className="row align-items-center my-5">
                        <div className="col-12 col-lg-6 mt-5 animate__animated wow animate__fadeInUp" data-wow-delay="0.3s">
                            <div className="list-content">
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-01.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">Lowest Credit Scores</h5>
                                        <p className="mb-0">In our 11-Player game, you will find the lowest Credit Scores for all the players</p>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-02.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">100% Bonus and Free Entry</h5>
                                        <p className="mb-0">Get 200% welcome bonus up to USD 100 on your First Deposit</p>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-03.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">50% higher chances of winning</h5>
                                        <p className="mb-0">Play Free Entry Contests and use 100% of your sign-up bonus to join contests</p>
                                    </div>
                                </div>
                                {/* repetable */}
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-lg-5 animate__animated wow animate__fadeInUp" data-wow-delay="0.3s">
                            <div className="list-content">
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-04.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">24 Hours Payouts</h5>
                                        <p className="mb-0">In our 11-Player game, you will find the lowest Credit Scores for all the players</p>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-05.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">World Class Security</h5>
                                        <p className="mb-0">Get 200% welcome bonus up to USD 100 on your First Deposit</p>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="list">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/about-list-06.png" alt="image" />
                                    </figure>
                                    <div className="con">
                                        <h5 className="fs-4 fw-bold mb-2">Innovative Gaming Platform</h5>
                                        <p className="mb-0">Play Free Entry Contests and use 100% of your sign-up bonus to join contests</p>
                                    </div>
                                </div>
                                {/* repetable */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* best experience section */}
            <section className="experience py-5">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-12 mb-5 mb-lg-0 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Super-easy Gaming</p>
                            <h2 className="display-5 mb-3 font-black">Best-In-Class Gaming Experience</h2>
                            <p className="mb-0">Download or Join the Play and win daily cash prizes</p>
                        </div>
                    </div>
                    <div className="my-5 theme-gradient-bg p-4 theme-border-radius animate__animated wow animate__fadeInUp">
                        <div className="row mt-0 mt-lg-5" id="counter">
                            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-3 mb-lg-0">
                                <div className="list align-items-center">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/experience-icon01.png" alt="Gaming Experience" />
                                    </figure>
                                    <div className="con">
                                        <span className="fs-1 font-black mb-2 counter-value" data-count={1600}>0</span><span className="fs-1 font-black ms-1">+</span>
                                        <p className="mb-0 theme-text-secondary fw-bold">Active Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-3 mb-lg-0">
                                <div className="list align-items-center">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/experience-icon02.png" alt="Gaming Experience" />
                                    </figure>
                                    <div className="con">
                                        <span className="fs-1 font-black mb-2 counter-value" data-count={1000}>0</span><span className="fs-1 font-black ms-1">+</span>
                                        <p className="mb-0 theme-text-secondary fw-bold">Prize in Total</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-3 mb-lg-0">
                                <div className="list align-items-center">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/experience-icon03.png" alt="Gaming Experience" />
                                    </figure>
                                    <div className="con">
                                        <span className="fs-1 font-black mb-2 counter-value" data-count={100}>0</span><span className="fs-1 font-black ms-1">+</span>
                                        <p className="mb-0 theme-text-secondary fw-bold">Daily Contests</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-3 mb-lg-0">
                                <div className="list align-items-center">
                                    <figure className="mb-0 image-icon">
                                        <img src="assets/images/icons/experience-icon04.png" alt="Gaming Experience" />
                                    </figure>
                                    <div className="con">
                                        <span className="fs-1 font-black mb-2 counter-value" data-count={2500}>0</span><span className="fs-1 font-black ms-1">+</span>
                                        <p className="mb-0 theme-text-secondary fw-bold">Lucky Winners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* how to play section */}
            <section className="howtoplay py-5">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-12 text-center">
                            <p className="mt-0 mt-lg-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Just 3 Easy Steps</p>
                            <h2 className="display-5 mb-3 font-black">How to Play</h2>
                            <p className="mb-0">Join millions of players worldwide Make multiple combinations</p>
                        </div>
                    </div>
                    <div className="row my-5 animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="text-center theme-box-shadow theme-border-radius step-card">
                                <figure className="mb-0 image-icon">
                                    <img src="assets/images/icons/how-to-play-icon01.png" alt="how to play" />
                                </figure>
                                <div className="step-corner">
                                    <div className="step-arrow fw-bold">01</div>
                                </div>
                                <p className="pb-2 mb-0 theme-text-secondary fs-5 fw-bold">Select a Match</p>
                                <p className="mb-0">Select an upcoming match of your choice</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="text-center theme-box-shadow theme-border-radius step-card">
                                <figure className="mb-0 image-icon">
                                    <img src="assets/images/icons/how-to-play-icon02.png" alt="how to play" />
                                </figure>
                                <div className="step-corner">
                                    <div className="step-arrow fw-bold">02</div>
                                </div>
                                <p className="pb-2 mb-0 theme-text-secondary fs-5 fw-bold">Create your own team</p>
                                <p className="mb-0">check player stats create a team using 100 credits</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="text-center theme-box-shadow theme-border-radius step-card">
                                <figure className="mb-0 image-icon">
                                    <img src="assets/images/icons/how-to-play-icon03.png" alt="how to play" />
                                </figure>
                                <div className="step-corner">
                                    <div className="step-arrow fw-bold">03</div>
                                </div>
                                <p className="pb-2 mb-0 theme-text-secondary fs-5 fw-bold">Join Free &amp; Cash Contests</p>
                                <p className="mb-0">Participate in Cash or Practice Contests.</p>
                            </div>
                        </div>
                        <div className="col-12 mt-5 text-center">
                            <button className="rounded-pill btn custom-btn-primary font-small primary-btn-effect" type="submit">Get start
                                now</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* features section */}
            <section className="features py-5">
                <div className="container">
                    <div className="row justify-content-center animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-8 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Leading online gaming betting portal </p>
                            <h2 className="display-5 mb-3 font-black max">Unique Features of Onthebett</h2>
                            <p className="mb-0 ">Fantasy games are all about creating your own team and making your own winning strategy. The
                                games will be running round the clock</p>
                        </div>
                    </div>
                    <div className="row my-5 animate__animated wow animate__fadeInUp">
                        <div className="owl-carousel owl-theme" id="carouselfeatures">
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-bg-accent-one py-5 text-center">
                                    <figure className="mb-5 icon-bg">
                                        <img src="assets/images/icons/features-icon01.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <h3 className="fs-5 fw-bold theme-text-secondary">Multiple Contests</h3>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-bg-accent-one py-5 text-center">
                                    <figure className="mb-5 icon-bg">
                                        <img src="assets/images/icons/features-icon02.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <h3 className="fs-5 fw-bold theme-text-secondary">Lowest Join Fee</h3>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-bg-accent-one py-5 text-center">
                                    <figure className="mb-5 icon-bg">
                                        <img src="assets/images/icons/features-icon03.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <h3 className="fs-5 fw-bold theme-text-secondary">Safe &amp; Secure</h3>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-bg-accent-one py-5 text-center">
                                    <figure className="mb-5 icon-bg">
                                        <img src="assets/images/icons/features-icon04.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <h3 className="fs-5 fw-bold theme-text-secondary">Best Support</h3>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-bg-accent-one py-5 text-center">
                                    <figure className="mb-5 icon-bg">
                                        <img src="assets/images/icons/features-icon05.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <h3 className="fs-5 fw-bold theme-text-secondary">Daily Prize Pool</h3>
                                </div>
                            </div>
                            {/* repetable */}
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    )
}

export default About