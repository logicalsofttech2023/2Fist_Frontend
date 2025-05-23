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
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineAddCard } from "react-icons/md";

const Coordinator_Header = () => {
  const navigate = useNavigate();
  let userid = secureLocalStorage.getItem("userid")
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid")
  let coordinatorloginstatus = secureLocalStorage.getItem("coordinatorloginstatus");
  // let showprofiledata = secureLocalStorage.getItem("userdata")
  let [showprofiledata, setshowprofiledata] = useState({})

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
      setIsNavCollapsed(!isNavCollapsed)
      navigate("/coordinatorLogin");
      secureLocalStorage.removeItem("coordinatorloginstatus");
      secureLocalStorage.removeItem("coordinator_userid");
    };
  };


  // login handel
  let Loginhandel = () => {
    setIsNavCollapsed(!isNavCollapsed)
    navigate("/login");
  };
  let coordinatorLoginhandel = () => {
    setIsNavCollapsed(!isNavCollapsed)
    navigate("/coordinatorLogin");
  };


  // get data getUser_profile
  useEffect(() => {
    let objdata = {
      "coordinatorId": coordinator_userid
    }
    axios.post(`${process.env.REACT_APP_API_KEY}getCoordinatorProfile`, objdata).then((res) => {
      if (res.data.result == "true") {
        setshowprofiledata(res.data.data[0])
      } else {

      }
    }).catch((error) => {
      if (error.response && error.response.status === 400) {
      } else {
      }
    })
  }, [])

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  let hidesetIsNavCollapsed = (path) => {
    setIsNavCollapsed(!isNavCollapsed)
    navigate(path)
  }

  // hide header controll
  let hidecontroll = (path) => {
    setIsNavCollapsed(!isNavCollapsed)
    navigate(path)
  }

  return (
    <>
      <header className="navbar navbar-expand-lg py-lg-0 py-2 px-0 theme-box-shadow header">
        <nav className="container">
          <a className="navbar-brand" >
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
                style={{ float: "right", position: 'relative', zIndex: 1, top: "5px", right: "2px" }}
                className="navbar-toggler theme-bg-secondary border-0 menu-toggle"
                type="button"
                aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}
              >
                <span className="icon-bars" />
              </button>
            </div>
          </a>

          {windowSize?.width < 991 ? (

            coordinatorloginstatus === "true" ? (
              <>
                <div
                  className={`${isNavCollapsed ? "collapse" : ""
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
                        onClick={() => hidesetIsNavCollapsed("/coordinator_dashboard")}
                      >
                        <FaUserCircle style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>Dashboard</span>
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
                        onClick={() => hidesetIsNavCollapsed("/addTeams")}
                      >
                        <MdOutlineAddCard style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>Add Teams</span>
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
                        onClick={() => hidesetIsNavCollapsed("/coordinator_Teams_list")}
                      >
                        <RiTeamFill style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>My Teams</span>
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
                        onClick={() => hidesetIsNavCollapsed("/commission_List")}
                      >
                        <MdManageHistory style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>Commission</span>
                      </span>
                    </p>
                    {/* <p>
                      <span
                        style={{
                          border: "1px solid",
                          padding: "2px 20px",
                          borderRadius: "10px",
                          width: "152px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                        onClick={() => hidesetIsNavCollapsed("/transactions_history")}
                      >
                        <MdOutlinePayments style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>Transactions</span>
                      </span>
                    </p> */}
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
                        onClick={() => hidesetIsNavCollapsed("/all_Matches_List")}
                      >
                        <MdOutlinePayments style={{ fontSize: "17px" }} />{" "}
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>All Matches</span>
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
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>Sign-Out</span>
                      </span>
                    </p>
                  </div>
                </div>
              </>

            ) : (

              <>
                <div
                  className={`${isNavCollapsed ? "collapse" : ""
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
                        <span style={{ fontSize: "10px", paddingLeft: "5px" }}>
                        User Login/Register
                        </span>
                      </span>
                    </p>

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
                <a onClick={() => hidecontroll("/coordinator_dashboard")}>
                  {
                    showprofiledata?.coordinatorProfile
                      === " " || showprofiledata?.coordinatorProfile
                      === null || showprofiledata?.coordinatorProfile
                      === undefined ? (
                      <img
                        style={{ marginTop: "4px", width: "50px", height: "50px" }}
                        alt="images"
                        className="rounded-circle"
                        src="./logo/newlogo.png"
                      />
                    ) : showprofiledata?.coordinatorProfile
                      ?.startsWith("https://") ? (
                      <img
                        style={{ marginTop: "4px", width: "50px", height: "50px" }}
                        alt="images"
                        className="rounded-circle"
                        src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.coordinatorProfile
                          }`}
                      />
                    ) : (
                      <img
                        style={{ marginTop: "4px", width: "50px", height: "50px" }}
                        alt="images"
                        className="rounded-circle"
                        src={`${process.env.REACT_APP_IMG_URL}${showprofiledata?.coordinatorProfile
                          }`}
                      />
                    )
                  }
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => hidecontroll("/coordinator_dashboard")} className="nav-link nav-effect">
                  {showprofiledata?.coordinatorName} Coordinator
                </a>
              </li>
            </ul>
          )}


          {/* </div>  */}

        </nav>
      </header>
    </>
  );
};

export default Coordinator_Header;
