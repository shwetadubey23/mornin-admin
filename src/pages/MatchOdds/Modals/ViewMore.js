import React from "react";

export default function ViewMore(props) {


  let { viewMoreModal, handleViewMoreModal } = props;

  return (

    <div className={viewMoreModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-start overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster  bg-white md:w-4/6 w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#fff]">
          <p className="text-[16px] font-medium text-[#495057] capitalize ">View More </p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleViewMoreModal()} className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>
        {/*Body*/}
        <div className="p-[1rem]   bg-[#f6f6f6] space-y-4 ">

          <div className="text-[.8125rem] space-x-2">
            <button className="text-[#fff] bg-[#556ee6] rounded-[.25rem] px-[1rem] py-[0.5rem] text-[.8125rem]">Matched Bets</button>
            <button className="text-[#495057] bg-transparent  rounded-[.25rem] px-[1rem] py-[0.5rem] text-[.8125rem]">Deleted Bets</button>
          </div>
          <div className="bg-white border border-[#ced4da] p-[7px] text-[.8125rem] text-[#495057] w-full text-center">
            <p>No records Found</p>

          </div>



        </div>

        {/*Body*/}
        {/*Footer*/}

      </div>
    </div>



  );
}
