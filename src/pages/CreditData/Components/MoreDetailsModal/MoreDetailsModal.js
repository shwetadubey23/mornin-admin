import React from "react";
import { VscCallIncoming } from 'react-icons/vsc';
import { FaRegAddressCard } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { BiX } from 'react-icons/bi';

export default function CreditHistoryModal(props) {

  let { moreDetails, handleMoreDetailsHideModal, dataList, handleMoreDetailsType, moreDetailsType,  fieldsMoreDetails, errorsMoreDetails,  childProfileItems, inputChangeMoreDetails, moreDetailsSubmit,  handleVirtualCasinoLock, handleLiveCasinoLock, handleIsActive, fieldsUserLock, inputChangeMoreUserLock } = props;


  return (
    <div isOpen={moreDetails} className={moreDetails ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start overflow-y-auto px-[2.5px] py-[5px] " : "hidden"} >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  2xl:w-7/12 xl:w-6/12 w-full mx-auto rounded shadow-lg  overflow-y-auto ">

        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-[#23292e]">

          <p className="text-[16px] font-medium text-white uppercase">Username  </p>


          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleMoreDetailsHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>

        </div>

        {/*Body*/}

        <div className="">

          <form autoComplete="off" className=" capitalize md:p-6 p-2 ">

            <div className=" flex ">
              <span class={moreDetailsType && moreDetailsType === 'PROFILE' ? "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#23292e]" : "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleMoreDetailsType('PROFILE')}> Profile</span>
              <span class={moreDetailsType && moreDetailsType === 'CHANGE_PASSWORD' ? "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#23292e]" : "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleMoreDetailsType('CHANGE_PASSWORD')}><span className="md:flex hidden"> Change Password</span>  <span className="md:hidden flex whitespace-nowrap">C Pass</span></span>
              <span class={moreDetailsType && moreDetailsType === 'USER_LOCK' ? "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#23292e]" : "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleMoreDetailsType('USER_LOCK')}><span className="md:flex hidden">  User Lock</span>  <span className="md:hidden flex whitespace-nowrap"> Lock</span>  </span>
              <span class={moreDetailsType && moreDetailsType === 'ACCOUNT_HISTORY' ? "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#23292e]" : "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleMoreDetailsType('ACCOUNT_HISTORY')}> <span className="md:flex hidden">  Account History</span>  <span className="md:hidden flex whitespace-nowrap"> Acc history</span> </span>
              <span class={moreDetailsType && moreDetailsType === 'EDIT_PROFILE' ? "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-gray-300 border-b-transparent bg-[#f8f8fb] -mb-0.5 cursor-pointer border-t-[3px] border-t-[#23292e]" : "text-xs text-gray-600 font-medium md:p-4 p-2 py-2 border  border-transparent border-b-transparent hover:border-inherit  bg-[#f8f8fb] -mb-0 cursor-pointer"} onClick={() => handleMoreDetailsType('EDIT_PROFILE')}> <span className="md:flex hidden">  Edit Profile</span>  <span className="md:hidden flex whitespace-nowrap"> E Profile</span></span>
            </div>


            {/* {
              JSON.stringify(fieldsMoreDetails && fieldsMoreDetails.newPassword ? fieldsMoreDetails.newPassword : "")
            }

            {
              JSON.stringify(fieldsMoreDetails && fieldsMoreDetails.lupassword ? fieldsMoreDetails.lupassword : "")
            } */}



            {
              moreDetailsType && moreDetailsType === 'PROFILE' ?
                <div className="border border-gray-300 p-2">

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                    <div className="  ">
                      <div className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                        <div className="flex flex-col items-center ">
                          <div className="p-4 py-2 flex flex-col items-center">
                            <div className="w-14 h-14 flex items-center justify-center border rounded-full   bg-[#d2daf9]">
                              <h1 className="text-[#667ee9] text-xl font-medium">D</h1>
                            </div>
                            <h1 className="mb-1 text-base font-medium text-gray-800  pt-3">{childProfileItems && childProfileItems.username ? childProfileItems.username : "-"}</h1>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{childProfileItems && childProfileItems.username ? childProfileItems.username : "-"}</span>
                          </div>
                          <div className="flex justify-around mt-4 space-x-6  border-t w-full p-4">
                            <button className=""> <VscCallIncoming size={20} />  </button>
                            <button className=""><FaRegAddressCard size={20} /></button>
                          </div>
                        </div>
                      </div>

                      <div className="w-full mt-4 bg-white rounded-lg shadow-md  ">

                        <div className="p-6 text-sm font-medium text-gray-600">
                          <h1 className="text-gray-600 font-medium pb-4 text-base">Partnership Information</h1>
                          <div className="flex justify-between pt-3"><p>User Name:</p> <p className="text-gray-600">{childProfileItems && childProfileItems.username ? childProfileItems.username : "-"}</p></div>
                          <div className="flex justify-between pt-3"><p>Available Balance:</p> <p className="text-gray-600">{childProfileItems && childProfileItems.availableBalance ? childProfileItems.availableBalance : "-"}</p></div>
                          <div className="flex justify-between pt-3"><p >Client PL
                            :</p> <p className="text-gray-600">{childProfileItems && childProfileItems.clientPL
                              ? childProfileItems.clientPL
                              : "-"}</p></div>
                        </div>

                      </div>
                    </div>
                    <div className="  bg-white rounded-lg shadow-md dark:bg-gray-800  ">
                      <div className="p-6 text-sm font-medium text-gray-600">
                        <h1 className="font-medium text-gray-600 text-base pb-4 ">Additional Information</h1>
                        <div className="flex justify-between pt-3"><p>User Name:</p> <p className="text-gray-600">{childProfileItems && childProfileItems.username ? childProfileItems.username : "-"}</p></div>
                        <div className="flex justify-between pt-3"><p>Creidt Reference:</p> <p className="text-gray-600">{childProfileItems && childProfileItems.creidtReference ? childProfileItems.creidtReference : "-"}</p></div>
                        <div className="flex justify-between pt-3"><p>Created Date:</p> <p className="text-gray-600"> {childProfileItems && childProfileItems.createdDate ? childProfileItems.createdDate : "-"}</p></div>
                      </div>
                    </div>
                  </div>



                </div> : null
            }

            {
              moreDetailsType && moreDetailsType === 'CHANGE_PASSWORD' ?
                <div className="border border-gray-300 p-2 space-y-4">

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Password  </label>
                    </div>
                    <div className="w-8/12 ">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["newPassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'} type="text" name="newPassword" placeholder="Password" value={fieldsMoreDetails && fieldsMoreDetails["newPassword"] ? fieldsMoreDetails["newPassword"] : ""} onChange={inputChangeMoreDetails}
                        />
                        {errorsMoreDetails && errorsMoreDetails["newPassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}

                      </div>

                      {errorsMoreDetails && errorsMoreDetails["newPassword"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["newPassword"]}
                        </div> : null
                      }

                    </div>
                  </div>

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="lupassword" placeholder="Transaction Code" value={fieldsMoreDetails && fieldsMoreDetails["lupassword"] ? fieldsMoreDetails["lupassword"] : ""} onChange={inputChangeMoreDetails} />
                        {errorsMoreDetails && errorsMoreDetails["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}

                      </div>
                      {errorsMoreDetails && errorsMoreDetails["lupassword"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["lupassword"]}
                        </div> : null
                      }
                    </div>
                  </div>


                  {/* btns */}
                  <div className=" py-0 flex justify-end space-x-4">
                    <button className="bg-[#23292e]  transition duration-150 text-white text-sm  px-3 py-2 rounded-md flex items-center" type="button"
                      onClick={moreDetailsSubmit}
                    >Submit
                      <CgLogIn size={18} className="ml-2" />
                    </button>
                  </div>



                </div> : null
            }

            {
              moreDetailsType && moreDetailsType === 'USER_LOCK' ?
                <div className="border border-gray-300 p-2 space-y-6 ">

                  {/*fieldsUserLock&&fieldsUserLock.betLock?"":"" */}

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">  Bet lock  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" checked={fieldsUserLock && fieldsUserLock.betLock ? fieldsUserLock.betLock : false}
                        name="betLock" className="sr-only peer"
                        onChange={inputChangeMoreUserLock}

                      />
                      <div className={fieldsUserLock && fieldsUserLock.betLock ?
                        "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        :
                        "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}
                      >
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username"> User lock  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" checked={fieldsUserLock && fieldsUserLock.accountLock ? fieldsUserLock.accountLock : false}
                        name="accountLock" className="sr-only peer"
                        onChange={inputChangeMoreUserLock}
                      />
                      <div className={fieldsUserLock && fieldsUserLock.accountLock ?
                        "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        :
                        "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}
                      >
                      </div>
                    </label>
                  </div>









                  {/*  hfjsdhfsjdkfhsdjfhsjd  hfjsdhfsjdkfhsdjfhsjd  hfjsdhfsjdkfhsdjfhsjd */}



                  {/* <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username"> User lock  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={handleAccountLock}></div>
                    </label>
                  </div> */}

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Is Active  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={handleIsActive}></div>

                    </label>
                  </div>




                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">   Live Casino Lock  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={handleLiveCasinoLock}></div>
                    </label>
                  </div>


                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">   Virtual Casino Lock  </label>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={handleVirtualCasinoLock}></div>
                    </label>
                  </div>


                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="lupassword" placeholder="Transaction Code" value={fieldsMoreDetails && fieldsMoreDetails["lupassword"] ? fieldsMoreDetails["lupassword"] : ""} onChange={inputChangeMoreDetails} />

                        {errorsMoreDetails && errorsMoreDetails["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}

                      </div>
                      {errorsMoreDetails && errorsMoreDetails["lupassword"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["lupassword"]}
                        </div> : null
                      }
                    </div>
                  </div>


                  {/* <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                    </div>
                    <div className="w-8/12">
                      <input className={errorsMoreDetails && errorsMoreDetails["lupassword"] ? "border border-red-500 text-sm p-2 focus:outline-none rounded-md bg-white w-full focus:placeholder-slate-800  focus:bg-sky-100 transition duration-150" : "border border-gray-300 text-sm p-2 focus:outline-none rounded-md bg-white w-full focus:placeholder-slate-800  focus:bg-sky-100 transition duration-150"}
                        id="inline-full-name" type="text" name="lupassword" placeholder="Transaction Code" value={fieldsMoreDetails && fieldsMoreDetails["lupassword"] ? fieldsMoreDetails["lupassword"] : null} onChange={inputChangeMoreDetails} />
                      {errorsMoreDetails && errorsMoreDetails["lupassword"] ?
                        <span className="invalid-feedback text-red-600 text-sm">
                          {errorsMoreDetails["lupassword"]}
                        </span>
                        : null}
                    </div>
                  </div> */}

                  {/* <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Transaction Code  </label>
                    </div>
                    <input className="border border-gray-300 text-sm p-2 focus:outline-none rounded-md bg-white w-8/12 focus:placeholder-slate-800  focus:bg-sky-100 transition duration-150" id="inline-full-name" type="text" name="lupassword" placeholder="Transaction Code" value={fieldsMoreDetails && fieldsMoreDetails["lupassword"] ? fieldsMoreDetails["lupassword"] : null} onChange={inputChangeMoreDetails} />  &nbsp;
                  </div>
                  {errorsMoreDetails && errorsMoreDetails["lupassword"] ?
                    <div className="invalid-feedback text-red-600">
                      {errorsMoreDetails["lupassword"]}
                    </div>
                    : null} */}



                  {/* btns */}
                  <div className=" py-0 flex justify-end space-x-4">
                    <button className="bg-[#23292e]  transition duration-150 text-white text-sm  px-3 py-2 rounded-md flex items-center" type="button"
                      onClick={moreDetailsSubmit}
                    >Submit
                      <CgLogIn size={18} className="ml-2" />
                    </button>
                  </div>





                </div> : null
            }

            {
              moreDetailsType && moreDetailsType === 'ACCOUNT_HISTORY' ?
                <div className="border border-gray-300 p-2 overflow-x-auto scroll-md">
                  <table className="min-w-full border whitespace-nowrap">
                    <thead className="">
                      <tr className="text-left text-sm  text-gray-600 border-b border-t">
                        {/* <th scope="col" className="whitespace-nowrap font-medium p-2 ">ID</th> */}
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">remark</th>
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">fromto</th>
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">pts</th>
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize text-center">date</th>

                        {/* <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">debit</th>
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">credit</th> */}
                        <th scope="col" className="whitespace-nowrap font-medium p-2 capitalize">Amount</th>

                      </tr>
                    </thead>
                    <tbody className="divide-y">

                      {
                        dataList && dataList.length > 0 ?
                          dataList.map((element, index) => (
                            <tr className="  text-gray-600 text-xs ">
                              {/* <td className="p-2 whitespace-nowrap">{element && element.sno ? element.sno : "-"}</td> */}
                              <td className="p-2 whitespace-nowrap" >{element && element.remark ? element.remark : "-"}</td>
                              <td className="p-2 whitespace-nowrap text-center">{element && element.fromto ? element.fromto : "-"}</td>
                              {
                                element && element.pts && element.pts >= 0 ?
                                  <>
                                    <td className="p-2 whitespace-nowrap text-green-500">{element && element.pts ? element.pts : "-"}</td>
                                  </> :
                                  <>
                                    <td className="p-2 whitespace-nowrap text-red-500">{element && element.pts ? element.pts : "-"}</td>
                                  </>
                              }
                              <td className="p-2 whitespace-nowrap text-left">{element && element.date ? element.date : "-"}</td>
                              {/* <td className="p-2 whitespace-nowrap">{element && element.debit ? element.debit : "-"}</td>
                              <td className="p-2 whitespace-nowrap">{element && element.credit ? element.credit : "-"}</td> */}
                              {
                                element && element.credit && element.credit > 0 ?
                                  <>
                                    <td className="p-2 whitespace-nowra text-red-500">{element && element.credit ? element.credit : "-"}</td>
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

            {
              moreDetailsType && moreDetailsType === 'EDIT_PROFILE' ?
                <div className="border border-gray-300 p-2 space-y-4">

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">username  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["username"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="username" placeholder="Username" value={fieldsMoreDetails && fieldsMoreDetails["username"] ? fieldsMoreDetails["username"] : ""} onChange={inputChangeMoreDetails} />
                        {errorsMoreDetails && errorsMoreDetails["username"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                      </div>
                      {errorsMoreDetails && errorsMoreDetails["username"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["username"]}
                        </div> : null
                      }
                    </div>
                  </div>

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="mobile">mobile  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["mobile"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="mobile" placeholder="mobile" value={fieldsMoreDetails && fieldsMoreDetails["mobile"] ? fieldsMoreDetails["mobile"] : ""} onChange={inputChangeMoreDetails} />
                        {errorsMoreDetails && errorsMoreDetails["mobile"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                      </div>
                      {errorsMoreDetails && errorsMoreDetails["mobile"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["mobile"]}
                        </div> : null
                      }
                    </div>
                  </div>

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="city">City  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["city"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="city" placeholder="city" value={fieldsMoreDetails && fieldsMoreDetails["city"] ? fieldsMoreDetails["city"] : ""} onChange={inputChangeMoreDetails} />
                        {errorsMoreDetails && errorsMoreDetails["city"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                      </div>
                      {errorsMoreDetails && errorsMoreDetails["city"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["city"]}
                        </div> : null
                      }
                    </div>
                  </div>

                  <div className="flex items-center w-12/12">
                    <div className="w-4/12">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="username">Favorite Master </label>
                    </div>

                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>

                  </div>


                  <div className="flex items-center w-12/12">
                    <div className="w-4/12 flex items-center">
                      <label className="block text-gray-500 text-xs font-medium md:text-left" for="lupassword">Transaction Code  </label>
                    </div>
                    <div className="w-8/12">
                      <div className="flex items-center relative">
                        <input className={errorsMoreDetails && errorsMoreDetails["lupassword"] ? 'w-full p-2 border border-red-400 rounded-md focus:outline-none mt-1 text-sm focus:ring-2 ring-red-200 ' : 'w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm'}
                          id="inline-full-name" type="text" name="lupassword" placeholder="Transaction Code" value={fieldsMoreDetails && fieldsMoreDetails["lupassword"] ? fieldsMoreDetails["lupassword"] : ""} onChange={inputChangeMoreDetails} />
                        {errorsMoreDetails && errorsMoreDetails["lupassword"] ? <BiX size={22} className='absolute top-3 text-[#f46a6a] right-2' /> : null}
                      </div>
                      {errorsMoreDetails && errorsMoreDetails["lupassword"] ?
                        <div className="invalid-feedback text-red-400  text-xs pt-1 ">
                          {errorsMoreDetails["lupassword"]}
                        </div> : null
                      }
                    </div>
                  </div>

                  <div className=" py-0 flex justify-end space-x-4">
                    <button className="bg-[#23292e]  transition duration-150 text-white text-sm  px-3 py-2 rounded-md flex items-center" type="button"
                      onClick={moreDetailsSubmit}
                    >Submit
                      <CgLogIn size={18} className="ml-2" />
                    </button>
                  </div>


                </div> : null
            }

          </form>

        </div>
        {/*Footer*/}

      </div>
    </div>


  );
}
