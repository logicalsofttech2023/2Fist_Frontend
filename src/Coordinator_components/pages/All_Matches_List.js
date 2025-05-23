import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Sidebar from "../Sidebar";



const All_Matches_List = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  const [width, setWidth] = useState(window.innerWidth);
  const [amaunt, getamaunt] = useState(1000);
  let [showprofiledata, setshowprofiledata] = useState({});
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [show_teamlist, setshow_teamlist] = useState([]);
  const [dashboardData, setDashboardData] = useState("");

  useEffect(() => {
    dashboardCount();
  }, []);

  const dashboardCount = async () => {
    const data = {
      coordinatorId: coordinator_userid,
    };
    const res = await axios.post(
      "https://backend.2fist.com/user/api/coordinatorDashboardCount",
      data
    );

    if (res.status === 200) {
      setDashboardData(res?.data);
    }
  };

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
    toast.success("Amaunt Add Successfully");
    localStorage.setItem("amount_store", amaunt);
  };

  // get coordinatorTeamList list data
  useEffect(() => {
    getcoordinaitorlist();
  }, []);
  let getcoordinaitorlist = () => {
    let objdata = {
      coordinatorId: coordinator_userid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}coordinatorTeamList`, objdata)
      .then((res) => {
        
        if (res.data.result == "true") {
          setshow_teamlist(res.data.data);
        } else {
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  // all match counts
  let livematch_count = show_teamlist.filter((items) => {
    return items.matchStatus === "Live";
  });
  let upcomingmatch_count = show_teamlist.filter((items) => {
    return items.matchStatus === "Upcoming";
  });
  let abandonmatch_count = show_teamlist.filter((items) => {
    return items.matchStatus === "Abandon";
  });
  let completedmatch_count = show_teamlist.filter((items) => {
    return items.matchStatus === "Completed";
  });

  return (
    <>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            {width < 991 ? (
              ""
            ) : (
              <Sidebar/>
            )}

            <div className="col-12 col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dashboard-tab-pane"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                  tabIndex={0}
                >
                  <div className="p-3">
                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                      {/* my wallet section */}
                      <div className="d-flex justify-content-between p-3 wallet-head">
                        <span className="fs-5 fw-bold">Maches List</span>
                      </div>
                      {/* my booking section */}
                      <div className="p-0 p-lg-3 row">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/all_Teamsmatch_list">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                src="assets/images/icons/dashboard-icon01.png"
                                alt="images"
                                className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">All Maches</p>
                                <h5 className="my-0">
                                  {show_teamlist?.length
                                    ? show_teamlist.length
                                    : 0}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/live_maches">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                src="assets/images/icons/dashboard-icon03.png"
                                alt="images"
                                className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">Live Maches</p>
                                <h5 className="my-0">
                                  {dashboardData?.liveMatchesCount}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/today_maches">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                width={"80px"}
                                height={"80px"}
                                src="assets/images/icons/dashboard-icon01.png"
                                alt="images"
                                className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">Today Maches</p>
                                <h5 className="my-0">
                                  {dashboardData?.todayMatchesCount}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/tomorrowMaches">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                width={"80px"}
                                height={"80px"}
                                src="assets/images/icons/dashboard-icon01.png"
                                alt="images"
                                className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">UpComing Maches</p>
                                <h5 className="my-0">
                                  {dashboardData?.upcomingCount}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>

                        

                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/completed_maches">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                width={"80px"}
                                height={"80px"}
                                src="https://www.2fist.com/logo/Completed-PNG-File.png"
                                alt="images"
                                className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">Completed Maches</p>
                                <h5 className="my-0">
                                  {dashboardData?.completedMatchesCount}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                          <Link to="/canceled_maches">
                            <div className="p-4 theme-transparent-bg theme-border-radius text-center">
                              <img
                                width={"100px"}
                                height={"80px"}
                                src="https://www.2fist.com/logo/cancelled-png.png"
                                alt="images"
                                // className="rounded-circle"
                              />
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">Canceled Maches</p>
                                <h5 className="my-0">
                                  {dashboardData?.cancelledMatchesCount}
                                </h5>
                              </div>
                            </div>
                          </Link>
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

export default All_Matches_List;
