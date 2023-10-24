import React from "react";
import {IoIosArrowDroprightCircle} from 'react-icons/io';
export default function ChangePasswordModal(props) {

    let { openModal, setOpenModal } = props;

    return (

        <div className={openModal ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start  overflow-y-auto mt-2" : "hidden"} >
            <div className="animate__animated animate__fadeInDown animate__faster bg-white  md:w-[34rem]  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
                {/*modal header*/}
                <div className="flex justify-between items-center border-b  px-[1rem] py-[0.5rem]">
                    <p className="text-[1.015625rem] font-medium text-[#495057] uppercase">CHANGE PASSWORD </p>
                    <div onClick={() => setOpenModal()} className="modal-close cursor-pointer rounded-full ">
                        <svg className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                            </path>
                        </svg>
                    </div>
                </div>
                {/*Body*/}
                <div className="p-[1rem] space-y-[16px] mb-[16px]">
                    <input class="w-full p-2 border border-gray-300 rounded-[.25rem] focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500" name="amount" placeholder="Transaction Code" type="text" value=""></input>
                    <input class="w-full p-2 border border-gray-300 rounded-[.25rem] focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500" name="amount" placeholder="New Password" type="text" value=""></input>
                    <input class="w-full p-2 border border-gray-300 rounded-[.25rem] focus:outline-none mt-1 text-[.8125rem] placeholder:text-gray-500" name="amount" placeholder="Confirm New password" type="text" value=""></input>
                    <button className="bg-[#23292E] focus:ring-2 ring-gray-300 focus:shadow  rounded-[.25rem] text-white px-[0.75rem] py-[0.45rem] flex justify-center items-center w-full text-[.8125rem]">Change Password  <IoIosArrowDroprightCircle className="ml-2" size={16}/> </button>
                </div>

                {/*Footer*/}

            </div>
        </div>

    );
}
