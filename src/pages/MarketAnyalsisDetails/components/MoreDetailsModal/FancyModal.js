import React from "react";


export default function FancyModal(props) {

  let { fancyModal, handlefancyModal } = props;


  return (
    <div   className={fancyModal ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start overflow-y-auto px-[2.5px] py-[5px] " : "hidden"} >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  2xl:w-8/12 xl:w-6/12 w-full mx-auto rounded shadow-lg  overflow-y-auto ">

        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-white">

          <p className="text-[16px] font-medium text-[#495057] capitalize ">Fancy Profit Loss  </p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handlefancyModal()} className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>

        </div>

        {/*Body*/}

        <div className=" p-[1rem]"> 

        </div>
        {/*Footer*/}

      </div>
    </div>


  );
}
