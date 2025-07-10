import {
  HashRouter as Router, Routes, Route
} from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/Auth/Login";
import Header from "./Components/pages/Header";
import Signup from "./Components/Auth/Signup";
import Dashbord from "./Components/Dashbord/Dashbord";
import Footer from "./Components/Footer_all_page.js/Footer";
import Tournaments from "./Components/games/Tournaments";
import Tournamentsdetails from "./Components/games/Tournamentsdetails";
import Bets from "./Components/games/Bets";
import Currency_bet from "./Components/games/Currency_bet";
import Betting_details from "./Components/games/Betting_details";
import Create_new_currency from "./Components/games/Create_new_currency";
import Bets_fee from "./Components/games/Bets_fee";
import About from "./Components/Footer_all_page.js/About";
import Faq from "./Components/Footer_all_page.js/Faq";
import Terms from "./Components/Footer_all_page.js/Terms";
import Testimonials from "./Components/Footer_all_page.js/Testimonials";
import Pagenotfound from "./Components/pages/Pagenotfound";
import Privacy from "./Components/Footer_all_page.js/Privacy";
import Contact from "./Components/pages/Contact";
import Blog from "./Components/pages/Blog";
import Blog_details from "./Components/pages/Blog_details";
import Forgot_password from "./Components/Auth/Forgot_password";
import GamersStreamVideoPage from "./Components/pages/GamersStreamVideoPage";
import GameStreamPlayer from "./Components/pages/GameStreamPlayer";
import GamersLiveChatting from "./Components/games/GamersLiveChatting";
import ChatwithUs from "./Components/ChatwithUs";
import GameStreamPage from "./Components/games/GameStreamPage";
import Hello from "./Helllo";
import Protect_route from "./Components/Auth/Protect_route";
import VideoList from "./Components/pages/VideoList";
import Fightlist from "./Components/games/Fightlist";
import Loginfightcoordinator from "./Components/fight coordinator/Loginfightcoordinator";
import Signupfightcoordinator from "./Components/fight coordinator/Signupfightcoordinator";
import Usermatching from "./Components/games/Usermatching";
import User_bat_mony_maching from "./Components/games/User_bat_mony_maching";
import User_bat_mony_maching2 from "./Components/games/User_bat_mony_maching2";
import Addcard from "./Components/Auth/Addcard";
import Teambet from "./Components/games/Teambet";
import CoordinatorLogin from "./Components/Auth/CoordinatorLogin";
import CoordinatorRegister from "./Components/Auth/CoordinatorRegister";
import Profile from "./Components/Dashbord/Profile";
import Coordinator_dashboard from "./Coordinator_components/Coordinator_dashboard";
import Coordinator_Forgot_password from "./Coordinator_components/Coordinator_Forgot_password";
import C_Profile from "./Coordinator_components/C_Profile";
import Mybets from "./Components/Dashbord/pages/Mybets";
import Total_match from "./Components/Dashbord/pages/Total_match";
import Win_match from "./Components/Dashbord/pages/Win_match";
import Deposit from "./Components/Dashbord/pages/Deposit";
import Withdrawal from "./Components/Dashbord/pages/Withdrawal";
import Transaction_user from "./Components/Dashbord/pages/Transaction_user";
import Manage_Login_Password from "./Components/Auth/Manage_Login_Password";
import { useEffect, useState } from "react";
import Live_Page from "./Components/pages/banner/Live_Page";
import Bat_history from "./Components/Dashbord/pages/Bat_history";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import { AuthProvider } from "./Protect_components/AuthContext";
import ProtectedRoute from "./Protect_components/ProtectedRoute";
// import { messaging, onMessage } from "./firebase";
import secureLocalStorage from "react-secure-storage";
import WithdrawList from "./Components/Dashbord/pages/WithdrawList";
import LiveStream from "./Components/Straming/LiveStream";
import LiveViewer from "./Components/Straming/LiveViewer";
import Livematchpage from "./Coordinator_components/pages/Livematchpage";

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // useEffect(() => {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       // console.log('Notification permission granted.');fd
  //     } else {
  //       // console.log('Unable to get permission to notify.');
  //     }
  //   });

  //   onMessage(messaging, (payload) => {
  //     console.log('Message received. ', payload.notification.body);
  //     // secureLocalStorage.setItem("update",payload.notification.body)
  //     localStorage.setItem("newwww", "hello")
  //     new Notification(payload.notification.title, {
  //       body: payload.notification.body,
  //     });
  //   });

  // }, []);


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
      <AuthProvider>
        <div class="bg-color">
          <div id="wrapper">
            <Router>
              {/* <Main_header /> */}
              <Header />
              <ChatwithUs />
              <ScrollToTopOnRouteChange />
              <Routes>
                {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route> */}
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Pagenotfound />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/coordinatorLogin" element={<CoordinatorLogin />}></Route>
                <Route path="/coordinatorRegister" element={<CoordinatorRegister />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/addcard" element={<Addcard />}></Route>
                <Route path="/forgot_password" element={<Forgot_password />}></Route>
                <Route path="/dashboard" element={<Dashbord />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blogdetails" element={<Blog_details />}></Route>
                <Route path="/GameStreamPlayer" element={<GameStreamPlayer />}></Route>
                <Route path="/GamersLiveChatting" element={<GamersLiveChatting />}></Route>

                {/* dashboard page list  */}
                <Route path="/mybets" element={<Mybets />}></Route>
                <Route path="/bat_history" element={<Bat_history />}></Route>
                <Route path="/total_match" element={<Total_match />}></Route>
                <Route path="/win_match" element={<Win_match />}></Route>

                <Route path="/deposit" element={<Deposit />}></Route>
                <Route path="/withdrawal" element={<Withdrawal />}></Route>
                <Route path="/transaction_user" element={<Transaction_user />}></Route>
                <Route path="/withdrawList" element={<WithdrawList />}></Route>
                <Route path="/manage_Login_Password" element={<Manage_Login_Password />}></Route>

                {/* games list */}
                <Route path="/tournaments" element={<Tournaments />}></Route>
                <Route path="/tournamentsdetails" element={<Tournamentsdetails />}></Route>
                <Route path="/bets" element={<Bets />}></Route>
                <Route path="/currency_bet" element={<Currency_bet />}></Route>
                <Route path="/betting_details" element={<Betting_details />}></Route>
                <Route path="/create_new_currency" element={<Create_new_currency />}></Route>
                <Route path="/Bets_fee" element={<Bets_fee />}></Route>
                <Route path="/teambet/:uid" element={<Teambet />}></Route>
                <Route path="/GamersStreamVideoPage" element={<GamersStreamVideoPage />}></Route>
                <Route path="/GamersVideolist" element={<VideoList />}></Route>
                <Route path="/Fightlist/:uid" element={<Fightlist />}></Route>
                <Route path="/Cassino" element={<GameStreamPage />}></Route>
                <Route path="/usermatching" element={<Usermatching />}></Route>
                <Route path="/user_bat_mony_maching" element={<User_bat_mony_maching />}></Route>
                <Route path="/user_bat_mony_maching2" element={<User_bat_mony_maching2 />}></Route>


                {/* live streaming */}
                <Route path="/liveStream" element={<LiveStream />}></Route>
                <Route path="/liveViewer" element={<LiveViewer />}></Route>


                {/* footer page */}
                <Route path="/about" element={<About />}></Route>
                <Route path="/privacy" element={<Privacy />}></Route>
                <Route path="/faq" element={<Faq />}></Route>
                <Route path="/terms" element={<Terms />}></Route>
                <Route path="/testimonials" element={<Testimonials />}></Route>

                {/* fightcoordinator */}
                <Route path="/loginfightcoordinator" element={<Loginfightcoordinator />}></Route>
                <Route path="/Signupfightcoordinator" element={<Signupfightcoordinator />}></Route>
                <Route path="/coordinator_dashboard" element={<Coordinator_dashboard />}></Route>
                <Route path="/coordinator_Forgot_password" element={<Coordinator_Forgot_password />}></Route>
                <Route path="/c_Profile" element={<C_Profile />}></Route>

                <Route path="/hello" element={<Hello />}></Route>
                <Route path="/livematchpage" element={<Livematchpage />}></Route>
              </Routes>
              <Footer />
            </Router>
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;