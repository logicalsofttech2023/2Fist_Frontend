import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout_handel = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        userlogout();
      }
    });
  };

  const userlogout = () => {
    navigate("/coordinatorLogin");
    secureLocalStorage.removeItem("coordinator_loginstatus");
    secureLocalStorage.removeItem("coordinator_userid");
    localStorage.removeItem("loginstatus");
    localStorage.clear();
  };

  return (
    <div className="col-12 col-lg-3">
      {/* dashboard sidebar tabs */}
      <div className="dashboard-tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link to="/coordinator_dashboard">
              <button
                className={`nav-link ${
                  location.pathname === "/coordinator_dashboard" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-speedometer fs-5 me-2 align-middle" />
                Dashboard
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/addTeams">
              <button
                className={`nav-link ${
                  location.pathname === "/addTeams" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-people fs-5 me-2 align-middle" />
                Add Teams
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/all_Matches_List">
              <button
                className={`nav-link ${
                  location.pathname === "/all_Matches_List" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-box-seam fs-5 me-2 align-middle" />
                Match Status
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/commission_List">
              <button
                className={`nav-link ${
                  location.pathname === "/commission_List" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-wallet fs-5 me-2 align-middle" />
                My Commission
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
                <i className="bi bi-cash-stack fs-5 me-2 align-middle" />
                Withdraw List
              </button>
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/transactionList">
              <button
                className={`nav-link ${
                  location.pathname === "/transactionList" ? "active" : ""
                }`}
                type="button"
              >
                <i className="bi bi-credit-card fs-5 me-2 align-middle" />
                Transaction List
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
