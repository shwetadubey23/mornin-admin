import React from 'react';
import { connect } from 'react-redux';
import { createAccountActions } from '../../_actions';
import { BiX } from 'react-icons/bi';

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsAccount: {},
      errorsAccount: {}
    }
  }

  componentDidMount() {
    this.props.dispatch(createAccountActions.appDetail())
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.createAccount.createAccountSuccess) {
      return {
        ...nextProps,
        fieldsAccount: {},
        errorsAccount: {}
      }
    }
    else {
      return {
        ...nextProps,

      }
    }

  }


  handleInput = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsAccount = this.state.fieldsAccount;
    let errorsAccount = this.state.errorsAccount;
    fieldsAccount[name] = value;
    errorsAccount[name] = "";

    console.log(name, value);

    this.setState({ fieldsAccount, errorsAccount })
  }

  createAccountSubmit = () => {
    if (this.handleAccountValidation()) {
      let reqData = {
        "username": this.state.fieldsAccount.username,
        "mobile": this.state.fieldsAccount.mobile,
        "city": this.state.fieldsAccount.city,
        "userRole": 2,
        // "userRole": this.state.fieldsAccount.userRole,
        // "sportPartnership": this.state.fieldsAccount.sportPartnership,
        "sportPartnership": 10,
        "oddLossCommission": parseInt(this.state.fieldsAccount.oddLossCommission),
        "fancyLossCommission": parseInt(this.state.fieldsAccount.fancyLossCommission),
        "lupassword": this.state.fieldsAccount.lupassword,
        "appId": parseInt(this.state.fieldsAccount.appId),


        // "fullname": this.state.fieldsAccount.fullname,
        // "remark": this.state.fieldsAccount.remark,
        // "password": this.state.fieldsAccount.password,
        // "confirmPassword": this.state.fieldsAccount.confirmPassword,
        // "creditAmt": this.state.fieldsAccount.creditAmt,

      }

      console.log("reqData____@@@::", reqData);

      this.props.dispatch(createAccountActions.createUser(reqData));
    }
  }

  handleAccountValidation = () => {

    console.log("Validation_Validation_::");

    let fieldsAccount = this.state.fieldsAccount;
    let errorsAccount = {};
    let formIsValid = true;

    //username
    if (!fieldsAccount["username"] || fieldsAccount["username"] === "") {
      formIsValid = false;
      errorsAccount["username"] = "UserName Cannot be empty";
    }

    //fullname
    // if (!fieldsAccount["fullname"] || fieldsAccount["fullname"] === "") {
    //   formIsValid = false;
    //   errorsAccount["fullname"] = "Fullname cannot be empty";
    // }

    //appId
    if (!fieldsAccount["appId"] || fieldsAccount["appId"] === "") {
      formIsValid = false;
      errorsAccount["appId"] = "App Url cannot be empty";
    }

    //fancyLossCommission
    if (!fieldsAccount["fancyLossCommission"] || fieldsAccount["fancyLossCommission"] === "") {
      formIsValid = false;
      errorsAccount["fancyLossCommission"] = "Session Commission cannot be empty";
    }

    //oddLossCommission
    if (!fieldsAccount["oddLossCommission"] || fieldsAccount["oddLossCommission"] === "") {
      formIsValid = false;
      errorsAccount["oddLossCommission"] = "Match Commission cannot be empty";
    }

    //password
    // if (!fieldsAccount["password"] || fieldsAccount["password"] === "") {
    //   formIsValid = false;
    //   errorsAccount["password"] = "Password Cannot be empty";
    // }

    //confirmPassword
    // if (!fieldsAccount["confirmPassword"] || fieldsAccount["confirmPassword"] === "") {
    //   formIsValid = false;
    //   errorsAccount["confirmPassword"] = "Confirm Password Cannot be empty";
    // }

    //city
    if (!fieldsAccount["city"] || fieldsAccount["city"] === "") {
      formIsValid = false;
      errorsAccount["city"] = "City Cannot be empty";
    }

    //mobile
    if (!fieldsAccount["mobile"] || fieldsAccount["mobile"] === "") {
      formIsValid = false;
      errorsAccount["mobile"] = "Mobile Cannot be empty";
    }

    //creditAmt
    // if (!fieldsAccount["creditAmt"] || fieldsAccount["creditAmt"] === "") {
    //   formIsValid = false;
    //   errorsAccount["creditAmt"] = "Credit Amount Cannot be empty";
    // }

    //remark
    // if (!fieldsAccount["remark"] || fieldsAccount["remark"] === "") {
    //   formIsValid = false;
    //   errorsAccount["remark"] = "Remark Cannot be empty";
    // }

    //userType
    if (!fieldsAccount["userType"] || fieldsAccount["userType"] === "") {
      formIsValid = false;
      errorsAccount["userType"] = "User Type Cannot be empty";
    }

    //lupassword
    if (!fieldsAccount["lupassword"] || fieldsAccount["lupassword"] === "") {
      formIsValid = false;
      errorsAccount["lupassword"] = "Transaction Code Cannot be empty";
    }

    console.log("errorsApp_errorsApp_::::", errorsAccount);

    this.setState({ errorsAccount: errorsAccount });
    return formIsValid;
  }

  render() {

    let { createAccount } = this.props;

    console.log("RENDER____createAccount:::", createAccount);

    let { appDetailItems, loading } = createAccount ? createAccount : {}

    console.log("RENDER_____appDetailItems_", appDetailItems);

    let userData = JSON.parse(localStorage.getItem('user'));
    console.log("userData:::localStorage::", userData);

    return (
      <>
        {/* <div>
          <Loader
            active={loading}
          />
        </div> */}

        <div className='relative w-full h-full page_bg overflow-y-auto'>
          <div className='px-[12px] py-[4px] space-y-6'>

            <div className='flex justify-between' >
              <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Create ACCOUNT</h2>
              <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Create Account  </p>
            </div>


            <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4'>
              <div className='bg-white   p-[1.25rem] space-y-4 rounded-[.25rem]'>

                <h1 className='capitalize text-[15px] font-[600]  text-[#495057]'>general information</h1>


                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>User name:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["username"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='User Name' onChange={this.handleInput} name="username" value={this.state.fieldsAccount && this.state.fieldsAccount["username"] ? this.state.fieldsAccount["username"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["username"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["username"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["username"]}
                    </div> : null
                  }
                </div>

                {/* <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Full Name:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["fullname"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Full Name' onChange={this.handleInput} name="fullname" value={this.state.fieldsAccount && this.state.fieldsAccount["fullname"] ? this.state.fieldsAccount["fullname"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["fullname"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["fullname"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["fullname"]}
                    </div> : null
                  }
                </div> */}

                {/* <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Password</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["password"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Password' onChange={this.handleInput} name="password" value={this.state.fieldsAccount && this.state.fieldsAccount["password"] ? this.state.fieldsAccount["password"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["password"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["password"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["password"]}
                    </div> : null
                  }
                </div>


                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Confirm Password</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["confirmPassword"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Confirm Password' onChange={this.handleInput} name="confirmPassword" value={this.state.fieldsAccount && this.state.fieldsAccount["confirmPassword"] ? this.state.fieldsAccount["confirmPassword"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["confirmPassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["confirmPassword"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["confirmPassword"]}
                    </div> : null
                  }
                </div> */}

                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] '>City:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["city"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-green-500 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-green-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='City name' onChange={this.handleInput} name="city" value={this.state.fieldsAccount && this.state.fieldsAccount["city"] ? this.state.fieldsAccount["city"] : ""} />

                  </div>
                  {/* {this.state.errorsAccount && this.state.errorsAccount["city"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["city"]}
                    </div> : null
                  } */}
                </div>

                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] '>Mobile:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["mobile"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-green-500 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-green-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Mobile number' onChange={this.handleInput} name="mobile" value={this.state.fieldsAccount && this.state.fieldsAccount["mobile"] ? this.state.fieldsAccount["mobile"] : ""} />

                  </div>
                  {/* {this.state.errorsAccount && this.state.errorsAccount["mobile"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["mobile"]}
                    </div> : null
                  } */}
                </div>


                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Match Commission:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["oddLossCommission"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Match Commission' onChange={this.handleInput} name="oddLossCommission" value={this.state.fieldsAccount && this.state.fieldsAccount["oddLossCommission"] ? this.state.fieldsAccount["oddLossCommission"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["oddLossCommission"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["oddLossCommission"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["oddLossCommission"]}
                    </div> : null
                  }
                </div>


                <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Session Commission:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["fancyLossCommission"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Session Commission' onChange={this.handleInput} name="fancyLossCommission" value={this.state.fieldsAccount && this.state.fieldsAccount["fancyLossCommission"] ? this.state.fieldsAccount["fancyLossCommission"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["fancyLossCommission"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["fancyLossCommission"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["fancyLossCommission"]}
                    </div> : null
                  }
                </div>


                {
                  userData && userData.userType && userData.userType === "4" ?
                    <>
                      <div className=''>
                        <label className='text-sm font-medium text-slate-600 after:content-["*"] after:ml-0.5 after:text-red-500'>App Url:</label>
                        <select onChange={this.handleInput} name="appId" id="appId"

                          className={this.state.errorsAccount && this.state.errorsAccount["appId"] ? 'w-full py-[0.47rem] px-[0.75rem] bg-transparent border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md bg-transparent  focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'}


                        >
                          <option value="volvo">select App Url</option>
                          {
                            appDetailItems && appDetailItems.length > 0 ?
                              appDetailItems.map((element, index) => (
                                <React.Fragment>
                                  <option value={element && element.appId ? element.appId : null}>{element && element.appUrl ? element.appUrl : ""}</option>
                                </React.Fragment>
                              )) : null

                          }

                        </select>
                        {this.state.errorsAccount && this.state.errorsAccount["appId"] ?
                          <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                            {this.state.errorsAccount["appId"]}
                          </div> : null
                        }
                      </div>
                    </> :
                    null
                }

              </div>

              <div className='bg-white   p-[1.25rem] space-y-4 rounded-[.25rem]'>

                {/* <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] '>Credit Amount:</label>
                  <div className='relative'>
                    <input className={this.state.errorsAccount && this.state.errorsAccount["creditAmt"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Credit Amount
                  '  onChange={this.handleInput} name="creditAmt" value={this.state.fieldsAccount && this.state.fieldsAccount["creditAmt"] ? this.state.fieldsAccount["creditAmt"] : ""} />
                    {this.state.errorsAccount && this.state.errorsAccount["mobile"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["creditAmt"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["creditAmt"]}
                    </div> : null
                  }
                </div> */}

                <div className=''>
                  <label className='text-sm font-medium text-slate-600 after:content-["*"] after:ml-0.5 after:text-red-500'>User Type:</label>
                  <select onChange={this.handleInput} name="userType" id="userType"
                    className={this.state.errorsAccount && this.state.errorsAccount["userType"] ? 'w-full py-[0.47rem] px-[0.75rem] bg-transparent border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md bg-transparent  focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'}
                  // className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-xs text-gray-600 bg-transparent capitalize'
                  >
                    <option selected>select user type</option>
                    <option value="super master">super master</option>
                    <option value="master">master</option>
                    <option value="Agent">Agent</option>
                    <option value="user">user</option>
                  </select>
                  {this.state.errorsAccount && this.state.errorsAccount["userType"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsAccount["userType"]}
                    </div> : null
                  }
                </div>



                <div className=''>
                  <h1 className='capitalize text-[15px] font-[600]  text-[#495057]'>Partnership Information</h1>
                  <label className='text-[.8125rem] font-medium text-[#495057] '>Partnership With No Return:</label>
                  <input className="w-full p-2 border border-gray-300 rounded-md focus:outline-none text-xs text-gray-600" value="60" onChange={this.handleInput} name="" />
                  <div className='text-xs text-slate-600 mt-1'>Our: 60 | Down Line: 0</div>
                </div>

                {/* <div className=''>
                  <label className='text-[.8125rem] font-medium text-[#495057] '>Remark:</label>
                  <div>
                    <textarea className={this.state.errorsAccount && this.state.errorsAccount["remark"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Remark' name='remark' value={this.state.fieldsAccount && this.state.fieldsAccount["remark"] ? this.state.fieldsAccount["remark"] : ""} onChange={this.handleInput}  ></textarea>
                  </div>
                  {this.state.errorsAccount && this.state.errorsAccount["remark"] ?
                    <div className="invalid-feedback text-red-400  text-xs ">
                      {this.state.errorsAccount["remark"]}
                    </div> : null
                  }
                </div> */}

                <div className='space-x-4 flex items-center  w-full'>
                  <div className="w-full">
                    <div className='relative '>
                      <input className={this.state.errorsAccount && this.state.errorsAccount["lupassword"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} placeholder='Transaction Code' onChange={this.handleInput} name="lupassword" value={this.state.fieldsAccount && this.state.fieldsAccount["lupassword"] ? this.state.fieldsAccount["lupassword"] : ""} />
                      {this.state.errorsAccount && this.state.errorsAccount["mobile"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>

                    {this.state.errorsAccount && this.state.errorsAccount["lupassword"] ?
                      <div className="invalid-feedback text-red-400  text-xs ">
                        {this.state.errorsAccount["lupassword"]}
                      </div> : null
                    }
                  </div>

                  <button className='text-xs bg-[#23292E]  text-white px-4 py-2.5  rounded-md  ' onClick={this.createAccountSubmit}>Submit</button>
                </div>

              </div>


            </div>
          </div>


        </div>

      </>


    );
  }
}

function mapStateToProps(state) {
  const { users, authentication, createAccount } = state;
  let { userDetails } = authentication ? authentication : {}

  console.log("mapStateToProps::::::userDetails::", userDetails);

  return {
    users,
    userDetails,
    createAccount
  };
}

export default connect(mapStateToProps)(CreateAccount);

// export default AdminList;