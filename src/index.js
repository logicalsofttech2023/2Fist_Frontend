import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import C_App from './C_App';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import secureLocalStorage from 'react-secure-storage';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

let RootComponent = () => {
  let [status, setStatus] = useState(
    secureLocalStorage.getItem("coordinator_loginstatus") === "true"
  );


  const [notificationPayload, setNotificationPayload] = useState(null);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("Message received from service worker:", event.data?.fcmMessageId);
        secureLocalStorage.setItem("notificationdata", event.data?.fcmMessageId)
        setNotificationPayload(event.data); // Save the payload to state
      });
    }
  }, [notificationPayload]); //notificationPayload


  // const [notificationPayload, setNotificationPayload] = useState(null);

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     const messageHandler = (event) => {
  //       console.log("Message received from service worker:", event.data?.fcmMessageId);

  //       // Check if the payload contains data
  //       if (event.data) {
  //         // Save data in secureLocalStorage
  //         secureLocalStorage.setItem("notificationdata", event.data?.fcmMessageId);

  //         // Update state with the payload
  //         setNotificationPayload(event.data);
  //       } else {
  //         console.warn("Service worker message received, but no data found.");
  //       }
  //     };

  //     // Add event listener
  //     navigator.serviceWorker.addEventListener("message", messageHandler);

  //     // Cleanup on unmount
  //     return () => {
  //       navigator.serviceWorker.removeEventListener("message", messageHandler);
  //     };
  //   } else {
  //     console.error("Service Workers are not supported in this browser.");
  //   }
  // }, []); // Empty dependency array


  useEffect(() => {
    let intervalId = setInterval(() => {
      let newStatus = secureLocalStorage.getItem("coordinator_loginstatus") === "true";
      setStatus(newStatus);  // Update the state whenever the status changes
    }, 1000); // You can change this interval timing as per your need

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  let componentToRender;

  switch (status) {
    case true:
      componentToRender = <C_App />;
      break;
    default:
      componentToRender = <App />;
      break;
  }
  const queryClient = new QueryClient()
  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          {componentToRender}
        </QueryClientProvider>
      </React.StrictMode>
    </>
  );

};

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);

reportWebVitals();
