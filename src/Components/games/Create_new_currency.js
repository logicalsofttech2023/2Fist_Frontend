import React from 'react'

const Create_new_currency = () => {
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
                                        <li>Create Currency Bet</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Create Currency Bet</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-currency.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* currency bett section */}
            <section className="py-5">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Top Currency Betting</p>
                            <h2 className="display-5 mb-3 font-black max">Make your own Currency Bet</h2>
                            <p className="mb-0 ">Be the first to win out this new crypto betting game</p>
                        </div>
                    </div>
                    {/* currency bett content */}
                    <div className="row mt-5">
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <div className="create-currency">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="input-box">
                                                <input type="text" id="nickname" placeholder="Choose your bet name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="input-box">
                                                <div className="input-items d-flex">
                                                    <input type="text" id="bet-amount" placeholder="Your Bet Amount" />
                                                    <input type="text" disabled defaultValue="Max 1.00" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="input-box">
                                                <div className="input-select d-flex">
                                                    <select>
                                                        <option>Select Crypto Type</option>
                                                        <option value={2}>Below 1</option>
                                                        <option value={3}>Below 2</option>
                                                        <option value={4}>Below 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="input-box">
                                                <input type="text" id="currency" placeholder="Your Price Prediction" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="input-box">
                                                <input type="text" id="closing-date" placeholder="Bet Closing date" />
                                                <i className="bi bi-calendar2-week" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="input-box">
                                                <input type="text" id="finish-date" placeholder="Bet Start date" />
                                                <i className="bi bi-calendar2-week" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <a href="javascript:void(0)" className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">Create
                                                Currency Bet</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-3 my-3">
                            <div className="theme-transparent-bg theme-border-radius p-4">
                                <div className="more-info">
                                    <ul>
                                        <li>You can cancel any time, as long no one join your bet.</li>
                                        <li>Base market is bitcoin</li>
                                        <li>Future currency results are based on binance exchange</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <h3 className="my-3 fs-4 theme-text-secondary fw-bold">Invite friends to your bet</h3>
                            <div className="create-currency">
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="input-box">
                                            <input type="text" id="invitedName" placeholder="Name of Invited" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="input-box">
                                            <input type="text" id="invitedEmail" placeholder="Email of Invited" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-3">
                                        <div className="input-box">
                                            <textarea className="form-control" id="message" rows={3} placeholder="Message for Invited" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6">
                                    <button className="rounded-pill btn custom-btn-secondary secondary-btn-effect">
                                        <i className="bi bi-plus-circle-dotted" />
                                        Add
                                    </button>
                                    <button className="rounded-pill btn custom-btn-secondary secondary-btn-effect ms-2">
                                        <i className="bi bi-dash-circle-dotted" />
                                        Delete
                                    </button>
                                </div>
                            </div>
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

export default Create_new_currency