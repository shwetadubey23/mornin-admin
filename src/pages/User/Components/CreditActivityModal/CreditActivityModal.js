import React from "react";
import { CgLogIn } from 'react-icons/cg';
import { BiX } from 'react-icons/bi';

export default function CreditHistoryModal(props) {


  let { creditActivityOpenModal, handleCreditActivityHideModal, dataList, handleCreditType, creditType,  fieldsCreditActivity, errorsCreditActivity, creditActivitySubmit,  creditDepositRowData, creditWithdrawRowData, inputCreditDepositAmt, inputCreditWithdrawAmt
  } = props;


  // console.log("creditDepositRowDataMODAL___::", creditDepositRowData);

  return (

    <div className={creditActivityOpenModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-start overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[52rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2"> 
        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#f1b44c]">
          <p className="text-[16px] font-medium text-white uppercase">Credit Activity </p> 
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleCreditActivityHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>
        {/*Body*/}

        {/*Body*/}

        <div className="p-4"> 
          <div className=" flex whitespace-nowrap ">
            <span class={creditType && creditType === 'DEPOSIT' ? "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-green-500" : "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleCreditType('DEPOSIT')}> Credit Deposit</span>
            <span class={creditType && creditType === 'WITHDRAW' ? "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#F46A6A]" : "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleCreditType('WITHDRAW')}> Credit Withdraw</span>
            <span class={creditType && creditType === 'HISTORY' ? "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#f1b44c]" : "md:text-sm text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleCreditType('HISTORY')}> Credit History</span>

          </div>

          <form autoComplete="off" className="space-y-4 capitalize md:p-4 p-2 border border-gray-300 ">

            {creditType && creditType === 'DEPOSIT' ?
              <>

                <div className="flex items-center w-12/12">

                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                      {creditDepositRowData && creditDepositRowData.parentName ? creditDepositRowData.parentName : "-"}
                    </label>
                  </div>
                  <div className="flex justify-between flex-row gap-2 w-8/12 ">
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditDepositRowData && creditDepositRowData.parentAmount ? creditDepositRowData.parentAmount : 0} disabled />  &nbsp;
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text"
                      value={creditDepositRowData && creditDepositRowData.crntParentAmount ? creditDepositRowData.crntParentAmount : creditDepositRowData.parentAmount}
                      disabled
                    />
                  </div>
                </div>

                <div className="flex items-center w-12/12">

                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                      {creditDepositRowData && creditDepositRowData.childName ? creditDepositRowData.childName : "-"}
                    </label>
                  </div>
                  <div className="flex justify-between flex-row gap-2 w-8/12 ">
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditDepositRowData && creditDepositRowData.childAmount ? creditDepositRowData.childAmount : 0} disabled />  &nbsp;
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditDepositRowData && creditDepositRowData.crntChildAmount ? creditDepositRowData.crntChildAmount : 0} disabled />
                  </div>
                </div>

                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Amount</label>
                  </div>

                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <input className={errorsCreditActivity && errorsCreditActivity["amount"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                        name="amount" placeholder="Amount"
                        value={fieldsCreditActivity && fieldsCreditActivity["amount"] ? fieldsCreditActivity["amount"] : ""}
                        type="text"
                        onChange={inputCreditDepositAmt}
                      />
                      {errorsCreditActivity && errorsCreditActivity["amount"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {errorsCreditActivity && errorsCreditActivity["amount"] ?
                      <span className="invalid-feedback text-red-400  text-xs pt-1 ">
                        {errorsCreditActivity["amount"]}
                      </span>
                      : null}
                  </div>
                </div>


                <div className="flex items-start w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Remark</label>
                  </div>
                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <textarea className={errorsCreditActivity && errorsCreditActivity["remark"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                        name="remark" placeholder="Remark"
                        value={fieldsCreditActivity && fieldsCreditActivity["remark"] ? fieldsCreditActivity["remark"] : ""}
                        type="text"
                        // onChange={inputChangeCreditActivity}
                        onChange={inputCreditDepositAmt}
                      />
                      {errorsCreditActivity && errorsCreditActivity["remark"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {
                      errorsCreditActivity && errorsCreditActivity["remark"] ?
                        <span className="invalid-feedback text-red-400 text-xs pt-1 ">
                          {errorsCreditActivity["remark"]}
                        </span>
                        : null
                    }
                  </div>
                </div>

                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                  </div>

                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <input className={errorsCreditActivity && errorsCreditActivity["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                        name="lupassword" placeholder="Transaction Code "
                        value={fieldsCreditActivity && fieldsCreditActivity["lupassword"] ? fieldsCreditActivity["lupassword"] : ""}
                        type="text"
                        // onChange={inputChangeCreditActivity}
                        onChange={inputCreditDepositAmt}

                      />
                      {errorsCreditActivity && errorsCreditActivity["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {errorsCreditActivity && errorsCreditActivity["lupassword"] ?
                      <span className="invalid-feedback text-red-400 text-xs pt-1 ">
                        {errorsCreditActivity["lupassword"]}
                      </span>
                      : null}

                  </div>
                </div>



                {/* btns */}
                <div className=" py-0 flex justify-end space-x-4">
                  <button className="bg-[#f1b44c]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#eea529] " type="button"
                    onClick={creditActivitySubmit}
                  >Submit
                    <CgLogIn size={18} className="ml-2" />
                  </button>
                </div>



              </> : null
            }

            {creditType && creditType === 'WITHDRAW' ?
              <>

                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                      {creditWithdrawRowData && creditWithdrawRowData.parentName ? creditWithdrawRowData.parentName : "-"}
                    </label>
                  </div>
                  <div className="flex justify-between flex-row gap-2 w-8/12 ">
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditWithdrawRowData && creditWithdrawRowData.parentAmount ? creditWithdrawRowData.parentAmount : 0} disabled />  &nbsp;
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditWithdrawRowData && creditWithdrawRowData.crntParentAmount ? creditWithdrawRowData.crntParentAmount : creditWithdrawRowData.parentAmount} disabled />
                  </div>
                </div>


                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="inline-full-name">
                      {creditWithdrawRowData && creditWithdrawRowData.childName ? creditWithdrawRowData.childName : "-"}
                    </label>
                  </div>
                  <div className="flex justify-between flex-row gap-2 w-8/12 ">
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditWithdrawRowData && creditWithdrawRowData.childAmount ? creditWithdrawRowData.childAmount : 0} disabled />  &nbsp;
                    <input className="border border-gray-300 p-2 focus:outline-none rounded-md bg-[#eeeeee] text-right text-sm text-gray-600 w-full" id="inline-full-name" type="text" value={creditWithdrawRowData && creditWithdrawRowData.crntChildAmount ? creditWithdrawRowData.crntChildAmount : 0} disabled />
                  </div>
                </div>

                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Amount</label>
                  </div>

                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <input className={errorsCreditActivity && errorsCreditActivity["amount"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                        name="amount" placeholder="Amount"
                        value={fieldsCreditActivity && fieldsCreditActivity["amount"] ? fieldsCreditActivity["amount"] : ""}
                        type="text"
                        // onChange={inputChangeCreditActivity}
                        onChange={inputCreditWithdrawAmt}
                      />
                      {errorsCreditActivity && errorsCreditActivity["amount"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {errorsCreditActivity && errorsCreditActivity["amount"] ?
                      <span className="invalid-feedback text-red-400  text-xs pt-1 ">
                        {errorsCreditActivity["amount"]}
                      </span>
                      : null}

                  </div>
                </div>


                <div className="flex items-start w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Remark</label>
                  </div>
                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <textarea className={errorsCreditActivity && errorsCreditActivity["remark"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                        name="remark" placeholder="Remark"
                        value={fieldsCreditActivity && fieldsCreditActivity["remark"] ? fieldsCreditActivity["remark"] : ""}
                        type="text"
                        // onChange={inputChangeCreditActivity}
                        onChange={inputCreditWithdrawAmt}
                      />
                      {errorsCreditActivity && errorsCreditActivity["amount"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {
                      errorsCreditActivity && errorsCreditActivity["remark"] ?
                        <span className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsCreditActivity["remark"]}
                        </span>
                        : null
                    }
                  </div>
                </div>

                <div className="flex items-center w-12/12">
                  <div className="w-4/12">
                    <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                  </div>

                  <div className="w-8/12">
                    <div className="flex items-center relative">
                      <input className={errorsCreditActivity && errorsCreditActivity["lupassword"] ? "border border-red-500 text-sm p-2 focus:outline-none rounded-md bg-white w-full focus:placeholder-slate-800  focus:bg-sky-100 transition duration-150" : "border border-gray-300 text-sm p-2 focus:outline-none rounded-md bg-white w-full focus:placeholder-slate-800  focus:bg-sky-100 transition duration-150"}
                        name="lupassword" placeholder="Transaction code"
                        value={fieldsCreditActivity && fieldsCreditActivity["lupassword"] ? fieldsCreditActivity["lupassword"] : ""}
                        type="text"
                        // onChange={inputChangeCreditActivity}
                        onChange={inputCreditWithdrawAmt}
                      />
                      {errorsCreditActivity && errorsCreditActivity["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                    </div>
                    {errorsCreditActivity && errorsCreditActivity["lupassword"] ?
                      <span className="invalid-feedback text-red-400  text-xs pt-1 ">
                        {errorsCreditActivity["lupassword"]}
                      </span>
                      : null}

                  </div>
                </div>




                {/* btns */}
                <div className=" py-0 flex justify-end space-x-4">
                  <button className="bg-[#f1b44c]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#eea529] " type="button"
                    onClick={creditActivitySubmit}
                  >Submit
                    <CgLogIn size={18} className="ml-2" />
                  </button>
                </div>



              </> : null
            }

            {creditType && creditType === 'HISTORY' ?
              <div className="overflow-x-auto scroll-md " >
                <table className="min-w-full whitespace-nowrap">
                  <thead className="rounded-t">
                    <tr className="text-left text-sm  text-gray-600 border-b border-t">
                      <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">remark</th>
                      <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">pts</th>
                      <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">fromto</th>
                      <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">date</th>
                      <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">

                    {dataList && dataList.length > 0 ?
                      dataList.map((element, index) => (

                        <tr className="  text-gray-600 text-xs bg-white">
                          <td className="p-2 whitespace-nowrap" >{element && element.remark ? element.remark : "-"}</td>
                          {
                            element && element.pts && element.pts >= 0 ?
                              <>
                                <td className="p-2 whitespace-nowrap text-green-500">{element && element.pts ? element.pts : "-"}</td>
                              </> :
                              <>
                                <td className="p-2 whitespace-nowrap text-red-500">{element && element.pts ? element.pts : "-"}</td>
                              </>
                          }

                          <td className="p-2 whitespace-nowrap text-center">{element && element.fromto ? element.fromto : "-"}</td>
                          <td className="p-2 whitespace-nowrap text-left">{element && element.date ? element.date : "-"}</td>
                          {
                            element && element.credit && element.credit > 0 ?
                              <>
                                <td className="p-2 whitespace-nowrap text-red-500">{element && element.credit ? element.credit : "-"}</td>
                              </>
                              :
                              <>
                                <td className="p-2 whitespace-nowrap text-green-500">{element && element.debit ? element.debit : "-"}</td>
                              </>
                          }

                        </tr>

                      )) : null
                    }
                  </tbody>
                </table>
              </div> : null


            }

          </form>

        </div>
        {/*Footer*/}

      </div>
    </div>



  );
}
