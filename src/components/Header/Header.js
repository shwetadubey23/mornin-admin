import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { MdOutlineMenu } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { CgMaximize } from 'react-icons/cg';
import { BiPowerOff, BiLockOpen, BiCreditCard } from 'react-icons/bi';
import {AiFillInfoCircle} from 'react-icons/ai'


const Header = (props) => {
  const onClickMenutwo = (url) => {
    localStorage.removeItem('user');
    props.history.push(url)
  }

  const navigate = (url) => {
    props.history.push(url)
  }

  // outside funtions
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
    }
  };

  const handleClickInside = () => setClickedOutside(true);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });


  const [open, setOpen] = useState(0);



  var elem = document.documentElement;

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setOpen(!open);
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setOpen(!open);
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();

    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
  return (
    <div>
      <div className="bg-[#13BFA1] flex items-center justify-between flex-wrap gap-4 md:sticky top-0 z-40 md:px-6 px-2 h-16 relative">

        <div className='flex items-center space-x-4'>
        <button ref={myRef}
            onClick={() => { props.handleClickInsidetwo(); props.setOpen(!props.open); props.setOpenMobile(!props.openMobile); }}
            //  onClick={() => { props.setOpen(!props.open); props.setOpenMobile(!props.openMobile) }}
            className='text-white/80 rounded-md '>
            <MdOutlineMenu size={24} />
          </button>
          <div className='xl:w-60 flex justify-start items-center'>
            {/* <img onClick={() => navigate("/app/dashboard")} src='/images/logo.png' alt='logo' className='xl:w-52 w-36 cursor-pointer' /> */}
            <p className='text-white'>Morning Quotes Admin</p>
          </div>



        

        </div>
        <div className='flex items-center md:space-x-6'>
          {/* // onClick={open ? openFullscreen : closeFullscreen} */}

          {/* {open ? <CgMaximize
            onClick={openFullscreen}
            size={24} className="text-[#6c757d] cursor-pointer md:flex hidden hover:text-white/80 transition duration-100  " />
            :
            <CgMaximize
              onClick={closeFullscreen}
              size={24} className="text-[#6c757d] cursor-pointer md:flex hidden hover:text-white/80 transition duration-100  " />
          } */}


          {/* <div className=' items-center space-x-3 text-white md:flex hidden'>
            <div className='flex items-center text-[#f9cf14] text-[0.8125rem] font-bold'><BsExclamationCircleFill className='mr-2' /> Rules</div>
            <div className='flex items-center'>
              <h1 className='text-[.8125rem] '>pts :</h1>
              <p className='text-[.8125rem] font-semibold'>13,2131,2145,64</p>
            </div>
          </div> */}


          <div className=' text-white cursor-pointer hover:text-white/60 transition duration-150 md:relative  '>
            <div ref={myRef}
              onClick={() => { handleClickInside(); setClickedOutside(!clickedOutside); }}
            // onClick={handleClickInside(!clickedOutside)}

            >
              <div className='flex items-center space-x-2'>
                <h1 className='select-none text-[.8125rem] '>Admin</h1>
                <FiChevronDown />
              </div>
              {clickedOutside ?
                <div className='animate__animated animate__fadeIn animate__faster absolute md:top-10 top-16 mt-0.5  right-0  shadow-2xl  bg-white  py-2 md:rounded-none rounded-md md:w-48 w-[96%] md:mx-0 mr-[2%] ml-[2%] text-sm text-slate-800 border transition duration-150 z-40'>
                  {/* <div className='py-2'>
                    <div className='bg-[#f5f5f5] border-[2px] border-[#ddd] h-[39px] flex justify-center items-center mx-2  md:hidden  '>
                      <p className='text-[12px]'>pts: </p> <p className='text-[12px] font-[600] px-[2px]'>7,99,200.50</p>
                    </div>
                    <div  
                      className='text-xs p-2 px-6 w-full flex hover:bg-gray-100 transition hover:text-blue-700 md:hidden   '><AiFillInfoCircle size={16} className="mr-2 text-[#495057]" /> Rules</div>
                    <div onClick={() =>  props.setOpenModal(!props.openModal)}
                      className='text-xs p-2 px-6 w-full flex hover:bg-gray-100 transition hover:text-blue-700 '><BiLockOpen size={16} className="mr-2" /> Change password</div>
                    <div className='text-xs p-2 px-6 w-full flex hover:bg-gray-100 transition hover:text-blue-700 '> <BiCreditCard size={16} className="mr-2" /> Self Deposite</div>
                  </div> */}
                  <button onClick={() => onClickMenutwo("/login")} className='px-6  py-2 hover:bg-slate-100 w-full flex items-center border-t text-xs text-red-700'> <BiPowerOff className='mr-3' size={16} /> Logout</button>
                </div>

                : null}
            </div>

          </div>
        </div>

      </div>

     

    </div>


  );

}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}
export default connect(mapStateToProps)(Header);