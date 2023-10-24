import React from 'react';
import { connect } from 'react-redux';
import {createappActions } from '../../_actions';
import { BiX } from 'react-icons/bi';

class CreateApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // declareMatchModal: false,
      // setFmatchId: false,
      // declareMatchDetails: {},
      selectedFile: {},
      fieldsApp: {},
      errorsApp: {}
    }
  }

  componentDidMount() {
    // let data2 = { "id": "", "index": 0, "noOfRecords": 20 }
    // this.props.dispatch(userActions.childListActiveUser(data2));
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.createapp.addUserSuccess) {
      return {
        ...nextProps,
        fieldsApp: {},
        errorsApp: {},
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
    let fieldsApp = this.state.fieldsApp;
    let errorsApp = this.state.errorsApp;
    fieldsApp[name] = value;
    errorsApp[name] = "";

    console.log(name, value);

    this.setState({ fieldsApp, errorsApp })
  }

  handleFile = (event) => {
    // console.log("handleFileevent",event);

    this.setState({ selectedFile: event.target.files[0] });

    // if (event.target.files[0]) {

    //   console.log("event.target.files[0]", event.target.files[0]);

    // }
    // else {
    //   console.log("No File To Upload!")
    // }

  }


  createAppSubmit = () => {
    if (this.handleAppValidation()) {
      let reqData = {
        "appname": this.state.fieldsApp && this.state.fieldsApp.appname ? this.state.fieldsApp.appname : '',
        "appurl": this.state.fieldsApp.appurl,
        "lupassword": this.state.fieldsApp.lupassword,
        // "logo": "abc.png",
        // "logo": this.state.selectedFile ? this.state.selectedFile : {},
      }

      console.log("reqData____@@@::", reqData);

      this.props.dispatch(createappActions.createCreateApp(reqData, this.state.selectedFile));
    }
  }

  handleAppValidation = () => {

    console.log("Validation_Validation_::");

    let fieldsApp = this.state.fieldsApp;
    let errorsApp = {};
    let formIsValid = true;

    //appname
    if (!fieldsApp["appname"] || fieldsApp["appname"] === "") {
      formIsValid = false;
      errorsApp["appname"] = "Cannot be empty";
    }

    //appurl
    if (!fieldsApp["appurl"] || fieldsApp["appurl"] === "") {
      formIsValid = false;
      errorsApp["appurl"] = "Cannot be empty";
    }

    //lupassword
    if (!fieldsApp["lupassword"] || fieldsApp["lupassword"] === "") {
      formIsValid = false;
      errorsApp["lupassword"] = "Cannot be empty";
    }

    console.log("errorsApp_errorsApp_::::", errorsApp);

    this.setState({ errorsApp: errorsApp });
    return formIsValid;
  }



  render() {

    // let { users } = this.props;
    // let { childListActiveItems } = users;

    // console.log("RENDER_________this.state.fieldsApp::::", this.state.fieldsApp);
    console.log("RENDER_________this.state.selectedFile::::", this.state.selectedFile);

    return (
      <div className='relative w-full h-full page_bg overflow-y-auto'>

        <div className='px-[12px] py-[4px] space-y-6' >

          <div className='flex justify-between' >
            <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Create App</h2>
            <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Create App </p>
          </div>


          <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4'>

            <div className='bg-white   p-[1.25rem] space-y-4 rounded-[.25rem]'>
              <h1 className='capitalize text-[15px] font-[600]  text-[#495057]'>general information</h1>
              <form className='space-y-4 '>
                {/* <div>
                      <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">App Name</label>
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="App Name" value={this.state.fieldsApp && this.state.fieldsApp["appname"] ? this.state.fieldsApp["appname"] : ""} name='appname' onChange={this.handleInput} />
                      {this.state.errorsApp && this.state.errorsApp["appname"] ?
                        <div className="invalid-feedback text-red-600">
                          {this.state.errorsApp["appname"]}
                        </div> : null
                      }
                    </div> */}
                <div>
                  <label htmlFor="exampleInputPassword1" className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>App Name</label>
                  <div className='relative'>
                    <input type="text" className={this.state.errorsApp && this.state.errorsApp["appname"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} id="exampleInputPassword1" placeholder="App Name" value={this.state.fieldsApp && this.state.fieldsApp["appname"] ? this.state.fieldsApp["appname"] : ""} name='appname' onChange={this.handleInput} />
                    {this.state.errorsApp && this.state.errorsApp["appname"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsApp && this.state.errorsApp["appname"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsApp["appname"]}
                    </div> : null
                  }
                </div>
                <div>
                  <label htmlFor="exampleInputPassword1" className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>App Url</label>
                  <div className='relative'>
                    <input type="text" className={this.state.errorsApp && this.state.errorsApp["appurl"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} id="exampleInputPassword1" placeholder="App Url" value={this.state.fieldsApp && this.state.fieldsApp["appurl"] ? this.state.fieldsApp["appurl"] : ""} name='appurl' onChange={this.handleInput} />
                    {this.state.errorsApp && this.state.errorsApp["appurl"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsApp && this.state.errorsApp["appurl"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsApp["appurl"]}
                    </div> : null
                  }
                </div>
                <div>
                  <label htmlFor="exampleInputPassword1" className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Logo</label>
                  <div className='relative'>
                    <input type="file" className={this.state.errorsApp && this.state.errorsApp["logo"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} id="exampleInputPassword1" placeholder="Logo" value={this.state.fieldsApp && this.state.fieldsApp["logo"] ? this.state.fieldsApp["logo"] : ""} name='logo' onChange={this.handleFile}
                    />
                    {this.state.errorsApp && this.state.errorsApp["logo"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>

                  {this.state.errorsApp && this.state.errorsApp["logo"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsApp["logo"]}
                    </div> : null
                  }
                </div>
 


                <div>
                  <label htmlFor="exampleInputPassword1" className='text-[.8125rem] font-medium text-[#495057] after:content-["*"] after:ml-0.5 after:text-red-500'>Transaction Code</label>
                  <div className='relative'>
                    <input type="password" className={this.state.errorsApp && this.state.errorsApp["lupassword"] ? 'w-full py-[0.47rem] px-[0.75rem] border border-red-400 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 focus:ring-2 ring-red-200 text-[#495057] ' : 'w-full py-[0.47rem] px-[0.75rem] border border-gray-300 rounded-md focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500 text-[#495057]'} id="exampleInputPassword1" placeholder="Transaction Code" value={this.state.fieldsApp && this.state.fieldsApp["lupassword"] ? this.state.fieldsApp["lupassword"] : ""} name='lupassword' onChange={this.handleInput} />
                    {this.state.errorsApp && this.state.errorsApp["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                  </div>
                  {this.state.errorsApp && this.state.errorsApp["lupassword"] ?
                    <div className="invalid-feedback text-red-400 pt-1 text-xs ">
                      {this.state.errorsApp["lupassword"]}
                    </div> : null
                  }
                </div>

                <button type="button" className='text-xs bg-[#23292E]  text-white px-4 py-2.5  rounded-md  ' onClick={this.createAppSubmit}>Submit</button>

              </form>
            </div>



          </div>


        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, createapp } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users,
    createapp
  };
}

export default connect(mapStateToProps)(CreateApp);

// export default CreateApp;