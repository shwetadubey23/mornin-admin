import React from 'react';
import { connect } from 'react-redux';
import { BiChevronDown } from 'react-icons/bi';
import BetLock from './Modals/BetLock';
import UserBook from './Modals/userBook';
import ViewMore from './Modals/ViewMore';

class MatchOdds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      currentCount: 0,
      betlockModal: false,
      userBookModal: false,
      viewMoreModal: false,


      matchOddsTab: true,
      bookmakerTab: true,
      normalTab: true,
      fancyTab: true,
      sectionOneTab: true,
      sectionTwoTab: true,

    }
  }

  componentDidMount() {
  }

  handleMatchOddsTab = () => {
    this.setState({ matchOddsTab: !this.state.matchOddsTab });
  };

  handleBookmakerTab = () => {
    this.setState({ bookmakerTab: !this.state.bookmakerTab });
  };

  handleNormalTab = () => {
    this.setState({ normalTab: !this.state.normalTab });
  };

  handleFancyTab = () => {
    this.setState({ fancyTab: !this.state.fancyTab });
  };
  handleSectionOneTab = () => {
    this.setState({ sectionOneTab: !this.state.sectionOneTab });
  };

  handleSectionTwoTab = () => {
    this.setState({ sectionTwoTab: !this.state.sectionTwoTab });
  };



  ///////////////////////////////////////

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });
  };

  handleCreditActivityHideModal = () => {
    this.setState({ betlockModal: !this.state.betlockModal })
  }

  handleUserBookModal = () => {
    this.setState({ userBookModal: !this.state.userBookModal })
  }

  handleViewMoreModal = () => {
    this.setState({ viewMoreModal: !this.state.viewMoreModal })
  }


  render() {

    return (
      <div className='relative w-full h-full page_bg overflow-y-auto'>
        <div className="flex flex-col xl:flex-row md:px-[12px] px-0.5 py-[4px]">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2  px-1">

            {/* drop down */}
            <div className="bg-[#20327b] md:flex justify-between p-[16px] md:col-span-2">
              <h1 className="text-[14px]  text-white font-normal">
                TEST MATCHES &gt; BANCLADESH V INDIA
              </h1>
              <h1 className="text-[14px] text-white font-normal">
                14/12/2022 9:00:0
              </h1>
            </div>
            {/* drop down */}
            <div className="  shadow-xl bg-[#f3f3f3] md:col-span-2">
              <div onClick={this.handleMatchOddsTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">MATCH_ODDS</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>
                  <button onClick={this.handleUserBookModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    user book
                  </button>
                </div>
              </div>
              <div className={this.state.matchOddsTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden items-center space-x-1 py-1 justify-end relative right-[135px]">
                  <p className='text-[12px] font-medium text-[#333]  '>1</p>
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Back</p>
                  </div>
                  <div className="bg-[#e16f9a] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Lay</p>
                  </div>
                </div>

                <div className="md:flex whitespace-nowrap overflow-x-auto justify-between px-2 border-b border-t">
                  <div>
                    <h1 className="text-[14px] text-[#333]">Bangladesh</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-6 items-center gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>

                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                  </div>
                </div>

                <div className="md:flex whitespace-nowrap overflow-x-auto justify-between px-2 border-b border-t">
                  <div>
                    <h1 className="text-[14px] text-[#333]">Bangladesh</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-6 items-center gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>

                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">12.08K</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* drop down */}
            <div className="shadow-xl bg-[#f3f3f3] w-full h-fit">
              <div onClick={this.handleBookmakerTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">Bookmaker</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>
                  <button onClick={this.handleUserBookModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    user book
                  </button>
                </div>
              </div>

              <div className={this.state.bookmakerTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden items-center space-x-1 py-1 justify-end relative right-[4px]">
                  <p className='text-[12px] font-medium text-[#333]  '>Min:100 Max:</p>
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Back</p>
                  </div>
                  <div className="bg-[#e16f9a] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Lay</p>
                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Bangladesh</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-2 md:gap-1 gap-2 relative">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>

                    <div className='absolute top-0 left-0 bg-black/70 w-full h-full flex justify-center items-center  rounded-[0.25rem]'>
                    <p className='text-red-600 uppercase font-medium'>Suspended</p> 
                    </div>

                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Bangladesh</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-2 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Bangladesh</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-2 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* drop down */}
            <div className=" shadow-xl bg-[#f3f3f3] w-full h-fit">

              <div onClick={this.handleNormalTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">Normal</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>
                </div>
              </div>

              <div className={this.state.normalTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden space-x-1 py-1 justify-end relative right-[82px]">
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">NO</p>
                  </div>
                  <div className="bg-[#e16f9a] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Yes</p>
                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* drop down */}
            <div className="shadow-xl bg-[#f3f3f3] w-full h-fit">
              <div onClick={this.handleFancyTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">fancy1</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>

                </div>
              </div>
              <div className={this.state.fancyTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden space-x-1 py-1 justify-end relative right-[80px]">
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">NO</p>
                  </div>
                  <div className="bg-[#e16f9a] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Yes</p>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">Fall of 4th wkt AUS</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="md:flex grid grid-cols-3 md:gap-1 gap-2">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="bg-[#F994BA] hover:bg-[#e16f9a] rounded-md px-4 text-center h-[38px] md:w-[72px]  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                    <div className="px-4 flex md:flex-col flex-row items-center md:space-x-0 space-x-2">
                      <h1 className="text-[11px]">Min:100</h1>
                      <h1 className="text-[11px]">Max:1L</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* drop down */}
            <div className=" shadow-xl bg-[#f3f3f3] w-full h-fit">

              <div onClick={this.handleSectionOneTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">2ND INN LAMBI AUS VS SA</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>
                </div>
              </div>

              <div className={this.state.sectionOneTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden space-x-1 py-1 justify-end relative right-[4px]">
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Back</p>
                  </div>

                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* drop down */}
            <div className=" shadow-xl bg-[#f3f3f3] w-full h-fit md:col-span-2 ">

              <div onClick={this.handleSectionTwoTab} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">2ND INN LAMBI AUS VS SA</p>
                </div>
                <div className="space-x-1  ">
                  <button onClick={this.handleCreditActivityHideModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    bet lock
                  </button>
                </div>
              </div>

              <div className={this.state.sectionTwoTab ? 'h-auto' : "hidden"}>
                <div className="md:flex hidden space-x-1 py-1 justify-end relative right-[4px]">
                  <div className="bg-[#4fa1dc] rounded-[4px] px-4 text-center w-[72px] h-[30px] text-[14px] flex items-center justify-center ">
                    <p className="">Back</p>
                  </div>

                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-1 px-1 border-t border-[#656c71]">
                  <div className='flex md:flex-col flex-row justify-between'>
                    <h1 className="text-[14px] text-[#333]">0 Number</h1>
                    <h1 className="text-[14px] text-[#999999]">0</h1>
                  </div>
                  <div className="flex gap-1">
                    <div className="bg-[#a1d0f1] hover:bg-[#4fa1dc] rounded-md px-4 text-center h-[38px] md:w-[72px] w-full  cursor-pointer">
                      <p className="md:text-[16px] text-[12px] font-semibold h-[19px]">1.05</p>
                      <p className="md:text-[14px] text-[10px] h-[19px]">100</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className="xl:w-[40%] w-full px-1 space-y-2">

            <div onClick={() => this.setCurrentCount(this.state.currentCount === 7 ? 0 : 7)} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
              <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                <BiChevronDown size={20} />
                <p className="text-[14px]">Live matches</p>
              </div>
            </div>


            {/* <div className="bg-[#3c444b] rounded-[5px] py-1 ">
              <p className="text-[12px] px-1 text-gray-200/50">
                BAN 150-10(55.5)&amp;0-0(0.0)
              </p>
              <p className="text-[12px] px-1 text-gray-200/50 py-1">
                Day 3 | IND lead by 337 run
              </p>
              <div className="h-[1px] bg-[#8f8c8c]" />
              <div className="flex justify-between">
                <p className="text-[13px] px-1 text-gray-200/50 py-1">
                  IND 404-10 (133.5) 83-1 (26.0)
                </p>
                <p className="text-[13px] px-1 text-gray-200/50 py-1">
                  CRR 3.19
                </p>
              </div>
              <div className="flex gap-2 px-2">
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">1</h1>
                </div>
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">0</h1>
                </div>
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">0</h1>
                </div>
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">1</h1>
                </div>
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">4</h1>
                </div>
                <div className="h-4 w-4 bg-[#F18521] rounded-md text-white text-[10px]">
                  <h1 className="text-center">1</h1>
                </div>
              </div>
            </div> */}

            <div className='w-full'>
              <div onClick={() => this.setCurrentCount(this.state.currentCount === 8 ? 0 : 8)} className="bg-[#3c444b] rounded-t-[.25rem] flex justify-between px-[5px] py-[8px] cursor-pointer">
                <div className="flex items-center space-x-1 bg-[#3c444b] text-[#aaafb5] rounded-t">
                  <BiChevronDown size={20} />
                  <p className="text-[14px]">My Bets</p>
                </div>
                <div className="space-x-1 ">
                  <button onClick={this.handleViewMoreModal} className="bg-[#F18521]  p-[4px] rounded-[.25rem] text-white text-[.8125rem] capitalize">
                    View More
                  </button>
                </div>
              </div>

              <div className={this.state.currentCount === 8 ? 'w-full bg-white p-2' : "hidden "} >
                <div className="pt-4">
                  <button className="text-[12px] text-gray-600 px-3 py-2 border border-b-transparent flex">Matched Bets</button>
                </div>
                <table className='w-full border border-collapse'>
                  <thead className=" text-[14px] ">
                    <tr className='text-left text-[12px]  text-gray-600 bg-white border-b  w-full'>
                      <th className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize  ">userName</th>
                      <th className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize  ">National</th>
                      <th className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize  ">Rate</th>
                      <th className="whitespace-nowrap px-[6px] py-[4px] font-[600] capitalize  ">Ammount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="text-center pt-5 ">
                        <h1 className="text-[12px] ">No Records Found</h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>




        <BetLock
          betlockModal={this.state.betlockModal}
          handleCreditActivityHideModal={this.handleCreditActivityHideModal} />

        <UserBook
          userBookModal={this.state.userBookModal}
          handleUserBookModal={this.handleUserBookModal}
        />

        <ViewMore
          viewMoreModal={this.state.viewMoreModal}
          handleViewMoreModal={this.handleViewMoreModal}
        />


      </div>

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

export default connect(mapStateToProps)(MatchOdds);

