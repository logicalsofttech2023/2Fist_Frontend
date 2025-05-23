import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Transactions_history = () => {
    let navigate = useNavigate();
    let coordinator_userid = secureLocalStorage.getItem("coordinator_userid")
    let [TransjectionList, setTransjectionList] = useState([])

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
            secureLocalStorage.removeItem("coordinator_loginstatus")
            secureLocalStorage.removeItem("coordinator_userid")
            localStorage.removeItem("loginstatus");
        };
    };

    // coordinatorTransjectionList get list 
    useEffect(() => {
        let objdata = {
            "coordinatorId": coordinator_userid 
        }
        axios.post(`${process.env.REACT_APP_API_KEY}coordinatorTransjectionList`, objdata).then((res) => {
            console.log("histoy", res)
            if (res.data.result == "true") {
                setTransjectionList(res?.data?.data)
            } else {
            }
        }).catch((error) => {
            console.log(error)
            if (error.response && error.response.status === 400) {
            } else {
            }
        })
    }, [])



    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });


    console.log(windowSize?.width)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>

            {/* dashboard content section */}
            <section className="dashboard-section">
                {/* dashboard tab content */}
                <div className="container">
                    <div className="row justify-content-center">
                        {windowSize?.width < 991 ? (
                            ""
                        ) : (
                            <div className="col-12 col-lg-3">
                                {/* dashboard sidebar tabs */}
                                <div className="dashboard-tab">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <Link to="/coordinator_dashboard">
                                                <button
                                                    className="nav-link"
                                                    id="deposit-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#deposit-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="deposit-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-cash-coin fs-5 me-2 align-middle" />
                                                    Dashboard
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/addTeams">
                                                <button
                                                    className="nav-link "
                                                    id="dashboard-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#dashboard-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="dashboard-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    <i className="bi bi-speedometer fs-5 me-2 align-middle" />
                                                    Add Teams
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/coordinator_Teams_list">
                                                <button
                                                    className="nav-link "
                                                    id="myBets-tab"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="myBets-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                                                    My All Games
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/commission_List">
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
                                                    My Commission
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/all_Matches_List">
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
                                                    My All Maches
                                                </button>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <Link to="/transactions_history">
                                                <button
                                                    className="nav-link active"
                                                    id="buyCrypto-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#buyCrypto-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="buyCrypto-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-coin fs-5 me-2 align-middle" />
                                                    Transactions History
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
                                    className="tab-pane fade show active"
                                    id="dashboard-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="dashboard-tab"
                                    tabIndex={0}>
                                    <div className="p-3">
                                        <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                                            {/* my wallet section */}
                                            <div className="d-flex justify-content-between p-3 wallet-head">
                                                <span className="fs-5 fw-bold">Transactions List</span>
                                            </div>
                                            {/* my booking section */}
                                            <div className="p-0 p-lg-3">
                                                <div className="tble_wrap">
                                                    <div className="table-responsive theme-border-radius">
                                                        {/* transaction table */}
                                                        {/* <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>SR NO.</th>
                                                                    <th>Transaction ID</th>
                                                                    <th>Transaction Type</th>
                                                                    <th>Transaction amount</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {TransjectionList?.map((items, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{items?.transjectionId}</td>
                                                                            <td>{items.tranjectionType}</td>
                                                                            <td>{items?.amount}</td>
                                                                            <td>
                                                                                <span className="text-success">
                                                                                    {items?.status}
                                                                                </span>
                                                                            </td>
\
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table> */}



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
                                                                <h6 className="display-5 mb-3 font-black">Data Not Found</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Transactions_history;
