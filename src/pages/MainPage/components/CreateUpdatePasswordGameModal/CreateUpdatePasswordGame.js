import React from "react";

import Modal from 'react-modal';


export default function CreateUpdatePasswordDealer(props) {

  let { UpdatePasswordCreateModal, handleAppSeetingHideModal, errorsUpdatePassword, inputChange, updateUserPasswordSubmit, fieldsUpdatePassword } = props;
  //console.log("userCreateModal  ",userCreateModal);

  return (

    <Modal
      isOpen={UpdatePasswordCreateModal}
    // contentLabel="Example Modal"
    >


      <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style={{ background: 'rgba(0,0,0,.7)' }}>
        <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            {/*Title*/}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Update Password</p>
              <div className="modal-close cursor-pointer z-50">
                <svg onClick={() => handleAppSeetingHideModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg>
              </div>
            </div>
            {/*Body*/}
            <div className="my-5">

              <form autoComplete="off">
                <div className="{otpSent?'disableArea':''}password">
                  <div className="mt-1  shadow-sm relative">
                    <input className={`px-12 py-5 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errorsUpdatePassword && !errorsUpdatePassword["password"] ? "border border-red-500 placeholder-gray-500" : "border border-opacity-100 border-red-500 "}`}
                      id="password" name="password" value={fieldsUpdatePassword.password} placeholder="Update Password" type="text" onChange={inputChange} />
                    {errorsUpdatePassword && errorsUpdatePassword["password"] ?
                      <div className="invalid-feedback text-yellow-600">
                        {errorsUpdatePassword["password"]}
                      </div>
                      : null}
                    {/* icon email */}
                    <span className="absolute top-4 left-5 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg></span>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <div className="mt-1 rounded-md shadow-sm relative"> */}
                    {/* <input className={`border-1 px-12 py-5 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${errorsUpdatePassword && !errorsUpdatePassword["key"] ? " placeholder-gray-500" : "border-opacity-100 border border-red-500 "}`}
                      id="key" name="key" placeholder="App Setting Key" type="text" onChange={inputChange} /> */}
                    {/* {errorsUpdatePassword && errorsUpdatePassword["password"] ?
                      <div className="invalid-feedback text-yellow-600">
                        {errorsUpdatePassword["password"]}
                      </div>
                      : null} */}
                    {/* Icon password */}
                    {/* <span className="absolute top-4 left-5 text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg></span> */}
                  {/* </div>
                </div> */}

                <div className="mt-6 w-64 sm:w-72 mx-auto py-6">
                  <button className="bg-shine-400 w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg xl font-semibold rounded-full text-white border-shine-400 hover:bg-shine hover:text-white focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700 transition duration-150 ease-in-out" type="button" onClick={updateUserPasswordSubmit}>Submit</button>
                </div>
              </form>

            </div>
            {/*Footer*/}
          </div>
        </div>
      </div>


    </Modal>



  );
}
