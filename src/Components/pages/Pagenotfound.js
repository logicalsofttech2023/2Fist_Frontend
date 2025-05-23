import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Pagenotfound = () => {
  let navigate = useNavigate();
  let coordinator_userid = secureLocalStorage.getItem("coordinator_userid");

  const fetchData = async () => {
    try {
        let objdata = {
            coordinatorId: coordinator_userid,
          };
          const response = await axios.post(
            `${process.env.REACT_APP_API_KEY}coordinatorTeamList`,
            objdata
          );
          console.log(response);
          if (response.status === 200) {
            navigate("/goLiveTeams");
        }
    } catch (error) {
        console.log(error);
        if (error.status === 400) {
            navigate("*");
        }
        
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <>
      <section className="error">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center text-center">
              <figure className="mb-5 hero-image">
                <img
                  src="assets/images/breadcrumb/breadcrumb-error.png"
                  className="img-fluid "
                  alt="hero image"
                />
              </figure>
            </div>
            <div className="col-12 col-lg-6 align-self-center">
              <h4 className="display-5 mb-3 font-black">Data not found</h4>
              <p className="mb-0">Oops.. Looks like you got lost :</p>
              <div className="group mt-5">
                <button
                  onClick={() => navigate("/")}
                  className="rounded-pill btn custom-btn-primary font-small primary-btn-effect"
                  type="submit"
                >
                  Go To Home
                </button>
                {/* <span className="ms-3">
                                    <a href="#" className="btn custom-btn-secondary icon-wrapper video_model">
                                        <i className="bi bi-play-fill fs-4" />
                                    </a>
                                </span> */}
                {/* <span className="ms-1 d-none d-md-inline-flex">Watch a Demo</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagenotfound;
