import React, { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { ProgressSpinner } from "primereact/progressspinner";
import { useQuery } from "@tanstack/react-query";
import AgoraRTC from "agora-rtc-sdk-ng";

const Teambet = () => {
  let navigate = useNavigate();
  let uid = useParams();

  let localamaunt = Number(localStorage.getItem("amount_store"));
  let c_id = secureLocalStorage.getItem("c_id");

  let userid = secureLocalStorage.getItem("userid");
  let loginstatus = localStorage.getItem("loginstatus");
  let livetoken = JSON.parse(secureLocalStorage.getItem("livetoken"));
  const [amaunt, getamaunt] = useState(1000);
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [opacity, setOpacity] = useState(1);
  let [loaderstutes, setloaderstutes] = useState(true);
  let [showprofiledata, setshowprofiledata] = useState({});

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

  let setamounthandel = (event) => {
    event.preventDefault();
    let objdata = {
      userId: userid,
      amount: amaunt,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}addUserAmount`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          toast.success(res.data.message);
          getamaunt("");
          getprofile();
          setVisible(false);
          // localStorage.setItem("amount_store", amaunt);
        } else {
        }
      })
      .catch((error) => {
        console.log("errrr", error);
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

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

  // ---------------------------------------------------

  // get data getUser_profile
  useEffect(() => {
    getprofile();
    secureLocalStorage.removeItem("batpath");
  }, []);
  let getprofile = () => {
    let objdata = {
      userId: userid,
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}getUser_profile`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          setshowprofiledata(res.data.data[0]);
        } else {
          setshowprofiledata({});
        }
      })
      .catch((error) => {
        setshowprofiledata({});
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  // login handel
  let UsersingnHandel = () => {
    swal({
      title: "Please Sign in ?",
      text: "You need to Sign in to view this feature",
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
        deleteaddress();
      } else {
      }
    });
    let deleteaddress = () => {
      secureLocalStorage.setItem("batpath", uid?.uid);
      navigate("/login");
    };
  };

  // team details handel get api
  let objdata = {
    matchId: uid.uid,
    coordinatorId: c_id,
  };

  // console.log("objdata", objdata)
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["MatchDetails"],
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}MatchDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objdata),
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      }),

    onError: (err) => {},
  });

  console.log("data", data);
  const client = useRef(null);
  const appId = data?.appId; // "81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  const channel = data?.channelName; // Channel name used by the streamer
  const token = data?.token;
  // const uidd = 0 // Unique ID for the streamer

  // const appId = " 81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  // const channel = "TansUCSD"; // Channel name used by the streamer
  // const token = "00681021b57c52b4d3e9de4e6dc35d6eca2IAA7nSLf2aNF6Pmwd1g20IPzfxBTFDJ8xkGqcLTqeN9pjCbWK3sAAAAAIgDbFu+ywrCMZwQAAQDi64tnAgDi64tnAwDi64tnBADi64tn"
  const uidd = null; // Unique ID for the streamer

  useEffect(() => {
    client.current = AgoraRTC.createClient({ mode: "live", codec: "vp8" });

    const handleUserPublished = async (user, mediaType) => {
      await client.current.subscribe(user, mediaType);

      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        const playerContainer = document.createElement("div");
        playerContainer.id = `user-${user.uid}`;
        playerContainer.style.width = "640px";
        playerContainer.style.height = "300px";
        document
          .getElementById("remote-player-list")
          .appendChild(playerContainer);

          remoteVideoTrack.play(playerContainer, { mirror: false });
        }

      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play(); // Play audio directly
      }
    };

    const handleUserUnpublished = (user) => {
      const playerContainer = document.getElementById(`user-${user.uid}`);
      if (playerContainer) playerContainer.remove();
    };

    (async () => {
      try {
        await client.current.join(appId, channel, token, uidd); // Null UID for viewers 7342
        console.log("Viewer joined the channel.");
        client.current.on("user-published", handleUserPublished);
        client.current.on("user-unpublished", handleUserUnpublished);
      } catch (err) {
        console.error("Error joining the channel:", err);
      }
    })();

    return () => {
      client.current.leave();
      client.current.off("user-published", handleUserPublished);
      client.current.off("user-unpublished", handleUserUnpublished);
    };
  }, [data?.token]);

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
                <h4 className="display-5 mb-3 font-black">Data not found</h4>
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

  // plac_bat handel navigate
  let gotomatch_user = (teamstatus, teams_obj) => {
    let dataobj = teams_obj;
    dataobj.teamstatus = teamstatus;
    secureLocalStorage.setItem("team_obj", dataobj);
    setTimeout(() => {
      navigate("/usermatching");
    }, 500);
  };

  // get data getUser_profile
  // useEffect(() => {
  //     getprofile()
  // }, [])

  return (
    <>
      <Toaster />
      <Dialog
        // header="Deposit"
        visible={visible}
        style={{ width: `${width < 1024 ? "90%" : "50vw"}` }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        
      >
        <p className="m-0">
          {/* login page section */}
          <div className="">
            <div className="theme-box-shadow theme-border-radius theme-transparent-bg p-4 p-lg-5">
              {/* login content */}
              <div className="row">
                <div className="col-12">
                  <form className="needs-validation">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Amount</label>
                      <input
                        // defaultValue={1000}
                        max={100}
                        onChange={(event) => getamaunt(event.target.value)}
                        type="number"
                        className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                        id="exampleInputEmail1"
                        required
                      />
                    </div>

                    <div className="my-3">
                      <button
                        onClick={setamounthandel}
                        type="submit"
                        className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>
      <section className="tournaments py-5">
        <div className="container">
          <div className="head-content text-center gamecontainerlive">
            <h1 className="display-5 mb-3 theme-text-white font-black max">
              Live Tournament
            </h1>
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
              {Object.keys(data?.data).length === 0 ? (
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
                        Data Not Found
                      </h4>
                      <button
                        className="rounded-pill btn custom-btn-primary font-small  text-white"
                        type="submit"
                      >
                        <Link to="/Fightlist">Go To Back</Link>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="row ">
                    <div className="col-12 col-lg-12 animate__animated wow animate__fadeInUp">
                      <div className="d-flex justify-content-end mt-3 mb-3 ">
                        <div
                          style={{ marginRight: "20px" }}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <Link
                            onClick={() => setVisible(true)}
                            className="btn btn-success mb-0"
                          >
                            Add Money
                          </Link>
                        </div>
                        <div style={{ paddingRight: "15px" }}>
                          <p className="mb-0">Available Balance</p>
                          <h5 className="my-0">
                            $
                            {showprofiledata?.userWallet > 0
                              ? showprofiledata?.userWallet
                              : "00.00"}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animate__animated wow animate__fadeInUp gamestreampage">
                    <div className=" gamestreampage  tournament-card  theme-border-radius theme-border mb-4 theme-bg-white row pt-3">
                      <div className="col-12 col-lg-6 bg">
                        <div className="col-12 animate__animated wow animate__fadeInUp">
                          {/* {console.log("checcccccc",data?.token)} */}
                          {data?.token === null ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              className="tournament-card box-shadow left-game-container theme-border-radius theme-border mb-4 theme-bg-white"
                            >
                              Live startStreaming will Start{" "}
                              {data.data.start_date} On Time{" "}
                              {data.data.start_time}
                            </div>
                          ) : (
                            <div className="tournament-card box-shadow left-game-container theme-border-radius theme-border mb-4 theme-bg-white">
                              <span
                                style={{
                                  lineHeight: "12px",
                                  color: "red",
                                  border: "1px solid red",
                                  padding: "5px",
                                }}
                                className="d-inline-flex "
                              >
                                Live <GoDotFill style={style} />
                              </span>
                              <div
                                id="remote-player-list"
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  background: "#000",
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              ></div>
                              <style>
                                {`
                                                            video::-internal-media-controls-overlay-cast-button {
                                                              display: none;
                                                            }
                                                            video::-webkit-media-controls-enclosure {
                                                              display: none;
                                                            }
                                                            video::-webkit-media-controls-panel {
                                                              display: none;
                                                            }
                                                          `}
                              </style>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 mt-31">
                        <div className="tournament-card theme-border-radius theme-border mb-1 theme-bg-white">
                          <div className="body-sec py-3 px-3">
                            <div
                              className="d-flex align-self-center align-items-center"
                              style={{ width: "100%" }}
                            >
                              <figure
                                className="mb-0 icon-bg"
                                style={{ height: "50%", marginLeft: "10px" }}
                              >
                                {data?.data?.logo1 === " " ||
                                data?.data?.logo1 === null ||
                                data?.data?.logo1 === undefined ? (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src="https://www.2fist.com/logo/newlogo.png"
                                  />
                                ) : data?.data?.logo1?.startsWith(
                                    "https://"
                                  ) ? (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.logo1}`}
                                  />
                                ) : (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.logo1}`}
                                  />
                                )}
                              </figure>
                              <div className="me-3">
                                <span className="fs-5 fw-bold text-white">
                                  {data?.data?.teamName1}
                                </span>
                                <h6
                                  onClick={() =>
                                    gotomatch_user("A", data?.data)
                                  }
                                  className=" text-white"
                                  style={{ fontSize: "15px" }}
                                >
                                  {data?.data?.sortName1}
                                </h6>
                              </div>
                            </div>

                            <div className="vs p-4 text-warning bg-dark">
                              vs
                            </div>

                            <div
                              className="d-flex align-self-center align-items-center text-end"
                              style={{ width: "100%" }}
                            >
                              <div className="ms-3">
                                <span className="fs-5 fw-bold text-white">
                                  {data?.data?.teamName2}
                                </span>
                                <h6
                                  onClick={() =>
                                    gotomatch_user("B", data?.data)
                                  }
                                  className="text-white"
                                  style={{ fontSize: "15px" }}
                                >
                                  {data?.data?.sortName2}
                                </h6>
                              </div>

                              <figure
                                className="mb-0 icon-bg"
                                style={{ height: "50%", marginRight: "10px" }}
                              >
                                {data?.data?.logo2 === " " ||
                                data?.data?.logo2 === null ||
                                data?.data?.logo2 === undefined ? (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src="https://www.2fist.com/logo/newlogo.png"
                                  />
                                ) : data?.data?.logo2?.startsWith(
                                    "https://"
                                  ) ? (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.logo2}`}
                                  />
                                ) : (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.logo2}`}
                                  />
                                )}
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div className="row pt-2">
                          <div
                            className="col-lg-6 col-6"
                            style={{ height: "320px" }}
                          >
                            {loginstatus === "true" ? (
                              <button
                                onClick={() => gotomatch_user("A", data?.data)}
                                className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                type="button"
                              >
                                <b>{data?.data?.sortName1}</b>
                              </button>
                            ) : (
                              <button
                                onClick={UsersingnHandel}
                                className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                type="button"
                              >
                                <b>{data?.data?.sortName1}</b>
                              </button>
                            )}

                            <div className="text-center">
                              <p
                                className="pt-1 text-warning"
                                style={{ fontSize: "20px" }}
                              >
                                <b>${data?.data?.totalbetsAmount ?? "00"}</b>
                              </p>
                              <p className="pt-1" style={{ fontSize: "17px" }}>
                                PAYOUT= ${data?.data?.payoutAmount ?? "00"}
                              </p>
                            </div>

                            {/* {localamaunt > 0 ? (
                 
                ) : (
                  <button
                    onClick={() => setVisible(true)}
                    style={{ backgroundColor: "#28a95b" }}
                    className="cussino_btn"
                    type="button"
                  >
                    <b>
                      <CiCirclePlus /> BET MERON
                    </b>
                  </button>
                )} */}
                          </div>

                          <div
                            className="col-lg-6 col-6"
                            style={{ height: "320px" }}
                          >
                            {loginstatus === "true" ? (
                              <button
                                onClick={() => gotomatch_user("B", data?.data)}
                                className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                type="button"
                              >
                                <b>{data?.data?.sortName2}</b>
                              </button>
                            ) : (
                              <button
                                onClick={UsersingnHandel}
                                className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                type="button"
                              >
                                <b>{data?.data?.sortName2}</b>
                              </button>
                            )}

                            <div className="text-center">
                              <p
                                className="pt-1 text-warning"
                                style={{ fontSize: "20px" }}
                              >
                                <b>${data?.data?.totalbetsAmount ?? "00"}</b>
                              </p>
                              <p className="pt-1" style={{ fontSize: "17px" }}>
                                PAYOUT= ${data?.data?.payoutAmount ?? "00"}
                              </p>
                            </div>

                            {/* {localamaunt > 0 ? (
                 
                ) : (
                  <button
                    onClick={() => setVisible(true)}
                    style={{ backgroundColor: "#28a95b" }}
                    className="cussino_btn2"
                    type="button"
                  >
                    <b>
                      <CiCirclePlus /> BET WALA
                    </b>
                  </button>
                )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Teambet;
