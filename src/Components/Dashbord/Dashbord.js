import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Sidebar from "./pages/Sidebar";
const Dashbord = () => {
  let navigate = useNavigate();
  let userid = secureLocalStorage.getItem("userdata");
  let status1 = localStorage.getItem("loginstatus");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [amaunt, getamaunt] = useState("");
  let [showprofiledata, setshowprofiledata] = useState({});
  const [dashboardData, setDashboardData] = useState("");

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

  useEffect(() => {
    dashboardCount();
  }, []);

  const dashboardCount = async () => {
    try {
      const data = {
        userId: userid?._id,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}userDashboard`,
        data
      );
      if (res.status === 200) {
        setDashboardData(res.data.data);
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  // logout hadnel
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
      navigate("/");
      localStorage.removeItem("loginstatus");
      localStorage.clear();
    };
  };

  // add amount hadnel funcation
  let setamounthandel = (event) => {
    event.preventDefault();
    let objdata = {
      userId: userid,
      amount: amaunt,
    };
    console.log(userid);

    axios
      .post(`${process.env.REACT_APP_API_KEY}addUserAmount`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          toast.success(res.data.message);
          getamaunt("");
          getprofile();
          setVisible(false);
          // localStorage.setItem("amount_store", amaunt);
        } else {
        }
      })
      .catch((error) => {
        console.log("errrr", error);
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  // withdraw amount hadnel funcation
  let setwithdrawamounthandel = (event) => {
    event.preventDefault();
    let objdata = {
      userId: userid,
      amount: amaunt,
      date: new Date().toLocaleString(),
    };
    console.log(objdata);
    axios
      .post(`${process.env.REACT_APP_API_KEY}userWithdrawRequest`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          toast.success(res.data.message);
          getamaunt("");
          getprofile();
          setVisible1(false);
        } else {
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };
  // get data getUser_profile
  useEffect(() => {
    getprofile();
  }, []);
  let getprofile = () => {
    let objdata = {
      userId: userid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}getUser_profile`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          setshowprofiledata(res.data.data[0]);
        } else {
          setshowprofiledata({});
        }
      })
      .catch((error) => {
        setshowprofiledata({});
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  return (
    <>
      <Toaster />

      {/* add amount  */}
      <Dialog
        header="Deposit"
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
                  <form className="needs-validation" onSubmit={setamounthandel}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Amount</label>
                      <input
                        onChange={(event) => getamaunt(event.target.value)}
                        type="number"
                        value={amaunt}
                        className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                        id="exampleInputEmail1"
                        required
                      />
                    </div>
                    <div className="my-3">
                      <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>

      {/* withdraw amount  */}
      <Dialog
        header="Withdraw"
        visible={visible1}
        style={{ width: `${width < 1024 ? "90%" : "50vw"}` }}
        onHide={() => {
          if (!visible1) return;
          setVisible1(false);
        }}
      >
        <p className="m-0">
          {/* login page section */}
          <div className="">
            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
              {/* login content */}
              <div className="row">
                <div className="col-12">
                  <form
                    className="needs-validation"
                    onSubmit={setwithdrawamounthandel}
                  >
                    <div className="mb-3">
                      <label className="form-label fw-bold">Amount</label>
                      <input
                        onChange={(event) => getamaunt(event.target.value)}
                        type="number"
                        value={amaunt}
                        className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                        id="exampleInputEmail1"
                        required
                      />
                    </div>
                    <div className="my-3">
                      <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>

      {/* dashboard */}
      <section className="dashboard-section">
        <div className="container">
          <div className="row justify-content-center">
            {width < 991 ? "" : <Sidebar />}
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
                    <div
                      className="col-12 col-md-6 col-lg-4 mb-4"
                      onClick={() => navigate("/profile")}
                    >
                      <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                        {showprofiledata?.userProfile === " " ||
                        showprofiledata?.userProfile === null ||
                        showprofiledata?.userProfile === undefined ? (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src="./logo/newlogo.png"
                            alt="images"
                            className="rounded-circle"
                          />
                        ) : showprofiledata?.userProfile?.startsWith(
                            "https://"
                          ) ? (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.userProfile}`}
                            alt="images"
                            className="rounded-circle"
                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                          />
                        ) : (
                          <img
                            style={{ width: "75px", height: "75px" }}
                            src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.userProfile}`}
                            alt="images"
                            className="rounded-circle"
                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                          />
                        )}
                        <h5 className="my-3">
                          {showprofiledata?.userName || "user"}
                        </h5>
                        <p className="mb-0">
                          ID: {showprofiledata?.uniqueName || "user12345"}
                        </p>
                      </div>
                    </div>
                    {/* repetable */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                      <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                        <img
                          src="assets/images/icons/dashboard-sidebar-icon-1.png"
                          alt="images"
                          className="rounded-circle"
                        />
                        <div className="d-flex justify-content-between mt-3">
                          <p className="mb-0">Available Balance</p>
                          <h5 className="my-0">
                            $
                            {showprofiledata?.userWallet > 0
                              ? showprofiledata?.userWallet
                              : "00.00"}
                          </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <a
                            onClick={() => setVisible(true)}
                            className="btn btn-success mb-0"
                            style={{ padding: "6px", fontSize: "13px" }}
                          >
                            Add Money
                          </a>
                          <a
                            onClick={() => setVisible1(true)}
                            className="mb-0 btn btn-danger"
                            style={{ fontSize: "13px" }}
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
                        <p className="mt-3 mb-0">write at 2fist@gmail.com</p>
                      </div>
                    </div>
                    {/* repetable */}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                          <div className="theme-box-shadow theme-border-radius p-2 theme-bg-white theme-transparent-bg">
                            <div className="row g-0">
                              <div className="col-4 overflow-hidden theme-border-radius">
                                <div className="overflow-hidden">
                                  <figure className="mb-0">
                                    <img
                                      src="assets/images/icons/dashboard-icon01.png"
                                      className="img-fluid"
                                      alt="dashboard icon 01"
                                      title="dashboard icon 01"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <div className="col-8">
                                <Link to="/total_match">
                                  <div className="ps-md-0 ps-xxl-3 d-flex justify-content-between align-items-center h-100">
                                    <div className="d-flex flex-column">
                                      <span className="d-flex fw-bold">
                                        Total Match
                                      </span>
                                      <span className="fw-bold price theme-text-secondary">
                                        {dashboardData?.allMatch}
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* dashboard features */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                          <div className="theme-box-shadow theme-border-radius p-2 theme-bg-white theme-transparent-bg">
                            <div className="row g-0">
                              <div className="col-4 overflow-hidden theme-border-radius">
                                <div className="overflow-hidden">
                                  <figure className="mb-0">
                                    <img
                                      src="assets/images/icons/dashboard-icon02.png"
                                      className="img-fluid"
                                      alt="dashboard icon 01"
                                      title="dashboard icon 01"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <div className="col-8">
                                <Link to="/win_match">
                                  <div className="ps-md-0 ps-xxl-3 d-flex justify-content-between align-items-center h-100">
                                    <div className="d-flex flex-column">
                                      <span className="d-flex fw-bold">
                                        Win Match
                                      </span>
                                      <span className="fw-bold price theme-text-secondary">
                                        {dashboardData?.winMatch}
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* dashboard features */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                          <div className="theme-box-shadow theme-border-radius p-2 theme-bg-white theme-transparent-bg">
                            <div className="row g-0">
                              <div className="col-4 overflow-hidden theme-border-radius">
                                <div className="overflow-hidden">
                                  <figure className="mb-0">
                                    <img
                                      src="assets/images/icons/dashboard-icon03.png"
                                      className="img-fluid"
                                      alt="dashboard icon 03"
                                      title="dashboard icon 03"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="ps-md-0 ps-xxl-3 d-flex justify-content-between align-items-center h-100">
                                  <div className="d-flex flex-column">
                                    <span className="d-flex fw-bold">
                                      Prizes Pool
                                    </span>
                                    <span className="fw-bold price theme-text-secondary">
                                      $ {dashboardData?.winPrize}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* dashboard features */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                          <div className="theme-box-shadow theme-border-radius p-2 theme-bg-white theme-transparent-bg">
                            <div className="row g-0">
                              <div className="col-4 overflow-hidden theme-border-radius">
                                <div className="overflow-hidden">
                                  <figure className="mb-0">
                                    <img
                                      src="assets/images/icons/dashboard-icon04.png"
                                      className="img-fluid"
                                      alt="dashboard icon 04"
                                      title="dashboard icon 04"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="ps-md-0 ps-xxl-3 d-flex justify-content-between align-items-center h-100">
                                  <div className="d-flex flex-column">
                                    <span className="d-flex fw-bold">
                                      Offer Amount
                                    </span>
                                    <span className="fw-bold price theme-text-secondary">
                                      <i className="bi bi-currency-dollar" />${" "}
                                      {dashboardData?.offerAmount}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Dashbord;
