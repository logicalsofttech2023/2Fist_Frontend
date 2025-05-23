import React, { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import coin from './coin.json';
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


const User_bat_mony_maching = () => {
    let navigate = useNavigate()
    let userid = secureLocalStorage.getItem("userid")
    let batamout = secureLocalStorage.getItem("batamout")
    let team_obj = secureLocalStorage.getItem("team_obj")
    

    let [showprofiledata, setshowprofiledata] = useState({})
    let [showuser1, setshowuser1] = useState()
    let [showuser2, setshowuser2] = useState()
    let [usersshowstatus, setusersshowstatus] = useState(false)
    let [usernotmatchstatus, setusernotmatchstatus] = useState(false)


    const [stopNumber, setStopNumber] = useState(null);
    const [status, setStatus] = useState(null);
    const [username, setUsername] = useState(null);
    const scrollableDivRef = useRef(null);
    const showimg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * showimg.length); // Adjust the range to the length of the showimg array
        setStopNumber(10);
    }, []);

    useEffect(() => {
        const div = scrollableDivRef.current;
        const imageHeight = 110; // Height of the image
        const containerHeight = 110; // Height of the container
        const offset = (containerHeight - imageHeight) / 2; // Center offset

        if (div) {
            const interval = setInterval(() => {
                if (div.scrollTop >= div.scrollHeight - div.clientHeight) {
                    div.scrollTop = 0; // Reset to the top
                } else {
                    div.scrollTop += 10; // Adjust the scrolling speed by changing this value
                }
                // Check if the scroll position matches the position of the image centered
                if (stopNumber !== null && Math.abs(div.scrollTop - (stopNumber * imageHeight - offset)) < 10) {
                    clearInterval(interval);
                    setStatus(11);
                    setUsername(11);
                }
            }, 10); // Adjust the interval time to control the scrolling speed

            return () => clearInterval(interval); // Clear the interval on component unmount
        }
    }, [stopNumber]);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
        };
        const scrollableDiv = scrollableDivRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener('wheel', handleWheel);
        }
        return () => {
            if (scrollableDiv) {
                scrollableDiv.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const [count, setCount] = useState(50);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            if (status != null) {
                const timer = setInterval(() => {
                    setCount(prevCount => prevCount - 1);
                    setAmount(prevCount => prevCount + 2);
                }, 10); // Change this value to adjust the speed

                // Clean up the interval on component unmount or when count changes
                return () => clearInterval(timer);
            } else {
                setStatus(null);
            }
        } else {
            setStatus(null);
        }
    }, [count, status]);

    useEffect(() => {
        let objdata = { 
            "userId": userid
        }
        axios.post(`${process.env.REACT_APP_API_KEY}getUser_profile`, objdata).then((res) => {
            if (res.data.result == "true") {
                setshowprofiledata(res.data.data[0])

            } else {

            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
            } else {
            }
        })
    }, [])


    let [automatching_status, setautomatching_status] = useState(false)
    const hasFetched = useRef(false); // Track if the API has already been called


    // user match conditions 
    useEffect(() => {
        if (automatching_status === false) {
            getuserbet()
        } else {
            livematchinguser()
        }
    }, [automatching_status])

    // user match 
    const getuserbet = async () => {
        if (hasFetched.current) return; // Prevent multiple calls
        hasFetched.current = true; // Mark as fetched

        try {
            const obj = {
                userId: userid,
                matchId: team_obj?._id,
                outcome: team_obj?.teamstatus,
                amount: batamout,
                coordinatorId: team_obj?.coordinatorId,
            };

            

            const res = await axios.post(`${process.env.REACT_APP_API_KEY}searchingBet`, obj);
            if (res.data.result === "true") {
                setshowuser1(res?.data?.data2);
                setshowuser2(res?.data?.data1);
                setTimeout(() => {
                    setusersshowstatus(true);
                    // Show user data after delay
                    // setusernotmatchstatus(true)
                }, 2000);
            } else {
                setautomatching_status(true); // Trigger automatching if result is false
            }
        } catch (err) {
            console.error("searchingBet errrrr", err);
            setautomatching_status(true); // Trigger automatching on error
        }
    };

    // live user matching api
    let livematchinguser = () => {
        const startTime = Date.now(); // Record the start time
        const interval = setInterval(() => {
            const elapsedTime = (Date.now() - startTime) / 1000; // Calculate elapsed time in seconds
            if (elapsedTime >= 30) { // Stop after 2 minutes (120 seconds)
                clearInterval(interval);
                setusernotmatchstatus(true)
                return;
            }
            const obj1 = {
                "userId": userid,
                "matchId": team_obj?._id,
                "outcome": team_obj?.teamstatus,
                "amount": batamout,
                "coordinatorId": team_obj?.coordinatorId,
            };

            console.log("obj1", obj1);
            


            axios.post(`${process.env.REACT_APP_API_KEY}findingMatched_bet`, obj1)
                .then((res) => {
                    if (res.data.result === "true") {
                        setshowuser1(res?.data?.data2)
                        setshowuser2(res?.data?.data1)
                        setTimeout(() => {
                            setusersshowstatus(true)
                            // setusernotmatchstatus(true)
                        }, 2000);
                        clearInterval(interval); // Stop interval on success
                    } else {
                        setTimeout(() => {
                            setusersshowstatus(true)
                        }, 2000);
                    }
                })
                .catch((err) => {
                });
        }, 5000); // Run every 5 seconds

        // Cleanup on component unmount
        return () => {
            clearInterval(interval);
        };

    }

    // go to placebat 
    let got_to_live_straming = () => {
        // let obj = {
        //     "userId": userid,
        //     "matchId": team_obj?._id,
        //     "outcome": team_obj?.teamstatus,
        //     "amount": batamout,
        //     "coordinatorId": team_obj?.coordinatorId
        // }
        setTimeout(() => {
            navigate("/Cassino")
        }, 500);
        // axios.post(`${process.env.REACT_APP_API_KEY}placeBet_api`, obj).then((res) => {
        //     if (res.data.result == "true") {
        //         toast.success(res.data.message)
        //         // secureLocalStorage.removeItem("batamout")
        //         // secureLocalStorage.removeItem("team_obj")
        //         setTimeout(() => {
        //             navigate("/Cassino")
        //         }, 500);
        //     } else {
        //     }
        // }).catch((err) => {
        //     toast.error("Technical Issue")
        // })
    }

    return (
        <>
            <Toaster />
            <div className="py-5  breadcrumb-area1">
                <div className="container pt-5">

                    {usernotmatchstatus == true ? (
                        <>
                            <div className='wow animate__animated wow animate__fadeInUp' style={{ height: "400px" }}>
                                <div className='text-center mt-5'>
                                    <img
                                        className="img-fluid"
                                        style={{ width: "100px", height: "100px" }}
                                        alt="Games team"
                                        src="./imglist/datanotfound_logo.png"
                                    />
                                </div>

                                <div className="group text-center">
                                    <h4 className="display-5 mb-3 font-black">User Not Found</h4>
                                    <button className="rounded-pill btn custom-btn-primary font-small  text-white" type="submit">
                                        <Link to='/usermatching'>
                                            Go To Back
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {usersshowstatus == true ? (
                                <div className='mt-5 row justify-content-center'>
                                    <div className='col-lg-8 col-12'>
                                        <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', height: "300px" }}>
                                            <div className="col-lg-3 col-3 shadow animate__animated animate__headShake animate__delay-2s" style={{ height: "120px", border: "1px solid", backgroundColor: "white", textAlign: "center", borderRadius: "20px" }}>
                                                <img width={"80%"} height={"75px"} style={{ borderRadius: "20px", marginTop: "20px" }} src={
                                                    showuser1?.userProfile
                                                        ? `${process.env.REACT_APP_IMG_URL}${showuser1?.userProfile}`
                                                        : "./logo/logonew.png"
                                                } alt="" />
                                                <p className='mt-4'>
                                                    <b className="mt-1">{showuser1?.uniqueName}</b> <br />
                                                    <b className="mt-1">{showuser1?.amount}$<img width={"10%"} src="./gameslogo/coin.png" alt="" /></b>
                                                </p>
                                            </div>

                                            <div className="col-lg-2 col-2 shadow text-cetner" style={{ position: "relative", height: "130px", textAlign: "center" }}>
                                                {/* <h1  className="display-4 mb-3 theme-text-white font-black max animate__animated wow animate__fadeInUp" data-wow-delay="5s" style={{ color: "#007bff" }}>VS</h1> */}
                                                <>
                                                    <div className='bg-dark mt-5' style={{ borderRadius: "20px" }}>
                                                        <img className='animate__animated animate__bounce animate__delay-2s mt-2' width={"50%"} height={"50px"} src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-6-2048x1482.png" alt="" />
                                                        <p> <b className="mt-1">{Number(showuser1?.amount) + Number(showuser2?.amount)}</b></p>
                                                    </div>
                                                    <Lottie style={{ position: "absolute", top: "10px" }} animationData={coin} loop={false} />
                                                    <Lottie style={{ position: "absolute", top: "20px" }} animationData={coin} loop={false} />
                                                    <Lottie style={{ position: "absolute", top: "30px" }} animationData={coin} loop={false} />
                                                </>
                                            </div>

                                            <div className="col-lg-3 col-3 shadow animate__animated animate__headShake animate__delay-2s" style={{ height: "120px", border: "1px solid", backgroundColor: "white", textAlign: "center", borderRadius: "20px" }}>
                                                <img width={"80%"} height={"75px"} style={{ borderRadius: "20px", marginTop: "20px" }} src={
                                                    showuser2?.userProfile
                                                        ? `${process.env.REACT_APP_IMG_URL}${showuser2?.userProfile}`
                                                        : "./logo/logonew.png"
                                                } alt="" />
                                                <p className='mt-4'>
                                                    <b className="mt-1">{showuser2?.uniqueName}</b> <br />
                                                    <b className="mt-1">{showuser2?.amount}$<img width={"10%"} src="./gameslogo/coin.png" alt="" /></b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className="rounded-pill btn custom-link font-small" type="button" style={{ width: "auto" }} onClick={() => got_to_live_straming(true)} >Start Game</button>
                                    </div>


                                </div>
                            ) : (
                                <>
                                    <div className='mt-5 row justify-content-center'>
                                        <div className='col-lg-8 col-12'>
                                            <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', height: "300px" }}>
                                                <div className="col-lg-3 col-3 shadow animate__animated animate__headShake animate__delay-2s" style={{ height: "120px", border: "1px solid", backgroundColor: "white", textAlign: "center", borderRadius: "20px" }}>
                                                    <img width={"80%"} height={"75px"} style={{ borderRadius: "20px", marginTop: "20px" }} src={
                                                        showprofiledata?.userProfile
                                                            ? `${process.env.REACT_APP_IMG_URL}${showprofiledata?.userProfile}`
                                                            : "./logo/logonew.png"
                                                    } alt="" />
                                                    <p className='mt-4'>
                                                        <b className="mt-1">{showprofiledata?.userName}</b> <br />
                                                        <b className="mt-1">{batamout}$<img width={"10%"} src="./gameslogo/coin.png" alt="" /></b>
                                                    </p>
                                                </div>

                                                <div className="col-lg-2 col-2 shadow text-cetner" style={{ position: "relative", textAlign: "center" }}>
                                                    {/* <h1  className="display-4 mb-3 theme-text-white font-black max animate__animated wow animate__fadeInUp" data-wow-delay="5s" style={{ color: "#007bff" }}>VS</h1> */}
                                                    {/* <div className='bg-dark mt-5' style={{ borderRadius: "20px" }}>
                                                            <img className='animate__animated animate__bounce animate__delay-2s mt-2' width={"50%"} height={"50px"} src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-6-2048x1482.png" alt="" />
                                                            <p> <b className="mt-1">{amount}</b></p>
                                                        </div>
                                                 */}
                                                    <span className="vs">vs</span>
                                                </div>

                                                <div className="col-lg-3 col-3 shadow animate__animated animate__headShake animate__delay-2s" style={{ height: "120px", border: "1px solid", backgroundColor: "white", textAlign: "center", borderRadius: "20px" }}>
                                                    <div ref={scrollableDivRef} style={{ height: "120px", border: "1px solid", backgroundColor: "white", textAlign: "center", borderRadius: "20px", overflow: "scroll", scrollbarWidth: "none" }}>
                                                        {showimg.map((item, index) => (
                                                            <div key={index}>
                                                                <img className='' width={"80%"} height={"110px"} style={{ borderRadius: "20px" }} src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="" />
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <b className="mt-1">{username}</b>
                                                    <p className=''>
                                                        <img width={"100%"} src="./gameslogo/coin.png" alt="" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )}
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default User_bat_mony_maching;
