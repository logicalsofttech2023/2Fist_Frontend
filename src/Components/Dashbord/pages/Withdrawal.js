import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Withdrawal = () => {
    let navigate = useNavigate();

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



    const [width, setWidth] = useState(window.innerWidth);
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
                                                    Bet History
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
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
                                                    className="nav-link active"
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
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <Link to="/transaction_user">
                                                <button
                                                    className="nav-link"
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
                            {/* tab content */}
                            <div className="tab-content" id="myTabContent">
                                <div
                                >
                                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                                        <div className="p-0 p-lg-3">
                                            <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                                                <div className="p-3">
                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <h5 className="fs-5 fw-bold mb-3">Withdrawal</h5>
                                                            <p className="mb-3">
                                                                Maximum withdrawal amount is $10000
                                                            </p>
                                                        </div>
                                                        <div className="col-12 col-lg-8 offset-lg-2">
                                                            <div className="theme-border-radius theme-transparent-bg p-4">
                                                                <form>
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="mb-3">
                                                                                <label>Withdrawal Amount</label>
                                                                                <div className="input-select-wrap d-flex align-items-center">
                                                                                    <input type="text" placeholder="e.g. 100" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <ul className="currency-amount">
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$100</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$200</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$300</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$400</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$500</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$600</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$700</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="javascript:void(0)">$800</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-12 mt-3 text-center">
                                                                            <button className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                                                                Withdrawal
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
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

export default Withdrawal;
