import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import Layout from "./Layout";
import Error from "../pages/error";
// import logopage from "../pages/logopage/logopage";
import Login from "../pages/login";
// import Signup from "../pages/signup";
// import Forgot from "../pages/forgot";
// import Resend from "../pages/Resend";
// import VerifyEmail from "../pages/VerifyEmail";
// import Contactus from "../pages/contactus/Contactus";
// import ValidateToken from "../pages/ValidateToken/ValidateToken";


export default function App() {
  // global
  //var { isAuthenticated } = useUserState();

  return (
   <>
     <HashRouter>
      {/* <div className="bg-[#2cabb5] h-1 w-[25%]"></div> */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={withRouter(Layout)} />
        <PublicRoute path="/login" component={withRouter(Login)} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
    
   </>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem('user') ? (
          // true ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          false ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
