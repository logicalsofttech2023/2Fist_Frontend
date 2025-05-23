import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

const C_Profile = () => {
    let navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    let coordinator_userid = secureLocalStorage.getItem("coordinator_userid")
    const [width, setWidth] = useState(window.innerWidth);
    const [amaunt, getamaunt] = useState(1000);
    const [isDisabled, setIsDisabled] = useState(true);
    const [preview, setPreview] = useState(null);
    const [editprofiledata, seteditprofiledata] = useState({
        coordinatorName: "",
        coordinatorProfile: "",
        countryName: "",
        UserEmail: "",
        dob: "",
        gender: ""
    });

    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        seteditprofiledata({ ...editprofiledata, [e.target.name]: e.target.value })
    };
    // Handle file input change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Generate local preview URL
        }
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

    let setamounthandel = (event) => {
        event.preventDefault();
        toast.success("Amaunt Add Successfully");
        localStorage.setItem("amount_store", amaunt);
    };

    useEffect(() => {
        getuserdata()
    }, [])
    // get coordinatorProfiledata 
    let getuserdata = () => {
        let objdata = {
            "coordinatorId": coordinator_userid 
        }
        axios.post(`${process.env.REACT_APP_API_KEY}getCoordinatorProfile`, objdata).then((res) => {
            console.log(res)
            if (res.data.result == "true") {
                secureLocalStorage.setItem("coordinatorProfile", res?.data?.data[0]?.coordinatorProfile)
                seteditprofiledata((prevState) => ({
                    ...prevState,
                    coordinatorName: res?.data?.data[0]?.coordinatorName,
                    coordinatorProfile: res?.data?.data[0]?.coordinatorProfile,
                    countryName: res?.data?.data[0]?.countryName,
                    UserEmail: res?.data?.data[0]?.email,
                    dob: res?.data?.data[0]?.dob,
                    gender: res?.data?.data[0]?.gender
                }));
            } else {

            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
            } else {
            }
        })
    }
    // Function to toggle the disabled state
    const handleEditClick = () => {
        setIsDisabled(false); // Enable the inputs when the button is clicked
    };
    // form updatehadnel 
    let updatehadnel = (e) => {
        e.preventDefault()
        let form = e.target
        let formdata = new FormData(form)
        let obj = Object.fromEntries(formdata.entries())
        formdata.append("coordinatorId", coordinator_userid)

      
        axios.post(`${process.env.REACT_APP_API_KEY}updateCoordinatorProfile`, formdata).then((res) => {
            console.log(res)
            if (res.data.result == "true") {
                toast.success(res.data.message)
                getuserdata()
                setIsDisabled(true);
            } else {
                toast.error(res.data.message)
            }
        }).catch((error) => {
            console.log(error)
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message);

            } else {
                toast.error("Invalid Data Entered by you.");
            }
        })

    }
    return (
        <>
            <Toaster />
            <Dialog
                header="Deposit"
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
                                    <form className="needs-validation" noValidate>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount</label>
                                            <input
                                                defaultValue={1000}
                                                onChange={(event) => getamaunt(event.target.value)}
                                                type="number"
                                                className="form-control form-control-th rounded-pill form-control form-control-th rounded-pill-th rounded-pill"
                                                id="exampleInputEmail1"
                                                required
                                            />
                                        </div>
                                        <div className="my-3">
                                            <button
                                                onClick={setamounthandel}
                                                type="submit"
                                                className="rounded-pill btn custom-btn-primary primary-btn-effect d-flex w-100 justify-content-center align-items-center"
                                                onclick="window.location.href='#';"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
            </Dialog>
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
                                            <Link to="/coordinator_dashboard">
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
                                            <Link to="/addTeams">
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
                                                    Add Teams
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link to="/coordinator_Teams_list">
                                                <button
                                                    className="nav-link"
                                                    id="myBets-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#myBets-tab-pane"
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
                                                    className="nav-link"
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
                                        {/* <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="affiliate-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#affiliate-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="affiliate-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-file-person fs-5 me-2 align-middle" />
                                            Affiliate
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
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
                                            transactions
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="setting-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#setting-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="setting-tab-pane"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-gear fs-5 me-2 align-middle" />
                                            Setting
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
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
                                    className="tab-pane fade show active"
                                    id="dashboard-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="dashboard-tab"
                                    tabIndex={0}
                                >


                                    <div className="row mt-3 mt-lg-0">

                                        <div className="theme-border-radius theme-transparent-bg p-3">
                                            <h5 className="fs-5 fw-bold mb-4">Coordinator Profile Details</h5>
                                            <form onSubmit={updatehadnel}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <div className="p-2 theme-transparent-bg theme-border-radius text-center" >
                                                                {
                                                                    editprofiledata?.coordinatorProfile === " " || editprofiledata?.coordinatorProfile === null || editprofiledata?.coordinatorProfile === undefined ? (
                                                                        <img
                                                                            style={{ width: "75px", height: "75px" }}
                                                                            src={preview || `./logo/newlogo.png`}
                                                                            alt="images"
                                                                            className="rounded-circle"
                                                                        />
                                                                    ) : editprofiledata?.coordinatorProfile?.startsWith("https://") ? (
                                                                        <img
                                                                            style={{ width: "75px", height: "75px" }} 
                                                                            src={preview || `${process.env.REACT_APP_IMG_URL}${editprofiledata?.coordinatorProfile}`}
                                                                            alt="images"
                                                                            className="rounded-circle"
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            style={{ width: "75px", height: "75px" }}
                                                                            src={preview || `${process.env.REACT_APP_IMG_URL}${editprofiledata?.coordinatorProfile}`}
                                                                            alt="images"
                                                                            className="rounded-circle"
                                                                        />
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <label htmlFor="perFname">Coordinator Name</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="text"
                                                                    id="perFname"
                                                                    name="coordinatorName"
                                                                    placeholder="Enter User Name"
                                                                    defaultValue={editprofiledata.coordinatorName} // Set value from state
                                                                    onChange={handleInputChange} // Handle change
                                                                    disabled={isDisabled} // Disable or enable based on state
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="file-upload">
                                                            <label className="file">
                                                                <input
                                                                    type="file"
                                                                    name="coordinatorProfile"
                                                                    disabled={isDisabled} // Disable file input
                                                                    onChange={handleImageChange}

                                                                />
                                                                <span className="file-custom" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="perLname">User Email</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="text"
                                                                    id="perLname"
                                                                    name="UserEmail"
                                                                    placeholder="Enter Your Email"
                                                                    value={editprofiledata.UserEmail} // Set value from state
                                                                    isDisabled
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">Country Name</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="text"
                                                                    id="birth"
                                                                    name="countryName"
                                                                    placeholder="Enter Country Name"
                                                                    defaultValue={editprofiledata.countryName} // Set value from state
                                                                    onChange={handleInputChange} // Handle change
                                                                    disabled={isDisabled}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="dob">Date Of Birth</label>
                                                            <div className="input-area">
                                                                <input
                                                                    style={{ color: "rgba(251, 37, 118, 0.8)" }}
                                                                    type="date"
                                                                    id="dob"
                                                                    name="dob"
                                                                    defaultValue={editprofiledata.dob} // Set value from state
                                                                    onChange={handleInputChange} // Handle change
                                                                    disabled={isDisabled}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="gender">Gender</label>
                                                            <span style={{ pointerEvents: `${isDisabled == true ? "none" : ""}` }} className="input-area">
                                                                Male : &nbsp;
                                                                <input
                                                                    style={{ width: "5%" }}
                                                                    type="radio"
                                                                    name="gender"
                                                                    value="male" // Set the value to 'male'
                                                                    checked={editprofiledata.gender == "male"} // Check if gender is 'male'
                                                                    onChange={handleInputChange} // Handle change

                                                                />&nbsp;&nbsp;&nbsp;
                                                                {console.log("editprofiledata.gender", typeof editprofiledata.gender)}
                                                                Female : &nbsp;
                                                                <input
                                                                    style={{ width: "5%" }}
                                                                    type="radio"
                                                                    name="gender"
                                                                    value="female" // Set the value to 'female'
                                                                    checked={editprofiledata.gender == "female"} // Check if gender is 'female'
                                                                    onChange={handleInputChange} // Handle change

                                                                />&nbsp;&nbsp;&nbsp;

                                                                Other : &nbsp;
                                                                <input
                                                                    style={{ width: "5%" }}
                                                                    type="radio"
                                                                    name="gender"
                                                                    value="other" // Set the value to 'other'
                                                                    checked={editprofiledata.gender == "other"} // Check if gender is 'other'
                                                                    onChange={handleInputChange} // Handle change

                                                                />
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="text-center" style={{ marginTop: "35px" }}>
                                                            {isDisabled == true ? (
                                                                <span
                                                                    className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5"
                                                                    onClick={handleEditClick} // Call the function to enable inputs
                                                                >
                                                                    Edit Details
                                                                </span>
                                                            ) : (
                                                                <>
                                                                    <button
                                                                        type="submit"
                                                                        className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5"

                                                                    >
                                                                        Update
                                                                    </button>
                                                                </>
                                                            )}

                                                        </div>
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


            </section>
        </>
    );
};

export default C_Profile;
