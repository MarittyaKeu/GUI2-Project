import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import ForgetPassword from "./components/auth/ForgetPassword";
import Dashboard from './components/dashboard/Dashboard';
import Holdings from './components/dashboard/Holdings';
import UpdateProfile from "./components/updateprofile/UpdateProfile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/ForgetPassword" component={ForgetPassword} />
            <Route path="/holdings" component={Holdings} />
            <Route path="/updateprofile" component={UpdateProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
   }
  }


  
export default App;
