import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import Sidebar from "../Sidebar";

const Commission_List = () => {
  let navigate = useNavigate();
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  let [ComissionList, setComissionList] = useState([]);
  let [errorstatus, seterrorstatus] = useState(true);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  let logout_handel = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
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

  // coordinatorComissionList get list
  useEffect(() => {
    let objdata = {
      coordinatorId: coordinator_userid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}coordinatorComissionList`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          setComissionList(res?.data?.data);
        } else {
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  }, []);

  // coordinatorComissionList handel get api
  let objdata = {
    coordinatorId: coordinator_userid,
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["coordinatorComissionList"], //  MatchDetails
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}\coordinatorComissionList`, {
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

  const totalPages = Math.ceil(data?.data?.length / itemsPerPage);
  const paginatedData = data?.data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  return (
    <>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            {windowSize?.width < 991 ? "" : <Sidebar />}
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
                        <span className="fs-5 fw-bold">Commission List</span>
                      </div>
                      {/* my booking section */}
                      <div className="p-0 p-lg-3">
                        <div className="tble_wrap">
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
                                  {paginatedData?.length === 0 ? (
                                    <>
                                      <div
                                        className="wow animate__animated wow animate__fadeInUp"
                                        style={{ height: "400px" }}
                                      >
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
                                            Data Not Found
                                          </h4>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="table-responsive theme-border-radius">
                                        {/* booking table */}
                                        <table className="table">
                                          <thead>
                                            <tr>
                                              <th>SR</th>
                                              <th>Images</th>
                                              <th>Teams Name</th>

                                              <th>Total Pot</th>
                                              <th>Coordinator Commission</th>

                                              <th>Date</th>
                                            </tr>
                                          </thead>

                                          <tbody>
                                            {paginatedData?.map((items, index) => {
                                              return (
                                                <tr key={index}>
                                                  <td>{index + 1}</td>
                                                  <td>
                                                    <figure className="mb-0 icon-bg">
                                                      {items?.logo2 === "" ||
                                                      items?.logo1 === null ||
                                                      items?.logo1 ===
                                                        undefined ? (
                                                        <img
                                                          style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                          }}
                                                          className="img-fluid"
                                                          alt="Games team"
                                                          src="https://www.2fist.com/logo/newlogo.png"
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
                                                      items?.logo2 ===
                                                        undefined ? (
                                                        <img
                                                          style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                          }}
                                                          className="img-fluid"
                                                          alt="Games team"
                                                          src="https://www.2fist.com/logo/newlogo.png"
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
                                                    {items?.matchId?.teamName1}{" "}
                                                    <br /> VS <br />{" "}
                                                    {items?.matchId?.teamName2}{" "}
                                                  </td>
                                                  <td>$ {items?.totalPot}</td>

                                                  <td>
                                                    $
                                                    {parseFloat(
                                                      items?.coordinatorComission ||
                                                        0
                                                    ).toFixed(2)}
                                                  </td>

                                                  <td style={{ width: "16%" }}>
                                                    {formatDate(
                                                      items?.createdAt
                                                    )}
                                                  </td>
                                                </tr>
                                              );
                                            })}
                                          </tbody>
                                        </table>
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
                            page >= Math.max(1, currentPage - 2) &&
                            page <= Math.min(totalPages, currentPage + 2)
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
                                              disabled={
                                                currentPage === totalPages
                                              }
                                            >
                                              Next
                                            </button>
                                          </div>
                                        )}
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

export default Commission_List;
