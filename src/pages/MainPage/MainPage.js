import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      sportId: '',
      seriesId: '',
      matchId: '',
      marketName: '',
      fancyMarketId: '',
      fancyMatchId: '',
      sportAndSeriesId: {},
    }
  }

  componentDidMount() {
    // let data = {}
    // this.props.dispatch(userActions.getAllSport(data));
  }

  createSeries = (data) => {

    let reqData = {
      "sportId": data.sportId,
      "seriesId": data.seriesId,
      "name": data.name,
      "isManual": true,
      "isActive": !data.isActive
    }

    console.log("createSeries__________:createSeries:::", reqData);

    this.props.dispatch(userActions.createSeries(reqData));

  }

  getAllSeries = (data) => {
    this.setState({
      sportId: data.sportId,
      seriesId: '',
      matchId: '',
    })
    this.props.dispatch(userActions.getAllSeries(data.sportId));
  }

  getAllMatches = (data) => {

    let game_id = data.sportId;
    let series_id = data.seriesId;
    this.setState({ seriesId: data.seriesId })
    this.props.dispatch(userActions.getAllMatch({ game_id, series_id }));

  }

  getAllMarket = (data, temp) => {
    this.setState({ matchId: data.matchId, marketName: temp })
    this.props.dispatch(userActions.getAllMarket(data));
  }
  getAllMarketFancy = (data, temp) => {

    console.log("!!!!!!!!!!!!datadatadata::Fancy!", data);

    this.setState({ matchId: data.matchId, marketName: temp, fancyMarketId: data.marketId, fancyMatchId: data.matchId })
    this.props.dispatch(userActions.getAllFancy({ marketId: data.marketId }));

  }

  createMatch = (data) => {

    console.log("!!!!!!!!!!!!!!!!!****:", data);

    let reqData = {
      "sportId": parseInt(data.sportId),
      "seriesId": parseInt(data.seriesId),
      "matchId": parseInt(data.matchId),
      "name": data.name,
      "openDate": data.openDate,
      "isManual": true,
      "isActive": !data.isActive
    }
    let game_id = data.sportId;
    let series_id = data.seriesId;

    console.log("!!!reqData^^^^****:", reqData);

    this.props.dispatch(userActions.createMatch(reqData, { game_id, series_id }));
  }

  createMarket = (data) => {

    console.log("createMarket___$!:", data);

    let reqData = {
      "sportId": data.sportId + "",
      "seriesId": data.seriesId + "",
      "matchId": data.matchId + "",
      "marketId": data.marketId + "",
      "marketStartTime": data.marketStartTime,
      "name": data.name,
      "isActive": !data.isActive,
      "isManual": true
    }

    console.log("reqData:::::", reqData);
    this.props.dispatch(userActions.createMarket(reqData));
  }

  updateFancyStatus = (data) => {

    console.log("!!!!!!!!!!!!", data);

    let reqData = {
      marketId: this.state.fancyMarketId,
      matchId: this.state.fancyMatchId,
      SelectionId: data.SelectionId,
      RunnerName: data.RunnerName,
      LayPrice1: data.LayPrice1,
      LaySize1: data.LaySize1,
      isActive: !data.isActive,
      BackPrice1: data.BackPrice1,
      BackSize1: data.BackSize1,
    }

    console.log("reqData:::updateFancyStatus::", reqData);
    this.props.dispatch(userActions.updateFancyStatus(reqData));
  }


  render() {

    let { users } = this.props;
    let { loading, allSport, allSeries, allMatch, allMarket, allFancy } = users;

    console.log("RENDER____allMatch_allMatch_allMatch::::", allMatch);
    // console.log("this.state.sportId::::::::", this.state.sportId);

    // console.log("RENDER_____allFancy::::", allFancy);
    console.log("RENDER_____this.state.fancyMarketId::::", this.state.fancyMarketId);


    return (

      <>
        <div>
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <main className="relative flex-1 ">
            <div className='py-2'>
              {/* <marquee className="text-white text-sm py-2 bgheader">!! Welcome To NICE1010 CP2 !!</marquee> */}
            </div>
            <div className='w-full bg-white p-4 border-b border-gray-200'>
              <h2 className='text-3xl text-gray-400 font-noraml'>Main Page</h2>
           
            </div>
            <div className="p-3 2xl:p-10 sm:p-5">
              <div className="mx-auto max-w-screen-3xl ">
                <section className="flex-col col-span-6 px-2 py-5 bg-white rounded-md 2xl:py-7 2xl:px-10 sm:px-5">
                  <div className="flex mr-2 pb-2">
                    {
                      allSport && allSport.length > 0 ?
                        allSport.map((element) => (<React.Fragment key={element.id}>
                          <span className="cursor-pointer text-center block border border-white-500 py-2 px-4 bg-[rgb(44,171,181)] hover:bg-[rgb(53,179,149)] text-white" onClick={() => this.getAllSeries(element)}>{element.name}</span>
                        </React.Fragment>))
                        : null
                    }
                  </div>
                  <div className="flex flex-wrap w-full ">

                    <table className="min-w-full border-0 divide-y divide-gray-800">
                      <thead className="bg-gray-200 rounded-t">
                        <tr>
                          <th scope="col" className="px-2 py-3 text-sm font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">serial no.</th>
                          <th scope="col" className="px-2 py-3 text-sm font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">series id</th>
                          <th scope="col" className="px-2 py-3 text-sm font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">series name</th>
                          <th scope="col" className="px-2 py-3 text-sm font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {
                          allSeries && allSeries.length > 0 ?
                            allSeries.map((element, index) => (<React.Fragment key={element.id}>


                              <tr className="bg-white border-b border-black border-opacity-10 ">
                                <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{this.state.offset + index + 1}</td>
                                <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element.seriesId}</td>
                                <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap"> {element.name}</td>
                                <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                  <div className="inline-flex">
                                    <input onClick={() => this.createSeries(element)} defaultChecked={element.isActive} type="checkbox" className="form-checkbox ppearance-none pt-2 h-5 mt-2 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                                    {element.isActive ? <button onClick={() => this.getAllMatches(element)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">+</button> : null}
                                  </div>
                                </td>
                              </tr>
                              {
                                element.seriesId === this.state.seriesId ?

                                  <tr className="bg-gray-200 text-blue-900">
                                    <td className="p-0.5" colspan="4">
                                      <table className="bg-white text-gray-900 table-auto w-full shadow-none">

                                        <thead className="bg-gray-200 rounded-t">
                                          <tr>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">serial no.</th>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Match Id</th>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Match Name</th>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Open Date</th>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Db Date</th>
                                            <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Actions</th>
                                          </tr>
                                        </thead>

                                        {
                                          allMatch && allMatch.length > 0 ?
                                            allMatch.map((element1, index) => (<React.Fragment key={index}>
                                              <>
                                                <tbody className="">

                                                  <tr className="bg-white border-b border-black    border-opacity-10 ">
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{this.state.offset + index + 1}</td>
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element1 && element1.matchId ? element1.matchId : "NA"}</td>
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element1 && element1.name ? element1.name : "NA"}</td>
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element1 && element1.openDate ? element1.openDate : "NA"}</td>
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element1 && element1.openDate ? element1.openDate : "NA"}</td>
                                                    <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                                      <div className="inline-flex">
                                                        <input onClick={() => this.createMatch(element1)} defaultChecked={element1.isActive} type="checkbox" className="form-checkbox ppearance-none pt-2 h-5 mt-2 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />

                                                        {element1.isActive ? <button
                                                          onClick={() => this.getAllMarket(element1, "Odds")}
                                                          className={`${this.state.marketName === "Odds" && element1.matchId === this.state.matchId ? "bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mr-2" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mr-2"}`}>Odds</button> : null}

                                                        <div className="inline-flex">
                                                          {element1.isActive ? <button
                                                            onClick={() => this.getAllMarketFancy(element1, "Fancy")}
                                                            className={`${this.state.marketName === "Fancy" && element1.matchId === this.state.matchId ? "bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"}`}>Fancy</button> : null}
                                                        </div>


                                                      </div>
                                                    </td>
                                                  </tr>



                                                  {

                                                    this.state.marketName === "Fancy" ?

                                                      <>

                                                        {element1.matchId === this.state.matchId ? <tr className="bg-white border-b border-black border-opacity-10 ">
                                                          <td className="p-0.5" colspan="6">
                                                            <table className="bg-white text-gray-900 table-auto w-full shadow-none">
                                                              <thead className="bg-gray-200 rounded-t">
                                                                <tr>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Sno.</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">SelectionId</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">RunnerName</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">LayPrice1</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">LaySize1</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">BackPrice1</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">BackSize1</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">GameStatus</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">MarkStatus</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Actions</th>
                                                                </tr>
                                                              </thead>
                                                              <tbody className="">
                                                                {
                                                                  allFancy && allFancy.length > 0 ? allFancy.map((element2, index) => (<React.Fragment key={index}>
                                                                    <>
                                                                      <tr className="bg-white border-b border-black border-opacity-10 ">
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{this.state.offset + index + 1}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.SelectionId ? element2.SelectionId : 0}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.RunnerName ? element2.RunnerName : "-"}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.LayPrice1 ? element2.LayPrice1 : 0}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.LaySize1 ? element2.LaySize1 : 0}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.BackPrice1 ? element2.BackPrice1 : 0}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.BackSize1 ? element2.BackSize1 : 0}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.GameStatus ? element2.GameStatus : "-"}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.MarkStatus ? element2.MarkStatus : "-"}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                                                          <div className="inline-flex">
                                                                            <input onClick={() => this.updateFancyStatus(element2)} defaultChecked={element2.isActive} type="checkbox" className="form-checkbox ppearance-none pt-2 h-5 mt-2 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </>
                                                                  </React.Fragment>))
                                                                    : (<tr className="bg-white bg-opacity-5 " >
                                                                      <td className="col-span-3 px-2 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                                                                    </tr>)
                                                                }
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr> : null}

                                                      </>
                                                      :

                                                      <>
                                                        {element1.matchId === this.state.matchId ? <tr className="bg-white border-b border-black border-opacity-10 ">
                                                          <td className="p-0.5 w-full" colspan="6">
                                                            <table className="bg-white text-gray-900 w-full shadow-none">
                                                              <thead className="bg-gray-200 rounded-t">
                                                                <tr>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Odds no.</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">market Id</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">name</th>
                                                                  <th scope="col" className="px-2 py-3 text-md font-semibold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">Actions</th>
                                                                </tr>
                                                              </thead>
                                                              <tbody className="">
                                                                {
                                                                  allMarket && allMarket.length > 0 ? allMarket.map((element2, index) => (<React.Fragment key={index}>
                                                                    <>
                                                                      <tr className="bg-white border-b border-black border-opacity-10 ">
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{this.state.offset + index + 1}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.marketId ? element2.marketId : "NA"}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">{element2 && element2.name ? element2.name : "NA"}</td>
                                                                        <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                                                          <div className="inline-flex">
                                                                            <input onClick={() => this.createMarket(element2)} defaultChecked={element2.isActive} type="checkbox" className="form-checkbox ppearance-none pt-2 h-5 mt-2 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                                                                          </div>
                                                                        </td>
                                                                      </tr>
                                                                    </>
                                                                  </React.Fragment>))
                                                                    : (<tr className="bg-white bg-opacity-5 " >
                                                                      <td className="col-span-3 px-2 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                                                                    </tr>)
                                                                }
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr> : null}
                                                      </>

                                                  }










                                                  {/* Odds table start  */}




                                                  {/* Odds table end  */}






                                                  {/* Fancy table start  */}




                                                  {/* Fancy table end  */}




                                                </tbody>
                                              </>
                                            </React.Fragment>))
                                            : (<tr className="bg-white bg-opacity-5 " >
                                              <td className="col-span-3 px-2 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                                            </tr>)
                                        }















                                      </table>
                                    </td>
                                  </tr>

                                  : null
                              }







                            </React.Fragment>))
                            : (<tr className="bg-white bg-opacity-5 " >
                              <td className="col-span-3 px-2 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                            </tr>)
                        }
                      </tbody>
                    </table>

                  </div>
                </section>
              </div>
            </div>
          </main>

          <div className="bg-white py-3 border-t mt-10">
            <h3 className=" text-sm ml-3 text-[#676a6c]"> <strong>NICE1010</strong> | Powered By NICE1010 Gaming | Copyright © 2014-2022</h3>
          </div>
        </div>

      </>

    );
  }
}
function mapStateToProps(state) {
  const { users } = state;
  return {
    users,
    // kyc,
    // authentication
  };
}
export default connect(mapStateToProps)(MainPage);
