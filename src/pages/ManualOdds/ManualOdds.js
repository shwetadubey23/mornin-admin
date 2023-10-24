import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
// import moment from 'moment'
import Modal from 'react-modal';

class ManualOdds extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {}
    }
  }

  componentDidMount() {

    this.props.dispatch(userActions.getAllMatchActive());
    this.props.dispatch(userActions.upcomingMatches());
    this.props.dispatch(userActions.liveMatchList());
  }

  static getDerivedStateFromProps(nextProps, prevState) {


    if (nextProps.users.addUserSuccess) {

      return {
        ...nextProps,
        fieldsMatch: {},
        errorsMatch: {},
        declareMatchModal: false,
        setFmatchId: false,
      }
    } else {
      return {
        ...nextProps
      }
    }

  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  declareResultSubmit = () => {
    let data = {
      "marketId": this.state.declareMatchDetails.marketId,
      "selectionId": this.state.fieldsMatch.selectionId
    }

    console.log("declareResultSubmit___________data:::", data);
    this.props.dispatch(userActions.declareResult(data));
  }

  navigate = (data) => {
    console.log("navigate___matchId", data._id);
    this.props.history.push('/app/ChangePassword/' + data._id);
  }

  navigateAdminDetails = (data) => {
    console.log("navigate___matchId", data._id);
    this.props.history.push('/app/AdminDetails/' + data._id);
  }

  handleOpenDeclareMatchModal = (data) => {
    this.setState({ declareMatchModal: true, declareMatchDetails: data });
    this.props.dispatch(userActions.getSelectionByMarketId({ marketId: data.marketId }));

  }

  handleCloseDeclareMatchModal = () => {
    this.setState({ declareMatchModal: false });
  }

  ///////////////////////////////////////////////////////////////////////

  handleOpenFmatchIdModal = (data) => {

    // console.log("data_________:::", data);

    this.setState({ setFmatchId: true, rowMatchId: data._id });
  }

  handleCloseFmatchIdModal = () => {
    this.setState({ setFmatchId: false, fieldsMatch: {} });
  }


  inputChangeFmatchId = (event) => {
    event.preventDefault();
    const { fieldsMatch, errorsMatch } = this.state;
    fieldsMatch[event.target.name] = event.target.value;
    errorsMatch[event.target.name] = "";
    console.log(event.target.name, event.target.value);
    this.setState({ fieldsMatch, errorsMatch });

  }


  inputChangeSelectCoin = (event) => {
    event.preventDefault();
    const { fieldsMatch, errorsMatch } = this.state;
    fieldsMatch[event.target.name] = event.target.value;
    errorsMatch[event.target.name] = "";
    console.log(event.target.name, event.target.value);
    this.setState({ fieldsMatch, errorsMatch, currentSelectedCoin: JSON.parse(event.target.value) });

  }


  updateMatchStatus = (data) => {

    console.log("%%%%%%%%%%%%%%%%%%%@@@.id:", data);

    // if (this.handleValidationAddUser()) {
    let reqData = {
      "id": data._id
    }

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>Id$", reqData);
    this.props.dispatch(userActions.updateMatchStatus(reqData));
    // }

  }

  updateMatchFmIdSubmit = (data) => {

    console.log("%%%%%%%%%%%%%%%%%%%@@@.id:", data);

    // if (this.handleValidationAddUser()) {
    let reqData = {
      "id": this.state.rowMatchId,
      "fmId": this.state.fieldsMatch.fmId
    }

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>Id$", reqData);
    this.props.dispatch(userActions.updateMatchfmId(reqData));
    // }

  }

  render() {

    let { users } = this.props;
    let { activeMatch, selectionIdMarketWise, upcomingMatchesList, liveMatchItems } = users;
    // console.log("RENDER_____activeMatch::", activeMatch);
    // console.log("RENDER_____selectionIdMarketWise::", selectionIdMarketWise);
    // console.log("RENDER_____upcomingMatchesList::", upcomingMatchesList);
    // console.log("RENDER_____liveMatchItems::", liveMatchItems);
    console.log("RENDER_____fieldsMatch::", this.state.fieldsMatch);

    return (

      <>
        <div className='w-full h-full page_bg'>
          {/* <div className='py-2'>
            <marquee className="text-white text-sm font-semibold font-serif py-2 bgheader">!! Welcome To NICE1010 27-5-2022(( RR VS KKR )) AT 7:30 PM LIVE ON STARS SPORT!!</marquee>
          </div> */}

          <div className='w-full bg-white p-4 border-b border-gray-200'>
            <h2 className='text-2xl text-gray-500  capitalize'>ManualOdds Page</h2>
          </div>

          <div className='p-6'>
            <div className='w-full flex justify-between bg-white border-b border-t border-gray-200 p-3'>
              <h2 className='text-base font-semibold text_color'>ManualOdds</h2>

            </div>
            <div className='bg-white pb-10'>
              <div className='md:flex justify-between px-4 pt-2 md:space-y-0 space-y-4'>
                <div className='flex items-center space-x-4'>

                  <div className="">
                    <label className='text-sm text-gray-500 mr-2'>Show:</label>
                    <div className="dropdown inline-block relative">
                      <div className="border border-gray-200 w-full py-1.5 inline-flex items-center">
                        <select onChange={this.inputChange} className="text-sm bg-white focus:outline-none w-full" value={this.state.size}>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between whitespace-nowrap space-x-4'>
                  <div>
                    <label className="mt-1 text-sm text-gray-500 mx-2">Search:</label>
                    <input className=" px-2 py-1 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52   text-gray-700 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 text-sm sm:leading-5" id="exampleSearch2" type="amount" required onChange={this.handleSearch} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden pb-2 p-6">
                <div className="overflow-auto max-w-full ">
                  <div className="inline-block min-w-full  ">
                    <div className="overflow-hidden  ">
                      <table className="min-w-full divide-y divide-gray-800 border-0">
                        <thead className="rounded-t">
                          <tr className="uppercase">
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-gray-100">#</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">Name</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">SPORTID</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">SERIESID</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">MATCHID</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">MARKETID</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">MATCHDATE</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">F_MATCH_ID</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Odd row */}
                          {
                            activeMatch && activeMatch.length > 0 ?
                              activeMatch.map((element, index) => (<React.Fragment key={element.id}>
                                <tr key={element.id} className=" border-b border-black border-opacity-10 ">

                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{index + 1}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.name ? element.name : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.sportId ? element.sportId : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.seriesId ? element.seriesId : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.matchId ? element.matchId : 0}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.marketId ? element.marketId : 0}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.openDate ? element.openDate : 0}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.fmId ? element.fmId : 0}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">
                                    <div className='flex items-center p-1'>
                                      <button className='bgheader hover:bg-emerald-600 text-white text-sm px-2 py-1.5 rounded-sm' onClick={() => this.handleOpenDeclareMatchModal(element)}>Declare Match</button>
                                    </div>
                                    <div className='flex items-center p-1'>
                                      <button className='bgheader hover:bg-emerald-600 text-white text-sm px-2 py-1.5 rounded-sm' onClick={() => this.updateMatchStatus(element)}>{element.isActive ? "active" : "deactive"}</button>
                                    </div>
                                    <div className='flex items-center p-1'>
                                      <button className='bgheader hover:bg-emerald-600 text-white text-sm px-2 py-1.5 rounded-sm' onClick={() => this.handleOpenFmatchIdModal(element)}>Update FmatchId</button>
                                    </div>
                                  </td>

                                </tr>
                              </React.Fragment>))
                              : (<tr className="bg-white bg-opacity-5 " >
                                <td className="col-span-8 px-6 py-2 whitespace-nowrap font-medium text-sm text-gray-600">Record Not Found</td>
                              </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>



                <Modal isOpen={this.state.declareMatchModal} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >Declare Match</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseDeclareMatchModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">Selection Id :</label>
                                <select className="form-select appearance-none block lg:w-[400px] w-full sm:w[400] px-3 py-1.5 text-base font-normal  text-gray-300 bg-slate-700 bg-clip-padding bg-no-repeat  border border-solid border-slate-700 rounded transition ease-in-out  m-0  focus:outline-none" aria-label="Default select example"
                                  onChange={this.inputChangeSelectCoin}
                                  name="selectionId"
                                  value={this.state.fieldsMatch && this.state.fieldsMatch["selectionId"] ? this.state.fieldsMatch["selectionId"] : null}
                                >
                                  <option selected>Plz Select Selection Id</option>
                                  {
                                    selectionIdMarketWise && selectionIdMarketWise.length > 0 ?
                                      selectionIdMarketWise.map((element, index) => (
                                        <option value={element && element.selectionId ? element.selectionId : "NA"}>{element && element.name ? element.name : "NA"}</option>
                                      ))
                                      : null
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.declareResultSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>

                <Modal isOpen={this.state.setFmatchId} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >UPDATE F_MATCH_ID</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseFmatchIdModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">F_MATCH_ID</label>

                                <input className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border border-gray-400 rounded shadow form-select border-1 placeholder-blueGray-400 text-blueGray-600 focus:outline-none focus:ring"
                                  id="fmId" name="fmId" placeholder="fmId" value={this.state.fieldsMatch.fmId} type="text"
                                  onChange={this.inputChangeFmatchId}
                                />

                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.updateMatchFmIdSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>


                {/* {
                  isMobile ?
                    <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav>
                } */}

              </div>

            </div>
          </div>


          <div className='p-6'>
            <div className='w-full flex justify-between bg-white border-b border-t border-gray-200 p-3'>
              <h2 className='text-base font-semibold text_color'>Live Matches</h2>

            </div>
            <div className='bg-white pb-10'>
              <div className='md:flex justify-between px-4 pt-2 md:space-y-0 space-y-4'>
                <div className='flex items-center space-x-4'>

                  <div className="">
                    <label className='text-sm text-gray-500 mr-2'>Show:</label>
                    <div className="dropdown inline-block relative">
                      <div className="border border-gray-200 w-full py-1.5 inline-flex items-center">
                        <select onChange={this.inputChange} className="text-sm bg-white focus:outline-none w-full" value={this.state.size}>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between whitespace-nowrap space-x-4'>
                  <div>
                    <label className="mt-1 text-sm text-gray-500 mx-2">Search:</label>
                    <input className=" px-2 py-1 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52   text-gray-700 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 text-sm sm:leading-5" id="exampleSearch2" type="amount" required onChange={this.handleSearch} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden pb-2 p-6">
                <div className="overflow-auto max-w-full ">
                  <div className="inline-block min-w-full  ">
                    <div className="overflow-hidden  ">
                      <table className="min-w-full divide-y divide-gray-800 border-0">
                        <thead className="rounded-t">
                          <tr className="uppercase">
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-gray-100">#</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match id</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match name</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match date</th>

                          </tr>
                        </thead>
                        <tbody>
                          {/* Odd row */}
                          {
                            liveMatchItems && liveMatchItems.length > 0 ?
                              liveMatchItems.map((element, index) => (<React.Fragment key={element.id}>
                                <tr key={element.id} className=" border-b border-black border-opacity-10 ">

                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{index + 1}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.match_id ? element.match_id : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.team_a ? element.team_a : "-"} vs {element && element.team_b ? element.team_b : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.match_date ? element.match_date : "-"}</td>

                                </tr>
                              </React.Fragment>))
                              : (<tr className="bg-white bg-opacity-5 " >
                                <td className="col-span-8 px-6 py-2 whitespace-nowrap font-medium text-sm text-gray-600">Record Not Found</td>
                              </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>



                {/* <Modal isOpen={this.state.declareMatchModal} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >Declare Match</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseDeclareMatchModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">Selection Id :</label>
                                <select className="form-select appearance-none block lg:w-[400px] w-full sm:w[400] px-3 py-1.5 text-base font-normal  text-gray-300 bg-slate-700 bg-clip-padding bg-no-repeat  border border-solid border-slate-700 rounded transition ease-in-out  m-0  focus:outline-none" aria-label="Default select example"
                                  onChange={this.inputChangeSelectCoin}
                                  name="selectionId"
                                  value={this.state.fieldsMatch && this.state.fieldsMatch["selectionId"] ? this.state.fieldsMatch["selectionId"] : null}
                                >
                                  <option selected>Plz Select Selection Id</option>
                                  {
                                    selectionIdMarketWise && selectionIdMarketWise.length > 0 ?
                                      selectionIdMarketWise.map((element, index) => (
                                        <option value={element && element.selectionId ? element.selectionId : "NA"}>{element && element.name ? element.name : "NA"}</option>
                                      ))
                                      : null
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.declareResultSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>

                <Modal isOpen={this.state.setFmatchId} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >UPDATE F_MATCH_ID</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseFmatchIdModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">F_MATCH_ID</label>

                                <input className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border border-gray-400 rounded shadow form-select border-1 placeholder-blueGray-400 text-blueGray-600 focus:outline-none focus:ring"
                                  id="news_id" name="news_id" placeholder="News Id" value={this.state.fieldsMatch.fmId} type="text"
                                // onChange={this.inputAddUserChange} 
                                />

                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.declareResultSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal> */}


                {/* {
                  isMobile ?
                    <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav>
                } */}

              </div>

            </div>
          </div>

          <div className='p-6'>
            <div className='w-full flex justify-between bg-white border-b border-t border-gray-200 p-3'>
              <h2 className='text-base font-semibold text_color'>Upcoming Matches</h2>

            </div>
            <div className='bg-white pb-10'>
              <div className='md:flex justify-between px-4 pt-2 md:space-y-0 space-y-4'>
                <div className='flex items-center space-x-4'>

                  <div className="">
                    <label className='text-sm text-gray-500 mr-2'>Show:</label>
                    <div className="dropdown inline-block relative">
                      <div className="border border-gray-200 w-full py-1.5 inline-flex items-center">
                        <select onChange={this.inputChange} className="text-sm bg-white focus:outline-none w-full" value={this.state.size}>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between whitespace-nowrap space-x-4'>
                  <div>
                    <label className="mt-1 text-sm text-gray-500 mx-2">Search:</label>
                    <input className=" px-2 py-1 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52   text-gray-700 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 text-sm sm:leading-5" id="exampleSearch2" type="amount" required onChange={this.handleSearch} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden pb-2 p-6">
                <div className="overflow-auto max-w-full ">
                  <div className="inline-block min-w-full  ">
                    <div className="overflow-hidden  ">
                      <table className="min-w-full divide-y divide-gray-800 border-0">
                        <thead className="rounded-t">
                          <tr className="uppercase">
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-gray-100">#</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match id</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match name</th>
                            <th scope="col" className="whitespace-nowrap p-2 text-left text-sm font-semibold text-gray-600 bg-white">match date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Odd row */}
                          {
                            upcomingMatchesList && upcomingMatchesList.length > 0 ?
                              upcomingMatchesList.map((element, index) => (<React.Fragment key={element.id}>
                                <tr key={element.id} className=" border-b border-black border-opacity-10 ">

                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{index + 1}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.match_id ? element.match_id : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm tabletext cursor-pointer">{element && element.team_a ? element.team_a : "-"} vs {element && element.team_b ? element.team_b : "-"}</td>
                                  <td className="p-2 whitespace-nowrap text-sm text-gray-600">{element && element.match_date ? element.match_date : "-"}</td>

                                </tr>
                              </React.Fragment>))
                              : (<tr className="bg-white bg-opacity-5 " >
                                <td className="col-span-8 px-6 py-2 whitespace-nowrap font-medium text-sm text-gray-600">Record Not Found</td>
                              </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>



                {/* <Modal isOpen={this.state.declareMatchModal} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >Declare Match</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseDeclareMatchModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">Selection Id :</label>
                                <select className="form-select appearance-none block lg:w-[400px] w-full sm:w[400] px-3 py-1.5 text-base font-normal  text-gray-300 bg-slate-700 bg-clip-padding bg-no-repeat  border border-solid border-slate-700 rounded transition ease-in-out  m-0  focus:outline-none" aria-label="Default select example"
                                  onChange={this.inputChangeSelectCoin}
                                  name="selectionId"
                                  value={this.state.fieldsMatch && this.state.fieldsMatch["selectionId"] ? this.state.fieldsMatch["selectionId"] : null}
                                >
                                  <option selected>Plz Select Selection Id</option>
                                  {
                                    selectionIdMarketWise && selectionIdMarketWise.length > 0 ?
                                      selectionIdMarketWise.map((element, index) => (
                                        <option value={element && element.selectionId ? element.selectionId : "NA"}>{element && element.name ? element.name : "NA"}</option>
                                      ))
                                      : null
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.declareResultSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>

                <Modal isOpen={this.state.setFmatchId} >

                  <div className="bg-slate-700 main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="bg-slate-800  outline-none  modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p className="text-2xl font-bold" >UPDATE F_MATCH_ID</p>
                          <div className="modal-close cursor-pointer z-50">
                            <svg onClick={() => this.handleCloseFmatchIdModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="my-5">

                          <form autoComplete="off">
                            <div className="flex justify-center w-full">
                              <div className="mb-3 w-full">
                                <label className="text-blue text-sm font-medium ">F_MATCH_ID</label>

                                <input className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border border-gray-400 rounded shadow form-select border-1 placeholder-blueGray-400 text-blueGray-600 focus:outline-none focus:ring"
                                  id="news_id" name="news_id" placeholder="News Id" value={this.state.fieldsMatch.fmId} type="text"
                                // onChange={this.inputAddUserChange} 
                                />

                              </div>
                            </div>
                            <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                              <button className="bg-[#2DA4FE] w-full mx-auto flex justify-center py-3 uppercase px-4  text-sm font-semibold rounded-md text-white focus:outline-none" type="button" onClick={this.declareResultSubmit}>Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal> */}


                {/* {
                  isMobile ?
                    <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
                      {
                        total && total > 10 ?
                          <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={total / this.state.size}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                          />
                          : null}
                    </nav>
                } */}

              </div>

            </div>
          </div>

          <div className="bg-white py-3 px-4 border-t bottom-0 lg:left-60 fixed w-full">
            <h3 className=" text-sm text-[#676a6c]"> <strong>NICE1010</strong> | Powered By NICE1010 Gaming | Copyright © 2014-2022</h3>
          </div>
        </div>

      </>


    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(ManualOdds);

// export default ManualOdds;