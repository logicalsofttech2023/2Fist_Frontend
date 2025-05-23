import React from 'react'

const Contact = () => {
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
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Contact Us</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-contact.png" className="img-fluid " alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact section */}
            <div className="games py-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-md-4">
                            <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                <figure className="mb-0 icon-bg">
                                    <i className="bi bi-pin-map-fill display-5" />
                                </figure>
                                <h3 className="h5 fw-bold theme-text-white mb-2 mt-3">Our Address</h3>
                                <p className="mb-0">28, Street, Tower-B, VS-2001002</p>
                            </div>
                        </div>
                        {/* repetable */}
                        <div className="col-12 col-md-4">
                            <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                <figure className="mb-0 icon-bg">
                                    <i className="bi bi-envelope-paper display-5" />
                                </figure>
                                <h3 className="h5 fw-bold theme-text-white mb-2 mt-3">Eamil Address</h3>
                                <p className="mb-0">info@example.com</p>
                            </div>
                        </div>
                        {/* repetable */}
                        <div className="col-12 col-md-4">
                            <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                <figure className="mb-0 icon-bg">
                                    <i className="bi bi-telephone display-5" />
                                </figure>
                                <h3 className="h5 fw-bold theme-text-white mb-2 mt-3">Phone Number</h3>
                                <p className="mb-0">+123- 456- 7890- 100</p>
                            </div>
                        </div>
                        {/* repetable */}
                    </div>
                    {/* conttact info section */}
                    <div className="row">
                        {/* news articles */}
                        <div className="col-12">
                            <div className="row g-0">
                                <div className="col-12 my-5 order-first">
                                    <h2 className="text-center display-5 mb-3 font-black">Let’s get in touch</h2>
                                    <p className="text-center mb-0">Feel like contacting us? Submit your queries here
                                        and we will get back to you as soon as possible.</p>
                                </div>
                                <div className="col-12 col-lg-6 align-self-center order-last order-lg-first">
                                    <div className="p-3 p-lg-5">
                                        <h4 className="fw-bold mb-3 fs-4">Download Mobile App <br /> For Sports Betting</h4>
                                        <p className="mb-5">Download our betting apps from google play store <br />
                                            &amp; App store &amp; enjoy sport betting. </p>
                                        <div className="d-flex flex-column flex-sm-row mb-5">
                                            <a href="javascript:void(0)" className="d-inline-flex align-items-center border px-3 py-2 theme-border-radius mb-3 mb-sm-0 min-w-150">
                                                <div className="flex-shrink-0">
                                                    <img src="assets/images/icons/play-icon.png" className="img-fluid" alt="Google-Play" title="Google-Play" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <p className="mb-0 small theme-text-white">Get it on</p>
                                                    <p className="mb-0 small fw-bold theme-text-white">Google Play</p>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="d-inline-flex align-items-center border px-3 py-2 theme-border-radius ms-0 ms-sm-3 min-w-150">
                                                <div className="flex-shrink-0">
                                                    <img src="assets/images/icons/apple.png" className="img-fluid" alt="apple" title="apple" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <p className="mb-0 small theme-text-white">Get it on</p>
                                                    <p className="mb-0 small fw-bold theme-text-white">App Store</p>
                                                </div>
                                            </a>
                                        </div>
                                        {/* repetabel */}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                                    {/* contact form section section */}
                                    <div className="row g-0 theme-box-shadow theme-border-radius theme-transparent-bg">
                                        <div className="col-12">
                                            <div className="p-3 p-lg-5">
                                                <h4 className="fw-bold mb-4 fs-4">Send your message</h4>
                                                <form id="contact-form" method="post" action="https://themeslay.com/preview/items/HTML-Websites/OnTheBett/contact.php" className="send">
                                                    <div className="messages" />
                                                    <div className="controls">
                                                        <div className="mb-3">
                                                            <label htmlFor="form_name" className="fw-bold font-small mb-2">Your Name</label>
                                                            <input type="text" name="name" className="form-control form-control-th rounded-pill" id="form_name" placeholder="Your Name" required="required" data-error="Name is required." />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="form_email" className="fw-bold font-small mb-2">Your Email</label>
                                                            <input type="email" name="email" className="form-control form-control-th rounded-pill" id="form_email" placeholder="Your Name" required="required" data-error="Valid Email is required." />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="form_phone" className="fw-bold font-small mb-2">Your Phone Number</label>
                                                            <input type="number" name="phone" className="form-control form-control-th rounded-pill" id="form_phone" placeholder="Your Name" required="required" data-error="Please specify your Phone." />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="form_message" className="fw-bold font-small mb-2">Comments</label>
                                                            <textarea className="form-control form-control-th rounded-pill" name="message" placeholder="Leave a comment here" id="form_message" rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                        <div className="mb-0">
                                                            <button type="submit" className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center" value="Send message">Send
                                                                Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* repetable */}
                    </div>
                    {/* form and app link section */}
                </div>
            </div>
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

export default Contact