import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Sidebar from "../Sidebar";

const AddTeams = () => {
  let navigate = useNavigate();
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");
  const [preview, setPreview] = useState(null);
  const [preview2, setPreview2] = useState(null);
  let [show_category_data, setshow_category_data] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation
  const validateForm = (formData) => {
    const errors = {};
    const currentDate = new Date();

    // Team A validation
    if (!formData.teamName1?.trim()) {
      errors.teamName1 = "Team A name is required";
    } else if (formData.teamName1.length < 3) {
      errors.teamName1 = "Team name must be at least 3 characters";
    }

    if (!formData.sortName1?.trim()) {
      errors.sortName1 = "Team A short name is required";
    } else if (formData.sortName1.length > 5) {
      errors.sortName1 = "Short name must be 5 characters or less";
    }

    if (!formData.logo1) {
      errors.logo1 = "Team A logo is required";
    }

    // Team B validation
    if (!formData.teamName2?.trim()) {
      errors.teamName2 = "Team B name is required";
    } else if (formData.teamName2.length < 3) {
      errors.teamName2 = "Team name must be at least 3 characters";
    }

    if (!formData.sortName2?.trim()) {
      errors.sortName2 = "Team B short name is required";
    } else if (formData.sortName2.length > 5) {
      errors.sortName2 = "Short name must be 5 characters or less";
    }

    if (!formData.logo2) {
      errors.logo2 = "Team B logo is required";
    }

    // Date validation
    if (!formData.start_date) {
      errors.start_date = "Start date is required";
    } else if (
      new Date(formData.start_date) < currentDate.setHours(0, 0, 0, 0)
    ) {
      errors.start_date = "Start date cannot be in the past";
    }

    if (!formData.expire_date) {
      errors.expire_date = "End date is required";
    } else if (
      formData.start_date &&
      new Date(formData.expire_date) < new Date(formData.start_date)
    ) {
      errors.expire_date = "End date cannot be before start date";
    }

    // Time validation
    if (!formData.start_time) {
      errors.start_time = "Start time is required";
    }

    if (!formData.expire_time) {
      errors.expire_time = "End time is required";
    } else if (
      formData.start_date === formData.expire_date &&
      formData.start_time &&
      formData.expire_time <= formData.start_time
    ) {
      errors.expire_time =
        "End time must be after start time for same-day matches";
    }

    // Dropdown validation
    if (!formData.categoryId || formData.categoryId === "1") {
      errors.categoryId = "Please select a category";
    }

    if (!formData.leagueName || formData.leagueName === "1") {
      errors.leagueName = "Please select a league";
    }

    return errors;
  };

  // window width height
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
    }).then((willDelete) => {
      if (willDelete) {
        userlogout();
      }
    });

    let userlogout = () => {
      navigate("/coordinatorLogin");
      secureLocalStorage.removeItem("coordinator_loginstatus");
      secureLocalStorage.removeItem("coordinator_userid");
      localStorage.removeItem("loginstatus");
    };
  };

  // category_list API
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}category_list`)
      .then((res) => {
        if (res.data.result === "true") {
          setshow_category_data(res.data.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error("Failed to load categories");
        }
      });
  }, []);

  // logo A
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setFormErrors({ ...formErrors, logo1: "Please select an image file" });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setFormErrors({
          ...formErrors,
          logo1: "Image size must be less than 2MB",
        });
        return;
      }
      setFormErrors({ ...formErrors, logo1: null });
      setPreview(URL.createObjectURL(file));
    }
  };

  // logo B
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setFormErrors({ ...formErrors, logo2: "Please select an image file" });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setFormErrors({
          ...formErrors,
          logo2: "Image size must be less than 2MB",
        });
        return;
      }
      setFormErrors({ ...formErrors, logo2: null });
      setPreview2(URL.createObjectURL(file));
    }
  };

  // form handel add teams
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate form
    const errors = validateForm(data);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      toast.error("Please fix the errors in the form");
      return;
    }

    formData.append("coordinatorId", coordinator_userid);
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    formData.append("currentDate", formattedDate);

    axios
      .post(`${process.env.REACT_APP_API_KEY}createMatch`, formData)
      .then((res) => {
        setIsSubmitting(false);
        if (res.data.result === "true") {
          form.reset();
          setPreview(null);
          setPreview2(null);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while submitting the form");
        }
      });
  };

  return (
    <>
      <Toaster />
      <section className="dashboard-section">
        <div className="container">
          <div className="row justify-content-center">
            {windowSize?.width < 991 ? "" : <Sidebar />}
            <div className="col-12 col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dashboard-tab-pane"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                  tabIndex={0}
                >
                  <div className="p-3">
                    <div className="theme-border-radius theme-transparent-bg p-3">
                      <h5 className="fs-5 fw-bold mb-4">Add Teams</h5>
                      <form action="#" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="teamA">First Team</label>
                              <div className="p-2 theme-transparent-bg theme-border-radius text-center">
                                <img
                                  style={{ width: "75px", height: "75px" }}
                                  src={
                                    preview ||
                                    `https://www.2fist.com/logo/newlogo.png`
                                  }
                                  alt="Team A logo"
                                  className="rounded-circle"
                                />
                              </div>
                              {formErrors.logo1 && (
                                <div className="text-danger small">
                                  {formErrors.logo1}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="teamB">Second Team</label>
                              <div className="p-2 theme-transparent-bg theme-border-radius text-center">
                                <img
                                  style={{ width: "75px", height: "75px" }}
                                  src={
                                    preview2 ||
                                    `https://www.2fist.com/logo/newlogo.png`
                                  }
                                  alt="Team B logo"
                                  className="rounded-circle"
                                />
                              </div>
                              {formErrors.logo2 && (
                                <div className="text-danger small">
                                  {formErrors.logo2}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <div className="file-upload">
                                <label className="file">
                                  <input
                                    type="file"
                                    name="logo1"
                                    onChange={handleImageChange}
                                    accept="image/*"
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
                                    accept="image/*"
                                  />
                                  <span className="file-custom" />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="teamName1">A Team Name</label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    name="teamName1"
                                    id="teamName1"
                                    placeholder="Enter First Team Name"
                                  />
                                </div>
                                {formErrors.teamName1 && (
                                  <div className="text-danger small">
                                    {formErrors.teamName1}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="teamName2">B Team Name</label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    name="teamName2"
                                    id="teamName2"
                                    placeholder="Enter Second Team Name"
                                  />
                                </div>
                                {formErrors.teamName2 && (
                                  <div className="text-danger small">
                                    {formErrors.teamName2}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="sortName1">
                                  A Team Short Name
                                </label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    name="sortName1"
                                    id="sortName1"
                                    placeholder="Enter A Short Team Name"
                                  />
                                </div>
                                {formErrors.sortName1 && (
                                  <div className="text-danger small">
                                    {formErrors.sortName1}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label htmlFor="sortName2">
                                  B Team Short Name
                                </label>
                                <div className="input-area">
                                  <input
                                    type="text"
                                    name="sortName2"
                                    id="sortName2"
                                    placeholder="Enter B Short Team Name"
                                  />
                                </div>
                                {formErrors.sortName2 && (
                                  <div className="text-danger small">
                                    {formErrors.sortName2}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="start_date">Start Date</label>
                              <div className="input-area">
                                <input
                                  type="date"
                                  name="start_date"
                                  id="start_date"
                                  placeholder="Enter Match Date"
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              {formErrors.start_date && (
                                <div className="text-danger small">
                                  {formErrors.start_date}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="expire_date">End Date</label>
                              <div className="input-area">
                                <input
                                  type="date"
                                  name="expire_date"
                                  id="expire_date"
                                  placeholder="Enter Match End Date"
                                />
                              </div>
                              {formErrors.expire_date && (
                                <div className="text-danger small">
                                  {formErrors.expire_date}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="start_time">Start Time</label>
                              <div className="input-area">
                                <input
                                  type="time"
                                  name="start_time"
                                  id="start_time"
                                  placeholder="Enter Match Time"
                                />
                              </div>
                              {formErrors.start_time && (
                                <div className="text-danger small">
                                  {formErrors.start_time}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="expire_time">End Time</label>
                              <div className="input-area">
                                <input
                                  type="time"
                                  name="expire_time"
                                  id="expire_time"
                                  placeholder="Enter Match End Time"
                                />
                              </div>
                              {formErrors.expire_time && (
                                <div className="text-danger small">
                                  {formErrors.expire_time}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="categoryId">Category</label>
                              <div className="select-wrap">
                                <select
                                  name="categoryId"
                                  id="categoryId"
                                  style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#000849",
                                    borderRadius: "30px",
                                    color: "#fb2576",
                                  }}
                                >
                                  <option value="" hidden>
                                    Select Category
                                  </option>
                                  {show_category_data?.map((items, index) => (
                                    <option
                                      key={index}
                                      style={{ color: "white" }}
                                      value={items?._id}
                                    >
                                      {items?.categoryName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              {formErrors.categoryId && (
                                <div className="text-danger small">
                                  {formErrors.categoryId}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="leagueName">League Name</label>
                              <div className="select-wrap">
                                <select
                                  name="leagueName"
                                  id="leagueName"
                                  style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#000849",
                                    borderRadius: "30px",
                                    color: "#fb2576",
                                  }}
                                >
                                  <option value="" hidden>
                                    Select League
                                  </option>
                                  <option value="Kabaddi">Kabaddi</option>
                                  <option value="hockey">Hockey</option>
                                </select>
                              </div>
                              {formErrors.leagueName && (
                                <div className="text-danger small">
                                  {formErrors.leagueName}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="mb-3 text-center">
                              <button
                                style={{ marginTop: "30px" }}
                                className="rounded-pill btn custom-btn-primary primary-btn-effect d-inline-flex justify-content-center align-items-center px-5"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Submitting..." : "Add Team"}
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
