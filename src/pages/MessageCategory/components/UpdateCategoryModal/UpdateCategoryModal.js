import React from "react";
import { CgLogIn } from 'react-icons/cg';

export default function UpdateCategoryModal(props) {

  let { UpdateMessageCreateModal, handleAppSeetingHideModal, errorsUpdateMessage, inputChangeUpdateMessage, updateMessageSubmit, fieldsMessageUpdate , filesDetails, handleFile
  } = props;
  // console.log("MODAL__fieldsMessageUpdate::", fieldsMessageUpdate);


  return (

    <div className={UpdateMessageCreateModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[32rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex items-center justify-between p-6 py-2 bg-[#22BFA1] border-b">
          <p className="text-[16px] font-medium text-white uppercase">Update Message Category</p>
          <div className="rounded-full cursor-pointer modal-close ">
            <svg onClick={() => handleAppSeetingHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>

        <div className="p-4">
          <button className="text-base text-gray-600 p-4 py-2 border border-gray-300 border-b-transparent bg-white -mb-0.5 font-bold">
          Update Message Category
          </button>
          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">

            {/* <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Message Category:</label>
              <select class="form-select border-1 px-3 py-2 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" aria-label="Default select example" onChange={inputChangeUpdateMessage} id="MessageCategoryId" name="MessageCategoryId"
                value={fieldsMessageUpdate && fieldsMessageUpdate["MessageCategoryId"] ? fieldsMessageUpdate["MessageCategoryId"] : null} >
                <option selected>Please Select Message Category</option>
                {
                  allMessageCat && allMessageCat && allMessageCat.length > 0 ?
                    allMessageCat.map((element, index) => (
                      <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : "NA"}</option>
                    )) : null
                }
              </select>
              {errorsUpdateMessage && errorsUpdateMessage["MessageCategoryId"] ?
                <div className="text-xs text-red-600 invalid-feedback">
                  {errorsUpdateMessage["MessageCategoryId"]}
                </div>
                : null}
            </div> */}
            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Name :</label>
              <input className={` w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500  ${errorsUpdateMessage && !errorsUpdateMessage["name"] ? "border  placeholder-gray-500" : "border  border-red-500 "}`}
                id="name" name="name" placeholder="Name" value={fieldsMessageUpdate.name} type="name" onChange={inputChangeUpdateMessage} />
              {errorsUpdateMessage && errorsUpdateMessage["name"] ?
                <div className="text-xs text-red-500 invalid-feedback">
                  {errorsUpdateMessage["name"]}
                </div>
                : null}
            </div>
            {/* <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Falg :</label>
              <input className={` w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500  ${errorsUpdateMessage && !errorsUpdateMessage["flag"] ? "border  placeholder-gray-500" : "border  border-red-500 "}`}
                id="flag" name="flag" placeholder="Falg" value={fieldsMessageUpdate.flag} type="flag" onChange={inputChangeUpdateMessage} />
              {errorsUpdateMessage && errorsUpdateMessage["flag"] ?
                <div className="text-xs text-red-500 invalid-feedback">
                  {errorsUpdateMessage["flag"]}
                </div>
                : null}
            </div> */}


            {

              filesDetails && filesDetails.imageURL ?

                <div className=""   >

                  <div className='flex justify-between px-4 '>
                    <img className="object-cover w-24 h-20 rounded-sm" src={filesDetails && filesDetails.imageURL ? filesDetails.imageURL : null} alt="not found" />
                  </div>
                  <div className="flex flex-wrap w-full mt-4 ">

                    <input id="image" name="image" type="file" onChange={handleFile} />
                  </div>
                </div>
                :


                <div>
                  <div className='flex justify-between px-4'>
                    <img className="object-cover w-24 h-20 rounded-sm" src={fieldsMessageUpdate && fieldsMessageUpdate.imageLinkUrl ? fieldsMessageUpdate.imageLinkUrl : null} alt="not found" />
                  </div>

                  <div className="flex flex-wrap w-full mt-4 ">

                    <input id="image" name="image" type="file" onChange={handleFile} />
                  </div>
                </div>



            } 


            {/* btns */}
            <div className="flex justify-end py-0 space-x-4">
              <button className="bg-[#22BFA1]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#f14646] " type="button"
                onClick={updateMessageSubmit}
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
