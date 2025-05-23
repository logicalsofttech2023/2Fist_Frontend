import React from 'react'

const Bets_fee = () => {
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
                                        <li>Bets Fee</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Platform Bets Fees</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-fees.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* beet fees section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Leading sports betting platform</p>
                            <h2 className="display-5 mb-3 font-black max">OnTheBett Bets Fee Plan</h2>
                            <p className="mb-0 ">leading online betting platform, which will allow players to bet in up-to-the minute games.
                            </p>
                        </div>
                    </div>
                    <div className="row my-5 align-items-center">
                        <div className="col-12 col-lg-4 offset-lg-2">
                            <div className="theme-border-radius theme-transparent-bg theme-border single-pricing-content">
                                <div className="mb-4">
                                    <h2 className="text-center display-6 fw-bold mb-4">Currency Bets</h2>
                                    <div className="text-center mb-3">
                                        <img src="assets/images/icons/currency-bets-fee.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <h3 className="theme-text-secondary text-center display-5 fw-bold">4.9% Fee<span className="d-block fs-6 theme-text-accent-two fw-normal">- Per
                                        Single User</span>
                                    </h3>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Based off of their high production and low cost.</li>
                                        <li>Bets apply between users only.</li>
                                        <li>Use bitcoin as an alternative currency</li>
                                    </ul>
                                </div>
                                <div className="mt-5 text-center"> <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Bet
                                    Now</a>
                                </div>
                            </div>
                        </div>
                        {/* repetable */}
                        <div className="col-12 col-lg-4">
                            <div className="theme-border-radius theme-transparent-bg theme-border single-pricing-content">
                                <div className="mb-4">
                                    <h2 className="text-center display-6 fw-bold mb-4">Sport Bets</h2>
                                    <div className="text-center mb-3">
                                        <img src="assets/images/icons/game-bets-fee.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <h3 className="theme-text-secondary text-center display-5 fw-bold">4.7% Fee<span className="d-block fs-6 theme-text-accent-two fw-normal">- Per
                                        Single User</span>
                                    </h3>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Creating bets on real sports tournaments.</li>
                                        <li>Bets apply between users only.</li>
                                        <li>Use major world currency</li>
                                        <li>27/7 Support</li>
                                    </ul>
                                </div>
                                <div className="mt-5 text-center"> <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Bet
                                    Now</a>
                                </div>
                            </div>
                        </div>
                        {/* repetable */}
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

export default Bets_fee