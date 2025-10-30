import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../loader_datanotfound/Loader";
import Pagenotfound from "./Pagenotfound";
import { ProgressSpinner } from "primereact/progressspinner";

const Games_category = () => {
  let navigate = useNavigate();

  // get category data
  const { isLoading, error, data } = useQuery({
    queryKey: ["category_list"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_KEY}category_list`).then((res) =>
        res.json()
      ),
  });
  // got to team list for bating
  let goto_teamlist = (obj) => {
    navigate(`/Fightlist/${obj?._id}`);
  };

  return (
    <>
      {/* games section */}
      <section className="games py-5 theme-gradient-bg">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 col-lg-12 animate__animated wow animate__fadeInUp">
              <div className="head-content text-center">
                <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">
                  Over Maximum games
                </p>
                <h1 className="display-5 mb-3 theme-text-white font-black max">
                  Popular Onthebett Games
                </h1>
                <p className="mb-0 theme-text-white">
                  Explore multiple options for maximum fun
                </p>
              </div>
            </div>
            <div className="col-12 animate__animated wow animate__fadeInUp">
              <div className="row my-5">
                {isLoading == true ? (
                  <div className="text-center mt-5">
                    <ProgressSpinner
                      style={{ width: "100px", height: "100px" }}
                      strokeWidth="4"
                      animationDuration=".5s"
                    />
                  </div>
                ) : (
                  <>
                    {data?.data?.length > 0 ? (
                      <>
                        {data?.data?.map((items, index) => {
                          return (
                            <a
                              key={index}
                              onClick={() => goto_teamlist(items)}
                              className="col-12 col-sm-6 col-lg-3"
                            >
                              <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                <figure className="mb-0 icon-bg">
                                  <img
                                    style={{
                                      width: "100%",
                                      borderRadius: "50%",
                                    }}
                                    src={`${process.env.REACT_APP_IMG_URL}${items?.category_image}`}
                                    onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                  "/logo/newlogo.png";
                                              }}
                                    className="img-fluid"
                                    alt="Fantasy Games"
                                  />
                                </figure>
                                <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">
                                  {items?.categoryName}
                                </h3>
                              </div>
                            </a>
                          );
                        })}
                      </>
                    ) : (
                      <div
                        className="wow animate__animated wow animate__fadeInUp"
                        style={{ height: "400px" }}
                      >
                        <div className="text-center mt-5">
                          <img
                            className="img-fluid"
                            style={{ width: "100px", height: "100px" }}
                            alt="Games team"
                            src="./imglist/datanotfound_logo.png"
                          />
                        </div>
                        <div className="group text-center">
                          <h6 className="display-5 mb-3 font-black">
                            Data Not Found
                          </h6>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="./gameslogo/football.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Football</h3>
                                    </div>
                                </Link>
                                <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/games/car-racing-game-icon.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Car Racing</h3>
                                    </div>
                                </Link> */}
                {/* <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/games/game-icon05.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Tournament Games</h3>
                                    </div>
                                </Link>
                                <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/games/game-icon06.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Basketball Games</h3>
                                    </div>
                                </Link>
                                <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/games/game-icon07.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Ping Pong Games</h3>
                                    </div>
                                </Link>
                                <Link to="/Fightlist" className="col-12 col-sm-6 col-lg-3">
                                    <div className="game-card theme-border-radius theme-border text-center py-4 mb-4">
                                        <figure className="mb-0 icon-bg">
                                            <img src="assets/images/games/game-icon08.png" className="img-fluid" alt="Fantasy Games" />
                                        </figure>
                                        <h3 className="h5 fw-bold theme-text-white mb-0 mt-3">Pantaball Club Games</h3>
                                    </div>
                                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Games_category;
