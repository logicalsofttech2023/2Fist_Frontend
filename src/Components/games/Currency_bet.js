import React from 'react'

const Currency_bet = () => {
    return (
        <>
     
            <div id="wrapper" />
            {/* Header Part */}
         
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
                                        <li>Currency Bet</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Currency Bet</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-currency2.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* currency bett section */}
            <section className="currency-bet pt-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Gain Crypto Points</p>
                            <h2 className="display-5 mb-3 font-black max">Track Currency Point earnings</h2>
                            <p className="mb-0 ">View a record of all your Lightning Point earnings.</p>
                        </div>
                    </div>
                    {/* currency bett content */}
                    <div className="row g-0 filetr-box align-items-center p-5">
                        <div className="col-12 col-lg-6">
                            <h3 className="fs-5 mb-3 mb-lg-0">Now Bet on Crypto currency price</h3>
                        </div>
                        <div className="col-12 col-lg-6">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                            <input type="text" placeholder="Search Crypto" />
                                            <button className="d-flex align-items-center">
                                                <i className="bi bi-search" />
                                                <span className="text-area d-sm-block d-none">
                                                    Search
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* currency table section */}
            <div className="faq pb-5">
                <div className="container">
                    {/* tournaments tab */}
                    <div className="d-flex justify-content-center my-5 faq-tab">
                        <ul className="nav nav-pills mb-0" id="pills-tab3" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-first-tab" data-bs-toggle="pill" data-bs-target="#pills-first" type="button" role="tab" aria-controls="pills-first" aria-selected="true">All Bets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-second-tab" data-bs-toggle="pill" data-bs-target="#pills-second" type="button" role="tab" aria-controls="pills-second" aria-selected="false">Active Bets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-third-tab" data-bs-toggle="pill" data-bs-target="#pills-third" type="button" role="tab" aria-controls="pills-third" aria-selected="false">Leaderboard</button>
                            </li>
                        </ul>
                    </div>
                    {/* tournaments content */}
                    <div className="tab-content" id="pills-tab3Content">
                        <div className="tab-pane fade show active" id="pills-first" role="tabpanel" aria-labelledby="pills-first-tab" tabIndex={0}>
                            {/* tab content 01 / all bets */}
                            {/* currency bet table */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="table-responsive theme-border-radius">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="text-start">Event</th>
                                                    <th className="text-center">User</th>
                                                    <th className="text-center">Time</th>
                                                    <th className="text-end">Bet Amount</th>
                                                    <th className="text-end">Multiplier</th>
                                                    <th className="text-end">Payout</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-start">Dark Unit</td>
                                                    <td className="text-center"><i className="bi bi-person me-2" />Hidden</td>
                                                    <td className="text-center">6:35 PM</td>
                                                    <td className="text-end">1160.00000000<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">1.29x</td>
                                                    <td className="text-end">5.21799995<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-start">Fire Anchor</td>
                                                    <td className="text-center"><i className="bi bi-person me-2" />Hidden</td>
                                                    <td className="text-center">6:40 PM</td>
                                                    <td className="text-end">1.49442475<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">4.37x</td>
                                                    <td className="text-end">
                                                        5.81928997<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-start">Free Bett</td>
                                                    <td className="text-center"><i className="bi bi-person me-2" />Hidden</td>
                                                    <td className="text-center">6:45 PM</td>
                                                    <td className="text-end">0.49229199<img src="assets/images/icons/btc03.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">2.99x</td>
                                                    <td className="text-end">
                                                        1.19862398<img src="assets/images/icons/btc03.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-start">Gates of Bet</td>
                                                    <td className="text-center"><i className="bi bi-person me-2" />Hidden</td>
                                                    <td className="text-center">6:47 PM</td>
                                                    <td className="text-end">1.60830003<img src="assets/images/icons/btc04.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">3.89x</td>
                                                    <td className="text-end">
                                                        5.25914109<img src="assets/images/icons/btc04.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-start">Party Fruits</td>
                                                    <td className="text-center"><i className="bi bi-person me-2" />Hidden</td>
                                                    <td className="text-center">6:49 PM</td>
                                                    <td className="text-end">0.23452726<img src="assets/images/icons/btc05.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">2.43x</td>
                                                    <td className="text-end">
                                                        1.02535320<img src="assets/images/icons/btc05.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                            </tbody>
                                        </table>
                                    </div>
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
                            {/* row end */}
                        </div>
                        <div className="tab-pane fade" id="pills-second" role="tabpanel" aria-labelledby="pills-second-tab" tabIndex={0}>
                            {/* tab content 02 / active */}
                            <div className="text-center">
                                <img src="../../../../assets/images/icons/activate.html" alt="icon" />
                                <span className="fs-4 d-block mt-3">No Active Bets</span>
                                <a href="#">Start Betting Now!</a>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-third" role="tabpanel" aria-labelledby="pills-third-tab" tabIndex={0}>
                            {/* tab content 03 / leaderboard */}
                            {/* currency bet table */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="table-responsive theme-border-radius">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">Rank</th>
                                                    <th className="text-start">User</th>
                                                    <th className="text-center">Odds</th>
                                                    <th className="text-end">Prize</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center"><img src="assets/images/icons/rank01.png" alt="icon" /></td>
                                                    <td className="text-start"><i className="bi bi-person me-2" />Fire Anchor</td>
                                                    <td className="text-center">$16,370,033.42<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">$25,000.00<img src="assets/images/icons/btc.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-center"><img src="assets/images/icons/rank02.png" alt="icon" /></td>
                                                    <td className="text-start"><i className="bi bi-person me-2" />Dark Unit</td>
                                                    <td className="text-center">$16,370,033.42<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">$25,000.00<img src="assets/images/icons/btc02.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-center"><img src="assets/images/icons/rank03.png" alt="icon" /></td>
                                                    <td className="text-start"><i className="bi bi-person me-2" />Party Fruits</td>
                                                    <td className="text-center">$16,370,033.42<img src="assets/images/icons/btc03.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">$25,000.00<img src="assets/images/icons/btc03.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-center">4th</td>
                                                    <td className="text-start"><i className="bi bi-person me-2" />Free Bett</td>
                                                    <td className="text-center">$16,370,033.42<img src="assets/images/icons/btc04.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">$25,000.00<img src="assets/images/icons/btc04.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                                <tr>
                                                    <td className="text-center">5th</td>
                                                    <td className="text-start"><i className="bi bi-person me-2" />Gates of Bet</td>
                                                    <td className="text-center">$16,370,033.42<img src="assets/images/icons/btc05.png" alt="icon" className="ms-2" />
                                                    </td>
                                                    <td className="text-end">$25,000.00<img src="assets/images/icons/btc05.png" alt="icon" className="ms-2" />
                                                    </td>
                                                </tr>
                                                {/* repetable */}
                                            </tbody>
                                        </table>
                                    </div>
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
                            {/* row end */}
                        </div>
                    </div>
                </div>
            </div>
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

export default Currency_bet