import React from "react";

export default function BetLock(props) {


  let { betlockModal, handleCreditActivityHideModal } = props;

  return (

    <div className={betlockModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-start overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster  bg-white  md:max-w-[500px] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#fff]">
          <p className="text-[16px] font-medium text-[#495057] capitalize ">Bet Lock </p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleCreditActivityHideModal()} className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>
        {/*Body*/}
        <div className="p-[1rem] space-y-4">
          <div className="flex justify-between w-full">
            <label className="w-full"></label>
            <input className='w-full p-2 border border-[#ced4da] rounded-md focus:outline-none mt-1 text-sm'
              name="lupassword" placeholder="Transaction Code "
              type="text" />
          </div>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="text-[12px] text-[#495057] border-b">
                <th className="px-[6px] py-[4px] border-r text-left">
                  <div className="flex items-center">
                    <input type="checkbox" />
                  </div>
                </th>
                <th className="px-[6px] py-[4px] text-left font-[600]">All Account</th>
              </tr>
            </thead>

            <tbody className="divide-y " >
              <tr className="text-[12px] text-[#495057]">
                <td className="px-[6px] py-[4px] border-r text-left">
                  <div className="flex items-center">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="px-[6px] py-[4px] text-left font-[400]">All Account</td>
              </tr>
              <tr className="text-[12px] text-[#495057]">
                <td className="px-[6px] py-[4px] border-r text-left">
                  <div className="flex items-center">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="px-[6px] py-[4px] text-left font-[400]">All Account</td>
              </tr>
              <tr className="text-[12px] text-[#495057]">
                <td className="px-[6px] py-[4px] border-r text-left">
                  <div className="flex items-center">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="px-[6px] py-[4px] text-left font-[400]">All Account</td>
              </tr>
            </tbody>

          </table>
        </div>

        {/*Body*/}

        <div className="p-4">



        </div>
        {/*Footer*/}

      </div>
    </div>



  );
}
