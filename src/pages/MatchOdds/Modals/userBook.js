import React from "react";

export default function UserBook(props) {


  let { userBookModal, handleUserBookModal } = props;

  return (

    <div className={userBookModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-start overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster  bg-white md:w-4/6 w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#fff]">
          <p className="text-[16px] font-medium text-[#495057] capitalize ">User Book </p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleUserBookModal()} className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>
        {/*Body*/}
        <div className="p-[1rem]  flex justify-center ">
          <p className="text-[14px] text-[#495057]">No Record Found</p>
        </div>

        {/*Body*/} 
        {/*Footer*/}

      </div>
    </div>



  );
}
