import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Sidebar from "./Sidebar";


const Coordinator_dashboard = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  const [width, setWidth] = useState(window.innerWidth);
  const [amaunt, getamaunt] = useState(1000);
  let [showprofiledata, setshowprofiledata] = useState({});
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  let [loading, setLoading] = useState(false);


  // frist teams images Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Generate local preview URL
    }
  };
  // secound teams images Handle file input change
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview2(URL.createObjectURL(file)); // Generate local preview URL
    }
  };

  // daynamicwidth get
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  let logout_handel = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      // content: {
      //     element: "input",
      //     attributes: {
      //         placeholder: "Enter your reason for deletion",
      //         type: "text",
      //     },
      // },
    }).then((willDelete) => {
      if (willDelete) {
        userlogout();
      } else {
      }
    });
    let userlogout = () => {
      navigate("/coordinatorLogin");
      secureLocalStorage.removeItem("coordinator_loginstatus");
      secureLocalStorage.removeItem("coordinator_userid");
      localStorage.removeItem("loginstatus");
    };
  };

  let setamounthandel = (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
  
    // Current date ko format karna
    let currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  
    let objdata = {
      coordinatorId: coordinator_userid,
      amount: amaunt,
      date: currentDate, // Current date add kiya
    };
  
    axios
      .post(`${process.env.REACT_APP_API_KEY}coordinatorWithdrawRequest`, objdata)
      .then((res) => {
        if (res.data.result === "true") {
          console.log(res.data.message);
          toast.success(res.data.message);
          setVisible(false);
          localStorage.setItem("amount_store", amaunt);
        }
      })
      .catch((error) => {
        console.log("errrr", error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    let objdata = {
      coordinatorId: coordinator_userid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}getCoordinatorProfile`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          setshowprofiledata(res.data.data[0]);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  }, []);

  let golive_video = () => {
    navigate("/goLiveTeams");
  };

  return (
    <>
    <Toaster />
      <Dialog
        header="Withdrawal"
        visible={visible}
        style={{ width: `${width < 1024 ? "90%" : "50vw"}` }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className="m-0">
          {/* login page section */}
          <div className="">
            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
              {/* login content */}
              <div className="row">
                <div className="col-12">
                  <form className="needs-validation" noValidate>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Amount</label>
                      <input
                        // defaultValue={20000}
                        onChange={(event) => getamaunt(event.target.value)}
                        type="number"
                        className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                        id="exampleInputEmail1"
                        required
                      />
                    </div>

                    <div className="my-3">
  <button
    onClick={setamounthandel}
    type="submit"
    className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
    disabled={loading} // Disable button during API call
  >
    {loading ? (
      <>
        <span className="spinner-border spinner-border-sm me-2"></span>
        Processing...
      </>
    ) : (
      "Submit"
    )}
  </button>
</div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            {width < 991 ? (
              ""
            ) : (
              <Sidebar />
            )}

            <div className="col-12 col-lg-9">
              {/* tab content */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dashboard-tab-pane"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                  tabIndex={0}
                >
                  {/* 1. dashboard section */}
                  <div className="row mt-3 mt-lg-0">
                    {/* repetable */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                      <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                        <figure className="mb-3 hero-image">
                          <img
                            style={{ width: "100px" }}
                            src="./logo/live-streaming-background.avif"
                            alt="images"
                            className="rounded-circle"
                          />
                        </figure>
                        <button
                          onClick={golive_video}
                          className="mb-0 btn btn-success"
                          style={{
                            width: "100%",
                            float: "right",
                            marginRight: "5px",
                          }}
                        >
                          Go Live
                        </button>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6 col-lg-4 mb-4"
                      onClick={() => navigate("/c_Profile")}
                    >
                      <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                        {showprofiledata?.coordinatorProfile === " " ||
                        showprofiledata?.coordinatorProfile === null ||
                        showprofiledata?.coordinatorProfile === undefined ? (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src="./logo/newlogo.png"
                            alt="images"
                            className="rounded-circle"
                          />
                        ) : showprofiledata?.coordinatorProfile?.startsWith(
                            "https://"
                          ) ? (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.coordinatorProfile}`}
                            alt="images"
                            className="rounded-circle"
                          />
                        ) : (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.coordinatorProfile}`}
                            alt="images"
                            className="rounded-circle"
                          />
                        )}
                        <h5 className="my-3">
                          {showprofiledata?.coordinatorName}
                        </h5>
                        <p className="mb-0">
                          ID: {showprofiledata?.uniqueName}{" "}
                        </p>
                      </div>
                    </div>

                    {/* repetable */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                      <div className="pt-4 theme-transparent-bg theme-border-radius text-center">
                        <img
                          src="/assets/images/icons/dashboard-sidebar-icon-1.png"
                          alt="images"
                          className="rounded-circle"
                        />
                        <div className="d-flex justify-content-between mt-3">
                          <p className="mb-0">Total Commission</p>
                          <h5 className="my-0">
                            $ {showprofiledata?.coordinatorWallet}
                            {/* {localamaunt > 0 ? localamaunt : "$00.00"} */}
                          </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3 ">
                          <a
                            className="mb-0 btn btn-danger"
                            style={{ width: "100%", float: "right" }}
                            onClick={() => setVisible(true)}
                          >
                            Withdraw
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* repetable */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                      <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                        <figure className="mb-3 hero-image">
                          <img
                            src="assets/images/icons/dashboard-sidebar-icon-2.png"
                            alt="images"
                            className="rounded-circle"
                          />
                        </figure>
                        <h5 className="m-0">Need Help?</h5>
                        <p className="mt-3 mb-0">write at 2fist@gmal.com</p>
                      </div>
                    </div>
                    {/* repetable */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="myBets-tab-pane"
                  role="tabpanel"
                  aria-labelledby="myBets-tab"
                  tabIndex={0}
                >
                  {/* 2. my bet content */}
                  <div className="px-0">
                    <div className="row">
                      {/* open play game */}
                      <div className="col-12">
                        <div className="d-flex justify-content-between py-3 wallet-head">
                          <span className="fs-5 fw-bold">Teams list</span>
                        </div>
                      </div>
                      {/* tournament card */}
                      <div className="col-12">
                        <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                          <div className="head-sec py-3 px-3 pb-0">
                            <span className="d-inline-flex rounded-pill py-2 tag">
                              International T20 Series
                            </span>
                            <span className="d-inline-flex small">
                              22nd Match, April 15, 2023
                            </span>
                          </div>
                          <div className="body-sec py-3 px-3">
                            <div className="d-flex align-self-center align-items-center">
                              <div className="me-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  Gaming Team
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  GRD
                                </span>
                              </div>
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-01.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                            </div>
                            <div className="vs p-4">VS</div>
                            <div className="d-flex align-self-center align-items-center text-end">
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-02.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                              <div className="ms-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  Soccer Club
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  SCB
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="foot py-2 px-3">
                            <p className="mb-0 fw-bold">
                              Teams Joined : 2777/40000
                            </p>
                          </div>
                        </div>
                        {/* repetable */}
                        <div className="col-12">
                          <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                            <div className="head-sec py-3 px-3 pb-0">
                              <span className="d-inline-flex rounded-pill py-2 tag">
                                England, Premier League
                              </span>
                              <span className="d-inline-flex small">
                                23rd Match, April 16, 2023
                              </span>
                            </div>
                            <div className="body-sec py-3 px-3">
                              <div className="d-flex align-self-center align-items-center">
                                <div className="me-3">
                                  <h3 className="fs-6 fw-bold mb-2">
                                    West Ham
                                  </h3>
                                  <span className="fs-5 fw-bold theme-text-secondary">
                                    WHT
                                  </span>
                                </div>
                                <figure className="mb-0 icon-bg">
                                  <img
                                    src="assets/images/teams/game-logo-03.png"
                                    className="img-fluid"
                                    alt="Games team"
                                  />
                                </figure>
                              </div>
                              <div className="vs p-4">VS</div>
                              <div className="d-flex align-self-center align-items-center text-end">
                                <figure className="mb-0 icon-bg">
                                  <img
                                    src="assets/images/teams/game-logo-04.png"
                                    className="img-fluid"
                                    alt="Games team"
                                  />
                                </figure>
                                <div className="ms-3">
                                  <h3 className="fs-6 fw-bold mb-2">
                                    Barcelona FC
                                  </h3>
                                  <span className="fs-5 fw-bold theme-text-secondary">
                                    BFC
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="foot py-2 px-3">
                              <p className="mb-0 fw-bold">
                                Teams Joined : 2777/40000
                              </p>
                              <button
                                className="rounded-pill btn custom-link font-small"
                                type="button"
                              >
                                Join Now
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* repetable */}
                      </div>
                    </div>
                    <div className="row">
                      {/* canceled play game */}
                      <div className="col-12">
                        <div className="d-flex justify-content-between py-3 wallet-head">
                          <span className="fs-5 fw-bold">Canceled Game</span>
                          <span className="font-small">Total 1 Activity</span>
                        </div>
                      </div>
                      {/* tournament card */}
                      <div className="col-12">
                        <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                          <div className="head-sec py-3 px-3 pb-0">
                            <span className="d-inline-flex rounded-pill py-2 tag">
                              FEFA. Champions League
                            </span>
                            <span className="d-inline-flex small">
                              12th Match, April 11, 2023
                            </span>
                          </div>
                          <div className="body-sec py-3 px-3">
                            <div className="d-flex align-self-center align-items-center">
                              <div className="me-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  True Madrid
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  TMD
                                </span>
                              </div>
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-05.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                            </div>
                            <div className="vs p-4">VS</div>
                            <div className="d-flex align-self-center align-items-center text-end">
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-06.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                              <div className="ms-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  Manchester Club
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  MHC
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="foot py-2 px-3">
                            <p className="mb-0 fw-bold">
                              Teams Joined : 2777/40000
                            </p>
                          </div>
                        </div>
                        {/* repetable */}
                      </div>
                    </div>
                    <div className="row">
                      {/* finished play game */}
                      <div className="col-12">
                        <div className="d-flex justify-content-between py-3 wallet-head">
                          <span className="fs-5 fw-bold">Finished Games</span>
                          <span className="font-small">Total 1 Activity</span>
                        </div>
                      </div>
                      {/* tournament card */}
                      <div className="col-12">
                        <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                          <div className="head-sec py-3 px-3 pb-0">
                            <span className="d-inline-flex rounded-pill py-2 tag">
                              International Coppa Italia
                            </span>
                            <span className="d-inline-flex small">
                              22nd Match, April 16, 2024
                            </span>
                          </div>
                          <div className="body-sec py-3 px-3">
                            <div className="d-flex align-self-center align-items-center">
                              <div className="me-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  Inter Conta
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  ICT
                                </span>
                              </div>
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-07.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                            </div>
                            <div className="vs p-4">VS</div>
                            <div className="d-flex align-self-center align-items-center text-end">
                              <figure className="mb-0 icon-bg">
                                <img
                                  src="assets/images/teams/game-logo-08.png"
                                  className="img-fluid"
                                  alt="Games team"
                                />
                              </figure>
                              <div className="ms-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  Brentford United
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  BUD
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="foot py-2 px-3">
                            <p className="mb-0 fw-bold">
                              Teams Joined : 2777/40000
                            </p>
                          </div>
                        </div>
                        {/* repetable */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="deposit-tab-pane"
                  role="tabpanel"
                  aria-labelledby="deposit-tab"
                  tabIndex={0}
                >
                  {/* 3. deposit content */}
                  <div className="p-3">
                    <div className="theme-border-radius theme-transparent-bg p-3">
                      <h5 className="fs-5 fw-bold mb-4">Add Teams</h5>
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="">
                              <div className="p-2 theme-transparent-bg theme-border-radius text-center">
                                <img
                                  style={{ width: "75px", height: "75px" }}
                                  src={preview || `./logo/newlogo.png`}
                                  alt="images"
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="">
                              <div className="p-2 theme-transparent-bg theme-border-radius text-center">
                                <img
                                  style={{ width: "75px", height: "75px" }}
                                  src={preview2 || `./logo/newlogo.png`}
                                  alt="images"
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="perFname">First Team</label>
                              <div className="input-area">
                                <input
                                  type="file"
                                  id="perFname"
                                  placeholder="Enter First Teaam Image"
                                  onChange={handleImageChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="perLname">Second Team</label>
                              <div className="input-area">
                                <input
                                  type="file"
                                  id="perFname"
                                  placeholder="Enter Secound Teaam Image"
                                  onChange={handleImageChange2}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="birth">A Team Name</label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    id="birth"
                                    placeholder="Enter First Team Name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="birth">B Team Name</label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    id="birth"
                                    placeholder="Enter Second Team Name"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label> Category</label>
                              <div className="select-wrap">
                                <select
                                  style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#000849",
                                    borderRadius: "30px",
                                    color: "#fb2576",
                                  }}
                                >
                                  <option
                                    style={{ color: "white" }}
                                    hidden
                                    value={1}
                                  >
                                    Select Category
                                  </option>
                                  <option style={{ color: "white" }} value={2}>
                                    Category 01
                                  </option>
                                  <option style={{ color: "white" }} value={3}>
                                    Category 02
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="birth">Date</label>
                              <div className="input-area">
                                <input
                                  type="date"
                                  id="birth"
                                  placeholder="Enter Match Date"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="birth">Time</label>
                              <div className="input-area">
                                <input
                                  type="time"
                                  id="birth"
                                  placeholder="Enter Match Time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="postalcode">Pin Code</label>
                              <div className="input-area">
                                <input
                                  type="text"
                                  id="postalcode"
                                  placeholder="Enter Location Pin"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label> Country</label>
                              <div className="select-wrap">
                                <select
                                  style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#000849",
                                    borderRadius: "30px",
                                    color: "#fb2576",
                                  }}
                                >
                                  <option
                                    style={{ color: "white" }}
                                    hidden
                                    value={1}
                                  >
                                    Select Country
                                  </option>
                                  <option style={{ color: "white" }} value={2}>
                                    Country 01
                                  </option>
                                  <option style={{ color: "white" }} value={3}>
                                    Country 02
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="city">City</label>
                              <div className="input-area">
                                <input
                                  type="text"
                                  id="city"
                                  placeholder="Enter Your City"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label htmlFor="address">Matches Address</label>
                              <div className="input-area">
                                <input
                                  type="text"
                                  id="address"
                                  placeholder="Enter Matches Address"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="state">State</label>
                              <div className="input-area">
                                <input
                                  type="text"
                                  id="state"
                                  placeholder="Enter Your State"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12 mt-5 mt-lg-2 text-center">
                            <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                              Add Team
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="withdraw-tab-pane"
                  role="tabpanel"
                  aria-labelledby="withdraw-tab"
                  tabIndex={0}
                >
                  {/* 4. withdraw content */}
                  <div className="p-3">
                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                      {/* my wallet section */}
                      <div className="d-flex justify-content-between p-3 wallet-head">
                        <span className="fs-5 fw-bold">Commission List</span>
                      </div>
                      {/* my booking section */}
                      <div className="p-0 p-lg-3">
                        <div className="tble_wrap">
                          <div className="table-responsive theme-border-radius">
                            {/* booking table */}
                            <table className="table">
                              <tbody>
                                <tr>
                                  <th>SR</th>
                                  <th>Teams</th>
                                  <th>Date/Time</th>
                                  <th>Type</th>
                                  <th>Points</th>
                                  <th>Amount</th>
                                  <th>Payment Status</th>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Withdraw</td>
                                  <td>2500</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Withdraw</td>
                                  <td>1500</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Commision</td>
                                  <td>1700</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Withdraw</td>
                                  <td>2100</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Withdraw</td>
                                  <td>1900</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Indor vs Bhopal</td>
                                  <td>2023-01-05 15:33:53</td>
                                  <td>Commision</td>
                                  <td>1500</td>
                                  <td>
                                    <img
                                      src="assets/images/icons/btc.png"
                                      alt="icon"
                                    />{" "}
                                    0.00016556
                                  </td>
                                  <td>success</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=" tab-pane fade"
                  id="buyCrypto-tab-pane"
                  role="tabpanel"
                  aria-labelledby="buyCrypto-tab"
                  tabIndex={0}
                >
                  {/* 5. buy crypto content */}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-12 text-center">
                        <h5 className="fs-5 fw-bold mb-3">
                          Buy cryptocurrency directly to your Account
                        </h5>
                        <p className="mb-3">
                          Choose the crypto you want to buy, enter the below
                          details
                        </p>
                      </div>
                      <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="theme-border-radius theme-transparent-bg p-4">
                          <form action="#">
                            <div className="row">
                              <div className="col-6">
                                <div className="mb-3">
                                  <label>Choose Coins</label>
                                  <div className="select-wrap">
                                    <select>
                                      <option value={1}>BTC</option>
                                      <option value={2}>ETH</option>
                                      <option value={3}>LTC</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="mb-3">
                                  <label>Select Payment</label>
                                  <div className="select-wrap">
                                    <select>
                                      <option value={1}>Visa</option>
                                      <option value={2}>Credit</option>
                                      <option value={3}>Master</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-3">
                                  <label>Choose Amount</label>
                                  <div className="input-select-wrap d-flex align-items-center">
                                    <input type="text" placeholder="e.g. 100" />
                                    <select>
                                      <option value={1}>USD</option>
                                      <option value={2}>INR</option>
                                      <option value={3}>AUD</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 mt-3 text-center">
                                <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-12 text-center mt-3">
                        <h5 className="fs-5 fw-bold mb-3">OR</h5>
                        <p className="mb-3">
                          Choose the best offer from our partners
                        </p>
                      </div>
                      <div className="col-12 col-lg-8 offset-lg-2 mb-3">
                        <div className="theme-border-radius theme-transparent-bg p-4">
                          <div className="row g-0">
                            <div className="col-12 col-lg-4 align-self-center">
                              <h3 className="fs-6 mb-3 mb-lg-0">
                                You will get
                              </h3>
                              <p className="mb-0">0.003091 BTC</p>
                            </div>
                            <div className="col-12 col-lg-4 align-self-center">
                              <h3 className="fs-6 mb-3 mb-lg-0">
                                Rate with fee
                              </h3>
                              <p className="mb-0">39254.59 USD</p>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="d-flex justify-content-end">
                                <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* repetable */}
                      <div className="col-12 col-lg-8 offset-lg-2 mb-3">
                        <div className="theme-border-radius theme-transparent-bg p-4">
                          <div className="row g-0">
                            <div className="col-12 col-lg-4 align-self-center">
                              <h3 className="fs-6 mb-3 mb-lg-0">
                                You will get
                              </h3>
                              <p className="mb-0">0.003091 BTC</p>
                            </div>
                            <div className="col-12 col-lg-4 align-self-center">
                              <h3 className="fs-6 mb-3 mb-lg-0">
                                Rate with fee
                              </h3>
                              <p className="mb-0">39254.59 USD</p>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="d-flex justify-content-end">
                                <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* repetable */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="affiliate-tab-pane"
                  role="tabpanel"
                  aria-labelledby="affiliate-tab"
                  tabIndex={0}
                >
                  {/* 6. affilate content */}
                  <div className="mb-4">
                    <div className="row">
                      <div className="col-12">
                        <h5 className="fs-5 fw-bold mb-3">Affiliate Center</h5>
                        <p className="mb-3">
                          Get a reward up to 55% for inviting one new gamer!
                        </p>
                      </div>
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                          <p className="mb-3">Your Earned Referral</p>
                          <img
                            src="assets/images/icons/earned-referral-icon-1.png"
                            alt="icon"
                          />
                          <h4 className="mt-3 mb-0">$2956.00</h4>
                        </div>
                      </div>
                      {/* repetable */}
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                          <p className="mb-3">Earning Last Month</p>
                          <img
                            src="assets/images/icons/earned-referral-icon-2.png"
                            alt="icon"
                          />
                          <h4 className="mt-3 mb-0">$208.00</h4>
                        </div>
                      </div>
                      {/* repetable */}
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                          <p className="mb-3">Earning This Week</p>
                          <img
                            src="assets/images/icons/earned-referral-icon-3.png"
                            alt="icon"
                          />
                          <h4 className="mt-3 mb-0">$100.00</h4>
                        </div>
                      </div>
                      {/* repetable */}
                    </div>
                  </div>
                  <div className="theme-border-radius theme-transparent-bg p-3">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center align-self-center mb-4">
                          <h5 className="fs-5 fw-bold mb-0">
                            Referral Transaction
                          </h5>
                          <div className="input-area d-flex align-items-center">
                            <input
                              type="text"
                              id="dateSelect"
                              placeholder="Select Date From"
                            />
                            <i className="bi bi-calendar3" />
                          </div>
                        </div>
                        <div className="table-responsive theme-border-radius">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Username</th>
                                <th>Earned</th>
                                <th>E-mail</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>16 04 2023</td>
                                <td>Online</td>
                                <td>Kis26Chim</td>
                                <td>$55</td>
                                <td>Kis26Chim@gmail.com</td>
                              </tr>
                              <tr>
                                <td>17 04 2023</td>
                                <td>Advertisment</td>
                                <td>TisWell34</td>
                                <td>$45</td>
                                <td>Tiswell34@gmail.com</td>
                              </tr>
                              <tr>
                                <td>19 04 2023</td>
                                <td>PPC</td>
                                <td>Chim30Kis</td>
                                <td>$40</td>
                                <td>Chim30Kis@gmail.com</td>
                              </tr>
                              <tr>
                                <td>26 04 2023</td>
                                <td>Mobile</td>
                                <td>yello@mim</td>
                                <td>$142</td>
                                <td>yello432@gmail.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-border-radius theme-transparent-bg p-3 mt-4">
                    <p className="fs-5 fw-bold mb-3">Your Affiliate Link</p>
                    <div className="input-area">
                      <input
                        type="text"
                        defaultValue="aa12vsdeakjjfuekmlhgpuhgtye"
                      />
                      <i className="bi bi-back" />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="transactions-tab-pane"
                  role="tabpanel"
                  aria-labelledby="transactions-tab"
                  tabIndex={0}
                >
                  {/* 7. transactions content */}
                  <div className="theme-border-radius theme-transparent-bg p-3">
                    <form action="#" className="row">
                      <div className="col-12 align-self-center">
                        <div className="row">
                          <div className="col-12 col-md-6 align-self-center">
                            <p className="fs-5 fw-bold mb-0 theme-text-secondary">
                              Search By
                            </p>
                          </div>
                          <div className="col-12 col-md-6 text-end align-self-center">
                            <button className="rounded-pill btn custom-link">
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 col-md-4 mb-3">
                            <label>Date</label>
                            <div className="select-wrap">
                              <select>
                                <option value={1}>2021/01</option>
                                <option value={2}>2021/02</option>
                                <option value={3}>2021/03</option>
                                <option value={4}>2021/04</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 mb-3">
                            <label>Tran. Type</label>
                            <div className="select-wrap">
                              <select>
                                <option value={1}>Deposit</option>
                                <option value={2}>Withdrawal</option>
                                <option value={3}>Commision</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 mb-3">
                            <label>Coin Type</label>
                            <div className="select-wrap">
                              <select>
                                <option value={1}>Currency 1</option>
                                <option value={2}>Currency 2</option>
                                <option value={3}>Currency 3</option>
                                <option value={4}>Currency 4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* transactions table */}
                    {/* recent transaction section */}
                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow">
                      {/* my wallet section */}
                      <div className="d-flex justify-content-between p-3 wallet-head">
                        <span className="fs-5 fw-bold">Recent Transaction</span>
                        <span className="font-small">Total 11 Transaction</span>
                      </div>
                      {/* my transaction section */}
                      <div className="mt-2">
                        <div className="table-responsive theme-border-radius">
                          {/* transaction table */}
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Sl no.</th>
                                <th>Transaction ID</th>
                                <th>Transaction Type</th>
                                <th>Transaction amount</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>01</td>
                                <td>#LT2906HM475F</td>
                                <td>Deposit</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>02</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>03</td>
                                <td>#LT2906HM475F</td>
                                <td>Deposit</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>04</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-danger">Canceled</span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>05</td>
                                <td>#LT2906HM475F</td>
                                <td>Deposit</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>06</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>07</td>
                                <td>#LT2906HM475F</td>
                                <td>Withdrawal</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>08</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-danger">Canceled</span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>09</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>#LT2906HM475F</td>
                                <td>Commision</td>
                                <td>
                                  <img
                                    src="assets/images/icons/btc.png"
                                    alt="icon"
                                  />
                                  0.00016556
                                </td>
                                <td>
                                  <span className="text-success">
                                    CONFIRMED
                                  </span>
                                </td>
                                <td>
                                  <span className="theme-text-secondary">
                                    <i className="bi bi-eye-fill" />
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="setting-tab-pane"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                  tabIndex={0}
                >
                  {/* 8. personal details */}
                  <div className="theme-border-radius theme-transparent-bg p-3">
                    <h5 className="fs-5 fw-bold mb-4">Manage Details</h5>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="perFname">User Name</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="perFname"
                                placeholder="Enter User Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="perLname">User Email</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="perLname"
                                placeholder="Enter Your Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="birth">Your Age</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="birth"
                                placeholder="Enter Date Of Birth"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="phone">Phone/Mobile</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="phone"
                                placeholder="Enter Phone/Mobile Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label htmlFor="address">Mailing Address</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="address"
                                placeholder="Enter Your Address"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="postalcode">Pin Code</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="postalcode"
                                placeholder="Enter Location Pin"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label>Country</label>
                            <div className="select-wrap">
                              <select>
                                <option value={1}>Select Country</option>
                                <option value={2}>Country 01</option>
                                <option value={3}>Country 02</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="city">City</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="city"
                                placeholder="Enter Your City"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label htmlFor="state">State</label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="state"
                                placeholder="Enter Your State"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label>Select Identity Proof</label>
                            <div className="select-wrap">
                              <select>
                                <option value={1}>Passport</option>
                                <option value={2}>Nation ID Card</option>
                                <option value={3}>Driving License</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="file-upload">
                            <label className="file">
                              <input type="file" />
                              <span className="file-custom" />
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mt-5 mt-lg-2 text-center">
                          <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                            Change Details
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="password-tab-pane"
                  role="tabpanel"
                  aria-labelledby="password-tab"
                  tabIndex={0}
                >
                  {/* 9. password details */}
                  <div className="theme-border-radius theme-transparent-bg  p-3">
                    <h5 className="fs-5 fw-bold mb-4">Manage Login Password</h5>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label htmlFor="loginoldpass">
                              Current Password
                            </label>
                            <div className="input-area">
                              <input
                                type="text"
                                id="loginoldpass"
                                placeholder="Type Current Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label htmlFor="loginnewpass">New Password</label>
                            <div className="input-area">
                              <input
                                type="password"
                                id="loginnewpass"
                                placeholder="Type New Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label htmlFor="loginconfirmpass">
                              Confirm Password
                            </label>
                            <div className="input-area">
                              <input
                                type="password"
                                id="loginconfirmpass"
                                placeholder="ReType Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                          <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                            Chnage Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coordinator_dashboard;
