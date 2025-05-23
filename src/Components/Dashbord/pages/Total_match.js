import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Total_match = () => {
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



    return (
        <>

            {/* dashboard content section */}
            <section className="dashboard-section">
                {/* dashboard tab content */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-3">
                            {/* dashboard sidebar tabs */}
                            <div className="dashboard-tab">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <Link to="/dashboard">
                                            <button
                                                className="nav-link active"
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
                                    {/* <li className="nav-item" role="presentation">
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
                                            Deposit
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
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
                                    </li> */}
                                   
                                    
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
                        <div className="col-12 col-lg-9">
                            {/* tab content */}
                            <div className="tab-content" id="myTabContent">
                                <div
                                >
                                    <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                                        <div className="p-0 p-lg-3">
                                            <div className="d-flex flex-column theme-border-radius theme-bg-white theme-box-shadow mb-4">
                                                {/* my wallet section */}
                                                <div className="d-flex justify-content-between p-3 wallet-head">
                                                    <span className="fs-5 fw-bold">Total Bat List</span>
                                                </div>
                                                {/* my booking section */}
                                                <div className="p-0 p-lg-3">
                                                    <div className="tble_wrap">
                                                        <div className="table-responsive theme-border-radius">
                                                            {/* booking table */}
                                                            <table className="table">
                                                                <tbody>
                                                                    <tr>
                                                                        <th>SR</th>
                                                                        <th>Teams</th>
                                                                        <th>Category</th>
                                                                        <th>Date/Time</th>
                                                                        <th>Bat Amount</th>
                                                                        {/* <th>Action</th> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Indore vs Bhopal</td>
                                                                        <td>kabbdi</td>
                                                                        <td>2023-01-05 15:33:53</td>

                                                                        <td>
                                                                            <img
                                                                                src="assets/images/icons/btc.png"
                                                                                alt="icon"
                                                                            />{" "}
                                                                            10,000
                                                                        </td>
                                                                        {/* <td style={{ display: "flex" }}>
                                                                                            <button className="btn btn-danger">Delete</button>
                                                                                            <button style={{ marginLeft: "5px" }} className="btn btn-info">Edit</button>
                                                                                        </td> */}
                                                                    </tr>
                                                                </tbody>
                                                            </table>
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

export default Total_match;
