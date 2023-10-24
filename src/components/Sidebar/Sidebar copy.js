import React from "react";
import { withRouter } from "react-router-dom";
// import { FaUsers } from "react-icons/ri";
import { IoGridSharp, } from "react-icons/io5";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import { IoLockClosed } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { connect } from 'react-redux';
import { BsTranslate, BsLifePreserver } from "react-icons/bs";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { SiBookstack } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';
import Popup from "../Profile/Profile";
import { useState } from "react";
import { isMobile } from "react-device-detect";





function Sidebar({ location, history, user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // const [userType, NavbarOpen] = React.useState(0);
  const [userNav, setUserNav] = React.useState(false);
  const [sport, setSport] = React.useState(false);
  const [ledger, setLedger] = React.useState(false);
  const [manageClient, setManageClient] = React.useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);

  const handleClose = () => setButtonPopup(false);

  const onClickMenu = (url) => {
    history.push(url);
    setNavbarOpen(!navbarOpen)
  }

  const navigate = (url, userType) => {
    history.push(url + userType);
    setNavbarOpen(!navbarOpen)
  }
  // const [show, currentCount] = useState(false);

  return (

    <>
      <button className={` ${navbarOpen === true ? 'hidden' : 'flex'} absolute top-0 left-0 px-5 items-center justify-center border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-800 focus:text-gray-600 z-50 h-16 lg:hidden `} onClick={() => setNavbarOpen(!navbarOpen)}>
      </button>

      {navbarOpen ?
        <div className={` ${navbarOpen === false ? 'hidden' : ''} lg:hidden lg:flex-shrink-0 lg:static inset-0 z-50 fixed bg-black bg-opacity-40`} onClick={() => setNavbarOpen(!navbarOpen)}>

          <div className="absolute top-0 z-40 flex items-center w-12 rounded-full justify-ce focus:outline-none focus:bg-gray-600 left-64 lg:left-72 " aria-label="Close sidebar">
            <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </div>
        </div>
        : null}

      {/* Main Navbar */}
      <div className={` ${navbarOpen === false ? 'hidden' : 'flex'} fixed left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:flex w-56 z-50`}>

        <div className="relative flex flex-col w-56 ">

          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto border-r border-gray-100 border-opacity-20 ">
            <div style={{ backgroundImage: "url('/images/header-profile.png')" }} className="h-[90px] w-full">
              <div className="flex justify-center w-full m-auto">
                <div className="w-4/5 py-4 space-y-1 ">
                  <h3 className="text-sm font-semibold text-white">SU2 ({user.userName ? user.userName : "-"})</h3>
                  <div className="flex">

                    <div className="dropdown inline-block relative">
                      <button className="flex items-center outline-none  focus:outline-none" onClick={() => setButtonPopup(true)}>
                        <span className=" text-white/60 text-sm capitalize font-medium">{user.userName ? user.userName : "-"}</span>
                        <MdOutlineArrowDropDown className="text-[#8095A8]" size={20} />
                      </button>
                      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}


                      <div className="dropdown-menu w-full absolute top-4 right-0 left-0 hidden text-gray-700 pt-1 rounded-sm transition duration-100 ">
                        <div className="pb-2 border-b border-gray-300">
                          <div className="cursor-pointer " onClick={() => onClickMenu('/app/temprory')}><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Profile</span></div>
                          <div className="cursor-pointer" onClick={() => onClickMenu('/app/passwordmanage')}><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Change Password</span></div>
                        </div>
                        <div className="py-1 cursor-pointer" onClick={() => this.onClickMenu('/app/login')}><span className="py-1.5 hover:bg-gray-100 px-4 block whitespace-nowrap hover:no-underline hover:text-black text-sm">Logout</span></div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav style={{ backgroundColor: "#2f4050" }} className="flex-1 space-y-2">

              <span onClick={() => onClickMenu('/app/dashboard')} className={`hover:bg-gray-800 cursor-pointer h-12 items-center flex space-x-2 px-1 py-2 text-sm font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/dashboard" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                <div className="ml-3 ">
                  <IoGridSharp size={13} />
                </div>
                <span className="text-sm font-semibold">Dashboard</span>
              </span>


              {/* user Section  */}



              {
                userNav ?
                  <div className="">
                    <span onClick={() => setUserNav(!userNav)} className="flex items-center justify-between px-3 py-2 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="" size={15} />
                        <span className="text-sm font-semibold">Manage</span>
                      </div>
                      {
                        userNav ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>

                    {
                      user.userType === 0 ?
                        <>
                          <div onClick={() => navigate('/app/AdminList/', 1)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              <FaUsers className="" size={15} />
                            </div>
                            <span className="text-sm font-semibold">Admin</span>
                          </div>
                        </>
                        : null
                    }

                    {
                      user.userType === 1 ?
                        <>
                          <div onClick={() => navigate('/app/AdminList/', 2)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="text-white" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Super Stockist</span>
                          </div>
                          <div onClick={() => navigate('/app/AdminList/', 3)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Stockist</span>
                          </div>
                          <div onClick={() => navigate('/app/AdminList/', 4)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Agent</span>
                          </div>
                          {/* <div onClick={() => navigate('/app/AdminList/', 10)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              <FaUsers className="" size={15} />
                            </div>
                            <span className="text-sm font-semibold">Client</span>
                          </div> */}
                        </>
                        : null
                    }

                    {
                      user.userType === 2 ?
                        <>
                          <div onClick={() => navigate('/app/AdminList/', 3)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Stockist</span>
                          </div>
                          <div onClick={() => navigate('/app/AdminList/', 4)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Agent</span>
                          </div>
                          {/* <div onClick={() => navigate('/app/AdminList/', 10)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              <FaUsers className="" size={15} />
                            </div>
                            <span className="text-sm font-semibold">Client</span>
                          </div> */}
                        </>
                        : null
                    }

                    {
                      user.userType === 3 ?
                        <>
                          <div onClick={() => navigate('/app/AdminList/', 4)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              {/* <FaUsers className="" size={15} /> */}
                            </div>
                            <span className="text-sm font-semibold">Agent</span>
                          </div>
                          {/* <div onClick={() => navigate('/app/AdminList/', 10)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              <FaUsers className="" size={15} />
                            </div>
                            <span className="text-sm font-semibold">Client</span>
                          </div> */}
                        </>
                        : null
                    }

                    {/* {
                      user.userType === 4 ?
                        <>
                          <div onClick={() => navigate('/app/AdminList/', 10)} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/AdminList/", 10 ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                            <div className=" ml-[12px]">
                              <FaUsers className="" size={15} />
                            </div>
                            <span className="text-sm font-semibold">Client</span>
                          </div>

                        </>
                        : null
                    } */}
                  </div>
                  :
                  <div className="">
                    <span onClick={() => setUserNav(!userNav)} className="flex items-center justify-between px-3 py-2 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="" size={15} />
                        <span className="text-sm font-semibold">Manage</span>
                      </div>
                      {
                        userNav ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>
                  </div>
              }


              {
                sport ?
                  <div className="">
                    <span onClick={() => setSport(!sport)} className="flex items-center justify-between h-12 px-3 py-2 pl-16 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <BsLifePreserver className="" size={15} />
                        <span className="text-sm font-semibold">Sport</span>
                      </div>
                      {
                        sport ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>

                    <span onClick={() => onClickMenu('/app/matches')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/matches" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className=" ml-[12px]">
                        <FaUsers className="ml-[10px] text-white" />
                      </div>
                      <span className="text-sm font-semibold">Matches</span>
                    </span>
                    <span onClick={() => onClickMenu('/app/tournament')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/tournament" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className=" ml-[12px]">
                        <FaUsers className="ml-[10px] text-white" />
                      </div>
                      <span className="text-sm font-semibold">Tournament</span>
                    </span>
                  </div>
                  :
                  <div className="">
                    <span onClick={() => setSport(!sport)} className="flex items-center justify-between h-12 px-3 py-2 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <BsLifePreserver className="" size={15} />
                        <span className="text-sm font-semibold">Sport</span>
                      </div>
                      {
                        sport ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>
                  </div>
              }

              {
                manageClient ?
                  <div className="">
                    <span onClick={() => setManageClient(!manageClient)} className="flex items-center justify-between h-12 px-3 py-2 pl-16 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="" size={15} />
                        <span className="text-sm font-semibold">Manage Clients</span>
                      </div>
                      {
                        sport ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>

                    <span onClick={() => onClickMenu('/app/myclient')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/matches" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className=" ml-[12px]">
                        <FaUsers className="ml-[10px] text-white" />
                      </div>
                      <span className="text-sm font-semibold">My Clients</span>
                    </span>
                    <span onClick={() => onClickMenu('/app/blockedclient')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/tournament" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className=" ml-[12px]">
                        <FaUsers className="ml-[10px] text-white" />
                      </div>
                      <span className="text-sm font-semibold">Blocked Client</span>
                    </span>
                    <span onClick={() => onClickMenu('/app/commissionlimit')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/tournament" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className=" ml-[12px]">
                        <FaUsers className="ml-[10px] text-white" />
                      </div>
                      <span className="text-sm font-semibold">Commision Limits</span>
                    </span>
                  </div>
                  :
                  <div className="">
                    <span onClick={() => setManageClient(!manageClient)} className="flex items-center justify-between h-12 px-3 py-2 font-semibold text-white transition duration-150 ease-in-out cursor-pointer hover:bg-gray-800  hover:text-white focus:outline-none">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="" size={15} />
                        <span className="text-sm font-semibold">Manage Clients</span>
                      </div>
                      {
                        sport ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>
                  </div>
              }


              <span onClick={() => onClickMenu('/app/passwordmanage')} className={`hover:bg-gray-800 cursor-pointer h-12 items-center flex space-x-2 px-1 py-2 text-sm font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/passwordmanage" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                <div className=" ml-[12px]">
                  <IoLockClosed />
                </div>
                <span className="text-sm font-semibold">Manage Password</span>
              </span>

              <span onClick={() => onClickMenu('/app/language')} className={`hover:bg-gray-800 cursor-pointer h-12 items-center flex space-x-2 px-2 py-2 text-sm font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/language" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                <div className="ml-2.5">
                  <BsTranslate />
                </div>
                <span className="text-sm font-semibold">Language</span>
              </span>

              <span onClick={() => onClickMenu('/app/activeMatch')} className={`hover:bg-gray-800 cursor-pointer h-12 items-center flex space-x-2 px-1 py-2 text-sm font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/activeMatch" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                <div className="ml-2.5">
                  <IoLockClosed />
                </div>
                <span className="text-sm font-semibold">Active Match</span>
              </span>



              {
                ledger ?
                  // <div className={ledger ? "bg-gray-800":''}>
                  <div>
                    <span onClick={() => setLedger(!ledger)} className={`hover:bg-gray-800 h-12 cursor-pointer items-center flex justify-between px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150${location.pathname === "/app/" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""} `}>
                      <div className="flex items-center space-x-2">
                        <SiBookstack className="" size={15} />
                        <span className="text-sm font-semibold">Manage Ledgers</span>
                      </div>
                      {
                        ledger ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>

                    <div onClick={() => onClickMenu('/app/downcollationreport')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-1 px-4 py-2    font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/downcollationreport" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className="">
                        <BiRupee size={18} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold ">Downline Collection Report</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/clientCollectionreport')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-1 px-4 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/clientCollectionreport" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className="">
                        <BiRupee size={18} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap">Client Collection Report</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/myledgers')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-1 px-4  py-2   text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/myledgers" ? "text-white bg-gray-800 border-l-4 border-green-700  font-black" : "  font-semibold "}`}>
                      <div className="">
                        <FaUsers className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold">My Ledgers</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/profitloss')} className={`hover:bg-gray-800 cursor-pointer items-cen0ter flex space-x-1 px-4  py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/profitloss" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className="">
                        <BiRupee size={18} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap">Profit & Loss</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/gamesdailyreport')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-1 px-4  py-2    font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/gamesdailyreport" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className="">
                        <BiRupee size={18} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold whitespace-nowrap">Games Daily Report</span>
                    </div>
                  </div>
                  :
                  <div className="">
                    <span onClick={() => setLedger(!ledger)} className={`hover:bg-gray-800 cursor-pointer items-center flex justify-between px-3 py-2   font-semibold text-white hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/ledger" ? "text-white bg-gray-800 border-l-4 border-green-700" : ""}`}>
                      <div className="flex items-center space-x-2">
                        <SiBookstack className="" size={15} />
                        <span className="text-sm font-semibold">Manage Ledgers</span>
                      </div>
                      {
                        ledger ? <HiChevronDown /> : <HiChevronLeft />
                      }
                    </span>
                  </div>
              }



            </nav>
          </div>
        </div>

      </div >

    </>


  );

}

function mapStateToProps(state) {
  const { users } = state;
  const { user } = state.authentication;
  // console.log("mapStateToProps___________user:::", user);
  return {
    users,
    user
  };
}
export default withRouter(connect(mapStateToProps)(Sidebar));
// export default withRouter(Sidebar);
