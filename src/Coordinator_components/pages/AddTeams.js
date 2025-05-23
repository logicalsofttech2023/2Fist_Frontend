import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Sidebar from "../Sidebar";
const AddTeams = () => {
    let navigate = useNavigate();
    let coordinator_userid = secureLocalStorage.getItem("coordinator_userid")
    const [preview, setPreview] = useState(null);
    const [preview2, setPreview2] = useState(null);
    let [show_category_data, setshow_category_data] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });


    // window width hight
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    // category_list API  
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
        const form = e.target;
        const formData = new FormData(form); // Create FormData from form
        const data = Object.fromEntries(formData.entries()); // Convert to an object
        formData.append("coordinatorId", coordinator_userid)
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        formData.append("currentDate", formattedDate); 

        axios.post(`${process.env.REACT_APP_API_KEY}createMatch`, formData).then((res) => {
            if (res.data.result == "true") {
                form.reset();
                setPreview(null)
                setPreview2(null)
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }).catch((error) => {
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
            <section className="dashboard-section">
                <div className="container">
                    <div className="row justify-content-center">
                        {windowSize?.width < 991 ? (
                            ""
                        ) : (
                            <Sidebar />
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
                                            <h5 className="fs-5 fw-bold mb-4">Add Teams</h5>
                                            <form action="#" onSubmit={handleSubmit}>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="">
                                                            <label htmlFor="perFname">First Team</label>
                                                            <div className="p-2 theme-transparent-bg theme-border-radius text-center" >
                                                                <img
                                                                    style={{ width: "75px", height: "75px" }}
                                                                    src={preview || `https://www.2fist.com/logo/newlogo.png`}
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
                                                                    src={preview2 || `https://www.2fist.com/logo/newlogo.png`}
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
                                                                    placeholder="Enter Match End Date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label> Category</label>
                                                            <div className="select-wrap">
                                                                <select name="categoryId" style={{ width: "100%", height: "50px", backgroundColor: "#000849", borderRadius: "30px", color: "#fb2576" }}>
                                                                    <option style={{ color: "white" }} hidden value={1}>Select Category</option>
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
                                                                <select name="leagueName" style={{ width: "100%", height: "50px", backgroundColor: "#000849", borderRadius: "30px", color: "#fb2576" }}>
                                                                    <option style={{ color: "white" }} hidden value={1}>Select League</option>
                                                                    <option style={{ color: "white" }} value={"Kabaddi"}>Kabaddi </option>
                                                                    <option style={{ color: "white" }} value={"hockey"}>hockey</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-12">
                                                        <div className="mb-3 text-center">
                                                            <button style={{ marginTop: "30px" }} className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5">
                                                                Add Team
                                                            </button>
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

export default AddTeams;
