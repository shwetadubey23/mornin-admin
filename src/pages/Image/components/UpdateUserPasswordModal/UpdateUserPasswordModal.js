import React from "react";
import { CgLogIn } from 'react-icons/cg';



export default function UpdateUserPasswordModal(props) {

  let { creditpasswordOpenModal, handleAppSeetingHideModal, errorsUpdatePassword, inputChangeUpdatePasswordUser, updateUserPasswordSubmit, fieldsUserPasswordUpdate } = props;

  // console.log("fieldsQuoteUpdate_MODAL::", fieldsUserPasswordUpdate);

  return (


    <div className={creditpasswordOpenModal ? "fixed w-full lg:left-24 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb] md:w-[38rem] w-full mx-auto rounded shadow-lg overflow-y-auto mt-2">
        <div className="flex items-center justify-between p-6 py-2 bg-blue-500 border-b">
          <p className="text-[16px] font-medium text-white uppercase">Update User Password</p>
          <div className="rounded-full cursor-pointer modal-close ">
            <svg onClick={() => handleAppSeetingHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>

        <div className="p-4">

          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">










              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Password :</label>
                <input className={`w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500 ${errorsUpdatePassword && !errorsUpdatePassword["password"] ? "border  placeholder-gray-500" : "border  border-red-500 "}`}
                  id="password" name="password" placeholder="Password" value={fieldsUserPasswordUpdate && fieldsUserPasswordUpdate.password ? fieldsUserPasswordUpdate.password : null} type="password" onChange={inputChangeUpdatePasswordUser} />
                {errorsUpdatePassword && errorsUpdatePassword["password"] ?
                  <div className="text-xs text-red-500 invalid-feedback">
                    {errorsUpdatePassword["password"]}
                  </div>
                  : null}
              </div>
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Confirm Password :</label>
                <input className={`w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500 ${errorsUpdatePassword && !errorsUpdatePassword["confirmPassword"] ? "border  placeholder-gray-500" : "border  border-red-500 "}`}
                  id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={fieldsUserPasswordUpdate && fieldsUserPasswordUpdate.confirmPassword ? fieldsUserPasswordUpdate.confirmPassword : null} type="password" onChange={inputChangeUpdatePasswordUser} />
                {errorsUpdatePassword && errorsUpdatePassword["confirmPassword"] ?
                  <div className="text-xs text-red-500 invalid-feedback">
                    {errorsUpdatePassword["confirmPassword"]}
                  </div>
                  : null}
              </div>






            </div>
            {/* btns */}
            <div className="flex justify-end py-0 space-x-4">
              <button className="bg-blue-500  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#f14646] " type="button"
                onClick={updateUserPasswordSubmit}
              >Submit
                <CgLogIn size={18} className="ml-2" />
              </button>
            </div>

          </form>

        </div>
        {/*Footer*/}

      </div >
    </div >

  );
}
