import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoHome, IoLogOut, IoSettings } from "react-icons/io5";
import { MdManageHistory, MdOutlinePayments } from "react-icons/md";
import { SiGnuprivacyguard, SiNintendogamecube } from "react-icons/si";
import { TbLogin2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";

const Header = () => {
  const navigate = useNavigate();
  let userid = secureLocalStorage.getItem("userid");
  let loginstatus = localStorage.getItem("loginstatus");
  // let showprofiledata = secureLocalStorage.getItem("userdata")

  const [showprofiledata, setProfileData] = useState(() => {
    // Get the initial data from secureLocalStorage
    return secureLocalStorage.getItem("userdata") || {};
  });

  useEffect(() => {
    // Set up a listener for manual updates
    const handleProfileUpdate = () => {
      const updatedData = secureLocalStorage.getItem("userdata");
      setProfileData(updatedData);
    };
    window.addEventListener("profileDataUpdated", handleProfileUpdate);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("profileDataUpdated", handleProfileUpdate);
    };
  }, [showprofiledata]);

  // console.log("userprofiledata", userdata?.userProfile)
  // let [showprofiledata, setshowprofiledata] = useState({})

  // logout handel
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
      setIsNavCollapsed(!isNavCollapsed);
      navigate("/");
      localStorage.removeItem("loginstatus");
      localStorage.clear();

    };
  };

  // login handel
  let Loginhandel = () => {
    setIsNavCollapsed(!isNavCollapsed);
    navigate("/login");
  };
  let coordinatorLoginhandel = () => {
    setIsNavCollapsed(!isNavCollapsed);
    navigate("/coordinatorLogin");
  };

  // get data getUser_profile
  // useEffect(() => {
  //   let objdata = {
  //     "userId": userid
  //   }
  //   axios.post("http://157.66.191.24:3051/user/api/getUser_profile", objdata).then((res) => {
  //     if (res.data.result == "true") {
  //       // console.log(res.data.data[0])
  //       setshowprofiledata(res.data.data[0])
  //     } else {

  //     }
  //   }).catch((error) => {
  //     if (error.response && error.response.status === 400) {
  //     } else {
  //     }
  //   })
  // }, [])

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let hidesetIsNavCollapsed = (path) => {
    setIsNavCollapsed(!isNavCollapsed);
    navigate(path);
  };

  // hide header controll
  let hidecontroll = (path) => {
    setIsNavCollapsed(!isNavCollapsed);
    navigate(path);
  };

  return (
    <>
      <header className="navbar navbar-expand-lg py-lg-0 py-2 px-0 theme-box-shadow header">
        <nav className="container">
          <a className="navbar-brand">
            <div className="btn-wrapper">
              <Link to="/">
                <img
                  src="./logo/logonew.png"
                  className="img-fluid"
                  style={{ width: "15%" }}
                  alt="Brand Logo"
                  title="Brand Logo"
                />
              </Link>

              <button
                style={{
                  float: "right",
                  position: "relative",
                  zIndex: 1,
                  top: "5px",
                  right: "2px",
                }}
                className="navbar-toggler theme-bg-secondary border-0 menu-toggle"
                type="button"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}
              >
                <span className="icon-bars" />
              </button>
            </div>
            {/* <img class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse wow animate__animated animate__fadeInRight`} src="./imglist/menuimg.png" alt="" style={{ height: "300px", position: "absolute", right: "-50px", top: "5px", zIndex: 0 }} /> */}
          </a>

          {/* <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}> */}

          {windowSize?.width < 991 ? (
            loginstatus === "true" ? (
              <>
                <div
                  className={`${
                    isNavCollapsed ? "collapse" : ""
                  } navbar-collapse wow animate__animated animate__fadeInRight`}
                  style={{
                    position: "absolute",
                    height: "300px",
                    right: "-50px",
                    top: "0px",
                    zIndex: 0,
                  }}
                >
                  <img
                    src="./imglist/menuimg.png"
                    alt=""
                    style={{
                      height: "300px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "85px",
                      left: "80px",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      overflowY: "auto", // Enable vertical scrolling
                      maxHeight: "175px", // Limit height to show only 4 items
                    }}
                  >
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() => hidesetIsNavCollapsed("/")}
                      >
                        <IoHome style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Home
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() => hidesetIsNavCollapsed("/dashboard")}
                      >
                        <FaUserCircle style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          User profile
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() => hidesetIsNavCollapsed("/mybets")}
                      >
                        <SiNintendogamecube style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          My Bet
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() => hidesetIsNavCollapsed("/bat_history")}
                      >
                        <MdManageHistory style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Bet History
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() =>
                          hidesetIsNavCollapsed("/transaction_user")
                        }
                      >
                        <MdOutlinePayments style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Transactions
                        </span>
                      </span>
                    </p>

                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                      >
                        <SiGnuprivacyguard style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Privacy and Safety
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                      >
                        <IoSettings style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Settings
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={logout_handel}
                      >
                        <IoLogOut style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Sign-Out
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${
                    isNavCollapsed ? "collapse" : ""
                  } navbar-collapse wow animate__animated animate__fadeInRight`}
                  style={{
                    position: "absolute",
                    height: "300px",
                    right: "-50px",
                    top: "0px",
                    zIndex: 0,
                  }}
                >
                  <img
                    src="./imglist/menuimg.png"
                    alt=""
                    style={{
                      height: "300px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "85px",
                      left: "80px",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      overflowY: "auto", // Enable vertical scrolling
                      maxHeight: "175px", // Limit height to show only 4 items
                    }}
                  >
                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px", // Set a fixed width for all items
                          display: "inline-block", // Ensures span respects the width
                          textAlign: "left", // Adjust text alignment if necessary
                        }}
                        onClick={() => hidesetIsNavCollapsed("/")}
                      >
                        <IoHome style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Home
                        </span>
                      </span>
                    </p>

                    {loginstatus === "true" ? (
                      <p>
                        <span
                          style={{
                            border: "1px solid",
                            padding: "2px 20px",
                            borderRadius: "10px",
                            width: "152px", // Set a fixed width for all items
                            display: "inline-block", // Ensures span respects the width
                            textAlign: "left", // Adjust text alignment if necessary
                          }}
                        >
                          <TbLogin2 style={{ fontSize: "17px" }} />{" "}
                          <span
                            style={{ fontSize: "10px", paddingLeft: "5px" }}
                          >
                            User profile
                          </span>
                        </span>
                      </p>
                    ) : (
                      <p>
                        <span
                          style={{
                            border: "1px solid",
                            padding: "2px 20px",
                            borderRadius: "10px",
                            width: "152px", // Same fixed width for consistency
                            display: "inline-block",
                            textAlign: "left",
                          }}
                          onClick={Loginhandel}
                        >
                          <TbLogin2 style={{ fontSize: "17px" }} />{" "}
                          <span
                            style={{ fontSize: "10px", paddingLeft: "5px" }}
                          >
                            User Login/Register
                          </span>
                        </span>
                      </p>
                    )}

                    <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px", // Same fixed width for consistency
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={coordinatorLoginhandel}
                      >
                        <TbLogin2 style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                          Fight Coordinator Login/Register
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => hidesetIsNavCollapsed("/")}
                  className="nav-link nav-effect"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                {loginstatus === "true" ? (
                  <Link to="/dashboard">
                    {showprofiledata?.userProfile === " " ||
                    showprofiledata?.userProfile === null ||
                    showprofiledata?.userProfile === undefined ? (
                      <img
                        style={{
                          marginTop: "4px",
                          width: "50px",
                          height: "50px",
                        }}
                        alt="images"
                        className="rounded-circle"
                        src="./logo/newlogo.png"
                      />
                    ) : showprofiledata?.userProfile?.startsWith("https://") ? (
                      <img
                        style={{
                          marginTop: "4px",
                          width: "50px",
                          height: "50px",
                        }}
                        alt="images"
                        className="rounded-circle"
                        src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.userProfile}`}
                        onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                      />
                    ) : (
                      <img
                        style={{
                          marginTop: "4px",
                          width: "50px",
                          height: "50px",
                        }}
                        alt="images"
                        className="rounded-circle"
                        src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.userProfile}`}
                        onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    onClick={Loginhandel}
                    className="nav-link nav-effect"
                    to="/contact"
                  >
                    User Login/Register
                  </a>
                )}
              </li>
              <li className="nav-item">
                <a
                  onClick={coordinatorLoginhandel}
                  className="nav-link nav-effect"
                  to="/contact"
                >
                  Fight Coordinator Login/Register
                </a>
              </li>
              {loginstatus ? <li className="nav-item"> <Link className="nav-link nav-effect" to={"/dashboard"} >Dashboard</Link> </li> : null}
            </ul>
          )}

          {/* </div>  */}
        </nav>
      </header>
    </>
  );
};

export default Header;
