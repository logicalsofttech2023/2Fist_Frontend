import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { MdEditDocument } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import Sidebar from "../Sidebar";

const GoLiveTeams = () => {
  let navigate = useNavigate();
  let [errorstatus, seterrorstatus] = useState(true);
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");

  // coordinatorTeamList handel get api
  let objdata = {
    coordinatorId: coordinator_userid,
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["coordinatorTeamList"], //  MatchDetails
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}coordinatorTeamList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objdata),
      }).then((res) => {
        if (!res.ok) {
          seterrorstatus(false);
        }
        return res.json();
      }),

    onError: (err) => {},
  });

  const today = new Date().toISOString().split("T")[0];
  // const todayData = data?.data?.filter((item) => item.start_date === today);
  const todayData = data?.data?.filter((item) => {
    const start = new Date(item.start_date);
    const end = new Date(item.expire_date);
    const current = new Date(today);
    return current >= start && current <= end;
  });
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
      navigate("/coordinatorLogin");
      secureLocalStorage.removeItem("coordinator_loginstatus");
      secureLocalStorage.removeItem("coordinator_userid");
      localStorage.removeItem("loginstatus");
    };
  };

  let formatDate = (dateString) => {
    let date = new Date(dateString);

    // Get the day with ordinal suffix
    let day = date.getDate();
    let suffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    // Get the month
    let month = date.toLocaleString("default", { month: "long" });

    // Get the year
    let year = date.getFullYear();

    // Format the date in the desired format
    return `${day}${suffix(day)} ${month}, ${year}`;
  };

  let [windowSize, setWindowSize] = useState({
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

  // got to edit
  let gotolivematch = (obj) => {
    console.log("obj ", obj);
    let dataobj = {
      coordinatorId: obj?.coordinatorId,
      matchId: obj?._id,
    };
    secureLocalStorage.setItem("data_live", JSON.stringify(dataobj));
    setTimeout(() => {
      navigate("/livematchpage");
    }, 500);
  };

  return (
    <>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            {windowSize?.width < 991 ? "" : <Sidebar />}
            <div className="col-12 col-lg-9">
              <div className="d-flex justify-content-between p-3 wallet-head">
                <span className="fs-5 fw-bold">Go Live Teams List</span>
              </div>

              {isLoading == true ? (
                <div className="text-center mt-5">
                  <ProgressSpinner
                    style={{ width: "100px", height: "100px" }}
                    strokeWidth="4"
                    animationDuration=".5s"
                  />
                </div>
              ) : (
                <>
                  {errorstatus == false ? (
                    <section className="tournaments py-5">
                      <div className="container">
                        <>
                          <div className="text-center mt-5">
                            <img
                              className="img-fluid"
                              style={{ width: "100px", height: "100px" }}
                              alt="Games team"
                              src="./imglist/datanotfound_logo.png"
                            />
                          </div>

                          <div className="group text-center">
                            <h4 className="display-5 mb-3 font-black">
                              Data not found
                            </h4>
                          </div>
                        </>
                      </div>
                    </section>
                  ) : (
                    <>
                      {todayData?.length === 0 ? (
                        <>
                          <div
                            className="wow animate__animated wow animate__fadeInUp"
                            style={{ height: "400px" }}
                          >
                            <div className="text-center mt-5">
                              <img
                                className="img-fluid"
                                style={{ width: "100px", height: "100px" }}
                                alt="Games team"
                                src="./imglist/datanotfound_logo.png"
                              />
                            </div>

                            <div className="group text-center">
                              <h4 className="display-5 mb-3 font-black">
                                No Today Match Found
                              </h4>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>SR</th>
                                  <th style={{ width: "130px" }}>Images</th>
                                  <th style={{ width: "130px" }}>Teams Name</th>
                                  <th style={{ width: "130px" }}>
                                    Short Name{" "}
                                  </th>
                                  <th style={{ width: "130px" }}>Category</th>
                                  <th style={{ width: "130px" }}>Start Date</th>
                                  <th style={{ width: "130px" }}>Start Time</th>
                                  <th style={{ width: "130px" }}>
                                    League Name
                                  </th>
                                  <th style={{ width: "130px" }}>Action</th>
                                </tr>
                              </thead>

                              <tbody>
                                {todayData?.map((items, index) => {
                                  return (
                                    <tr className="text-center" key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <figure className="mb-0 icon-bg">
                                          {items?.logo2 === " " ||
                                          items?.logo1 === null ||
                                          items?.logo1 === undefined ? (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src="./logo/newlogo.png"
                                            />
                                          ) : items?.logo1?.startsWith(
                                              "https://"
                                            ) ? (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src={`${process.env.REACT_APP_IMG_URL}${items?.logo1}`}
                                              onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                                            />
                                          ) : (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src={`${process.env.REACT_APP_IMG_URL}${items?.logo1}`}
                                              onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                                            />
                                          )}
                                        </figure>
                                        VS <br />
                                        <figure className="mb-0 icon-bg">
                                          {items?.logo2 === " " ||
                                          items?.logo2 === null ||
                                          items?.logo2 === undefined ? (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src="./logo/newlogo.png"
                                            />
                                          ) : items?.logo2?.startsWith(
                                              "https://"
                                            ) ? (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src={`${process.env.REACT_APP_IMG_URL}${items?.logo2}`}
                                              onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                                            />
                                          ) : (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                              }}
                                              className="img-fluid"
                                              alt="Games team"
                                              src={`${process.env.REACT_APP_IMG_URL}${items?.logo2}`}
                                              onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                                            />
                                          )}
                                        </figure>
                                      </td>
                                      <td>
                                        {items?.teamName1} <br /> VS <br />{" "}
                                        {items?.teamName2}{" "}
                                      </td>
                                      <td>
                                        {items?.sortName1} <br /> VS <br />{" "}
                                        {items?.sortName2}{" "}
                                      </td>
                                      <td>{items?.categoryId?.categoryName}</td>
                                      <td>{formatDate(items?.createdAt)}</td>
                                      <td>{items?.start_time}</td>
                                      <td>{items?.leagueName}</td>
                                      <td
                                        onClick={() => gotolivematch(items)}
                                        style={{ cursor: "pointer" }}
                                      >
                                        <span style={{ border: "1px solid" }}>
                                          Go-Live
                                        </span>{" "}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoLiveTeams;
