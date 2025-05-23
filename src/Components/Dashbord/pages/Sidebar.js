import { useQuery } from "@tanstack/react-query";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";

const Sidebar = () => {
  let navigate = useNavigate();
  const location = useLocation();

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
      localStorage.clear();
    };
  };
  return (
    <div className="col-12 col-lg-3">
      {/* dashboard sidebar tabs */}
      <div className="dashboard-tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link to="/dashboard">
              <button
                className={`nav-link ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-speedometer fs-5 me-2 align-middle" />
                Dashboard
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/mybets">
              <button
                className={`nav-link ${
                  location.pathname === "/mybets" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                My Bets
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/transaction_user">
              <button
                className={`nav-link ${
                  location.pathname === "/transaction_user" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-receipt fs-5 me-2 align-middle" />
                Transactions
              </button>
            </Link>
          </li>

          <li className="nav-item" role="presentation">
            <Link to="/withdrawList">
              <button
                className={`nav-link ${
                  location.pathname === "/withdrawList" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-receipt fs-5 me-2 align-middle" />
                Withdraw
              </button>
            </Link>
          </li>
          <li onClick={logout_handel} className="nav-item" role="presentation">
            <button className="nav-link" type="button">
              <i className="bi bi-person-check fs-5 me-2 align-middle" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
