import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";
import Sidebar from "./Sidebar";

const Transaction_user = () => {
    let navigate = useNavigate();
    let userid = secureLocalStorage.getItem("userid")
    let [errorstatus, seterrorstatus] = useState(true)
    const [width, setWidth] = useState(window.innerWidth);

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
            navigate("/");
            localStorage.removeItem("loginstatus");
        };
    };


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


    // userTranjectionList handel get api 
    let objdata = {
        "userId": userid,
        "status": "1"
    }
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['userTranjectionList'], //  MatchDetails
        queryFn: async () =>
            fetch(`${process.env.REACT_APP_API_KEY}userTranjectionList`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(objdata),
            }).then((res) => {
                if (!res.ok) {
                    seterrorstatus(false)
                }
                return res.json();

            }),

        onError: (err) => {
        }
    });
    let transactiondata = data?.data?.filter((items) => {
        return items?.tranjectionType === 'Wallet'
    })

    // date time formate
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        return {
            date: date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            time: date.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
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
                        {width < 991 ? (
                            ""
                        ) : (
                            <Sidebar />
                        )}

                        <div className="col-12 col-lg-9">
                            <div className="tab-content" id="myTabContent">
                                <div>
                                   
                                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow">
                                        {/* my wallet section */}
                                        <div className="d-flex justify-content-between p-3 wallet-head">
                                            <span className="fs-5 fw-bold">Transaction History</span>
                                            <span className="fs-5 fw-bold "><button className="btn btn-info" onClick={() => navigate("/withdrawList")}> Withdraw List </button></span>
                                        </div>

                                        {/* my transaction section */}
                                        <div className="mt-2">

                                            {isLoading == true ? (
                                                <div className="text-center mt-5">
                                                    <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="4" animationDuration=".5s" />
                                                </div>
                                            ) : (
                                                <>
                                                    {errorstatus == false ? (
                                                        <section className="tournaments py-5">
                                                            <div className="container">
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
                                                                        <button className="rounded-pill btn custom-btn-primary font-small primary-btn-effect" type="submit">
                                                                            <Link to='/'>
                                                                                Go To Home
                                                                            </Link>
                                                                        </button>
                                                                    </div>
                                                                </>
                                                            </div>
                                                        </section>
                                                    ) : (
                                                        <>
                                                            {transactiondata?.length === 0 ? (

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
                                                                            <h4 className="display-5 mb-3 font-black">Data Not Found</h4>
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
                                                                                    <th>Transaction Id</th>
                                                                                    <th>Date/Time</th>
                                                                                    <th>Amount</th>
                                                                                    <th>Transaction Type</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>

                                                                                {transactiondata?.map((items, index) => {
                                                                                    const { date, time } = formatDateTime(items?.createdAt);
                                                                                    return (
                                                                                        <tr key={index}>
                                                                                            <td>{index + 1}</td>
                                                                                            <td>{items?.transjectionId}</td>
                                                                                            <td>
                                                                                                {date}
                                                                                                <br />
                                                                                                {time}
                                                                                            </td>
                                                                                            <td>
                                                                                                ${items?.amount}
                                                                                            </td>
                                                                                            <td>
                                                                                                <span >
                                                                                                    {items?.tranjectionType}
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                                })}

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>

                                            )
                                            }

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

export default Transaction_user;
