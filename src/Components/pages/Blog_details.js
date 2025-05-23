import React from 'react'
import { Link } from 'react-router-dom'

const Blog_details = () => {
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
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">Blog Details</h2>
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
            {/* blog details section */}
            <section className="news py-5">
                <div className="container">
                    <div className="row mt-5 animate__animated wow animate__fadeInUp">
                        {/* blog section */}
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="post-wrap">
                                        <div className="overflow-hidden hoverShine theme-border-radius">
                                            <figure className="mb-0 img-effect">
                                                <img src="assets/images/blog/articles-post-big.png" className="img-fluid" alt="flight-destination" title="flight-destination" />
                                            </figure>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <div className>
                                                <span className="d-inline-flex p-3 rounded-circle theme-transparent-bg theme-box-shadow me-3">
                                                    <i className="bi bi-pencil" />
                                                </span>
                                                <span className="fw-bold small theme-text-secondary">Joe Wilson, <span className="font-small">admin</span></span>
                                            </div>
                                            <span className="font-small theme-text-accent-two">
                                                <i className="bi bi-calendar-week me-2" />
                                                <span className="fw-normal">17-Aug-2022</span>
                                            </span>
                                        </div>
                                        <h2 className="post-head">A brand for a company is like reputation for a person you
                                            earn</h2>
                                        <p className="post-desc">Travel is now days very beautiful and pleasant, if the snow
                                            was not so bad. We travelled from Moscow on time to our hotel at 10 am due
                                            north of London's Gatwick Airport. The taxi driver asked us about it
                                            beforehand because he didn't know that we'd be flying there after 7 pm (I
                                            say later today as you read this). Our flight arrived in Paris just around
                                            2pm yesterday evening with a few hours free left for breakfast then packed
                                            up all by ourselves shortly before 9:30am - no hassle required! And here's
                                            what everyone said when they saw me fly across Lake Geneva..... "Glad I came
                                            along!" "My girlfriend &amp; family</p>
                                        <p className="fw-bold"><i>Travel is now days very beautiful and the views are
                                            amazing. It has been nice to see all these visitors taking pictures of
                                            us as they walked through or walking in front for me." He says he would
                                            not be able back home without visiting his family: "I have no idea what
                                            I am going again next week because my friends won't let him come here if
                                            he's from there anymore. That will happen soon too!"</i></p>
                                        <div className="row my-5">
                                            <div className="col-6 mb-3 mb-lg-0">
                                                <img src="assets/images/blog/articles-post-sub01.png" className="img-fluid" alt="post image" />
                                            </div>
                                            <div className="col-6">
                                                <img src="assets/images/blog/articles-post-sub02.png" className="img-fluid" alt="post image" />
                                            </div>
                                        </div>
                                        <p className="post-desc">Travel is now days very beautiful and pleasant, if the snow
                                            was not so bad. We travelled from Moscow on time to our hotel at 10 am due
                                            north of London's Gatwick Airport. The taxi driver asked us about it
                                            beforehand because he didn't know that we'd be flying there after 7 pm (I
                                            say later today as you read this). Our flight arrived in Paris just around
                                            2pm yesterday evening with a few hours free left for breakfast then packed
                                            up all by ourselves shortly before 9:30am - no hassle required! And here's
                                            what everyone said when they saw me fly across Lake Geneva..... "Glad I came
                                            along!" "My girlfriend &amp; family.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* blog post social */}
                                <div className="col-12">
                                    <div className="row g-0 row blog-post-social">
                                        <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
                                            <ul className="post-tag-list">
                                                <li>TAGS:</li>
                                                <li><a href="#">Survey,</a></li>
                                                <li><a href="#">Data,</a></li>
                                                <li><a href="#">Solar,</a></li>
                                                <li><a href="#">Pannel,</a></li>
                                                <li><a href="#">Setup</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
                                            <ul className="blog-icon-list">
                                                <li>Follow:</li>
                                                <li><a href="#"><i className="bi bi-facebook" /></a></li>
                                                <li><a href="#"><i className="bi bi-twitter" /></a></li>
                                                <li><a href="#"><i className="bi bi-instagram" /></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Comment section */}
                                <div className="col-12">
                                    <div className="comment-box">
                                        <h3 className="comment-head">03 Comments</h3>
                                        {/* Comment 1 */}
                                        <ul className="user-comment-card">
                                            <li>
                                                <div className="comment-title">
                                                    <div className="userPic">
                                                        <img src="assets/images/blog/userCommentPic.png" alt="User Pic" title="User Pic" />
                                                        <span className="userName">Fatima Taneja</span>
                                                    </div>
                                                    <div className="comment-meta">
                                                        <span>18 Feb 2020 at</span>
                                                        <span>2:30 pm</span>
                                                    </div>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-body">
                                                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate
                                                            consequat,
                                                            vel illumUt wisi enim ad minim veniam, quis nostrud
                                                            exerci.Duis
                                                            autem vel eum iriure dolor in hendrerit in vulputate
                                                            consequat, vel
                                                            illumUt wisi enim ad minim veniam, quis nostrud exerci.</p>
                                                    </div>
                                                    <div className="d-flex my-3">
                                                        <a href="#" className="me-5"><i className="bi bi-reply-fill pe-2" />Reply</a>
                                                    </div>
                                                </div>
                                                {/* Comment 1 reply */}
                                                <ul className="user-comment-card">
                                                    <li>
                                                        <div className="comment-title">
                                                            <div className="userPic">
                                                                <img src="assets/images/blog/user2CommentPic.png" alt="User Pic" title="User Pic" />
                                                                <span className="userName">George Roger</span>
                                                            </div>
                                                            <div className="comment-meta">
                                                                <span>18 Feb 2020 at</span>
                                                                <span>2:30 pm</span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="comment-body">
                                                                <p>Duis autem vel eum iriure dolor in hendrerit in
                                                                    vulputate
                                                                    consequat,
                                                                    vel illumUt wisi enim ad minim veniam, quis nostrud
                                                                    exerci.Duis
                                                                    autem vel eum iriure dolor in hendrerit in vulputate
                                                                    consequat, vel
                                                                    illumUt wisi enim ad minim veniam, quis nostrud
                                                                    exerci.</p>
                                                            </div>
                                                            <div className="d-flex my-3">
                                                                <a href="#" className="me-5"><i className="bi bi-reply-fill pe-2" />Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* Comment 2 */}
                                        <ul className="user-comment-card">
                                            <li>
                                                <div className="comment-title">
                                                    <div className="userPic">
                                                        <img src="assets/images/blog/userCommentPic.png" alt="User Pic" title="User Pic" />
                                                        <span className="userName">Fatima Taneja</span>
                                                    </div>
                                                    <div className="comment-meta">
                                                        <span>18 Feb 2020 at</span>
                                                        <span>2:30 pm</span>
                                                    </div>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-body">
                                                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate
                                                            consequat,
                                                            vel illumUt wisi enim ad minim veniam, quis nostrud
                                                            exerci.Duis
                                                            autem vel eum iriure dolor in hendrerit in vulputate
                                                            consequat, vel
                                                            illumUt wisi enim ad minim veniam, quis nostrud exerci.</p>
                                                    </div>
                                                    <div className="d-flex my-3">
                                                        <a href="#" className="me-5"><i className="bi bi-reply-fill pe-2" />Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* Reply comment form */}
                                        <div className="row p-4 mb-5 mb-lg-0">
                                            <h4>Leave A Comment</h4>
                                            <form className="col-12 comment-form">
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input type="email" className="form-control form-control-th" id="floatingInput1" placeholder="Your Name" />
                                                            <label htmlFor="floatingInput1">Your Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-floating mb-3">
                                                            <input type="email" className="form-control form-control-th" placeholder="Enter Your Email" />
                                                            <label>Enter Your Email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-floating">
                                                    <textarea className="form-control form-control-th" placeholder="Comment here" id="floatingTextarea" defaultValue={""} />
                                                    <label htmlFor="floatingTextarea">Comment here</label>
                                                </div>
                                                <div className="mt-3 custom-button">
                                                    <button type="submit" className="rounded-pill custom-btn-primary font-small primary-btn-effect px-4">Post
                                                        Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right sidebar */}
                        <div className="col-12 col-lg-4">
                            <div className="row">
                                {/* blog search */}
                                <div className="col-12">
                                    <div className="input-group input-group-lg mb-5 search-form rounded-pill">
                                        <input type="text" className="form-control form-control-th border-0 rounded-pill" placeholder="Search a Topic" />
                                        <button className="btn rounded-pill"><i className="bi bi-search" /></button>
                                    </div>
                                </div>
                                {/* Trending post Tags  */}
                                <div className="col-12">
                                    <h6 className="blog-list-head">Trending post</h6>
                                    {/* trending post 01 */}
                                    <div className="theme-box-shadow theme-border-radius px-4 py-4 theme-transparent-bg mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0">
                                                <div className="overflow-hidden hoverShine post-thumb theme-border-radius">
                                                    <figure className="mb-0 img-effect">
                                                        <img src="assets/images/blog/post01.jpg" className="img-fluid" alt="flight-destination-one" title="flight-destination-one" />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18
                                                    March
                                                    2022</span>
                                                <span className="d-flex font-small fw-normal">Book
                                                    your
                                                    faviort itiniary in best price</span>
                                            </div>
                                        </div>
                                        {/* repetable */}
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0">
                                                <div className="overflow-hidden hoverShine post-thumb theme-border-radius">
                                                    <figure className="mb-0 img-effect">
                                                        <img src="assets/images/blog/post04.jpg" className="img-fluid" alt="flight-destination-one" title="flight-destination-one" />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18
                                                    March
                                                    2022</span>
                                                <span className="d-flex font-small fw-normal">Book
                                                    your
                                                    faviort itiniary in best price</span>
                                            </div>
                                        </div>
                                        {/* repetable */}
                                        <div className="d-flex align-items-center mb-0">
                                            <div className="flex-shrink-0">
                                                <div className="overflow-hidden hoverShine post-thumb theme-border-radius">
                                                    <figure className="mb-0 img-effect">
                                                        <img src="assets/images/blog/post06.jpg" className="img-fluid" alt="flight-destination-one" title="flight-destination-one" />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="font-small mb-3 d-flex theme-text-accent-two"><i className="bi bi-calendar3 me-2" /> 18
                                                    March
                                                    2022</span>
                                                <span className="d-flex font-small fw-normal">Book
                                                    your
                                                    faviort itiniary in best price</span>
                                            </div>
                                        </div>
                                        {/* repetable */}
                                    </div>
                                </div>
                                {/* Categories Tags  */}
                                <div className="col-12 mt-5">
                                    <h6 className="blog-list-head">Categories</h6>
                                    <ul className="widget-categories">
                                        <li><a href="#">
                                            <span>All Games</span>
                                            <i className="bi bi-arrow-right" /></a>
                                        </li>
                                        <li><a href="#"><span>Bett</span>
                                            <i className="bi bi-arrow-right" /></a></li>
                                        <li><a href="#"><span>Games</span>
                                            <i className="bi bi-arrow-right" /></a></li>
                                        <li><a href="#"><span>Online Bett</span>
                                            <i className="bi bi-arrow-right" /></a></li>
                                        <li><a href="#"><span>Team</span>
                                            <i className="bi bi-arrow-right" /></a></li>
                                    </ul>
                                </div>
                                {/* Archives  */}
                                <div className="col-12 mt-5">
                                    <h6 className="blog-list-head">Archives</h6>
                                    <ul className="widget-categories">
                                        <li><a href="#"><span>August 2022</span>
                                            <span className="count">05</span></a></li>
                                        <li><a href="#"><span>September 2022</span>
                                            <span className="count">07</span></a></li>
                                        <li><a href="#"><span>October 2022</span>
                                            <span className="count">08</span></a></li>
                                    </ul>
                                </div>
                                {/* Blog Tags  */}
                                <div className="col-12 mt-5">
                                    <h6 className="blog-list-head">Tags</h6>
                                    <ul className="tags-blog">
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Online</a></li>
                                        <li><a href="#">Bett </a></li>
                                        <li><a href="#">Casino</a></li>
                                        <li><a href="#">Rummy</a></li>
                                        <li><a href="#">Predict</a></li>
                                        <li><a href="#">Win</a></li>
                                        <li><a href="#">Crypto</a></li>
                                        <li><a href="#">Betting</a></li>
                                    </ul>
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

export default Blog_details