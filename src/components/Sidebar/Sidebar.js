import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { SiSimpleanalytics } from 'react-icons/si';
import { RiBankFill, RiFileList2Line } from 'react-icons/ri';
import { BiChevronDown, BiChevronUp, BiUserCircle, BiHomeCircle } from 'react-icons/bi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

function Sidebar({ open, location, history, user, pathname, setOpen, setOpenMobile, openMobile }) {

  console.log("SIDE_BAR____:::open::::", open);

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const onClickMenu = (url) => {
    history.push(url);
    setNavbarOpen(!navbarOpen)
  }
  const [showMe, setShowMe] = useState(0);

  return (
    <div className="h-[calc(100%-4rem)]">

      {/* shorts sidebar */}
      {open ? <div className='md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:flex w-[70px]  bg-[#16191c] h-full  hidden'>
        <div className="relative flex flex-col w-full ">

          <div className="flex flex-col flex-1  ">
            <nav className="flex-1 space-y-2 ">
              <div className=" space-y-2 py-4">
                <div onClick={() => onClickMenu('/app/dashboard')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/dashboard" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center">
                    <BiHomeCircle size={20} />
                  </div>
                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Dashboard</p>
                    </div>
                  </div>

                </div>

                <div onClick={() => onClickMenu('/app/marketAnyalsis')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/marketAnyalsis" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center p-4">
                    <SiSimpleanalytics size={16} />
                  </div>
                  <div className="w-80 absolute top-0 left-0 h-full  hidden  group-hover:flex  justify-center items-center  bg-[#2a3042]/80  z-20">
                    <p className="whitespace-nowrap">Market Anyalsis</p>
                  </div>

                </div>

                <div className='hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80'>
                  <div className="flex w-full justify-center ">
                    <BiUserCircle size={24} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Account</p>
                      <ol className="space-y-4  py-3 text-white/80 text-sm bg-[#2a3042]">
                        <li
                          onClick={() => onClickMenu('/app/activeusers')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/activeusers" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Account list for active user</li>
                        <li
                          onClick={() => onClickMenu('/app/user')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/user" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Account list</li>
                        <li onClick={() => onClickMenu('/app/createaccount')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/createaccount" ? "text-white cursor-pointer font-medium" : ""}`}>Create Account</li>
                      </ol>
                    </div>

                  </div>

                </div>

                <div onClick={() => onClickMenu('/app/bank')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/bank" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center ">
                    <RiBankFill size={20} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Bank</p>
                    </div>
                  </div>

                </div>

                <div className='hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80'>
                  <div className="flex w-full justify-center ">
                    <RiFileList2Line size={20} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Reports</p>
                      <ol className="space-y-4  py-3 text-white/80 text-sm bg-[#2a3042]">
                        <li
                          onClick={() => onClickMenu('/app/accountstatement')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/accountstatement" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Account statement</li>
                        <li
                          onClick={() => onClickMenu('/app/partywinloss')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/partywinloss" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Party Win loss</li>
                        <li onClick={() => onClickMenu('/app/currentbet')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/currentbet" ? "text-white cursor-pointer font-medium" : ""}`}>Current Bet</li>
                        <li onClick={() => onClickMenu('/app/bethistory')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/bethistory" ? "text-white cursor-pointer font-medium" : ""}`}>Bet History</li>
                        <li onClick={() => onClickMenu('/app/userhistory')} className={`" cursor-pointer hover:text-white transition duration-150 px-4 py-1 "  ${location.pathname === "/app/userhistory" ? "text-white cursor-pointer font-medium" : ""}`}>User history</li>
                      </ol>
                    </div>

                  </div>

                </div>

                <div onClick={() => onClickMenu('/app/createapp')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/createapp" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center">
                    <AiOutlineAppstoreAdd size={20} />
                  </div>
                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Create App</p>
                    </div>
                  </div>

                </div>

                <div onClick={() => onClickMenu('/app/match')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/createapp" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center">
                    <RiFileList2Line size={20} />
                  </div>
                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Cricket</p>
                    </div>
                  </div>

                </div>


              </div>
            </nav>
          </div>
        </div>
      </div> :
        null}

      {/* web view */}

      <div className={open ? 'hidden ' : ' md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:flex  w-[250px] bg-[#16191c] h-full hidden'}>
        <div className="relative flex flex-col w-full ">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto h-full scroll-md ">
            <nav className="flex-1 space-y-2 ">
              <div className="p-4 space-y-2">
                <div onClick={() => { onClickMenu('/app/dashboard'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150  ${location.pathname === "/app/dashboard" ? "text-white/100 " : ""}`}>
                  <div >
                    <BiHomeCircle size={20} />
                  </div>
                  <span className="text-[13px] ">Dashboard</span>
                </div>

                <div onClick={() => { onClickMenu('/app/marketAnyalsis'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150  ${location.pathname === "/app/marketAnyalsis" ? "text-white/100 " : ""}`}>
                  <div >
                    <SiSimpleanalytics size={16} />
                  </div>
                  <span className="text-[13px] ">Market Anyalsis</span>
                </div>

                <div>
                  <span onClick={() => setShowMe(showMe === 1 ? 0 : 1)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <BiUserCircle size={20} />
                      </div>
                      <span className="text-[13px] ">Account </span>
                    </div>
                    {showMe === 1 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 1 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/activeusers'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/activeusers" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account list for active user</li>
                    <li
                      onClick={() => { onClickMenu('/app/user'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/user" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account list</li>
                    <li onClick={() => { onClickMenu('/app/createaccount'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/createaccount" ? "text-white cursor-pointer font-medium" : ""}`}>Create Account</li>
                  </ol>
                </div>

                <span onClick={() => { onClickMenu('/app/bank'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/bank" ? "text-white/100 " : ""}`}>
                  <div className="">
                    <RiBankFill size={20} />
                  </div>
                  <span className="text-[13px] ">Bank </span>
                </span>

                <div>
                  <span onClick={() => setShowMe(showMe === 2 ? 0 : 2)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Reports </span>
                    </div>
                    {showMe === 2 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 2 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/accountstatement'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/accountstatement" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account statement</li>
                    <li
                      onClick={() => { onClickMenu('/app/partywinloss'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/partywinloss" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Party Win loss</li>
                    <li onClick={() => { onClickMenu('/app/currentbet'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/currentbet" ? "text-white cursor-pointer font-medium" : ""}`}>Current Bet</li>
                    <li onClick={() => { onClickMenu('/app/bethistory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/bethistory" ? "text-white cursor-pointer font-medium" : ""}`}>Bet History</li>
                    <li onClick={() => { onClickMenu('/app/userhistory'); setOpenMobile(!openMobile) }} className={`" cursor-pointer hover:text-white transition duration-150 p-1 "  ${location.pathname === "/app/userhistory" ? "text-white cursor-pointer font-medium" : ""}`}>User history</li>
                  </ol>
                </div>

                <div>
                  <span onClick={() => { onClickMenu('/app/createapp'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/createapp" ? "text-white/100 " : ""}`}>
                    <div className="">
                      <AiOutlineAppstoreAdd size={20} />
                    </div>
                    <span className="text-[13px] ">Create App</span>
                  </span>
                </div>


                <div>
                  <span onClick={() => setShowMe(showMe === 3 ? 0 : 3)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Events </span>
                    </div>
                    {showMe === 3 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 3 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/match'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/accountstatement" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Cricket</li>

                  </ol>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {openMobile ? <div className='md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:hidden flex  w-[250px] bg-[#16191c] h-full '>
        <div className="relative flex flex-col w-full ">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto h-full  ">
            <nav className="flex-1 space-y-2 ">
              <div className="p-4 space-y-2">
                <div onClick={() => { onClickMenu('/app/dashboard'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/dashboard" ? "text-white/100 " : ""}`}>
                  <div >
                    <BiHomeCircle size={20} />
                  </div>
                  <span className="text-[13px] ">Dashboard</span>
                </div>

                <div onClick={() => { onClickMenu('/app/marketAnyalsis'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/marketAnyalsis" ? "text-white/100 " : ""}`}>
                  <div >
                    <SiSimpleanalytics size={16} />
                  </div>
                  <span className="text-[13px] ">Market Anyalsis</span>
                </div>

                <div>
                  <span onClick={() => setShowMe(showMe === 1 ? 0 : 1)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <BiUserCircle size={20} />
                      </div>
                      <span className="text-[13px] ">Account </span>
                    </div>
                    {showMe === 1 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 1 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/activeusers'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/activeusers" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account list for active user</li>
                    <li
                      onClick={() => { onClickMenu('/app/user'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/user" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account list</li>
                    <li onClick={() => { onClickMenu('/app/createaccount'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/createaccount" ? "text-white cursor-pointer font-medium" : ""}`}>Create Account</li>
                  </ol>
                </div>

                <span onClick={() => { onClickMenu('/app/bank'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/bank" ? "text-white/100 " : ""}`}>
                  <div className="">
                    <RiBankFill size={20} />
                  </div>
                  <span className="text-[13px] ">Bank </span>
                </span>

                <div>
                  <span onClick={() => setShowMe(showMe === 2 ? 0 : 2)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Reports </span>
                    </div>
                    {showMe === 2 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 2 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/accountstatement'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/accountstatement" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Account statement</li>
                    <li
                      onClick={() => { onClickMenu('/app/partywinloss'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/partywinloss" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Party Win loss</li>
                    <li onClick={() => { onClickMenu('/app/currentbet'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/currentbet" ? "text-white cursor-pointer font-medium" : ""}`}>Current Bet</li>
                    <li onClick={() => { onClickMenu('/app/bethistory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/bethistory" ? "text-white cursor-pointer font-medium" : ""}`}>Bet History</li>
                    <li onClick={() => { onClickMenu('/app/userhistory'); setOpenMobile(!openMobile) }} className={`" cursor-pointer hover:text-white transition duration-150 p-1 "  ${location.pathname === "/app/userhistory" ? "text-white cursor-pointer font-medium" : ""}`}>User history</li>
                  </ol>
                </div>

                <div>
                  <span onClick={() => { onClickMenu('/app/createapp'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/createapp" ? "text-white/100 " : ""}`}>
                    <div className="">
                      <AiOutlineAppstoreAdd size={20} />
                    </div>
                    <span className="text-[13px] ">Create App</span>
                  </span>
                </div>


                <div>
                  <span onClick={() => setShowMe(showMe === 3 ? 0 : 3)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-sm ">Events </span>
                    </div>
                    {showMe === 3 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 3 ? "space-y-4 pl-10 py-3 text-white/80 text-sm  showdata" : " space-y-4 pl-10  text-white/80 text-sm  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/match'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/accountstatement" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Cricket</li>

                  </ol>
                </div>



              </div>
            </nav>
          </div>
        </div>
      </div> : null
      }

    </div>

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
