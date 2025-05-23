import React from 'react'

const Image_banner = () => {
    return (
        <section className="hero">
            <div className="bg">
                <div className="shape-wrap">
                    <img src="assets/images/icons/bitcoin-icon.svg" className="obj-1" alt="Background Shape Dollor" />
                    <img src="assets/images/icons/dollor-icon.svg" className="obj-2" alt="Background Shape Bitcoin" />
                </div>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-12 col-lg-6 align-self-center">
                            <div className="mt-5 pt-5 pt-lg-0 mt-lg-0">
                                <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold animate__animated wow animate__fadeInUp" data-wow-delay="4s">Welcome Bonus upto $100</p>
                                <h1 className="display-4 mb-3 theme-text-white font-black max animate__animated wow animate__fadeInUp" data-wow-delay="5s">
                                    Prediction games Win Money in your Wallets</h1>
                                <p className="mb-0 theme-text-white animate__animated wow animate__fadeInUp" data-wow-delay="5s">Discuss your
                                    goals determines
                                    success metrics identity solution</p>
                                <div className="group mt-5 animate__animated wow animate__fadeInUp" data-wow-delay="5s">
                                    <button className="rounded-pill btn custom-btn-primary font-small primary-btn-effect" type="submit">Get
                                        Start
                                        Now</button>
                                    <span className="ms-3">
                                        <a href="https://www.youtube.com/watch?v=oNxCporOofo" className="btn custom-btn-secondary icon-wrapper video_model">
                                            <i className="bi bi-play-fill fs-4" />
                                        </a>
                                    </span>
                                    <span className="ms-1 d-none d-md-inline-flex theme-text-white fw-bold video_model">Watch</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/hero/hero-pic.png" className="img-fluid " alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Image_banner