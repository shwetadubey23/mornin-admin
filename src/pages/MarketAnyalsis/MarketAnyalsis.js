import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { MdOutlineSportsCricket } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';

class AdminList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      sportId: 4
    }
  }

  componentDidMount() {

    let data = {
      "id": this.state.sportId
    }

    this.props.dispatch(userActions.marketAnalysisDashboard(data));
    this.props.dispatch(userActions.activeSport());


    // let data2 = { "id": "", "index": 0, "noOfRecords": 20 }

    // this.props.dispatch(userActions.childListActiveUser(data2));

    // let data3 = {"userId":"9e4046d3c"}


    // this.props.dispatch(userActions.creditdata(data3));





    // this.props.dispatch(userActions.upcomingMatches());
    // this.props.dispatch(userActions.liveMatchList());
  }

  handleChangeSportId = (data) => {

    console.log("datadatadatadata____:::", data);

    this.props.dispatch(userActions.marketAnalysisDashboard({ "id": data }));

    this.setState({ sportId: data })
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }


  render() {

    let { users } = this.props;
    let { marketAnalysisItems, activeSportItems, loading } = users;

    // console.log("RENDER_________marketAnalysisItems::::", marketAnalysisItems);
    // console.log("RENDER_________activeSportItems::::", activeSportItems);
    console.log("RENDER_________marketAnalysisItems::::", this.state.sportId);

    return (

      <>
        <div>
          <Loader
            active={loading}
          />
        </div>

        <div className='relative w-full h-full overflow-y-auto page_bg'>

          <div className='px-[12px] py-[4px] space-y-6' >

            <div className='border-b w-full flex items-center font-medium space-x-4'>

              {
                activeSportItems && activeSportItems.length > 0 ?
                  activeSportItems.map((element, index) => (
                    <React.Fragment key={index}>
                      <span className={this.state.sportId === element.sportId ? "px-4 py-2 cursor-pointer bg-[#16191c] rounded-t-[0.25rem] overflow-hidden text-sm text-white border  " : "px-4 py-2 cursor-pointer text-slate-600 text-sm border border-transparent hover:border-inherit transition duration-150 rounded-sm  "} onClick={() => this.handleChangeSportId(element.sportId)}>{element && element.sportName ? element.sportName : "-"}</span>
                    </React.Fragment>
                  )) : null
              }


            </div>

            {
              marketAnalysisItems && marketAnalysisItems.length > 0 ?
                marketAnalysisItems.map((element, index) => (
                  <div key={index} className='bg-white divide-y'>
                    <div className='bg-[#23292e] w-full p-4 text-white flex items-center space-x-3'><MdOutlineSportsCricket size={22} />
                      {element && element.sportId && element.sportId === "4" ? <h1 className='font-me '>Cricket</h1> : null}
                      {element && element.sportId && element.sportId === "1" ? <h1 className='font-me '>Soccer</h1> : null}
                      {element && element.sportId && element.sportId === "2" ? <h1 className='font-me '>Tenis</h1> : null}
                    </div>
                    <div className='w-full flex items-center p-4 md:text-sm text-xs text-slate-800'>
                      <p onClick={() => this.onClickMenu('/app/marketanyalsisdetails')} className='md:w-4/12 w-full text-blue-500 cursor-pointer'>{element && element.matchName ? element.matchName : "-"} </p>
                      <p className='md:w-8/12 w-full flex whitespace-nowrap '>{element && element.time ? element.time : "-"}
                        <span className='mt-0.5 ml-2'>
                          <svg stroke="currentColor" fill="#a01919" stroke-width="0" viewBox="0 0 20 20" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </span>
                      </p>
                    </div>

                    {
                      element && element.marketData && element.marketData.length > 0 ?
                        element.marketData.map((elementInner, innerIndex) => (
                          <div className='md:text-sm text-xs font-light divide-y whitespace-nowrap'>

                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='md:w-4/12 w-full flex'> {elementInner && elementInner.marketName ? elementInner.marketName : "-"}
                                <span className='mt-0.5 ml-2'>
                                  <svg stroke="currentColor" fill="#a01919" stroke-width="0" viewBox="0 0 20 20" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                </span>
                              </p>
                              <p className='md:w-8/12 w-full'>---</p>
                            </div>
                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='md:w-4/12 w-full flex'>{elementInner && elementInner.selectionName1 ? elementInner.selectionName1 : "-"}</p>
                              <p className='md:w-8/12 w-full space-x-6 flex'><p>9</p> <p>0</p></p>
                            </div>
                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='md:w-4/12 w-full'>{elementInner && elementInner.selectionName2 ? elementInner.selectionName2 : "-"}</p>
                              <p className='md:w-8/12 w-full space-x-6 flex'><p>9</p> <p>0</p></p>
                            </div>

                            {/* {elementInner && elementInner.marketName ? elementInner.marketName : "-"} */}
                          </div>
                        )) : null
                    }

                    {/* <div className='w-full flex items-center p-4 text-base text-slate-800'>
                      <p className='w-4/12'>Match Odds 000</p>
                      <p className='w-8/12'>---</p>
                    </div>
                    <div className='w-full flex items-center p-4 text-base text-slate-800'>
                      <p className='w-4/12'>Deccan gallditor 000</p>
                      <p className='w-8/12 space-x-6 flex'><p>9</p> <p>0</p></p>
                    </div> */}


                    {/* <div className='w-full flex items-center p-4 text-base text-slate-800'>
                      <p className='w-4/12'>
                        {
                          element && element.marketData && element.marketData.length > 0 ?
                            element.marketData.map((elementInner, innerIndex) => (
                              <>
                                {elementInner && elementInner.marketName ? elementInner.marketName : "-"}
                              </>
                            )) : null
                        }
                      </p>
                      <p className='w-8/12'>---</p>
                    </div>



                    <div className='w-full flex items-center p-4 text-base text-slate-800'>
                      <p className='w-4/12'>Deccan gallditor</p>
                      <p className='w-8/12 space-x-6 flex'><p>9</p> <p>0</p></p>
                    </div> */}

                  </div>

                ))
                :
                null

            }
            {/* <div className='pb-10 bg-white'>
              <div className='justify-between px-4 py-2 space-y-4 md:flex md:space-y-0'>
                <div className='w-full bg-white p-4 border-b border-gray-200'>
                  <h2 className='text-3xl text-gray-400 font-noraml'>Market Anyalsis</h2>
                </div>


                <div className='flex justify-between space-x-4 whitespace-nowrap'>

                  <div>
                    <label className="mx-2 mt-1 text-sm text-gray-500">Search:</label>
                    <input className="px-2 py-1 text-sm text-gray-700 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 sm:leading-5" id="exampleSearch2" type="amount" required />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-2 overflow-hidden rounded-lg">
                <div className="max-w-full overflow-auto ">
                  <div className="inline-block min-w-full ">
                    <div className="overflow-hidden w-full ">
                      <table className="min-w-full divide-y divide-gray-800">
                        <thead className="rounded-t">
                          <tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white">
                            <th scope="col" className="whitespace-nowrap p-2 uppercase bg-gray-100">ID</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">sportId</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">sportName</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">matchId</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">matchName</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">marketId</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">marketName</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionAmount1</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionAmount2</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionAmount3</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionName1</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionName2</th>
                            <th scope="col" className="whitespace-nowrap p-2 capitalize">selectionName3</th>
                           
                          </tr>
                        </thead>
                        <tbody>

                          {
                            marketAnalysisItems && marketAnalysisItems.length > 0 ?
                              marketAnalysisItems.map((element, index) => (

                                <React.Fragment >
                                  <tr className="border-b border-gray-300 border-opacity-10 text-gray-600/80 text-[13px] bg-white">
                                    <td className="p-2 whitespace-nowrap">1</td>
                                    <td className="p-2 cursor-pointer whitespace-nowrap tabletext" >{element && element.sportId ? element.sportId : "-"}</td>
                                    <td className="p-2 whitespace-nowrap">{element && element.sportName ? element.sportName : "-"}</td>
                                    <td className="p-2 whitespace-nowrap">{element && element.matchId ? element.matchId : "-"}</td>
                                    <td className="p-2 whitespace-nowrap">{element && element.matchName ? element.matchName : "-"}</td>

                                    <td className="p-2 whitespace-nowrap">
                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.marketId ? elementInner.marketId : "-"}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.marketName ? elementInner.marketName : "-"}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>


                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionAmount1 ? elementInner.selectionAmount1 : 0}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>


                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionAmount2 ? elementInner.selectionAmount2 : 0}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>

                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionAmount3 ? elementInner.selectionAmount3 : 0}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>

                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionName1 ? elementInner.selectionName1 : "-"}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>


                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionName2 ? elementInner.selectionName2 : "-"}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>

                                    <td className="p-2 whitespace-nowrap">

                                      {
                                        element && element.marketData && element.marketData.length > 0 ?
                                          element.marketData.map((elementInner, innerIndex) => (
                                            <>
                                              {elementInner && elementInner.selectionName3 ? elementInner.selectionName3 : "-"}<br></br>
                                            </>
                                          )) : null
                                      }

                                    </td>
                                  </tr>


                                </React.Fragment>
                              ))
                              : (<tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white " >
                                <td className="px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap" colSpan="7">Record Not Found</td>
                              </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                

              </div>

            </div> */}

          </div>
        </div>

      </>


    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users
  };
}

export default connect(mapStateToProps)(AdminList);

// export default AdminList;