import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog } from "primereact/dialog";
import toast, { Toaster } from "react-hot-toast";
import { GoDotFill } from 'react-icons/go';
import { IoSearchCircle } from 'react-icons/io5';
import { IoSearch } from "react-icons/io5";
import secureLocalStorage from 'react-secure-storage';
import axios from 'axios';
import swal from "sweetalert";
import { ProgressSpinner } from 'primereact/progressspinner';

const Usermatching = () => {
    let navigate = useNavigate()
    let localamaunt = Number(localStorage.getItem("amount_store"));
    let team_obj = secureLocalStorage.getItem("team_obj")
    let userid = secureLocalStorage.getItem("userid")

    const [width, setWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);
    let [isLoading, setisLoading] = useState(true)
 

    let [showteambatlist, setshowteambatlist] = useState([])
    let [showprofiledata, setshowprofiledata] = useState({})

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

    // goto live straming handel 
    let got_to_live_straming = (status) => {
        setVisible(true)
    }

    // patplce user amount handel 
    let setamounthandel = (event) => {
        event.preventDefault();
        let form = event.target
        let formdata = new FormData(form)
        let obj = Object.fromEntries(formdata.entries())
        

        if (showprofiledata?.userWallet > 0) {
            if (obj.amount >= 100) {
                setTimeout(() => {
                    secureLocalStorage.setItem("batamout", obj.amount)
                    navigate("/user_bat_mony_maching")
                }, 500);
            } else {
                toast.error("Pleace Enter Valid Amont")
            }
        } else {
            toast.error("Insufficient Balance");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }

    };

    // get data getUser_profile
    useEffect(() => {
        getprofile()
    }, [])
    let getprofile = () => {
        let objdata = {
            "userId": userid
        }
        axios.post(`${process.env.REACT_APP_API_KEY}getUser_profile`, objdata).then((res) => {
            if (res.data.result == "true") {
                setshowprofiledata(res.data.data[0])
            } else {
                setshowprofiledata({})
            }
        }).catch((error) => {
            setshowprofiledata({})
            if (error.response && error.response.status === 400) {
            } else {
            }
        })
    }

    // get user bet list 
    useEffect(() => {
        getuserbetlist()
    }, [])
    let getuserbetlist = () => {
        let obj = {
            "matchId": team_obj?._id,
            "userId": userid,
            "outcome": team_obj?.teamstatus
        }
        axios.post(`${process.env.REACT_APP_API_KEY}unmatchedBetList`, obj).then((res) => {
            if (res.data.result == "true") {
                setshowteambatlist(res?.data?.data)
                setisLoading(false)
            } else {
                setshowteambatlist([])
                setisLoading(false)
            }
        }).catch((err) => {
            setshowteambatlist([])
            setisLoading(false)
        })
    }

    // direct bet user
    let betuserlist = (betuserobj) => {
        console.log("betuserobj", betuserobj);
        
        if (showprofiledata?.userWallet > 0) {
            secureLocalStorage.setItem("directbatuser", betuserobj)
            secureLocalStorage.setItem("batamout", betuserobj.amount)
            setTimeout(() => {
                navigate("/user_bat_mony_maching")
            }, 500);
        } else {
            toast.error("Insufficient Balance")
        }


    };

    // serach filter wish list
    const handleFilter = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm === "") {
            getuserbetlist()
        } else {
            const result = showteambatlist.filter((item) =>
                item.uniqueName.toLowerCase().includes(searchTerm)
            );
            if (result?.length > 0) {
                setshowteambatlist(result);
            } else {
                setshowteambatlist([]);
                // setloaderstatus(false)
            }
        }
    };


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
                                    <form onSubmit={setamounthandel} className="needs-validation" >
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount</label>
                                            <input
                                                // max={10000}
                                                min={100}
                                                name='amount'
                                                type="number"
                                                className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                                                required
                                            />
                                        </div>

                                        <div className="my-3">
                                            <button

                                                type="submit"
                                                className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                                onclick="window.location.href='#';"
                                            >
                                                Go To Bat
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>

            </Dialog>

            <div className="py-5 ">
                <div className="container">
                    <div className="row animate__animated wow animate__fadeInUp mt-4">
                        <div className="d-flex justify-content-end mt-3 mb-3 ">
                            <div style={{ paddingRight: "15px" }}>
                                <p className="mb-0">Available Balance</p>
                                <h5 className="my-0">
                                    ${showprofiledata?.userWallet > 0 ? showprofiledata?.userWallet : "00.00"}
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Live
                                Users For beting</p>
                        </div>
                        <div className='text-center mt-2'>
                            <button onClick={() => got_to_live_straming(false)} className="rounded-pill btn custom-link font-small" type="button" style={{ width: "50%" }}  >Auto Bet Matching Now</button>
                        </div>
                    </div>


                    <div>
                        <div className="mb-3 mt-5 row justify-content-center">
                            <div className='col-lg-6 col-9' style={{ paddingRight: "0px" }}>
                                <input type="text"
                                    // Update search query
                                    onChange={handleFilter}
                                    className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill" id="exampleInputPassword1" placeholder="Search" required />
                            </div>
                            <div className='col-lg-1 col-1 ' style={{ paddingLeft: "0px" }}>
                                {/* <IoSearchCircle /> */}
                                <button className="rounded-pill btn custom-link font-small " type="button" style={{ background: "#007bff", width: "50px" }} ><IoSearch /></button>
                            </div>
                        </div>
                    </div>

                    {isLoading == true ? (
                        <div className='text-center mt-5'>
                            <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="4" animationDuration=".5s" />
                        </div>
                    ) : (
                        <div className="row mt-4">
                            <div className="col-12" style={{
                                height: "400px", overflow: "scroll", scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            }}>


                                {showteambatlist?.length > 0 ? (
                                    <>
                                        {showteambatlist?.map((items, index) => {
                                            return (
                                                <div key={index} className="row g-0 row blog-post-social">
                                                    <div className="col-md-6 col-8 d-flex justify-content-md-start ">
                                                        <ul className="post-tag-list">
                                                            <li>
                                                                <div class="col-12 col-md-4 mb-lg-0">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="flex-shrink-0 svg-icon">
                                                                            {
                                                                                items?.userProfile
                                                                                    === " " || items?.userProfile
                                                                                    === null || items?.userProfile
                                                                                    === undefined ? (
                                                                                    <img
                                                                                        className="img-fluid rounded-circle"
                                                                                        style={{ width: "60px", height: "60px" }}
                                                                                        alt="Games team"
                                                                                        src="./logo/dummyuser.jpg"
                                                                                    />
                                                                                ) : items?.userProfile
                                                                                    ?.startsWith("https://") ? (
                                                                                    <img
                                                                                        className="img-fluid rounded-circle"
                                                                                        style={{ width: "60px", height: "60px" }}
                                                                                        alt="Games team"
                                                                                        src={`${process.env.REACT_APP_IMG_URL}${items?.userProfile
                                                                                            }`}
                                                                                    />
                                                                                ) : (
                                                                                    <img
                                                                                        className="img-fluid rounded-circle"
                                                                                        style={{ width: "60px", height: "60px" }}
                                                                                        alt="Games team"
                                                                                        src={`${process.env.REACT_APP_IMG_URL}${items?.userProfile
                                                                                            }`}
                                                                                    />
                                                                                )
                                                                            }
                                                                            {/* <img src="assets/images/blog/userCommentPic.png" alt="User Pic" title="User Pic" /> */}
                                                                        </div>
                                                                        <div class="flex-grow-1 ms-3">
                                                                            <p class="h5 fw-bold mb-0">{items?.uniqueName}</p>
                                                                            <p class="mb-0 text-success">${items?.amount}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6 col-4 d-flex justify-content-md-end justify-content-center">
                                                        <ul className="blog-icon-list">
                                                            <li>  <button className="rounded-pill btn custom-link font-small" type="button" style={{ width: "auto" }} onClick={() => betuserlist(items)} >Bet Now</button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <div className='text-center mt-5'>
                                            <img
                                                className="img-fluid"
                                                style={{ width: "100px", height: "100px" }}
                                                alt="Games team"
                                                src="./imglist/datanotfound_logo.png"
                                            />
                                        </div>

                                        <div className="group text-center">
                                            <h4 className="display-5 mb-3 font-black">Data not found</h4>
                                            {/* <button className="rounded-pill btn custom-btn-primary font-small primary-btn-effect" type="submit">
                                                <Link to='/'>
                                                    Go To Home
                                                </Link>
                                            </button> */}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                    }



                </div>
            </div>
        </>
    )
}

export default Usermatching