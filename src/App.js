import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import OTP from "./components/auth/OTP";
import JobSeeker from "./components/Forms/JobSeeker";
import Recruiter from "./components/Forms/Recruiter";
import JobPosting from "./components/Forms/JobPost";
import Expert from "./components/Forms/Expert";

// import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

const App = () => {
   return (
      <Router>
         <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
               <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/otp" component={OTP} />
                  <Route exact path="/job-seeker" component={JobSeeker} />
                  <Route exact path="/recruiter" component={Recruiter} />
                  <Route exact path="/job-post" component={JobPosting} />
                  <Route exact path="/expert" component={Expert} />
               </Switch>
            </section>
         </Fragment>
      </Router>
   );
};

export default App;
