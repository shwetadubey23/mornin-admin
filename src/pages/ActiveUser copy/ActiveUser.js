import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
// import moment from 'moment'
// import Modal from 'react-modal';

class AdminList extends React.Component {

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

    // let data = {
    //   "id": 4
    // }

    // this.props.dispatch(userActions.marketAnalysisDashboard(data));


    let data2 = { "id": "", "index": 0, "noOfRecords": 20 }

    this.props.dispatch(userActions.childListActiveUser(data2));

    // let data3 = {"userId":"9e4046d3c"}
    // this.props.dispatch(userActions.creditdata(data3));





    // this.props.dispatch(userActions.upcomingMatches());
    // this.props.dispatch(userActions.liveMatchList());
  }

  render() {

    let { users } = this.props;

    let { childListActiveItems } = users;

    console.log("RENDER_________childListActiveItems::::", childListActiveItems);

    return (

      <>

        <div className='relative w-full h-full page_bg overflow-y-auto'>

          <div className='p-6' data-aos="fade-left" data-aos-duration="1200">

            <div className='pb-4 bg-white border'>
             
                <div className='w-full bg-white p-6 flex items-center justify-between'>
                  <h2 className='text-xl text-slate-800 font-medium'>Active User</h2>
                  <div>
                    <label className="mx-2 mt-1 text-sm text-gray-500">Search:</label>
                    <input className="px-2 py-1 text-sm text-gray-700 placeholder-gray-600 transition duration-150 ease-in-out bg-white border border-gray-300 appearance-none md:w-52 focus:outline-none focus:border-2 focus:border-green-400 focus:bg-gray-50 focus:text-gray-600 sm:leading-5" id="exampleSearch2" type="amount" required />
                  </div>
                </div>

          

              <div className="px-6 pb-2 overflow-hidden rounded-lg">
                <div className="max-w-full overflow-auto ">
                  <div className="inline-block min-w-full ">
                    <div className="overflow-hidden w-full ">
                      <table className="min-w-full  ">
                        <thead className="">
                          <tr className="text-left text-sm font-medium text-gray-800 bg-white border-b">
                            {/* <th scope="col" className="whitespace-nowrap font-semibold p-2 py-4 uppercase ">ID</th> */}
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">username</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">userId</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">pts</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">pname</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">vcLock</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">lcLock</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">id</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">exposure</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">clientPlPercentage</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">clientPl</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">betLock</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">availabePts</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">active</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize">accountType</th>
                            <th scope="col" className="whitespace-nowrap font-semibold p-4 capitalize text-center">accountLock</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y '>

                          {
                            childListActiveItems && childListActiveItems.dataList && childListActiveItems.dataList.length > 0 ?
                              childListActiveItems.dataList.map((element, index) => (

                                <React.Fragment >


                                  <tr
                                    className="  text-slate-600 text-md bg-white ">

                                    {/* <td className="p-2 py-4 whitespace-nowrap">1</td> */}
                                    <td className="p-4 cursor-pointer whitespace-nowrap ">{element && element.username ? element.username : "-"}</td>
                                    <td className="p-4 whitespace-nowrap">{element && element.userId ? element.userId : "-"}</td>
                                    <td className="p-4 whitespace-nowrap">{element && element.pts ? element.pts : "-"}</td>
                                    <td className="p-4 whitespace-nowrap">{element && element.pname ? element.pname : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.vcLock ? "Yes" : "No"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.lcLock ? "Yes" : "No"}</td>

                                    <td className="p-4 whitespace-nowrap">{element && element.id ? element.id : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.exposure ? element.exposure : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.clientPlPercentage ? element.clientPlPercentage : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.clientPl ? element.clientPl : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.betLock ? "Yes" : "No"}</td>
                                    <td className="p-4 whitespace-nowrap">{element && element.availabePts ? element.availabePts : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.active ? "Yes" : "No"}</td>
                                    <td className="p-4 whitespace-nowrap">{element && element.accountType ? element.accountType : "-"}</td>
                                    <td className="p-4 whitespace-nowrap text-center">{element && element.accountLock ? "Yes" : "No"}</td>

                                    {/* <td className="px-2 whitespace-nowrap">
                                      <div className='flex items-center p-1 '>
                                        <button className='flex items-center px-2 py-1 mr-2 space-x-1 bg-white border border-gray-200'>
                                          <span className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="10px" height="10px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1536"><path fill="#676a6c" d="m404 980l152 152l-52 52h-56v-96h-96v-56zm414-390q14 13-3 30L524 911q-17 17-30 3q-14-13 3-30l291-291q17-17 30-3zm-274 690l544-544l-288-288l-544 544v288h288zm608-608l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zm384-384v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z" /></svg>
                                          </span>
                                          <p className='py-0.5 text-sm'>EDIT</p>
                                        </button>
                                        <button className='bgheader hover:bg-emerald-600 text-white text-sm px-2 py-1.5 rounded-sm'
                                        // onClick={() => this.navigateChangePass(element)}

                                        >CHANGE_PASSWORD</button>
                                      </div>
                                    </td> */}

                                  </tr>


                                </React.Fragment>))
                              : (<tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white " >
                                <td className="px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap" colSpan="7">Record Not Found</td>
                              </tr>)
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

          {/* <div className="fixed bottom-0 w-full px-4 py-3 bg-white border-t lg:left-60">
          <h3 className=" text-sm text-[#676a6c]"> <strong>NICE1010</strong> | Powered By <strong>NICE</strong> Gaming | Copyright © 2014-2022</h3>
        </div> */}
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