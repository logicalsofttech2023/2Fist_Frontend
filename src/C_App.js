import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Footer from "./Components/Footer_all_page.js/Footer";
import Pagenotfound from "./Components/pages/Pagenotfound";
import ChatwithUs from "./Components/ChatwithUs";
import Hello from "./Helllo";
import Loginfightcoordinator from "./Components/fight coordinator/Loginfightcoordinator";
import Signupfightcoordinator from "./Components/fight coordinator/Signupfightcoordinator";
import CoordinatorLogin from "./Components/Auth/CoordinatorLogin";
import CoordinatorRegister from "./Components/Auth/CoordinatorRegister";
import Coordinator_dashboard from "./Coordinator_components/Coordinator_dashboard";
import Coordinator_Header from "./Coordinator_components/Coordinator_Header";
import Coordinator_Forgot_password from "./Coordinator_components/Coordinator_Forgot_password";
import C_Profile from "./Coordinator_components/C_Profile";
import AddTeams from "./Coordinator_components/pages/AddTeams";
import Coordinator_Teams_list from "./Coordinator_components/pages/Coordinator_Teams_list";
import Commission_List from "./Coordinator_components/pages/Commission_List";
import All_Matches_List from "./Coordinator_components/pages/All_Matches_List";
import Live_maches from "./Coordinator_components/Allmaches/Live_maches";
import Today_maches from "./Coordinator_components/Allmaches/Today_maches";
import TomorrowMaches from "./Coordinator_components/Allmaches/TomorrowMaches";
import Completed_maches from "./Coordinator_components/Allmaches/Completed_maches";
import Canceled_maches from "./Coordinator_components/Allmaches/Canceled_maches";
import Transactions_history from "./Coordinator_components/pages/Transactions_history";
import Live_Page from "./Components/pages/banner/Live_Page";
import Update_teams from "./Coordinator_components/pages/Update_teams";
import All_Teamsmatch_list from "./Coordinator_components/Allmaches/All_Teamsmatch_list";
import GoLiveTeams from "./Coordinator_components/pages/GoLiveTeams";
import Livematchpage from "./Coordinator_components/pages/Livematchpage";
import { AuthProvider } from "./Protect_components/AuthContext";
import Home from "./Components/pages/Home";
import WithdrawList from "./Coordinator_components/pages/WithdrawList";
import TransactionList from "./Coordinator_components/pages/TransactionList";

function App() {
  return (
    <>
      <AuthProvider>
        <div class="bg-color">
          <div id="wrapper">
            <Router>
              <Coordinator_Header />
              <ChatwithUs />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Pagenotfound />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route
                  path="/transactionList"
                  element={<TransactionList />}
                ></Route>
                <Route
                  path="/withdrawList"
                  element={<WithdrawList />}
                ></Route>
                <Route
                  path="/coordinatorLogin"
                  element={<CoordinatorLogin />}
                ></Route>
                <Route
                  path="/coordinatorRegister"
                  element={<CoordinatorRegister />}
                ></Route>

                {/* fightcoordinator */}
                <Route
                  path="/loginfightcoordinator"
                  element={<Loginfightcoordinator />}
                ></Route>
                <Route
                  path="/Signupfightcoordinator"
                  element={<Signupfightcoordinator />}
                ></Route>
                <Route
                  path="/coordinator_dashboard"
                  element={<Coordinator_dashboard />}
                ></Route>
                <Route
                  path="/coordinator_Forgot_password"
                  element={<Coordinator_Forgot_password />}
                ></Route>

                {/* pages */}
                <Route path="/c_Profile" element={<C_Profile />}></Route>
                <Route path="/addTeams" element={<AddTeams />}></Route>
                <Route path="/update_teams" element={<Update_teams />}></Route>
                <Route
                  path="/coordinator_Teams_list"
                  element={<Coordinator_Teams_list />}
                ></Route>
                <Route
                  path="/commission_List"
                  element={<Commission_List />}
                ></Route>
                <Route
                  path="/all_Matches_List"
                  element={<All_Matches_List />}
                ></Route>
                <Route
                  path="/transactions_history"
                  element={<Transactions_history />}
                ></Route>
                <Route path="/goLiveTeams" element={<GoLiveTeams />}></Route>

                {/* all maches */}
                <Route path="/live_maches" element={<Live_maches />}></Route>
                <Route path="/today_maches" element={<Today_maches />}></Route>
                <Route
                  path="/tomorrowMaches"
                  element={<TomorrowMaches />}
                ></Route>
                <Route
                  path="/completed_maches"
                  element={<Completed_maches />}
                ></Route>
                <Route
                  path="/canceled_maches"
                  element={<Canceled_maches />}
                ></Route>
                <Route
                  path="/all_Teamsmatch_list"
                  element={<All_Teamsmatch_list />}
                ></Route>
                <Route
                  path="/livematchpage"
                  element={<Livematchpage />}
                ></Route>

                <Route path="/hello" element={<Hello />}></Route>
                <Route path="/live_page" element={<Live_Page />}></Route>
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
