import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { ProgressSpinner } from "primereact/progressspinner";

const Update_teams = () => {
    let navigate = useNavigate();

    let coordinator_userid = secureLocalStorage.getItem("coordinator_userid")
    let editteam = secureLocalStorage.getItem("editteam")


    useEffect(() => {
        if (typeof editteam === "string") {
            navigate("/coordinator_Teams_list");
        }
    }, [editteam]);

    let [preview, setPreview] = useState(null);
    let [preview2, setPreview2] = useState(null);
    let [loader, setloader] = useState(true)
    let [show_category_data, setshow_category_data] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });



    /// logout data 
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



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}category_list`).then((res) => {
            if (res.data.result == "true") {
                setshow_category_data(res.data.data)
            } else {

            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
            } else {
            }
        })
    }, [])

    // logo A
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Generate local preview URL
        }
    };

    // logo B
    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreview2(URL.createObjectURL(file)); // Generate local preview URL
        }
    };


    // form handel add teams
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from submitting the default way
        setloader(false)
        let form = e.target;
        let formData = new FormData(form); // Create FormData from form
        let data = Object.fromEntries(formData.entries()); // Convert to an object betId
        console.log("data", data)
        formData.append("coordinatorId", coordinator_userid)
        formData.append("betId", editteam?._id)

        axios.post(`${process.env.REACT_APP_API_KEY}updateCoordinatorTeamList`, formData).then((res) => {
            if (res.data.result == "true") {
                secureLocalStorage.setItem("editteam", res?.data?.data)
                toast.success(res.data.message);
                setloader(true)
            } else {
            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message);
                setloader(true)
            } else {
                toast.error("Invalid Data Entered by you.");
                setloader(true)
            }
        })
    }

    // window size width hight
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
            <Toaster />
            <section className="dashboard-section">
                <div className="container">
                    <div className="row justify-content-center">
                        {windowSize?.width < 991 ? (
                            ""
                        ) : (
                            <div className="col-12 col-lg-3">
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
                                        <div className="theme-border-radius theme-transparent-bg p-3">
                                            <h5 className="fs-5 fw-bold mb-4">Edit Teams</h5>
                                            <form action="#" onSubmit={handleSubmit}>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <label htmlFor="perFname">First Team</label>
                                                            <div className="p-2 theme-transparent-bg theme-border-radius text-center" >
                                                                <img
                                                                    style={{ width: "75px", height: "75px" }}
                                                                    src={preview ? preview : editteam?.logo2 ? `${process.env.REACT_APP_IMG_URL}${editteam.logo1}` : `./logo/newlogo.png`}
                                                                    alt="images"
                                                                    className="rounded-circle"

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <label htmlFor="perLname">Second Team</label>
                                                            <div className="p-2 theme-transparent-bg theme-border-radius text-center" >
                                                                <img
                                                                    style={{ width: "75px", height: "75px" }}
                                                                    src={preview2 ? preview2 : editteam?.logo2 ? `${process.env.REACT_APP_IMG_URL}${editteam.logo2}` : `./logo/newlogo.png`}
                                                                    alt="images"
                                                                    className="rounded-circle"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="">

                                                            <div className="file-upload">
                                                                <label className="file">
                                                                    <input
                                                                        type="file"
                                                                        name="logo1"
                                                                        onChange={handleImageChange}
                                                                    />
                                                                    <span className="file-custom" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">

                                                            <div className="file-upload">
                                                                <label className="file">
                                                                    <input
                                                                        type="file"
                                                                        name="logo2"
                                                                        onChange={handleImageChange2}
                                                                    />
                                                                    <span className="file-custom" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="birth">A Team Name</label>
                                                                <div className="input-area">
                                                                    <input
                                                                        type="text"
                                                                        name="teamName1"
                                                                        placeholder="Enter First Team Name"
                                                                        defaultValue={editteam?.teamName1}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="birth">B Team Name</label>
                                                                <div className="input-area">
                                                                    <input
                                                                        type="text"
                                                                        name="teamName2"
                                                                        defaultValue={editteam?.teamName2}
                                                                        placeholder="Enter Second Team Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="birth">A Team Sort Name</label>
                                                                <div className="input-area">
                                                                    <input
                                                                        type="text"
                                                                        name="sortName1"
                                                                        defaultValue={editteam?.sortName1}
                                                                        placeholder="Enter A Sort Team Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3">
                                                                <label htmlFor="birth">B Team Sort Name</label>
                                                                <div className="input-area">
                                                                    <input
                                                                        type="text"
                                                                        name="sortName2"
                                                                        defaultValue={editteam?.sortName2}
                                                                        placeholder="Enter B Sort Team Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">Start Date</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="date"
                                                                    name="start_date"
                                                                    defaultValue={editteam?.start_date}
                                                                    placeholder="Enter Match Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">End Date</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="date"
                                                                    name="expire_date"
                                                                    defaultValue={editteam?.expire_date}
                                                                    placeholder="Enter Match End Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">Start Time</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="time"
                                                                    name="time"
                                                                    placeholder="Enter Match End Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">Start Time</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="time"
                                                                    name="start_time"
                                                                    defaultValue={editteam?.start_time}
                                                                    placeholder="Enter Match Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="birth">End End</label>
                                                            <div className="input-area">
                                                                <input
                                                                    type="time"
                                                                    name="expire_time"
                                                                    defaultValue={editteam?.expire_time}
                                                                    placeholder="Enter Match End Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label> Category</label>
                                                            <div className="select-wrap">
                                                                <select name="categoryId" value={editteam?.categoryId} style={{ width: "100%", height: "50px", backgroundColor: "#000849", borderRadius: "30px", color: "#fb2576" }}>
                                                                    <option style={{ color: "white" }} hidden value={editteam?.categoryId?._id}>{editteam?.categoryId?.categoryName}</option>
                                                                    {show_category_data?.map((items, index) => {
                                                                        return (
                                                                            <option key={index} style={{ color: "white" }} value={items?._id}>{items?.categoryName}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label>League Name</label>
                                                            <div className="select-wrap">
                                                                <select name="leagueName" defaultValue={editteam?.leagueName} style={{ width: "100%", height: "50px", backgroundColor: "#000849", borderRadius: "30px", color: "#fb2576" }}>
                                                                    <option style={{ color: "white" }} hidden value={editteam?.leagueName}>{editteam?.leagueName}</option>
                                                                    <option style={{ color: "white" }} value={"Kabaddi"}>Kabaddi </option>
                                                                    <option style={{ color: "white" }} value={"hockey"}>hockey</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-12">
                                                        <div className="mb-3 text-center">
                                                            {loader == true ? (
                                                                <button style={{ marginTop: "30px" }} className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                                                    Update Team
                                                                </button>
                                                            ) : (
                                                                <div className='text-center'>
                                                                    <ProgressSpinner style={{ width: '50px', height: '50px', marginTop: "30px" }} />
                                                                </div>
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

export default Update_teams;
