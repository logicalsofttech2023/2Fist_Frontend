import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";
import Sidebar from "./Sidebar";

const WithdrawList = () => {
  let navigate = useNavigate();
  let userid = secureLocalStorage.getItem("userid");
  let [errorstatus, seterrorstatus] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);



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

  // userWithdrawList handel get api
  let objdata = {
    userId: userid,
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["userWithdrawList"], //  MatchDetails
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}userWithdrawList`, {
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

  // **Filter Transaction Data**
  let transactiondata = data?.data || [];

  // **Pagination Logic**
  const totalPages = Math.ceil(transactiondata.length / itemsPerPage);
  const paginatedData = transactiondata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // date time formate
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
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
                      <span className="fs-5 fw-bold">Withdraw List</span>
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
                                    <button
                                      className="rounded-pill btn custom-btn-primary font-small primary-btn-effect"
                                      type="submit"
                                    >
                                      <Link to="/">Go To Home</Link>
                                    </button>
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
                                    {/* transaction table */}
                                    <table className="table table-hover">
                                      <thead>
                                        <tr>
                                          <th>Sl no.</th>
                                          {/* <th>Transaction Id</th> */}
                                          <th>Date/Time</th>
                                          <th>Amount</th>
                                          <th>Transaction Type</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {paginatedData?.map((items, index) => {
                                          const { date, time } = formatDateTime(
                                            items?.createdAt
                                          );
                                          return (
                                            <tr key={index}>
                                              <td>{index + 1}</td>
                                              {/* <td>{items?.transjectionId}</td> */}
                                              <td>{items?.date}</td>
                                              <td>${items?.amount}</td>
                                              <td>
                                                <span>{items?.status}</span>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
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

                                      {[...Array(totalPages)].map(
                                        (_, index) => (
                                          <button
                                            key={index}
                                            className={`btn btn-sm mx-1 ${
                                              currentPage === index + 1
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                            }`}
                                            onClick={() =>
                                              setCurrentPage(index + 1)
                                            }
                                          >
                                            {index + 1}
                                          </button>
                                        )
                                      )}

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

export default WithdrawList;
