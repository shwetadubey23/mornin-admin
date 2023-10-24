import React from "react";
import { CgLogIn } from 'react-icons/cg';
import { BiX } from 'react-icons/bi';

export default function CreditWithdrawModal(props) {

  let { creditWithdrawOpenModal, handleCreditWithdrawHideModal,
    errorsCreditWithdraw, creditWithdrawSubmit, fieldsCreditWithdraw,  inputChangeCreditAmt, wHRowData
  } = props;

  // console.log("MODAL______wHRowData:::", wHRowData);

  return (
    <div isOpen={creditWithdrawOpenModal} className={creditWithdrawOpenModal ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start  overflow-y-auto " : "hidden"} >
      <div className="animate__animated animate__fadeInDown animate__faster bg-white  md:w-[34rem]  mx-auto rounded shadow-lg  overflow-y-auto mt-2">

        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#f46a6a]">
          <p className="text-[16px] font-medium text-white uppercase">Withdraw</p>

          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleCreditWithdrawHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>

        {/*Body*/} 
        <div className="p-4">
          <button className="text-sm text-gray-600 font-medium p-4 py-2 border border-gray-300 border-b-transparent bg-white -mb-0.5">
            Deposit
          </button>
          <form autoComplete="off" className="space-y-4 capitalize p-4 border border-gray-300 ">

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                  {wHRowData && wHRowData.parentName ? wHRowData.parentName : "-"}
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.parentAmount ? wHRowData.parentAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.crntParentAmount ? wHRowData.crntParentAmount : wHRowData.parentAmount} disabled />
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                  {wHRowData && wHRowData.childName ? wHRowData.childName : "-"}
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.childAmount ? wHRowData.childAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.crntChildAmount ? wHRowData.crntChildAmount : 0} disabled />
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                  Profit/Loss
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.childUplineAmount ? wHRowData.childUplineAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={wHRowData && wHRowData.crntChildUplineAmount ? wHRowData.crntChildUplineAmount : 0} disabled />
              </div>
            </div>



            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Amount</label>
              </div>
              <div className="w-8/12">
                <div className="flex items-center relative">
                  <input className={errorsCreditWithdraw && errorsCreditWithdraw["amount"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="amount" placeholder="Amount"
                    value={fieldsCreditWithdraw && fieldsCreditWithdraw["amount"] ? fieldsCreditWithdraw["amount"] : ""}
                    type="text"
                    // onChange={inputChangeWithdraw}
                    onChange={inputChangeCreditAmt}
                  />
                  {errorsCreditWithdraw && errorsCreditWithdraw["amount"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {errorsCreditWithdraw && errorsCreditWithdraw["amount"] ?
                  <div className="invalid-feedback text-red-400 text-xs pt-1">
                    {errorsCreditWithdraw["amount"]}
                  </div>
                  : null}
              </div>
            </div>


            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Remark</label>
              </div>
              <div className="w-8/12">
                <div className="flex items-center relative">
                  <textarea className={errorsCreditWithdraw && errorsCreditWithdraw["remark"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="remark" placeholder="Remark"
                    value={fieldsCreditWithdraw && fieldsCreditWithdraw["remark"] ? fieldsCreditWithdraw["remark"] : ""}
                    type="text"
                    // onChange={inputChangeWithdraw}
                    onChange={inputChangeCreditAmt}
                  />
                  {errorsCreditWithdraw && errorsCreditWithdraw["remark"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {errorsCreditWithdraw && errorsCreditWithdraw["remark"] ?
                  <div className="invalid-feedback text-red-400 text-xs pt-1">
                    {errorsCreditWithdraw["remark"]}
                  </div>
                  : null}
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="lupassword">Transaction Code</label>
              </div>

              <div className="w-8/12">
              <div className="flex items-center relative">
                  <input className={errorsCreditWithdraw && errorsCreditWithdraw["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="lupassword" placeholder="Transaction Code"
                    value={fieldsCreditWithdraw && fieldsCreditWithdraw["lupassword"] ? fieldsCreditWithdraw["lupassword"] : ""}
                    type="text"
                    // onChange={inputChangeWithdraw}
                    onChange={inputChangeCreditAmt}
                  />
                  {errorsCreditWithdraw && errorsCreditWithdraw["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {errorsCreditWithdraw && errorsCreditWithdraw["lupassword"] ?
                  <div className="invalid-feedback text-red-400 text-xs pt-1">
                    {errorsCreditWithdraw["lupassword"]}
                  </div>
                  : null}
              </div>
            </div>


            {/* btns */}
            <div className=" py-0 flex justify-end space-x-4">
              <button className="bg-[#f46a6a]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#f14646] " type="button"
                onClick={creditWithdrawSubmit}
              >Submit
                <CgLogIn size={18} className="ml-2" />
              </button>
            </div>




          </form>



        </div>
        {/*Footer*/}

      </div>
    </div>




  );
}
