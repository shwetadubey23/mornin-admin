import React from "react";
import { CgLogIn } from 'react-icons/cg';
import { BiX } from 'react-icons/bi';
export default function DepositCreditModal(props) {

  let { depositCredit, handleDepositCreditHideModal,
    errorsUpdateDepositCredit, depositCreditSubmit, fieldsUpdateDepositCredit,  dPRowData, inputChangeDepositAmt
  } = props;

  // console.log("MODAL_________________:::", fieldsUpdateDepositCredit);

  return (

    <div isOpen={depositCredit} className={depositCredit ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start  overflow-y-auto " : "hidden"} >
      <div className="animate__animated animate__fadeInDown animate__faster bg-white  md:w-[34rem] mx-auto rounded shadow-lg mt-2 overflow-y-auto">
        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-1 bg-[#34c38f]">

          <p className="text-[16px] font-medium text-white uppercase">Deposit</p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleDepositCreditHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
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
                  {dPRowData && dPRowData.parentName ? dPRowData.parentName : "-"}
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.parentAmount ? dPRowData.parentAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.crntParentAmount ? dPRowData.crntParentAmount : dPRowData.parentAmount} disabled />
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                  {dPRowData && dPRowData.childName ? dPRowData.childName : "-"}
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.childAmount ? dPRowData.childAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.crntChildAmount ? dPRowData.crntChildAmount : 0} disabled />
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                  Profit/Loss
                </label>
              </div>
              <div className="flex justify-between flex-row gap-2 w-8/12 ">
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.childUplineAmount ? dPRowData.childUplineAmount : 0} disabled />  &nbsp;
                <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={dPRowData && dPRowData.crntChildUplineAmount ? dPRowData.crntChildUplineAmount : 0} disabled />
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Amount</label>
              </div>

              <div className="w-8/12">
                <div className="flex items-center relative">
                  <input className={errorsUpdateDepositCredit && errorsUpdateDepositCredit["amount"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="amount" placeholder="Amount"
                    value={fieldsUpdateDepositCredit && fieldsUpdateDepositCredit["amount"] ? fieldsUpdateDepositCredit["amount"] : ""}
                    type="text"
                    // onChange={inputChangeDeposit}
                    onChange={inputChangeDepositAmt}
                  />
                  {errorsUpdateDepositCredit && errorsUpdateDepositCredit["amount"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {errorsUpdateDepositCredit && errorsUpdateDepositCredit["amount"] ?
                  <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                    {errorsUpdateDepositCredit["amount"]}
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
                  <textarea className={errorsUpdateDepositCredit && errorsUpdateDepositCredit["remark"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="remark" placeholder="Remark "
                    value={fieldsUpdateDepositCredit && fieldsUpdateDepositCredit["remark"] ? fieldsUpdateDepositCredit["remark"] : ""}
                    type="text"
                    // onChange={inputChangeDeposit} />
                    onChange={inputChangeDepositAmt} />

                  {errorsUpdateDepositCredit && errorsUpdateDepositCredit["remark"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {
                  errorsUpdateDepositCredit && errorsUpdateDepositCredit["remark"] ?
                    <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                      {errorsUpdateDepositCredit["remark"]}
                    </div>
                    : null
                }
              </div>
            </div>

            <div className="flex items-center w-12/12">
              <div className="w-4/12">
                <label className="block text-gray-500 text-xs font-medium md:text-left" for="lupassword">Transaction Code</label>
              </div>
              <div className="w-8/12">
                <div className="flex items-center relative">
                  <input className={errorsUpdateDepositCredit && errorsUpdateDepositCredit["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                    name="lupassword" placeholder="Transaction Code "
                    value={fieldsUpdateDepositCredit && fieldsUpdateDepositCredit["lupassword"] ? fieldsUpdateDepositCredit["lupassword"] : ""}
                    type="text"
                    // onChange={inputChangeDeposit}
                    onChange={inputChangeDepositAmt}
                  />
                  {errorsUpdateDepositCredit && errorsUpdateDepositCredit["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                </div>
                {
                  errorsUpdateDepositCredit && errorsUpdateDepositCredit["lupassword"] ?
                    <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                      {errorsUpdateDepositCredit["lupassword"]}
                    </div>
                    : null
                }
              </div>
            </div>


            <div className=" py-0 flex justify-end space-x-4">
              <button className="bg-[#34c38f]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#2ca579]" type="button"
                onClick={depositCreditSubmit}
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
