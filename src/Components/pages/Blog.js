import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
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
                                            <li><Link to="/">Home</Link></li>
                                            <li>Blog Grid</li>
                                        </ul>
                                    </div>
                                    <h2 className="display-4 mb-0 theme-text-white font-black">Blog Grid</h2>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 align-self-center text-center">
                                <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                    <img src="assets/images/breadcrumb/breadcrumb-blog.png" className="img-fluid " alt="hero image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog grid section */}
                <section className="news py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 text-center">
                                <h4 className="text-center display-5 mb-3 font-black highlight">Latest News &amp; Articles</h4>
                                <p className="text-center mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                    interdum leo ut tortor luctus,
                                    nec sollicitudin neque rhoncus. Fusce quam.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post01.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">How to Get Started With Sports Betting</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post02.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">How To Make Money From Free Bets Using Matched</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post03.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">Betting On Racing - Setting Up Your Betting Bank</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post04.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">The Basics of Betting - Learning the Bets</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post05.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">The Bets learning the basics of Betting</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
                            <Link to="/blogdetails" className="col-12 col-lg-4 mb-5">
                                <div className="news-card">
                                    <div className="theme-border-radius theme-box-shadow overflow-hidden position-relative mb-4">
                                        <figure className="mb-0 img-effect">
                                            <img src="assets/images/blog/post06.jpg" className="img-fluid" alt="news articles" />
                                        </figure>
                                    </div>
                                    <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18 March
                                        2022&nbsp; <i className="bi bi-person-fill mx-2" /> Author</span>
                                    <h2 className="h6 fw-bold mb-4">Setting Up Your Betting Skills</h2>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, nsectetur adipiscing elit.
                                        Pellentesque interdum leo</p>
                                    <a href="#" className="rounded-pill d-inline-flex theme-bg-accent-three theme-border-radius py-2 px-4 primary-btn-effect">Read
                                        more</a>
                                </div>
                            </Link>
                            {/* repetable */}
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

export default Blog