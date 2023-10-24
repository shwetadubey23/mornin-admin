import React from 'react';
import { connect } from 'react-redux';
import Casino from './Component/Casino';
import Sport from './Component/Sport';
import { betActions } from '../../_actions';
import Loader from '../../components/Loader/Loader';

class BetHistory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      currentCount: "Sport",
      noOfRecords: 20,
      index: 0,
      betType: 1,
      optionRadioName: "MATCHED",
    }
  }

  componentDidMount() {
    let data = { "index": this.state.index, "noOfRecords": this.state.noOfRecords, "sportId": "", "matchId": "31819198", "userId": "4ce89c4ac" }
    this.props.dispatch(betActions.betHistory(data));
  }

  inputChangeCurrentCount = (event) => {
    this.setState({ currentCount: event });
  }

  handlePageClick = (data) => {
    console.log("data  ", data);
    this.setState({ index: data.selected });
    let pagination = { "index": data.selected, "noOfRecords": this.state.noOfRecords, "sportId": "", "matchId": "31819198", "userId": "4ce89c4ac" }
    this.props.dispatch(betActions.betHistory(pagination));
  }


  handleShowEnties = (data) => {
    console.log("entries??", data);

    let pagination = { "index": this.state.index, "noOfRecords": data, "sportId": "", "matchId": "31819198", "userId": "4ce89c4ac" }
    this.props.dispatch(betActions.betHistory(pagination));
    this.setState({ showEntries: data, noOfRecords: data });
  };















  handleBetType = (data) => {
    console.log("entries??", data);

    // let pagination = { "index": data.selected, "noOfRecords": this.state.noOfRecords, "sportId": "", "matchId": "31819198", "userId": "4ce89c4ac" }
    // this.props.dispatch(betActions.currentBets(pagination));
    this.setState({ betType: data });
  };

  handleRadio = (data) => {
    console.log("entries??", data);

    this.setState({ optionRadioName: data });
  };


  render() {

    let { bet } = this.props;
    let { currentBetsItems, loading } = bet;

    let { dataList, totalPages } = currentBetsItems ? currentBetsItems : {}
    console.log("RENDER____dataList:::", dataList);

    const custom = "flex items-center  text-white space-x-4 text-slate-400 text-[.8125rem]";
    const active = "bg-[#23292E] rounded-full w-8 h-8 flex items-center justify-center text-[.8125rem] text-white ";


    return (

      <>
        <div>
          <Loader
            active={loading}
          />
        </div>

        <div className='relative w-full h-full page_bg overflow-y-auto'>
          <div className='px-[12px] py-[4px] space-y-0' >
            <div className='flex justify-between pb-4' >
              <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>Bet History</h2>
              <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / Bet History </p>
            </div>

            <div className=' w-full flex items-center font-medium text-[.8125rem]  '>
              <span onClick={() => this.inputChangeCurrentCount("Sport")} className={this.state.currentCount === "Sport" ? "px-4 py-2 cursor-pointer bg-white border-t border-l border-r border-gray-300 text-slate-600 -mb-0.5" : "px-4 py-2 cursor-pointer text-slate-600 border  border-transparent hover:border-inherit -mb-0.5"}  >Sport</span>

              <span onClick={() => this.inputChangeCurrentCount("Casino")} className={this.state.currentCount === "Casino" ? "px-4 py-2 cursor-pointer bg-white border-t border-l border-r border-gray-300 text-slate-600 -mb-0.5" : "px-4 py-2 cursor-pointer text-slate-600 border border-transparent hover:border-inherit -mb-0.5"}  >Casino</span>
            </div>

            {this.state.currentCount === "Sport" ?
              <Sport
                dataList={dataList}
                totalPages={totalPages}
                handlePageClick={this.handlePageClick}
                handleShowEnties={this.handleShowEnties}
                noOfRecords={this.state.noOfRecords}
                betType={this.state.betType}
                optionRadioName={this.state.optionRadioName}
                handleRadio={this.handleRadio}
                handleBetType={this.handleBetType}

              /> : null}

            {this.state.currentCount === "Casino" ? <Casino /> : null}



            {/* {
            isMobile ?
              <nav className="relative z-0 flex justify-end mt-5 w-76">
                {
                  totalPages && totalPages > 1 ?
                    <ReactPaginate
                      previousLabel={'Prev'}
                      nextLabel={'Next'}
                      breakLabel={'...'}
                      breakClassName={'break-me'}
                      pageCount={totalPages}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={1}
                      onPageChange={this.handlePageClick}
                      containerClassName={'pagination'}
                      pageClassName={'page-cls'}
                      activeClassName={'active'}
                    />
                    : null}
              </nav> :
              <nav className="relative z-0 flex justify-end mt-5 w-76">
                {
                  totalPages && totalPages > 1 ?
                    <ReactPaginate
                      previousLabel={'<<'}
                      nextLabel={'>>'}
                      breakLabel={'...'}
                      breakClassName={'break-me'}
                      pageCount={totalPages}
                      marginPagesDisplayed={3}
                      pageRangeDisplayed={3}
                      onPageChange={this.handlePageClick}
                      containerClassName={'pagination'}
                      pageClassName={'page-cls'}
                      activeClassName={active}
                      className={custom}
                    />
                    : null}
              </nav>
          } */}

          </div>

        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users, bet } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users,
    bet
  };
}

export default connect(mapStateToProps)(BetHistory);

