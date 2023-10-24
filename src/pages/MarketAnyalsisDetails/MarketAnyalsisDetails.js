import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import Loader from '../../components/Loader/Loader';
import { BiChevronDown } from 'react-icons/bi';
import FancyProfitLoss from "./components/FancyProfitLoss"
import MoreDetailsModal from './components/MoreDetailsModal/MoreDetailsModal';
import FancyModal from './components/MoreDetailsModal/FancyModal';
class AdminList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      moreDetails: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      sportId: "4",
      openModal: false,
      fancyModal: false
    }
  }

  componentDidMount() {

    let data = {
      "id": this.state.sportId
    }

    this.props.dispatch(userActions.marketAnalysisDashboard(data));
    this.props.dispatch(userActions.activeSport());

  }


  handlefancyModal = () => {
    this.setState({ fancyModal: !this.state.fancyModal })
  }


  handleChangeSportId = (data) => {

    console.log("datadatadatadata____:::", data);

    this.props.dispatch(userActions.marketAnalysisDashboard({ "id": data }));

    this.setState({ sportId: data })
  }

  handleMoreDetailsOpenModal = (data) => {
    // let reqData = { "noOfRecords": 25, "index": 0, "toDate": "00:00:0000", "fromDate": "00:00:0000", "userid": "b137e7a95", "type": 4 }
    // this.props.dispatch(creditWithdrawActions.accountHistory(reqData));
    // if (this.state.moreDetailsType === 'PROFILE') {
    //   this.props.dispatch(creditWithdrawActions.childProfile({ "userId": data.userId }));
    // }
    this.setState({ moreDetails: true, rowDataDetails: data })
  }

  handleMoreDetailsHideModal = () => {
    this.setState({ moreDetails: false, moreDetailsType: 'PROFILE', fieldsMoreDetails: {}, errorsMoreDetails: {} })
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

        <div className="flex flex-col xl:flex-row px-[12px] py-[4px]">

            <div className='w-full'>
              {/* drop down */}
              <div className="bg-[#20327b] flex justify-between p-[16px] md:col-span-2">
                <h1 className="text-[14px]  text-white font-normal">
                  Asia Cup {('>')} Afghanistan v Sri Lanka
                </h1>
                <h1 className="text-[14px] text-white font-normal">
                  27/08/2022 19:30:00
                </h1>
              </div>
            </div>

            <div className='xl:w-[40%] w-full xl:pl-6 xl:mt-0 mt-4'>

              <div className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px] capitalize">my bets</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={() => this.handlefancyModal()} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                  fancy/pnl
                  </button>
                  <button onClick={() => this.handleMoreDetailsOpenModal()} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                  view more
                  </button>
                </div>
              </div>

 

              <div className="p-4 bg-white">

                <ul className="list-reset flex border-b">
                  <li className="-mb-px mr-1">
                    <p className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-[#495057] text-xs">Home</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>




          {/* <div className='p-6 space-y-6'  >
            <div className='border-b w-full flex items-center font-medium space-x-4'>
              {
                activeSportItems && activeSportItems.length > 0 ?
                  activeSportItems.map((element, index) => (
                    <React.Fragment key={index}>
                      <span className={this.state.sportId === element.sportId ? "px-4 py-2 cursor-pointer bg-[#16191c] rounded-t-sm text-sm text-white border  " : "px-4 py-2 cursor-pointer text-slate-600 text-sm border border-transparent hover:border-inherit transition duration-150 "} onClick={() => this.handleChangeSportId(element.sportId)}>{element && element.sportName ? element.sportName : "-"}</span>
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
                    <div className='w-full flex items-center p-4 text-sm text-slate-800'>
                      <p className='w-4/12 text-blue-500'>{element && element.matchName ? element.matchName : "-"} </p>
                      <p className='w-8/12 flex'>{element && element.time ? element.time : "-"}
                        <span className='mt-0.5 ml-2'>
                          <svg stroke="currentColor" fill="#a01919" stroke-width="0" viewBox="0 0 20 20" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </span>
                      </p>
                    </div>

                    {
                      element && element.marketData && element.marketData.length > 0 ?
                        element.marketData.map((elementInner, innerIndex) => (
                          <div className='text-sm font-light divide-y'>

                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='w-4/12 flex'> {elementInner && elementInner.marketName ? elementInner.marketName : "-"}
                                <span className='mt-0.5 ml-2'>
                                  <svg stroke="currentColor" fill="#a01919" stroke-width="0" viewBox="0 0 20 20" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                </span>
                              </p>
                              <p className='w-8/12'>---</p>
                            </div>
                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='w-4/12'>{elementInner && elementInner.selectionName1 ? elementInner.selectionName1 : "-"}</p>
                              <p className='w-8/12 space-x-6 flex'><p>9</p> <p>0</p></p>
                            </div>
                            <div className='w-full flex items-center p-4  text-black'>
                              <p className='w-4/12'>{elementInner && elementInner.selectionName2 ? elementInner.selectionName2 : "-"}</p>
                              <p className='w-8/12 space-x-6 flex'><p>9</p> <p>0</p></p>
                            </div>
                          </div>
                        )) : null
                    }
                  </div>
                ))
                :
                null
            }
          </div> */}

          <MoreDetailsModal
            handleMoreDetailsHideModal={this.handleMoreDetailsHideModal}
            // inputChangeMoreDetails={this.inputChangeMoreDetails}
            moreDetails={this.state.moreDetails}
          // fieldsUserLock={this.state.fieldsUserLock}
          // fieldsMoreDetails={this.state.fieldsMoreDetails}
          // errorsMoreDetails={this.state.errorsMoreDetails}
          // moreDetailsType={this.state.moreDetailsType}
          // handleMoreDetailsType={this.handleMoreDetailsType}
          // moreDetailsSubmit={this.moreDetailsSubmit}
          // handleBetLock={this.handleBetLock}
          // handleAccountLock={this.handleAccountLock}
          // childProfileItems={childProfileItems}
          // dataList={dataList}
          // handleIsActive={this.handleIsActive}
          // handleLiveCasinoLock={this.handleLiveCasinoLock}
          // handleVirtualCasinoLock={this.handleVirtualCasinoLock}
          // inputChangeMoreUserLock={this.inputChangeMoreUserLock}
          // creditdataItems={creditdataItems}
          />
        </div>

        <FancyModal
          fancyModal={this.state.fancyModal}
          handlefancyModal={this.handlefancyModal}
        />


        <FancyProfitLoss

        />

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