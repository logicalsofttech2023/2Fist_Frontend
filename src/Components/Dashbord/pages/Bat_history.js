import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";

const Bat_history = () => {
    let navigate = useNavigate();
    let userid = secureLocalStorage.getItem("userid")
    let [errorstatus, seterrorstatus] = useState(true)
    const [width, setWidth] = useState(window.innerWidth);


    // logout handel 
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
        "status": "0"
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

    // date name formate 
    const formatDateTime = (dateString, timeString) => {
        const date = new Date(`${dateString}T${timeString}`);
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
            <section className="dashboard-section">
                <div className="container">
                    <div className="row justify-content-center">

                        {width < 991 ? (
                            ""
                        ) : (
                            <div className="col-12 col-lg-3">
                                {/* dashboard sidebar tabs */}
                                <div className="dashboard-tab">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <Link to="/dashboard">
                                                <button
                                                    className="nav-link"
                                                    id="dashboard-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#dashboard-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="dashboard-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    <i className="bi bi-speedometer fs-5 me-2 align-middle" />
                                                    Dashboard
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/mybets">
                                                <button
                                                    className="nav-link "
                                                    id="myBets-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#myBets-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="myBets-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                                                    My Bets
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/bat_history">
                                                <button
                                                    className="nav-link active"
                                                    id="myBets-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#myBets-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="myBets-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                                                    Bet History
                                                </button>
                                            </Link>
                                        </li>
                                            {/* <li className="nav-item" role="presentation">
                                            <Link to="/deposit">
                                                <button
                                                    className="nav-link "
                                                    id="deposit-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#deposit-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="deposit-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-cash-coin fs-5 me-2 align-middle" />
                                                    Deposit
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/withdrawal">
                                                <button
                                                    className="nav-link "
                                                    id="withdraw-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#withdraw-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="withdraw-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-wallet fs-5 me-2 align-middle" />
                                                    Withdraw
                                                </button>
                                            </Link>
                                        </li> */}
                                        <li className="nav-item" role="presentation">
                                            <Link to="/transaction_user">
                                                <button
                                                    className="nav-link "
                                                    id="transactions-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#transactions-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="transactions-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-receipt fs-5 me-2 align-middle" />
                                                    Transactions
                                                </button>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <Link to="/manage_Login_Password">
                                                <button
                                                    className="nav-link"
                                                    id="password-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#password-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="password-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-person-check fs-5 me-2 align-middle" />
                                                    Password
                                                </button>
                                            </Link>
                                        </li> */}
                                        <li onClick={logout_handel} className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                type="button"
                                                role="tab"
                                                aria-controls="password-tab-pane"
                                            >
                                                <i className="bi bi-person-check fs-5 me-2 align-middle" />
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="col-12 col-lg-9">
                            <div className="tab-content" id="myTabContent">
                                <div
                                >
                                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow">
                                        <div className="d-flex justify-content-between p-3 wallet-head">
                                            <span className="fs-5 fw-bold">Bating History</span>
                                        </div>
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
                                                                   
                                                                    </div>
                                                                </>
                                                            </div>
                                                        </section>
                                                    ) : (
                                                        <>
                                                            {data?.data?.length === 0 ? (

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
                                                                            <button className="rounded-pill btn custom-btn-primary font-small  text-white" type="submit">
                                                                                <Link to='/Fightlist'>
                                                                                    Go To Back
                                                                                </Link>
                                                                            </button>
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
                                                                                    <th>Category</th>
                                                                                    <th>Teams</th>
                                                                                    {/* <th>Mybat</th> */}
                                                                                    <th>Transaction Id</th>
                                                                                    <th>Date/Time</th>
                                                                                    <th>Amount</th>
                                                                                    <th>Atatus</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>

                                                                                {data?.data?.map((items, index) => {
                                                                                    const { date, time } = formatDateTime(items?.matchId?.start_date, items?.matchId?.start_time);
                                                                                    return (
                                                                                        <tr key={index}>
                                                                                            <td>{index + 1}</td>
                                                                                            <td>{items?.matchId?.leagueName}</td>
                                                                                            <td className="text-center">{items?.matchId?.teamName1} <br /> vs <br /> {items?.matchId?.teamName2}</td>
                                                                                            {/* <td className="text-center">harish <br /> vs piyush</td> */}
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
                                                                                                <span className="text-success">
                                                                                                    {items?.matchId?.matchStatus}
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

export default Bat_history;
