import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
    }
  }

  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }

  loginSubmit(e) {
    // alert("sjhdjkshdjs")
    e.preventDefault();
    if (this.handleValidationLogin()) {
      // console.log("After hello validation");
      let data = {
        username: this.state.fieldslogin.username,
        password: this.state.fieldslogin.password,
        // number: this.state.fieldslogin.number,
      }
      this.props.dispatch(userActions.login(data, this.props));
    }

  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldslogin: {},
      errorslogin: {},
    })
    this.hideErrorMessage();
  }


  handleValidationLogin = () => {
    console.log("hello validation");

    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //User Name
    if (!fieldslogin["username"]) {
      formIsValid = false;
      errorslogin["username"] = "User Name Cannot Be Blank.";
    }
    //password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Password Cannot Be Blank.";
    }
    //Captcha Number
    // if (!fieldslogin["number"]) {
    //   formIsValid = false;
    //   errorslogin["number"] = "Captcha Cannot Be Blank.";
    // }
    console.log("errorsloginerrorsloginerrorsloginerrorslogin:::", errorslogin
    );

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  render() {
    console.log("this.state.errorslogin::::", this.state.errorslogin);

    return (

      <div className="bg-[#16191c] h-screen ">
        <header className=" border-b border-white/10 bg-[#16191c]">
          <div className="p-6  flex justify-between items-center   h-20 sticky top-0 ">
            <h1 className="text-2xl font-semibold uppercase text-white">Admin login </h1>

          </div>
        </header>

        <section className="container w-full mx-auto h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-y-auto">
          <div className="text-white space-y-10 w-full ">
            <div className="space-y-2 md:px-0 px-6">
              <h1 className="md:text-2xl font-semibold text-[#6c757d]">Welcome to Admin Panel</h1>
              <p className="text-sm text-[#6c757d] font-light">Enter your user name and password</p>
            </div>
            <div className="xl:w-5/12 lg:w-7/12 md:w-8/12 md:px-0 px-6 mx-auto space-y-4">
              <input type="text" name="username" id="username" value={this.state.fieldslogin.username} className="w-full bg-[#2e3439] p-3 py-4 rounded-lg block    border-none focus:outline-none text-sm" placeholder="Enter Username"
                onChange={this.inputChange} />
              {this.state.errorslogin && this.state.errorslogin["username"] ?
                <div className="text-red-500 text-left text-sm">
                  {this.state.errorslogin["username"]}
                </div>
                : null}
              <input type="password" name="password" id="password" value={this.state.fieldslogin.password} className="w-full bg-[#2e3439] p-3 py-4 rounded-lg block    border-none focus:outline-none text-sm"
               placeholder="Enter Password" onChange={this.inputChange} />
              {this.state.errorslogin && this.state.errorslogin["password"] ?
                <div className="text-red-500 text-left text-sm">
                  {this.state.errorslogin["password"]}
                </div>
                : null}
              <button type="button" onClick={this.loginSubmit} className="w-full p-3 bg-[#f9cf14] text-slate-800 font-semibold rounded-lg hover:bg-yellow-500 transtion duration-150 text-lg uppercase">Sign in </button>
              <p className="text-xs  text-[#6c757d] font-light">This site is protected by reCAPTCHA and the Google<b className="text-[#f9cf14] font-normal cursor-pointer"> Privacy policy</b> and <b className="text-[#f9cf14] cursor-pointer font-normal">Terms of service</b> apply.</p>
              <div className="pt-10 space-y-4 text-[#6c757d] text-sm font-light">
                <p className="capitalize "> © Copyright 2021. All Rights Reserved.</p>
                {/* <p>The website is operated by Ecofun Services NV registered in Curaçao under the registration number 152307, with address at Heelsumstraat 51, Curaçao, authorized by Antillephone under license number 8048/JAZ2020 - 025. The transactions are processed by Ecofun Services NV which own and operates world777.com.</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* <div className="lg:py-6 flex justify-center px-4 md:px-0 w-full hidden">
          <div className=" w-[350px] lg:w-[400px]  bg-gray-100 rounded-xl lg:py-20 overflow-x-hidden">
            <div className="space-y-2">
              <div className="pb-4 px-2">
           
              </div>
              <div>
                <h2 className="text-center text-[18px] text-gray-500/90 font-semibold tracking-tight">Welcome to Admin Panel</h2>
                <h2 className="text-center text-[18px] font-semibold text-gray-500/90">Sign In</h2>
              </div>
              <div className="form-group py-1">
                <input type="text" name="userId" id="userId"
                  value={this.state.fieldslogin.userId}
                  placeholder="User Name" className="bg-white w-full  px-2.5 py-1.5 rounded-sm text-black border border-gray-100 focus:outline-none focus:ring-1 ring-green-300 text-sm" onChange={this.inputChange} />
                {this.state.errorslogin && this.state.errorslogin["userId"] ?
                  <div className="text-red-400">
                    {this.state.errorslogin["userId"]}
                  </div>
                  : null}
              </div>
              <div className="form-group py-1">
                <input type="password" name="password" id="password"
                  value={this.state.fieldslogin.password}
                  placeholder="Password" className="bg-white w-full  px-2.5 py-1.5 rounded-sm text-black focus:outline-none border border-gray-100 focus:ring-1 ring-green-400 text-sm" onChange={this.inputChange} />
                {this.state.errorslogin && this.state.errorslogin["password"] ?
                  <div className="text-red-400">
                    {this.state.errorslogin["password"]}
                  </div>
                  : null}
              </div>
              
              <div className="flex justify-center w-full">
                <button type="button" className=" bg-[rgb(44,171,181)] text-white text-[15px] font-serif text-center py-[5px] rounded-sm w-full focus:outline-none scale-100 hover:scale-105 transition duration-100" onClick={this.loginSubmit}>Login</button>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-600 text-center">Admin Panel &#169; 2022</p>
              </div>

            </div>
          </div>
        </div> */}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSent } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    otpSent,
    user,
    users
  };
}
export default connect(mapStateToProps)(Login);
// export default NetworkDetector(connect(mapStateToProps)(Login));