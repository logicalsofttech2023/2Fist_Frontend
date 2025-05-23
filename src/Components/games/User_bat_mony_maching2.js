import React, { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import coin from './coin.json';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

const User_bat_mony_maching = () => {
    let navigate = useNavigate()
    const [stopNumber, setStopNumber] = useState(null);
    const [status, setStatus] = useState(null);
    const [username, setUsername] = useState(null);
    const scrollableDivRef = useRef(null);
    const showimg = [1];
    let directbatuser = secureLocalStorage.getItem("directbatuser")
    let team_obj = secureLocalStorage.getItem("team_obj")
    let userid = secureLocalStorage.getItem("userid")

    let [showuser1, setshowuser1] = useState()
    let [showuser2, setshowuser2] = useState()
    let [showprofiledata, setshowprofiledata] = useState({})
    let [loaderstutes, setloaderstutes] = useState(true)


    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * showimg.length); // Adjust the range to the length of the showimg array
        setStopNumber(randomNumber);
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


    let got_to_live_straming = () => {

        secureLocalStorage.removeItem("directbatuser")
        secureLocalStorage.removeItem("team_obj")

        setTimeout(() => {
            navigate("/Cassino")
        }, 500);
    }

    // get data getUser_profile
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

    // get bat user 
    useEffect(() => {
        getuserbet()
    }, [])
    let getuserbet = () => {
        let obj = {
            "userId": directbatuser?.userId,
            "matchId": team_obj?._id,
            "outcome": team_obj?.teamstatus,
            "amount": directbatuser?.amount,
        }
        axios.post(`${process.env.REACT_APP_API_KEY}searchingBet`, obj).then((res) => {
            if (res.data.result == "true") {
                setshowuser1(res?.data?.data1)
                setshowuser2(res?.data?.data2)
                setloaderstutes(false)
            } else {
                navigate("/usermatching")
            }
        }).catch((err) => {
            setTimeout(() => {
                navigate("/usermatching")
            }, 100);
        })
    }


    return (
        <>
            <div className="py-5  breadcrumb-area1">
                <div className="container pt-5">
                    <div className='mt-5 row justify-content-center'>
                        {loaderstutes == true ? (
                            <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="4" animationDuration=".5s" />
                        ) : (
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
                                        <div className='bg-dark mt-5' style={{ borderRadius: "20px" }}>
                                            <img className='animate__animated animate__bounce animate__delay-2s mt-2' width={"50%"} height={"50px"} src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-6-2048x1482.png" alt="" />
                                            <p> <b className="mt-1">{Number(showuser1?.amount) + Number(showuser2?.amount)}</b></p>
                                        </div>
                                        <Lottie style={{ position: "absolute", top: "10px" }} animationData={coin} loop={false} />
                                        <Lottie style={{ position: "absolute", top: "20px" }} animationData={coin} loop={false} />
                                        <Lottie style={{ position: "absolute", top: "30px" }} animationData={coin} loop={false} />

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
                                <div className='text-center'>
                                    <button className="rounded-pill btn custom-link font-small" type="button" style={{ width: "auto" }} onClick={() => got_to_live_straming(true)} >Start Game</button>
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </>
    );
}

export default User_bat_mony_maching;
