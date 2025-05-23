import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import { GoDotFill } from "react-icons/go";
import Sidebar from "./Sidebar";

const Mybets = () => {
  let navigate = useNavigate();
  let userid = secureLocalStorage.getItem("userid");
  const [filterStatus, setFilterStatus] = useState("All");
  const [width, setWidth] = useState(window.innerWidth);
  let [errorstatus, seterrorstatus] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  // live dot animation
  useEffect(() => {
    const animate = () => {
      setOpacity((prev) => (prev === 1 ? 0.5 : 1));
    };

    const intervalId = setInterval(animate, 500);

    return () => clearInterval(intervalId);
  }, []);
  const style = {
    lineHeight: "12px",
    color: "red",
    display: "inline-flex",
    alignItems: "center",
    opacity: opacity,
    transition: "opacity 0.5s ease-in-out",
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
      navigate("/");
      localStorage.removeItem("loginstatus");
    };
  };

  // userBetsList handel get api
  let objdata = {
    userId: userid,
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["userBetsList"], //  MatchDetails
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}userBetsList`, {
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
  const filteredData =
    data?.data?.filter((item) =>
      filterStatus === "All"
        ? true
        : item?.matchId?.matchStatus === filterStatus
    ) || [];

  // **Pagination Logic**
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusBadge = (status) => {
    let color, text;
    if (status === "Live") {
      color = "red";
      text = "Live";
    } else if (status === "Upcoming") {
      color = "blue";
      text = "Upcoming";
    } else if (status === "Completed") {
      color = "green";
      text = "Completed";
    } else {
      color = "gray";
      text = "Unknown";
    }
    return (
      <span className="text-success">
        <span
          style={{
            lineHeight: "12px",
            color,
            border: `1px solid ${color}`,
            padding: "5px",
          }}
          className="d-inline-flex"
        >
          {text} <GoDotFill style={{ color }} />
        </span>
      </span>
    );
  };

  // date name formate
  const formatDateTime = (dateString, timeString) => {
    const date = new Date(`${dateString}T${timeString}`);
    return {
      date: date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  };

  // gotolivematch handel
  let gotolivematch = (obj) => {
    secureLocalStorage.removeItem("batamout");
    secureLocalStorage.removeItem("livematchid");
    secureLocalStorage.removeItem("team_obj");
    localStorage.setItem("livematchobj", JSON.stringify(obj));
    setTimeout(() => {
      navigate("/Cassino");
    }, 500);
  };

  return (
    <>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            {width < 991 ? "" : <Sidebar />}

            <div className="col-12 col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div>
                  <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow">
                    {/* my wallet section */}
                    <div className="d-flex justify-content-between p-3 wallet-head">
                      <span className="fs-5 fw-bold">My Bats</span>
                      <div className="dropdown mb-3">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ backgroundColor: "#571ce0", border: "none" }}
                        >
                          Filter: {filterStatus}
                        </button>
                        <ul className="dropdown-menu">
                          {["All", "Live", "Upcoming", "Completed"].map(
                            (status) => (
                              <li key={status}>
                                <button
                                  className="dropdown-item"
                                  onClick={() => setFilterStatus(status)}
                                >
                                  {status}
                                </button>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* my transaction section */}
                    <div className="mt-2">
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
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
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
                              {paginatedData.length === 0 ? (
                                <div
                                  className="wow animate__animated animate__fadeInUp"
                                  style={{ height: "400px" }}
                                >
                                  <div className="text-center mt-5">
                                    <img
                                      className="img-fluid"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                      }}
                                      alt="Data Not Found"
                                      src="./imglist/datanotfound_logo.png"
                                    />
                                  </div>
                                  <div className="group text-center">
                                    <h4 className="display-5 mb-3 font-black">
                                      Data Not Found
                                    </h4>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="table-responsive theme-border-radius">
                                    <table className="table table-hover">
                                      <thead>
                                        <tr>
                                          <th>SR</th>
                                          <th>Teams</th>
                                          <th>League</th>
                                          <th>Date/Time</th>
                                          <th>Bat Amount</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {paginatedData.map((items, index) => {
                                          const { date, time } = formatDateTime(
                                            items?.matchId?.start_date,
                                            items?.matchId?.start_time
                                          );
                                          return (
                                            <tr
                                              onClick={() =>
                                                gotolivematch(items)
                                              }
                                              key={index}
                                              style={{ cursor: "pointer" }}
                                            >
                                              <td>
                                                {(currentPage - 1) *
                                                  itemsPerPage +
                                                  index +
                                                  1}
                                              </td>
                                              <td className="text-center">
                                                {items?.matchId?.teamName1} ( A
                                                ) <br /> vs <br />{" "}
                                                {items?.matchId?.teamName2} ( B
                                                )
                                              </td>
                                              <td>
                                                {items?.matchId?.leagueName}
                                              </td>
                                              <td>
                                                {date}
                                                <br />
                                                {time}
                                              </td>
                                              <td>
                                                ${items?.amount} (
                                                {items?.outcome})
                                              </td>
                                              <td>
                                                {getStatusBadge(
                                                  items?.matchId?.matchStatus
                                                )}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>

                                  {/* Pagination Controls */}
                                  {totalPages > 1 && (
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                      <button
                                        className="btn btn-sm btn-outline-primary mx-1"
                                        onClick={() =>
                                          setCurrentPage((prev) =>
                                            Math.max(prev - 1, 1)
                                          )
                                        }
                                        disabled={currentPage === 1}
                                      >
                                        Previous
                                      </button>

                                      {[...Array(totalPages)]
                                        .map((_, index) => index + 1)
                                        .filter(
                                          (page) =>
                                            page >=
                                              Math.max(1, currentPage - 2) &&
                                            page <=
                                              Math.min(
                                                totalPages,
                                                currentPage + 2
                                              )
                                        )
                                        .map((page) => (
                                          <button
                                            key={page}
                                            className={`btn btn-sm mx-1 ${
                                              currentPage === page
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                            }`}
                                            onClick={() => setCurrentPage(page)}
                                          >
                                            {page}
                                          </button>
                                        ))}

                                      <button
                                        className="btn btn-sm btn-outline-primary mx-1"
                                        onClick={() =>
                                          setCurrentPage((prev) =>
                                            Math.min(prev + 1, totalPages)
                                          )
                                        }
                                        disabled={currentPage === totalPages}
                                      >
                                        Next
                                      </button>
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
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

export default Mybets;
