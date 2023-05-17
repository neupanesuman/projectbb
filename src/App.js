import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/alluser/Home";
import SignIn from "../src/pages/alluser/Signin";
import SignUp from "../src/pages/alluser/Signup";
import AdminLogin from "../src/pages/admin/AdminLogin/AdminLogin";
import Dashboard from "../src/pages/admin/Dashboard/Dashboard";
import User from "./pages/admin/User/User";
import Campaign from "./pages/admin/Campaign/Campaign";
import ShowCampaign from "./pages/admin/Campaign/ShowCampaign";
import AddCampaign from "./pages/admin/Campaign/AddCampaign";
import UpdateCampaign from "./pages/admin/Campaign/UpdateCampaign";
import Request from "./pages/admin/Request/Request";
import UpdateRequest from "./pages/admin/Request/UpdateRequest";
import BloodBank from "./pages/admin/BloodBank/Bloodbank";
import AddBloodbank from "./pages/admin/BloodBank/AddBloodbank";
import ShowBloodbank from "./pages/admin/BloodBank/ShowBloodbank";
import UpdateBloodbank from "./pages/admin/BloodBank/UpdateBloodbank";
import DonorDash from "./pages/donor/Dashboard/DonorDash";
import Profile from "./pages/donor/Profile/Profile";
import UpdateProfile from "./pages/donor/Profile/UpdateProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/admin/adminlogin" component={AdminLogin} exact />
        <Route path="/admin/dashboard" component={Dashboard} exact />
        <Route path="/admin/user" component={User} exact />
        <Route path="/admin/campaign" component={Campaign} exact />
        <Route path="/admin/showcampaign" component={ShowCampaign} exact />
        <Route path="/admin/addcampaign" component={AddCampaign} exact />
        <Route path="/admin/updatecampaign" component={UpdateCampaign} exact />
        <Route path="/admin/request" component={Request} exact />
        <Route path="/admin/updaterequest" component={UpdateRequest} exact />
        <Route path="/admin/bloodbank" component={BloodBank} exact />
        <Route path="/admin/addbloodbank" component={AddBloodbank} exact />
        <Route path="/admin/showbloodbank" component={ShowBloodbank} exact />
        <Route
          path="/admin/updatebloodbank"
          component={UpdateBloodbank}
          exact
        />
        <Route path="/donor/donordash" component={DonorDash} exact />
        <Route path="/donor/profile" component={Profile} exact />
        <Route path="/donor/updateprofile" component={UpdateProfile} exact />
      </Switch>
    </Router>
  );
}

export default App;
