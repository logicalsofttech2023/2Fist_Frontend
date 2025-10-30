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

const TransactionList = () => {
  let navigate = useNavigate();
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  let [show_teamlist, setshow_teamlist] = useState([]);
  let [errorstatus, setErrorStatus] = useState(true);
  const [transactionData, setTransactionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // logouthandle
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

  useEffect(() => {
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
  }, []);

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

  useEffect(() => {
    console.log("Coordinator UserID:", coordinator_userid); // Debugging
    if (coordinator_userid) {
      fetchWithdrawData();
    } else {
      console.error("Coordinator ID is missing");
      setIsLoading(false);
    }
  }, [coordinator_userid]);

  const fetchWithdrawData = async () => {
    if (!coordinator_userid) {
      console.error("Error: coordinator_userid is undefined or empty");
      setIsLoading(false);
      return;
    }

    const data = {
      coordinatorId: coordinator_userid,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}coordinatorTransjectionList`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        console.log(res);
        console.log("Response:", res.data.data);
        setTransactionData(res.data.data);
        setErrorStatus(false);
      } else {
        setErrorStatus(true);
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setErrorStatus(true);
    } finally {
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(transactionData.length / itemsPerPage);
  const paginatedData = transactionData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate1 = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
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
                <span className="fs-5 fw-bold">Transaction List</span>
              </div>
              {isLoading ? (
                <div className="text-center mt-5">
                  <ProgressSpinner
                    style={{ width: "100px", height: "100px" }}
                    strokeWidth="4"
                    animationDuration=".5s"
                  />
                </div>
              ) : errorstatus ? (
                <section className="tournaments py-5">
                  <div className="container">
                    <div className="text-center mt-5">
                      <img
                        className="img-fluid"
                        style={{ width: "100px", height: "100px" }}
                        alt="Data not found"
                        src="./imglist/datanotfound_logo.png"
                      />
                    </div>
                    <div className="group text-center">
                      <h4 className="display-5 mb-3 font-black">
                        No Transaction List Found
                      </h4>
                    </div>
                  </div>
                </section>
              ) : paginatedData.length === 0 ? (
                <div
                  className="wow animate__animated animate__fadeInUp"
                  style={{ height: "400px" }}
                >
                  <div className="text-center mt-5">
                    <img
                      className="img-fluid"
                      style={{ width: "100px", height: "100px" }}
                      alt="Data not found"
                      src="./imglist/datanotfound_logo.png"
                    />
                  </div>
                  <div className="group text-center">
                    <h4 className="display-5 mb-3 font-black">
                      No Transaction List Found
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>SR</th>
                        <th>Transaction Id</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData?.map((items, index) => (
                        <tr className="text-right" key={index}>
                          <td>{index + 1}</td>
                          <td>{items?.transjectionId}</td>
                          <td>$ {items?.amount}</td>
                          <td> {items?.tranjectionType}</td>
                          <td>{formatDate1(items?.createdAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {totalPages > 1 && (
                    <div className="d-flex justify-content-center align-items-center mt-3">
                      <button
                        className="btn btn-sm btn-outline-primary mx-1"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
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
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionList;