import React from "react";
import ReactPlayer from "react-player";
const GamersStreamVideoPage = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-12 col-lg-12 animate__animated wow animate__fadeInUp">
            <div className="head-content text-center gamecontainerlive">
              <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Live stream video page</p>
              <h1 className="display-5 mb-3 theme-text-white font-black max">Popular Game live</h1>
              <p className="mb-0 theme-text-white">Explore multiple options for maximum fun</p>
            </div>
          </div>
        </div>
        <div className="animate__animated wow animate__fadeInUp gamestreampage">
          <div className=" gamestreampage gamestreampagebackground m-lg-4 mb-4  row">
            <div className="col-12 col-lg-8 bg">
              <div className="col-12 animate__animated wow animate__fadeInUp">
                <div className="tournament-card box-shadow left-game-container theme-border-radius theme-border mb-4 theme-bg-white">
                  <ReactPlayer
                    url="https://youtu.be/orf582WJV_c?si=MwkhP4VwYolUIFfj"
                    playing={true}
                    controls={false}
                    width="100%"
                    height="350px"
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

              {/* channel details like channel name title likes etc */}
              <div className="videocontainer">
                <div className="channel-details">
                  <h2 className="channeltitle">New MMORPG coming this summer</h2>

                  <div className="channelrank">
                    {/* comments */}
                    <div className=" gap">
                      <i class="fa-regular fa-comments"></i>
                      <span>1,234</span>
                      <span>comments</span>
                    </div>
                    {/* catagory */}
                    <div className="catagory gap">
                      <i class="fa-regular fa-folder"></i>
                      <span>Gaming</span>
                    </div>
                    {/* views */}
                    <div className="views gap">
                      <i class="fa-regular fa-eye"></i>
                      <span>2,456,789</span>
                      <span>views</span>
                    </div>
                  </div>
                </div>

                {/* like unlike share container */}

                <div className="videousercontainer">
                  <div className="videouserdata">
                    <div className="videouserlogo">
                      <img src="./assets/images/dashboard/profile-img.png" alt="userlogo" />
                    </div>
                    <div className="videosubscriber">
                      <h6>kinggamer0039</h6>
                      <p>100k followers</p>
                    </div>
                    <button class="follow-me-btn">Follow Me</button>
                  </div>

                  <div className="channel-details2">
                    <div className="videolike gap">
                      <i class="fa-regular fa-thumbs-up"></i>
                      <span>Like</span>
                    </div>
                    <div className="videounlike gap">
                      <i class="fa-regular fa-thumbs-down"></i>
                      <span>Unlike</span>
                    </div>
                    <div className="videoshare gap">
                      <i class="fa-solid fa-share"></i>
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* comment section */}
              <div className="commentSectionContainer">
                <h2>Comments</h2>
                <div className="comment">
                  <img src="https://via.placeholder.com/40" alt="User 1's profile" className="profilePic" />
                  <div className="commentContent">
                    <div className="commentHeader">
                      <span className="userName">Sneha0012</span>
                      <span className="commentTime">2 hours ago</span>
                    </div>
                    <p>This is a great video!</p>
                  </div>
                </div>
                <div className="comment">
                  <img src="https://via.placeholder.com/40" alt="User 2's profile" className="profilePic" />
                  <div className="commentContent">
                    <div className="commentHeader">
                      <span className="userName">gamer1212</span>
                      <span className="commentTime">3 hours ago</span>
                    </div>
                    <p>Very informative, thanks!</p>
                  </div>
                </div>
                <div className="comment">
                  <img src="https://via.placeholder.com/40" alt="User 3's profile" className="profilePic" />
                  <div className="commentContent">
                    <div className="commentHeader">
                      <span className="userName">imking221</span>
                      <span className="commentTime">5 hours ago</span>
                    </div>
                    <p>Loved the content!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-video col-12 col-lg-4" style={{ background: "black", position: "sticky", top: "65px" }}>
              <div className="row">
                <div className="col-5 ">
                  <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/xwY3jR3OiZA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-7 paadingTop20">
                  <h5> It's Alive! - Live Casino Games at PlayOJO </h5>
                  <h6>PlayOJO</h6>
                  <p>16,21,009 views 30 Jun 2023</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/xwY3jR3OiZA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-7 paadingTop20">
                  <h5> It's Alive! - Live Casino Games at PlayOJO </h5>
                  <h6>PlayOJO</h6>
                  <p>16,21,009 views 30 Jun 2023</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <iframe
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/xwY3jR3OiZA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-7 paadingTop20">
                  <h5> It's Alive! - Live Casino Games at PlayOJO </h5>
                  <h6>PlayOJO</h6>
                  <p>16,21,009 views 30 Jun 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamersStreamVideoPage;
