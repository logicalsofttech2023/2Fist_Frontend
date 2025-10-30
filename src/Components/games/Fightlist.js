import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import secureLocalStorage from "react-secure-storage";

const Fightlist = () => {
  let navigate = useNavigate();
  let uid = useParams();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  // get data from match list
  const objdata = {
    categoryId: uid?.uid,
    currentDate: formattedDate,
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_KEY}MatchList`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(objdata),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       console.error("Error fetching MatchList:", err);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [uid, formattedDate]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}MatchList`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(objdata),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching MatchList:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <>
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
                <h4 className="display-5 mb-3 font-black">No Match Found</h4>
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
      </>
    );
  }

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

  // go to team bet details
  function team_details(obj) {
    console.log(obj?.coordinatorId);
    secureLocalStorage.setItem("livematchid", obj?._id);
    secureLocalStorage.setItem("c_id", obj?.coordinatorId);
    setTimeout(() => {
      navigate(`/teambet/${obj?._id}`);
    }, 500);
  }

  return (
    <>
      {/* tournaments section */}
      <section className="tournaments py-5">
        <div className="container">
          <div className="row animate__animated wow animate__fadeInUp">
            <div className="col-12 text-center">
              <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">
                Live Tournament Events
              </p>
              <h2 className="display-5 mb-3 font-black max">
                Bets in the Championship Games
              </h2>
            </div>
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
            <div className="row my-5">
              {data?.data?.length > 0 ? (
                <>
                  {data?.data?.map((items, index) => {
                    console.log(items);
                    const { date, time } = formatDateTime(
                      items?.start_date,
                      items?.start_time
                    );
                    return (
                      <div
                        key={index}
                        onClick={() => team_details(items)}
                        className="col-12 col-lg-6 animate__animated wow animate__fadeInUp"
                      >
                        <div className="tournament-card theme-border-radius theme-border mb-4 theme-bg-white">
                          <div className="head-sec py-3 px-3 pb-0">
                            <span className="d-inline-flex rounded-pill py-2 tag">
                              {" "}
                              {items?.leagueName}
                            </span>
                            <span
                              style={{ lineHeight: "12px", color: "red" }}
                              className="d-inline-flex small"
                            >
                              Live <GoDotFill />
                            </span>
                          </div>
                          <div className="body-sec py-3 px-3">
                            <div className="d-flex align-self-center align-items-center">
                              <div className="me-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  {" "}
                                  {items?.teamName1}
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  {" "}
                                  {items?.sortName1}
                                </span>
                              </div>
                              <figure className="mb-0 icon-bg">
                                {items?.logo1 === " " ||
                                items?.logo1 === null ||
                                items?.logo1 === undefined ? (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src="/logo/newlogo.png"
                                  />
                                ) : items?.logo1?.startsWith("https://") ? (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${items?.logo1}`}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "/logo/newlogo.png";
                                    }}
                                  />
                                ) : (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${items?.logo1}`}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "/logo/newlogo.png";
                                    }}
                                  />
                                )}
                              </figure>
                            </div>
                            <div className="vs">VS</div>
                            <div className="d-flex align-self-center align-items-center text-end">
                              <figure className="mb-0 icon-bg">
                                {items?.logo2 === " " ||
                                items?.logo2 === null ||
                                items?.logo2 === undefined ? (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src="/logo/newlogo.png"
                                  />
                                ) : items?.logo2?.startsWith("https://") ? (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${items?.logo2}`}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "/logo/newlogo.png";
                                    }}
                                  />
                                ) : (
                                  <img
                                    style={{
                                      width: "90px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    className="img-fluid"
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${items?.logo2}`}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "/logo/newlogo.png";
                                    }}
                                  />
                                )}
                              </figure>
                              <div className="ms-3">
                                <h3 className="fs-6 fw-bold mb-2">
                                  {" "}
                                  {items?.teamName2}
                                </h3>
                                <span className="fs-5 fw-bold theme-text-secondary">
                                  {" "}
                                  {items?.sortName2}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="foot py-2 px-3">
                            <div className="text-center">
                              <p className="mb-0 fw-bold">
                                Start At : {date}
                                {time}
                                <span id="countdown-timer-1" />
                              </p>
                            </div>
                            <button
                              className="rounded-pill btn custom-link font-small"
                              type="button"
                              onClick={() => team_details(items)}
                            >
                              Join Now
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
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
                    <h6 className="display-5 mb-3 font-black">
                      No Match Found
                    </h6>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Fightlist;
