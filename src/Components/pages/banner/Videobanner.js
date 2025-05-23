import React, { useRef } from 'react';

const Videobanner = () => {
    const targetSectionRef = useRef(null);
    const handleScroll = () => {
        targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <section className="hero">
                <div className="video-image">
                    <video autoPlay muted loop className="background-video" src="assets/images/hero/video.mp4">
                    </video>
                    <div className="container position-relative z-in-2">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                <div className="mt-5 pt-5 pt-lg-0 mt-lg-0">
                                    <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold animate__animated wow animate__fadeInUp" data-wow-delay="4s">Welcome Bonus upto $100</p>
                                    <h1 className="display-4 mb-3 theme-text-white font-black max animate__animated wow animate__fadeInUp" data-wow-delay="5s">
                                        Prediction games Win Money in your Wallets
                                    </h1>
                                    <p className="mb-0 theme-text-white animate__animated wow animate__fadeInUp" data-wow-delay="5s">Discuss your goals determines success metrics identity solution</p>
                                    <div className="group mt-5 animate__animated wow animate__fadeInUp" data-wow-delay="5s">
                                        <button className="rounded-pill btn custom-btn-primary font-small primary-btn-effect" onClick={handleScroll} type="button">
                                            Get Start Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={targetSectionRef} className="target-section">
            </section>
        </div>
    );
}

export default Videobanner;
