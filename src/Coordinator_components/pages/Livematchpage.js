import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import secureLocalStorage from "react-secure-storage";

const Livematchpage = () => {
  let livetoken = JSON.parse(secureLocalStorage.getItem("livetoken"));
  let livedata = JSON.parse(secureLocalStorage.getItem("livedata")) || {};
  let data_live = JSON.parse(secureLocalStorage.getItem("data_live")) || {};
  const [currentStream, setCurrentStream] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);

  const client = useRef(null);
  const localTracks = useRef({ videoTrack: null, audioTrack: null });

  const appId = livetoken?.appId; //"81021b57c52b4d3e9de4e6dc35d6eca2"; // Replace with your Agora App ID
  const channel = livetoken?.channelName; // Channel name used by the streamer
  const token = livetoken?.token;
  const uid = 0; // Unique ID for the streamer
  const [currentCameraIndex, setCurrentCameraIndex] = useState(0); // Track camera index
  const [cameraDevices, setCameraDevices] = useState([]); // Store camera list

  useEffect(() => {
    client.current = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    client.current.setClientRole("host");
  }, []);

  useEffect(() => {
    const fetchCameras = async () => {
        const devices = await AgoraRTC.getCameras();
        setCameraDevices(devices);
    };
    fetchCameras();
}, []);

  //   const startStreaming = async () => {
  //     try {
  //       const objdata = {
  //         coordinatorId: data_live?.coordinatorId,
  //         matchId: data_live?.matchId,
  //       };

  //       const response = await axios.post(
  //         "https://backend.2fist.com/user/api/generateToken",
  //         objdata
  //       );

  //       // Stop existing tracks
  //       if (currentStream) {
  //         currentStream.getTracks().forEach((track) => track.stop());
  //       }

  //       // Initialize video and audio tracks
  //       localTracks.current.videoTrack = await AgoraRTC.createCameraVideoTrack();
  //       localTracks.current.audioTrack =
  //         await AgoraRTC.createMicrophoneAudioTrack();

  //       // Join the Agora channel
  //       await client.current.join(
  //         response?.data?.appId,
  //         response?.data?.channelName,
  //         response?.data?.token,
  //         uid
  //       );

  //       // Play local video track
  //       localTracks.current.videoTrack.play("local-player");

  //       // Publish audio and video tracks
  //       await client.current.publish(Object.values(localTracks.current));

  //       // Update the streaming state
  //       setIsStreaming(true);
  //     } catch (err) {
  //       console.error("Failed to start streaming:", err);
  //       setError(`Failed to start streaming: ${err.message}`);
  //     }
  //   };

  const startStreaming = async () => {
    try {
      const objdata = {
        coordinatorId: data_live?.coordinatorId,
        matchId: data_live?.matchId,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}generateToken`,
        objdata
      );

      if (localTracks.current.videoTrack) {
        await localTracks.current.videoTrack.stop();
        await localTracks.current.videoTrack.close();
      }

      // Initialize video track with mirroring disabled
      localTracks.current.videoTrack = await AgoraRTC.createCameraVideoTrack({
        encoderConfig: "720p_1", // Set video quality
        facingMode: "user", // 'user' for front, 'environment' for back
        mirror: false, // Disable mirroring
      });

      localTracks.current.audioTrack =
        await AgoraRTC.createMicrophoneAudioTrack();

      await client.current.join(
        response?.data?.appId,
        response?.data?.channelName,
        response?.data?.token,
        uid
      );
      localTracks.current.videoTrack.play("local-player");

      await client.current.publish(Object.values(localTracks.current));
      setIsStreaming(true);
    } catch (err) {
      console.error("Failed to start streaming:", err);
      setError(`Failed to start streaming: ${err.message}`);
    }
  };

  const stopStreaming = async () => {
    try {
      const objdata = {
        coordinatorId: data_live?.coordinatorId,
        matchId: data_live?.matchId,
      };
      axios
        .post(`${process.env.REACT_APP_API_KEY}deleteliveToken`, objdata)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });

      await client.current.leave();
      localTracks.current.videoTrack?.stop();
      localTracks.current.videoTrack?.close();
      localTracks.current.audioTrack?.stop();
      localTracks.current.audioTrack?.close();
      setIsStreaming(false);
    } catch (err) {
      setError(`Failed to stop streaming: ${err.message}`);
    }
  };

  const switchToBackCamera = async () => {
    try {
      if (localTracks.current.videoTrack) {
        // Get the list of available video devices
        const devices = await AgoraRTC.getCameras();
        const backCamera = devices.find((device) =>
          device.label.toLowerCase().includes("back")
        );

        if (!backCamera) {
          throw new Error("No back camera found on this device.");
        }

        // Switch to the back camera
        await localTracks.current.videoTrack.setDevice(backCamera.deviceId);

        // Play the updated track on the local player
        localTracks.current.videoTrack.play("local-player");
        setError(null);
      } else {
        throw new Error("Video track is not initialized.");
      }
    } catch (err) {
      console.error("Error switching to back camera:", err);
      setError(err.message || "Unable to switch to back camera.");
    }
  };

  let checklivedata = async () => {
    try {
      // Stop existing tracks
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }

      // Initialize video and audio tracks
      localTracks.current.videoTrack = await AgoraRTC.createCameraVideoTrack();
      localTracks.current.audioTrack =
        await AgoraRTC.createMicrophoneAudioTrack();

      // Join the Agora channel
      await client.current.join(appId, channel, token, uid);

      // Play local video track
      localTracks.current.videoTrack.play("local-player");

      // Publish audio and video
      await client.current.publish(Object.values(localTracks.current));
      setIsStreaming(true);
    } catch (err) {
      setError(`Failed to start streaming: ${err.message}`);
    }
  };

  const switchCamera = async () => {
    try {
      if (!localTracks.current.videoTrack) {
        throw new Error("Video track is not initialized.");
      }

      const devices = await AgoraRTC.getCameras();
      if (devices.length < 2) {
        throw new Error("Only one camera available.");
      }

      // Switch to the next camera in the list
      const nextCameraIndex = (currentCameraIndex + 1) % devices.length;
      setCurrentCameraIndex(nextCameraIndex);
      const nextCamera = devices[nextCameraIndex];

      await localTracks.current.videoTrack.setDevice(nextCamera.deviceId);
      localTracks.current.videoTrack.play("local-player");
      setError(null);
    } catch (err) {
      console.error("Error switching camera:", err);
      setError(err.message || "Unable to switch camera.");
    }
  };

  return (
    <>
      {/* Dashboard Content Section */}
      <section className="dashboard-section">
        <div className="container">
          <div className="main-container">
            <div className="row h-100">
              {/* Camera Preview */}
              <div className="col-lg-8 col-md-7 col-sm-12 video-preview">
                <video
                  id="local-player"
                  style={{ width: "100%", height: "300px", background: "#000" }}
                  autoPlay
                  playsInline
                ></video>
              </div>
              {/* Camera Controls */}
              <div className="col-lg-4 col-md-5 col-sm-12 control-panel align-items-center">
                {/* <button className="btn btn-live-action w-100" onClick={Golive}>
                                    get tkn
                                </button> */}
                <h2 className="text-center">Camera Controls</h2>
                {!isStreaming ? (
                  <button
                    className="btn btn-live-action w-100"
                    onClick={startStreaming}
                  >
                    Start Streaming
                  </button>
                ) : (
                  <button
                    className="btn btn-live-action w-100"
                    onClick={stopStreaming}
                  >
                    Stop Streaming
                  </button>
                )}
                <button className="btn btn-muted w-100" onClick={switchCamera}>
                  Switch Camera
                </button>
                <button className="btn btn-muted w-100">Toggle Mute</button>
                <button className="btn btn-record-start w-100">
                  Start Recording
                </button>
                <button className="btn btn-record-stop w-100">
                  Stop Recording
                </button>
                <button
                  className="btn btn-record-stop w-100"
                  onClick={checklivedata}
                >
                  checklivedata
                </button>
                {/* <button onClick={Golive} className="btn btn-record-stop w-100">Golive get tkn</button> */}
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Livematchpage;
