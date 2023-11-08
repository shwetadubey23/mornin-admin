import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {  RiFileList2Line, RiMessage2Line } from 'react-icons/ri';
import { BiChevronDown, BiChevronUp, BiHomeCircle, BiImages } from 'react-icons/bi';

function Sidebar({ open, location, history, user, pathname, setOpen, setOpenMobile, openMobile }) {

  // console.log("SIDE_BAR____:::open::::", open);

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const onClickMenu = (url) => {
    history.push(url);
    setNavbarOpen(!navbarOpen)
  }
  const [showMe, setShowMe] = useState(0);

  return (
    <div className="h-[calc(100%-4rem)]">

      {/* shorts sidebar */}
      {open ? <div className='md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:flex w-[70px]  bg-[#13BFA1] h-full  hidden'>
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

                {/* <div onClick={() => onClickMenu('/app/image')} className={`hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80   ${location.pathname === "/app/image" ? "text-white/100 " : ""}`}>
                  <div className="flex w-full justify-center p-4">
                    <BiImages size={16} />
                  </div>
                  <div className="w-80 absolute top-0 left-0 h-full  hidden  group-hover:flex  justify-center items-center  bg-[#2a3042]/80  z-20">
                    <p className="whitespace-nowrap">Image</p>
                  </div>

                </div> */}

                <div className='hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80'>
                  <div className="flex w-full justify-center ">
                    <BiImages size={24} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Image Management</p>
                      <ol className="space-y-4  py-3 text-white/80 text-sm bg-[#2a3042]">
                        <li
                          onClick={() => onClickMenu('/app/imageCategory')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/imageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Image Category</li>
                        <li
                          onClick={() => onClickMenu('/app/image')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/image" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Image</li>
                      </ol>
                    </div>

                  </div>

                </div>
                <div className='hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80'>
                  <div className="flex w-full justify-center ">
                    <RiMessage2Line size={24} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Message Management</p>
                      <ol className="space-y-4  py-3 text-white/80 text-sm bg-[#2a3042]">
                        <li
                          onClick={() => onClickMenu('/app/messageCategory')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/messageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                        >MessageCategory</li>
                        <li
                          onClick={() => onClickMenu('/app/message')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/message" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Message</li>
                      </ol>
                    </div>

                  </div>

                </div>

                <div className='hover:text-white cursor-pointer h-14 items-center flex px-3 text-white/60  py-2 text-sm  transition ease-in-out duration-150 relative  group hover:bg-[#2a3042]/80'>
                  <div className="flex w-full justify-center ">
                    <RiFileList2Line size={24} />
                  </div>

                  <div className="w-60 absolute top-0 left-[70px]   hidden  group-hover:flex  justify-center   bg-[#2a3042]/80  z-20">
                    <div className="w-full">
                      <p className="whitespace-nowrap h-14 block w-full flex items-center p-4 ">Quotes Management</p>
                      <ol className="space-y-4  py-3 text-white/80 text-sm bg-[#2a3042]">
                        <li
                          onClick={() => onClickMenu('/app/quotesCategory')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/quotesCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Quotes Category</li>
                        <li
                          onClick={() => onClickMenu('/app/quotes')} className={` " cursor-pointer hover:text-white transition duration-150 px-4 py-1 " ${location.pathname === "/app/quotes" ? "text-white cursor-pointer font-medium" : ""}`}
                        >Quotes</li>
                      </ol>
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

      <div className={open ? 'hidden ' : ' md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:flex  w-[250px] bg-[#13BFA1] h-full hidden'}>
        <div className="relative flex flex-col w-full ">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto h-full scroll-md ">
            <nav className="flex-1 space-y-2 ">
              <div className="p-4 space-y-2">
                <div onClick={() => { onClickMenu('/app/dashboard'); setOpenMobile(!openMobile) }} className={`text-white cursor-pointer h-12 items-center flex space-x-4 px-3 hover:text-white/60  py-2 text-sm  transition ease-in-out duration-150  ${location.pathname === "/app/dashboard" ? "text-white/100 " : ""}`}>
                  <div >
                    <BiHomeCircle size={20} />
                  </div>
                  <span className="text-[13px] ">Dashboard</span>
                </div>

              

                <div>
                  <span onClick={() => setShowMe(showMe === 1 ? 0 : 1)} className=" accor text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 hover:text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <BiImages size={20} />
                      </div>
                      <span className="text-[13px] ">Image Management </span>
                    </div>
                    {showMe === 1 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 1 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/imageCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/imageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Image Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/image'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/image" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Image</li>
                    {/* <li onClick={() => { onClickMenu('/app/createaccount'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/createaccount" ? "text-white cursor-pointer font-medium" : ""}`}>Create Account</li> */}
                  </ol>
                </div>
                <div>
                  <span onClick={() => setShowMe(showMe === 2 ? 0 : 2)} className=" accor text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 hover:text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiMessage2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Message Management </span>
                    </div>
                    {showMe === 2 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 2 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/messageCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/messageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Message Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/message'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/message" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Message</li>
                    {/* <li onClick={() => { onClickMenu('/app/createaccount'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/createaccount" ? "text-white cursor-pointer font-medium" : ""}`}>Create Account</li> */}
                  </ol>
                </div>


                <div>
                  <span onClick={() => setShowMe(showMe === 3 ? 0 : 3)} className=" accor text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 hover:text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Quotes Management </span>
                    </div>
                    {showMe === 3 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 3 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/quotesCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/quotesCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Quotes Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/quotes'); setOpenMobile(!openMobile) }} className={` " cursor-pointer text-white transition duration-150 p-1 " ${location.pathname === "/app/quotes" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Quotes</li>

                  </ol>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {openMobile ? <div className='md:static fixed z-20 top-16 left-0 inset-y-0 lg:static  lg:left-auto lg:inset-auto lg:hidden flex  w-[250px] bg-[#13BFA1] h-full '>
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

                {/* <div onClick={() => { onClickMenu('/app/image'); setOpenMobile(!openMobile) }} className={`hover:text-white cursor-pointer h-12 items-center flex space-x-4 px-3 text-white/60  py-2 text-[13px]  transition ease-in-out duration-150  ${location.pathname === "/app/image" ? "text-white/100 " : ""}`}>
                  <div >
                    <BiImages size={16} />
                  </div>
                  <span className="text-[13px] ">Image</span>
                </div> */}

                <div>
                  <span onClick={() => setShowMe(showMe === 1 ? 0 : 1)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <BiImages size={20} />
                      </div>
                    </div>
                    {showMe === 1 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 1 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/imageCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/imageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Image Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/image'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/image" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Image</li>
                  </ol>
                </div>
                <div>
                  <span onClick={() => setShowMe(showMe === 2 ? 0 : 2)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiMessage2Line size={20} />
                      </div>
                      <span className="text-[13px] ">Account </span>
                    </div>
                    {showMe === 2 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 2 ? "space-y-4 pl-10 py-3 text-white/80 text-[13px]  showdata" : " space-y-4 pl-10  text-white/80 text-[13px]  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/messageCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/messageCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Message Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/message'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/message" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Message</li>
                  </ol>
                </div>


                <div>
                  <span onClick={() => setShowMe(showMe === 3 ? 0 : 3)} className=" accor hover:text-white cursor-pointer h-12 items-center flex justify-between px-3 py-2 text-[13px]  transition ease-in-out duration-150 text-white/60 "  >
                    <div className="flex  space-x-4 ">
                      <div className="">
                        <RiFileList2Line size={20} />
                      </div>
                      <span className="text-sm ">Quotes Management </span>
                    </div>
                    {showMe === 3 ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                  </span>
                  <ol className={showMe === 3 ? "space-y-4 pl-10 py-3 text-white/80 text-sm  showdata" : " space-y-4 pl-10  text-white/80 text-sm  body overflow-hidden"}>
                    <li
                      onClick={() => { onClickMenu('/app/quotesCategory'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/quotesCategory" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Quotes Category</li>
                    <li
                      onClick={() => { onClickMenu('/app/quotes'); setOpenMobile(!openMobile) }} className={` " cursor-pointer hover:text-white transition duration-150 p-1 " ${location.pathname === "/app/quotes" ? "text-white cursor-pointer font-medium" : ""}`}
                    >Quotes </li>

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
