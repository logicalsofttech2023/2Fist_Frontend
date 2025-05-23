import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import Sidebar from "../Sidebar";
import { ProgressSpinner } from "primereact/progressspinner";

import axios from "axios";

const Canceled_maches = () => {
  let navigate = useNavigate();
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  const [opacity, setOpacity] = useState(1);
  let [errorStatus, setErrorStatus] = useState(true);
  const [canceledMashes, setCanceledMashes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const animate = () => {
      setOpacity((prev) => (prev === 1 ? 0.5 : 1));
    };

    const intervalId = setInterval(animate, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
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
        "https://backend.2fist.com/user/api/coordinatorTeamList",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        console.log("Full Response:", res.data.data);

        // Filter only the completed matches
        const completedMatches = res.data.data.filter(
          (match) => match.matchStatus === "Abandon"
        );

        console.log("Filtered Completed Matches:", completedMatches);
        setCanceledMashes(completedMatches);
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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      {/* dashboard content section */}
      <section className="dashboard-section">
        {/* dashboard tab content */}
        <div className="container">
          <div className="row justify-content-center">
            <Sidebar />
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
                        <span className="fs-5 fw-bold">
                          Cancelled Maches List
                        </span>
                      </div>
                      {/* my booking section */}
                      {isLoading ? (
                        <div className="text-center mt-5">
                          <ProgressSpinner
                            style={{ width: "100px", height: "100px" }}
                            strokeWidth="4"
                            animationDuration=".5s"
                          />
                        </div>
                      ) : (
                        <div className="p-0 p-lg-3">
                          <div className="tble_wrap">
                            <div className="table-responsive theme-border-radius">
                              {/* booking table */}
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Teams</th>
                                    <th>Match</th>
                                    <th>Category</th>
                                    <th>Start Date</th>
                                    <th>Start Time</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {canceledMashes.length > 0 ? (
                                    canceledMashes.map((match, index) => (
                                      <tr key={match._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                          <figure className="mb-0 icon-bg">
                                            {match?.logo2 === " " ||
                                            match?.logo1 === null ||
                                            match?.logo1 === undefined ? (
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
                                            ) : match?.logo1?.startsWith(
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
                                                src={`${process.env.REACT_APP_IMG_URL}${match?.logo1}`}
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
                                                src={`${process.env.REACT_APP_IMG_URL}${match?.logo1}`}
                                              />
                                            )}
                                          </figure>
                                          VS <br />
                                          <figure className="mb-0 icon-bg">
                                            {match?.logo2 === " " ||
                                            match?.logo2 === null ||
                                            match?.logo2 === undefined ? (
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
                                            ) : match?.logo2?.startsWith(
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
                                                src={`${process.env.REACT_APP_IMG_URL}${match?.logo2}`}
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
                                                src={`${process.env.REACT_APP_IMG_URL}${match?.logo2}`}
                                              />
                                            )}
                                          </figure>
                                        </td>
                                        <td>
                                          {match.teamName1} vs {match.teamName2}
                                        </td>
                                        <td>{match.categoryId.categoryName}</td>
                                        <td>{formatDate(match.start_date)}</td>
                                        <td>{formatTime(match.start_time)}</td>
                                        <td className="text-success">
                                          {match.matchStatus}
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan="7" className="text-center">
                                        No Canceled Matches Found
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
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

export default Canceled_maches;
