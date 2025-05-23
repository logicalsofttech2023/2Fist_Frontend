import React from 'react'

const Testimonials = () => {
    return (
        <div>
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
                                        <li>Testimonials</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Testimonials</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/testimonials.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* review section */}
            <section className="review py-5 theme-gradient-bg">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Players Testimonials</p>
                            <h2 className="display-5 mb-3 font-black max">Trusted By Million of Players</h2>
                            <p className="mb-0 ">Why Fantasy Sports Players Love Onthebett</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* slider section */}
                    <div className="row my-5 animate__animated wow animate__fadeInUp">
                        <div className="owl-carousel owl-theme" id="carouselReview">
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review01.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Jonatham Doe</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.2 Million</p>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dignissim sapien.
                                        Curabitur
                                        a hendrerit nibh,
                                        efficitur rutrum tortor.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review02.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Rehka Dokinge</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.0 Million</p>
                                    <p className="mb-0">Suspendisse potenti. Morbi congue ipsum sit amet eleifend malesuada.
                                        Vestibulum arcu lacus, dignissim quis hendrerit sed, pretium non magna.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review03.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Deno Moria</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.2 Million</p>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dignissim sapien.
                                        Curabitur
                                        a hendrerit nibh,
                                        efficitur rutrum tortor.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review04.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Pitusan Bekiny</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.0 Million</p>
                                    <p className="mb-0">Suspendisse potenti. Morbi congue ipsum sit amet eleifend malesuada.
                                        Vestibulum arcu lacus, dignissim quis hendrerit sed, pretium non magna.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review05.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">David Balam</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.0 Million</p>
                                    <p className="mb-0">Suspendisse potenti. Morbi congue ipsum sit amet eleifend malesuada.
                                        Vestibulum arcu lacus, dignissim quis hendrerit sed, pretium non magna.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review06.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Papu Beloy</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.0 Million</p>
                                    <p className="mb-0">Suspendisse potenti. Morbi congue ipsum sit amet eleifend malesuada.
                                        Vestibulum arcu lacus, dignissim quis hendrerit sed, pretium non magna.</p>
                                </div>
                            </div>
                            {/* repetable */}
                            <div className="item">
                                <div className="theme-border-radius theme-border mb-4 theme-gradient-bg py-5 px-5 text-center">
                                    <figure className="mt-3 position-absolute top-0">
                                        <img src="assets/images/icons/qotes-icon.png" className="img-fluid w-auto m-auto" alt="qotes icon" />
                                    </figure>
                                    <figure className="mb-3 icon-bg theme-border">
                                        <img src="assets/images/review/review07.png" className="img-fluid" alt="Plateform Features" />
                                    </figure>
                                    <span className="mb-3 theme-text-accent-three">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                    </span>
                                    <h5 className="fs-5 fw-bold theme-text-secondary mb-2">Benu Gauri</h5>
                                    <p className="fs-5 mb-2 fw-bold">Win 1.0 Million</p>
                                    <p className="mb-0">Suspendisse potenti. Morbi congue ipsum sit amet eleifend malesuada.
                                        Vestibulum arcu lacus, dignissim quis hendrerit sed, pretium non magna.</p>
                                </div>
                            </div>
                            {/* repetable */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row my-5 animate__animated wow animate__fadeInUp">
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Players Reviews</p>
                            <h2 className="display-5 mb-3 font-black max">Players Love Onthebett</h2>
                            <p className="mb-4">We are trusted by over 2 million players around the world. We have established a reputation
                                for developing cutting edge esports experiences and bringing them to life across multiple platforms, both
                                online &amp; mobile. "Following our successful launch with Counter Strike: Global Offensive we will build on
                                that momentum through new titles such as Overwatch League.</p>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-3 position-relative">
                            <div className="video-review custom-button">
                                <div className="d-flex align-items-center">
                                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="btn custom-btn-secondary icon-wrapper video_model">
                                        <i className="bi bi-play fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <p className="rounded-pill text-bg-info mt-5 fs-6 p-3">Malang Dev Expresses Her Happiness on Winning by
                                Playing on the bett Fantasy Online App</p>
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
        </div>
    )
}

export default Testimonials