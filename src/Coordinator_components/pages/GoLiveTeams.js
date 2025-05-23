import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { MdEditDocument } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
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
  console.log(today);
  const todayData = data?.data?.filter((item) => item.start_date === today);

  

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
            {windowSize?.width < 991 ? (
              ""
            ) : (
              <div className="col-12 col-lg-3">
                <div className="dashboard-tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link to="/coordinator_dashboard">
                        <button
                          className="nav-link active"
                          id="deposit-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#deposit-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="deposit-tab-pane"
                          aria-selected="false"
                        >
                          <i className="bi bi-cash-coin fs-5 me-2 align-middle" />
                          Dashboard
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/addTeams">
                        <button
                          className="nav-link "
                          id="dashboard-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#dashboard-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="dashboard-tab-pane"
                          aria-selected="true"
                        >
                          <i className="bi bi-speedometer fs-5 me-2 align-middle" />
                          Add Teams
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/coordinator_Teams_list">
                        <button
                          className="nav-link "
                          id="myBets-tab"
                          type="button"
                          role="tab"
                          aria-controls="myBets-tab-pane"
                          aria-selected="false"
                        >
                          <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                          My All Games
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/commission_List">
                        <button
                          className="nav-link"
                          id="withdraw-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#withdraw-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="withdraw-tab-pane"
                          aria-selected="false"
                        >
                          <i className="bi bi-wallet fs-5 me-2 align-middle" />
                          My Commission
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/all_Matches_List">
                        <button
                          className="nav-link "
                          id="withdraw-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#withdraw-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="withdraw-tab-pane"
                          aria-selected="false"
                        >
                          <i className="bi bi-wallet fs-5 me-2 align-middle" />
                          My All Maches
                        </button>
                      </Link>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                                            <Link to="/transactions_history">
                                                <button
                                                    className="nav-link"
                                                    id="buyCrypto-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#buyCrypto-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="buyCrypto-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-coin fs-5 me-2 align-middle" />
                                                    Transactions History
                                                </button>
                                            </Link>
                                        </li> */}
                    {/* <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="affiliate-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#affiliate-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="affiliate-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-file-person fs-5 me-2 align-middle" />
                                            Affiliate
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="transactions-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#transactions-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="transactions-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-receipt fs-5 me-2 align-middle" />
                                            transactions
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="setting-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#setting-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="setting-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-gear fs-5 me-2 align-middle" />
                                            Setting
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="password-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#password-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="password-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-person-check fs-5 me-2 align-middle" />
                                            Password
                                        </button>
                                    </li> */}
                    <li
                      onClick={logout_handel}
                      className="nav-item"
                      role="presentation"
                    >
                      <button
                        className="nav-link"
                        type="button"
                        role="tab"
                        aria-controls="password-tab-pane"
                      >
                        <i className="bi bi-person-check fs-5 me-2 align-middle" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
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
                                Datas Not Found
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
