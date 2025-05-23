import React from 'react'
import ReactPlayer from "react-player";

const GameStreamPlayer = () => {
  return (
    <div className="">
      <div className="">
        <div className="row">
          <div className="col-12 col-lg-12 animate__animated wow animate__fadeInUp">
            <div className="head-content text-center gamecontainerlive">
              <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Are you ready for play game</p>
              <h1 className="display-5 mb-3 theme-text-white font-black max">Popular Game live</h1>
              <p className="mb-0 theme-text-white">Explore multiple options for maximum fun</p>
            </div>
          </div>
        </div>
        <div className="animate__animated wow animate__fadeInUp gamestreampage">
          <div className=" gamestreampage m-4 tournament-card  theme-border-radius theme-border mb-4 theme-bg-white row">
            <div className="col-12 col-lg-8 bg">
              <div className="col-12 animate__animated wow animate__fadeInUp">
                <div className="tournament-card box-shadow left-game-container theme-border-radius theme-border mb-4 theme-bg-white">
                  <ReactPlayer
                    url="https://youtu.be/orf582WJV_c?si=MwkhP4VwYolUIFfj"
                    playing={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    loop={true}
                    muted={true}
                    config={{
                      youtube: {
                        playerVars: {
                          controls: 0, // Hide controls
                          modestbranding: 1, // Minimal YouTube branding
                          disablekb: 1, // Disable keyboard controls
                          rel: 0, // Do not show related videos at the end
                          showinfo: 0, // Hide video title and uploader info
                        },
                      },
                    }}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="head-sec py-3 px-3 pb-0">
                <span className="d-inline-flex rounded-pill py-2 tag">min : 20rs</span>
                <span className="d-inline-flex rounded-pill py-2 tag">max : 70rs</span>
              </div>

              <div className="dashboard-section" style={{ paddingTop: "30px" }}>
                <div className="col-12">
                  <div className="mb-3">
                    <label>Amount of betting</label>
                    <div className="input-select-wrap d-flex align-items-center">
                      <input type="text" placeholder="e.g. 100" />
                      <select>
                        <option value={1}>USD</option>
                        <option value={2}>INR</option>
                        <option value={3}>AUD</option>
                      </select>
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
                <div className="head-sec py-3 px-3 pb-0 myFlex">
                  <button className="d-inline-flex tag rounded-pill btn custom-link font-small" type="button">
                    Bett Now
                  </button>
                  <button className="d-inline-flex tag rounded-pill btn custom-link font-small" type="button">
                    Cencel
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStreamPlayer
