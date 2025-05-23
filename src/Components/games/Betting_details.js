import React from 'react'

const Betting_details = () => {
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
                                        <li>Betting Details</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Betting Details</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-bett.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* currency bett detail section */}
            <section className="pt-5 currency-bet-detail">
                <div className="container">
                    {/* currency bett content */}
                    <div className="row justify-content-center animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-8 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Prize Draws</p>
                            <h2 className="display-5 mb-3 font-black">Maximize Your Chances of Winning</h2>
                            <p className="mb-5">Be the first to win out this new crypto betting game</p>
                        </div>
                    </div>
                    {/* bett detail content */}
                    <div className="d-flex flex-column flex-lg-row theme-transparent-bg theme-border-radius align-items-center justify-content-between p-4">
                        <div className="mb-3 mb-lg-0">
                            <h3 className="fs-5 mb-3 mb-lg-0 theme-text-secondary"><img src="assets/images/icons/place-bet-icon.png" alt="icon" className="me-3" />Place Bet</h3>
                        </div>
                        <div className="mt-2">
                            <ul className="currency-bet-list">
                                <li><a href="javascript:void(0)">+0.01</a></li>
                                <li><a href="javascript:void(0)">+0.1</a></li>
                                <li><a href="javascript:void(0)">+1</a></li>
                                <li><a href="javascript:void(0)">+10</a></li>
                                <li><a href="javascript:void(0)">+100</a></li>
                                <li><a href="javascript:void(0)">1/2</a></li>
                                <li><a href="javascript:void(0)">X2</a></li>
                                <li><a href="javascript:void(0)">Max</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* 1x bet strip */}
                    <div className="row mt-3 justify-content-center animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column flex-lg-row theme-transparent-bg theme-border-radius align-items-center justify-content-between p-4">
                                <div className="mb-3 mb-lg-0">
                                    <h3 className="fs-5 mb-3 mb-lg-0 theme-text-secondary"><img src="assets/images/icons/1x-icon.png" alt="icon" className="me-3" />1X</h3>
                                </div>
                                <div className="text-center">
                                    <button className="rounded-pill btn custom-link font-small" type="button">Bet Now</button>
                                </div>
                            </div>
                            {/* table */}
                            <div className="table-responsive theme-border-radius mt-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-start"><i className="bi bi-person-circle me-2" />14 User</th>
                                            <th className="text-end">375,68<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player01.png" alt="player" className="me-2" />Colleain
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player02.png" alt="player" className="me-2" />Asadin
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player03.png" alt="player" className="me-2" />Owanqis
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player04.png" alt="player" className="me-2" />Akilens
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player05.png" alt="player" className="me-2" />Sinhay
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* left side strip */}
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="d-flex flex-column flex-lg-row theme-transparent-bg theme-border-radius align-items-center justify-content-between p-4">
                                <div className="mb-3 mb-lg-0">
                                    <h3 className="fs-5 mb-3 mb-lg-0 theme-text-secondary"><img src="assets/images/icons/place-bet-icon.png" alt="icon" className="me-3" />2X</h3>
                                </div>
                                <div className="text-center">
                                    <button className="rounded-pill btn custom-link font-small" type="button">Bet Now</button>
                                </div>
                            </div>
                            {/* table */}
                            <div className="table-responsive theme-border-radius mt-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-start"><i className="bi bi-person-circle me-2" />14 User</th>
                                            <th className="text-end">375,68<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player01.png" alt="player" className="me-2" />Colleain
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player02.png" alt="player" className="me-2" />Asadin
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player03.png" alt="player" className="me-2" />Owanqis
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player04.png" alt="player" className="me-2" />Akilens
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                        <tr>
                                            <td className="text-start"><img src="assets/images/player/player05.png" alt="player" className="me-2" />Sinhay
                                            </td>
                                            <td className="text-end">5,21<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                            </td>
                                        </tr>
                                        {/* repetable */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* right side strip */}
                    </div>
                </div>
            </section>
            {/* buy crypto section */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-0 theme-transparent-bg theme-border-radius align-items-center p-5 buy-crypto">
                        <div className="col-12 col-lg-6">
                            <h3 className="fs-5 fw-bold mb-5 mb-lg-0 text-center text-lg-start">No Crypto? No problem.</h3>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-end mt-5 mt-lg-0">
                            <button className="rounded-pill btn custom-link px-5" type="button">Buy Crypto</button>
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

export default Betting_details