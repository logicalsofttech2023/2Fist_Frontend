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

const GameStreamPage = () => {
  let navigate = useNavigate();

  let userid = secureLocalStorage.getItem("userid");
  let team_obj = secureLocalStorage.getItem("team_obj" || "{}");
  let batamout = secureLocalStorage.getItem("batamout" || "{}");
  let livematchid = secureLocalStorage.getItem("livematchid" || "{}");
  let livematchobj = secureLocalStorage.getItem("livematchobj" || "{}");
  let update = secureLocalStorage.getItem("notificationdata");
  let fcmtoken = secureLocalStorage.getItem("fcmtoken");
  let livetoken = JSON.parse(secureLocalStorage.getItem("livetoken"));

  // console.log("fcmtoken" , fcmtoken )

  const [visible, setVisible] = useState(false);
  let [accept_status, setaccept_status] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [opacity, setOpacity] = useState(1);

  let [showprofiledata, setshowprofiledata] = useState({});
  let [showamount, setshowamount] = useState();

  let [userdatareabet, setuserdatareabet] = useState();
  let [storeteamstatus, setstoreteamstatus] = useState();
  let [competitionId, setcompetitionId] = useState();

  // // get live msg
  // useEffect(() => {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       // console.log('Notification permission granted.');fd
  //     } else {
  //       // console.log('Unable to get permission to notify.');
  //     }
  //   });

  //   onMessage(messaging, (payload) => {
  //     console.log('Message received. ', payload.notification.body);
  //     getamauntuser()
  //     new Notification(payload.notification.title, {
  //       body: payload.notification.body,
  //     });
  //   });

  // }, []);

  // live text animation
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
  const style1 = {
    opacity: opacity,
    transition: "opacity 0.5s ease-in-out",
  };

  // daynamicwidth get
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  // reabet handel
  useEffect(() => {
    rea_bet_user();
  }, []);
  let rea_bet_user = () => {
    let dataa = {
      matchId: team_obj?._id,
      amount: batamout,
      outcome: team_obj?.teamstatus,
      userId: userid,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}MatchedBet_userDetails`, dataa)
      .then((res) => {})
      .catch((err) => {});
  };

  // get data getUser_profile
  useEffect(() => {
    getprofile();
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

  // reaplece bet user amount handel
  let setamounthandel = (event) => {
    event.preventDefault();
    let form = event.target;
    let formdata = new FormData(form);
    let obj = Object.fromEntries(formdata.entries());
    if (showprofiledata?.userWallet > 0) {
      if (obj.amount >= 100) {
        let objdata = {
          matchId: userdatareabet[0].matchId,
          amount: obj?.amount,
          outcome: storeteamstatus,
          userId: userdatareabet[1].userId,
          coordinatorId: userdatareabet[0].coordinatorId,
          competitionId: competitionId,
        };

        console.log(objdata);

        axios
          .post(`${process.env.REACT_APP_API_KEY}sendBet_request`, objdata)
          .then((res) => {
            if (res.data.result == "true") {
              toast.success(res?.data?.message);
              setVisible(false);
              form.reset();
            }
          })
          .catch((err) => {
            toast.error("Technical Issue");
          });
      } else {
        toast.error("Pleace Enter Valid Amont");
      }
    } else {
      toast.error("Insufficient Balance");
    }
  };

  // get msg amaunt user reabet
  useEffect(() => {
    getamauntuser();
  }, [update]);
  let getamauntuser = () => {
    let objdata = {
      matchId: livematchid,
      outcome: team_obj?.teamstatus,
      userId: userid,
      coordinatorId: team_obj?.coordinatorId,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}getBet_request`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          setshowamount(res.data.data);
          setaccept_status(true);
        } else {
          // setshowprofiledata({})
        }
      })
      .catch((error) => {
        // setshowprofiledata({})
        setaccept_status(false);
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  // amount requset accsepthandel declinehandel
  let decline_accsep_handel = (status, outcome) => {
    let objdata = {
      userId: userid,
      betId: showamount?._id,
      coutcome: outcome,
      status: status,
      amount: showamount?.amount,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}acceptBetRequest`, objdata)
      .then((res) => {
        if (res.data.result == "true") {
          toast.success(res.data.message);
          setaccept_status(false);
          secureLocalStorage.removeItem("notificationdata");
          refetch();
        } else {
          // setshowprofiledata({})
        }
      })
      .catch((error) => {
        // setaccept_status(true)
        if (error.response && error.response.status === 400) {
        } else {
        }
      });
  };

  // team details handel get api
  let objdata = {
    matchId: livematchid || livematchobj?.matchId?._id,
    amount: batamout || livematchobj?.amount,
    outcome: team_obj?.teamstatus || livematchobj?.outcome,
    userId: userid,
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["MatchedBet_userDetails"], //  MatchDetails
    queryFn: async () =>
      fetch(`${process.env.REACT_APP_API_KEY}MatchedBet_userDetails`, {
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

    onError: (err) => {
      console.log("Server error", err);
    },
  });

  const client = useRef(null);
  const appId = data?.data?.token_details?.appId; // "81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  const channel = data?.data?.token_details?.channelName; // Channel name used by the streamer
  const token = data?.data?.token_details?.token;
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

        remoteVideoTrack.play(playerContainer);
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
  }, [data?.data?.token_details?.token]);

  // const client = useRef(null);
  // const appId = data?.data?.token_details?.appId // "81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  // const channel = data?.data?.token_details?.channelName // Channel name used by the streamer
  // const token = data?.data?.token_details?.token
  // // const uidd = 0 // Unique ID for the streamer

  // // const appId = " 81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  // // const channel = "TansUCSD"; // Channel name used by the streamer
  // // const token = "00681021b57c52b4d3e9de4e6dc35d6eca2IAA7nSLf2aNF6Pmwd1g20IPzfxBTFDJ8xkGqcLTqeN9pjCbWK3sAAAAAIgDbFu+ywrCMZwQAAQDi64tnAgDi64tnAwDi64tnBADi64tn"
  // const uidd = null; // Unique ID for the streamer

  // console.log( "appId" ,  appId)
  // console.log( "channel" ,  channel)
  // console.log( "token" ,  token)

  // useEffect(() => {
  //   client.current = AgoraRTC.createClient({ mode: "live", codec: "vp8" });

  //   const handleUserPublished = async (user, mediaType) => {
  //     await client.current.subscribe(user, mediaType);

  //     if (mediaType === "video") {
  //       const remoteVideoTrack = user.videoTrack;
  //       const playerContainer = document.createElement("div");
  //       playerContainer.id = `user-${user.uid}`;
  //       playerContainer.style.width = "640px";
  //       playerContainer.style.height = "300px";
  //       document.getElementById("remote-player-list").appendChild(playerContainer);

  //       remoteVideoTrack.play(playerContainer);
  //     }

  //     if (mediaType === "audio") {
  //       const remoteAudioTrack = user.audioTrack;
  //       remoteAudioTrack.play(); // Play audio directly
  //     }
  //   };

  //   const handleUserUnpublished = (user) => {
  //     const playerContainer = document.getElementById(`user-${user.uid}`);
  //     if (playerContainer) playerContainer.remove();
  //   };

  //   (async () => {
  //     try {
  //       await client.current.join(appId, channel, token, uidd); // Null UID for viewers 7342
  //       console.log("Viewer joined the channel.");
  //       client.current.on("user-published", handleUserPublished);
  //       client.current.on("user-unpublished", handleUserUnpublished);
  //     } catch (err) {
  //       console.error("Error joining the channel:", err);
  //     }
  //   })();

  //   return () => {
  //     client.current.leave();
  //     client.current.off("user-published", handleUserPublished);
  //     client.current.off("user-unpublished", handleUserUnpublished);
  //   };
  // }, [data?.token_details?.token])

  if (error) {
    return (
      <>
        <section className="tournaments py-5">
          <div className="container">
            <div className="head-content text-center gamecontainerlive">
              <h1 className="display-5 mb-3 theme-text-white font-black max">
                Live Tournament
              </h1>
            </div>
            <div className="mt-5">
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
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Toaster />
      <Dialog
        // header="Placed Bet"
        visible={visible}
        style={{ width: `${width < 1024 ? "80%" : "50vw"}` }}
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
                  <form className="needs-validation" onSubmit={setamounthandel}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Amount</label>
                      <input
                        // defaultValue={1000}
                        name="amount"
                        type="number"
                        className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                        id="exampleInputEmail1"
                        required
                      />
                    </div>

                    <div className="my-3">
                      <button
                        type="submit"
                        className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                      >
                        Bet Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>
      <section className="tournaments">
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
                          {data?.data?.token_details?.token === null ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              className="tournament-card box-shadow left-game-container theme-border-radius theme-border mb-4 theme-bg-white"
                            >
                              Live startStreaming will Start On Time 10:30{" "}
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
                              {/* <style>
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
                              </style> */}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 mt-31">
                        <div className="tournament-card theme-border-radius theme-border mb-1 theme-bg-white">
                          <div className="body-sec py-3 px-3">
                            <div
                              className="d-flex align-self-center align-items-center"
                              style={{ width: "100%", position: "relative" }}
                            >
                              <figure
                                className="mb-0 icon-bg"
                                style={{ height: "50%", marginLeft: "10px" }}
                              >
                                {data?.data?.team1[0]?.logo1 === " " ||
                                data?.data?.team1[0]?.logo1 === null ||
                                data?.data?.team1[0]?.logo1 === undefined ? (
                                  <img
                                    className="img-fluid"
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src="./logo/newlogo.png"
                                  />
                                ) : data?.data?.team1[0]?.logo1?.startsWith(
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
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.team1[0]?.logo1}`}
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
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.team1[0]?.logo1}`}
                                  />
                                )}
                              </figure>
                              <div className="me-3">
                                <h6
                                  className=" text-white"
                                  style={{ fontSize: "15px" }}
                                >
                                  {data?.data?.team1[0]?.sortName1}
                                </h6>
                                <span className="fs-5 fw-bold text-white">
                                  {data?.data?.team1[0]?.teamName1}
                                </span>
                              </div>

                              {data?.data?.status == "A" ? (
                                <>
                                  {accept_status == true ? (
                                    <div
                                      style={{
                                        ...style1,
                                        position: "absolute",
                                        right: "70px",
                                        backgroundColor: "green",
                                        width: "100px",
                                        height: "50px ",
                                        borderRadius:
                                          "100% 0% 100% 0% / 97% 100% 94% 8% ",
                                      }}
                                    >
                                      <span
                                        style={{
                                          position: "relative",
                                          left: "30px",
                                          top: "10px",
                                        }}
                                      >
                                        ${showamount?.amount}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </div>

                            <div className="vs p-4 text-warning bg-dark">
                              vs
                            </div>

                            <div
                              className="d-flex align-self-center align-items-center text-end"
                              style={{ width: "100%", position: "relative" }}
                            >
                              <div className="ms-3">
                                <h6
                                  className="text-white"
                                  style={{ fontSize: "15px" }}
                                >
                                  {data?.data?.team2[0]?.sortName2}
                                </h6>
                                <span className="fs-5 fw-bold text-white">
                                  {data?.data?.team2[0]?.teamName2}
                                </span>
                              </div>

                              <figure
                                className="mb-0 icon-bg"
                                style={{ height: "50%", marginRight: "10px" }}
                              >
                                {data?.data?.team2[0]?.logo2 === " " ||
                                data?.data?.team2[0]?.logo2 === null ||
                                data?.data?.team2[0]?.logo2 === undefined ? (
                                  <img
                                    className="img-fluid "
                                    style={{
                                      width: "190px",
                                      height: "90px",
                                      borderRadius: "50%",
                                    }}
                                    alt="Games team"
                                    src="./logo/newlogo.png"
                                  />
                                ) : data?.data?.team2[0]?.logo2?.startsWith(
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
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.team2[0]?.logo2}`}
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
                                    src={`${process.env.REACT_APP_IMG_URL}${data?.data?.team2[0]?.logo2}`}
                                  />
                                )}
                              </figure>

                              {data?.data?.status == "B" ? (
                                <>
                                  {accept_status == true ? (
                                    <div
                                      style={{
                                        ...style1,
                                        position: "absolute",
                                        right: "70px",
                                        backgroundColor: "green",
                                        width: "100px",
                                        height: "50px ",
                                        borderRadius:
                                          "68% 99% 0% 100% / 0% 100% 0% 100% ",
                                      }}
                                    >
                                      <span
                                        style={{
                                          position: "relative",
                                          right: "30px",
                                          top: "10px",
                                        }}
                                      >
                                        ${showamount?.amount}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row pt-2 mb-3">
                          {data?.data?.status == "A" ? (
                            <>
                              <div
                                className="col-lg-6 col-6"
                                style={{ height: "320px" }}
                              >
                                {accept_status == true ? (
                                  <button
                                    onClick={() =>
                                      decline_accsep_handel(
                                        "1",
                                        data?.data?.team1[1]?.outcome
                                      )
                                    }
                                    className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>Decline</b>
                                  </button>
                                ) : (
                                  // <button className="cussino_btn" type="button">
                                  //   <b></b>
                                  // </button>

                                  <button
                                    type="button"
                                    className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                  >
                                    {data?.data?.team1[1]?.uniqueName}
                                  </button>
                                )}

                                <div className="text-center">
                                  <p
                                    className="pt-1 text-warning"
                                    style={{ fontSize: "20px" }}
                                  >
                                    <b>
                                      $
                                      {data?.data?.team1[0]?.total_amount ??
                                        "00"}
                                    </b>
                                  </p>
                                  <p
                                    className="pt-1"
                                    style={{ fontSize: "17px" }}
                                  >
                                    PAYOUT=
                                    {data?.data?.team1[0]?.payoutAmount ?? "00"}
                                  </p>
                                  <p className="pt- text-success">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                  <p className="pt- text-warning">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                </div>

                                {accept_status == true ? (
                                  <button
                                    onClick={() =>
                                      decline_accsep_handel(
                                        "0",
                                        data?.data?.team1[1]?.outcome
                                      )
                                    }
                                    style={{ backgroundColor: "#28a95b" }}
                                    className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>Accept</b>
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => (
                                      setVisible(true),
                                      setuserdatareabet(data?.data?.team1),
                                      setstoreteamstatus(data?.data?.status),
                                      setcompetitionId(data?.data?.userId)
                                    )} // data?.data?.userId
                                    style={{ backgroundColor: "#28a95b" }}
                                    className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>
                                      <CiCirclePlus /> BET{" "}
                                      {data?.data?.team1[0]?.sortName1}
                                    </b>
                                  </button>
                                )}
                              </div>

                              <div
                                className="col-lg-6 col-6"
                                style={{
                                  height: "320px",
                                  opacity: 0.5,
                                  pointerEvents: "none",
                                }}
                              >
                                <button
                                  className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                  type="button"
                                >
                                  <b>{data?.data?.team2[1]?.uniqueName}</b>
                                </button>

                                <div className="text-center">
                                  <p
                                    className="pt-1 text-warning"
                                    style={{ fontSize: "20px" }}
                                  >
                                    <b>
                                      $
                                      {data?.data?.team2[0]?.total_amount ??
                                        "00"}
                                    </b>
                                  </p>
                                  <p
                                    className="pt-1"
                                    style={{ fontSize: "17px" }}
                                  >
                                    PAYOUT=
                                    {data?.data?.team2[0]?.payoutAmount ?? "00"}
                                  </p>
                                  <p className="pt- text-success">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                  <p className="pt- text-warning">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                </div>

                                <button
                                  style={{ backgroundColor: "#28a95b" }}
                                  className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                  type="button"
                                >
                                  <b>
                                    <CiCirclePlus /> BET{" "}
                                    {data?.data?.team2[0]?.sortName2}
                                  </b>
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                className="col-lg-6 col-6"
                                style={{
                                  height: "320px",
                                  opacity: 0.5,
                                  pointerEvents: "none",
                                }}
                              >
                                <button
                                  className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                  type="button"
                                >
                                  <b>{data?.data?.team1[1]?.uniqueName}</b>
                                </button>

                                <div className="text-center">
                                  <p
                                    className="pt-1 text-warning"
                                    style={{ fontSize: "20px" }}
                                  >
                                    <b>
                                      $
                                      {data?.data?.team1[0]?.total_amount ??
                                        "00"}
                                    </b>
                                  </p>
                                  <p
                                    className="pt-1"
                                    style={{ fontSize: "17px" }}
                                  >
                                    PAYOUT=
                                    {data?.data?.team1[0]?.payoutAmount ?? "00"}
                                  </p>
                                  <p className="pt- text-success">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                  <p className="pt- text-warning">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                </div>
                                <button
                                  style={{ backgroundColor: "#28a95b" }}
                                  className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                  type="button"
                                >
                                  <b>
                                    <CiCirclePlus /> BET{" "}
                                    {data?.data?.team1[0]?.sortName1}
                                  </b>
                                </button>
                              </div>

                              <div className="col-lg-6 col-6">
                                {accept_status == true ? (
                                  <button
                                    onClick={() =>
                                      decline_accsep_handel(
                                        "1",
                                        data?.data?.team2[1]?.outcome
                                      )
                                    }
                                    className="cussino_btn btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>Decline</b>
                                  </button>
                                ) : (
                                  <button
                                    className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>{data?.data?.team2[1]?.uniqueName}</b>
                                  </button>
                                )}

                                <div className="text-center">
                                  <p
                                    className="pt-1 text-warning"
                                    style={{ fontSize: "20px" }}
                                  >
                                    <b>
                                      $
                                      {data?.data?.team2[0]?.total_amount ??
                                        "00"}
                                    </b>
                                  </p>
                                  <p
                                    className="pt-1"
                                    style={{ fontSize: "17px" }}
                                  >
                                    PAYOUT=
                                    {data?.data?.team2[0]?.payoutAmount ?? "00"}
                                  </p>
                                  <p className="pt- text-success">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                  <p className="pt- text-warning">
                                    <b style={{ fontSize: "20px" }}>0</b>
                                  </p>
                                </div>

                                {accept_status == true ? (
                                  <button
                                    onClick={() =>
                                      decline_accsep_handel(
                                        "0",
                                        data?.data?.team2[1]?.outcome
                                      )
                                    }
                                    className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>Accept</b>
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => (
                                      setVisible(true),
                                      setuserdatareabet(data?.data?.team2),
                                      setstoreteamstatus(data?.data?.status),
                                      setcompetitionId(data?.data?.userId)
                                    )} //?.data?.userId
                                    style={{ backgroundColor: "#28a95b" }}
                                    className="cussino_btn2 btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                    type="button"
                                  >
                                    <b>
                                      <CiCirclePlus /> BET{" "}
                                      {data?.data?.team2[0]?.sortName2}
                                    </b>
                                  </button>
                                )}
                              </div>
                            </>
                          )}
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

export default GameStreamPage;
