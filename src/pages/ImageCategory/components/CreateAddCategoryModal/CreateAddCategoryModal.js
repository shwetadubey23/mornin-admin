import React from "react";
import { CgLogIn } from 'react-icons/cg';

export default function CreateAddCategoryModal(props) {

  let { handleAddImageCategoryHideModal, inputAddImageCategoryChange,
    addImageCategoryCreateModal,
    fieldsImageCategory, filesDetails, handleFile,
    errorsImageCategory,
    createImageCategorySubmit,
  } = props;
  console.log('filesDetailsfilesDetailsfilesDetailsfilesDetails', filesDetails)
  return (

    <div className={addImageCategoryCreateModal ? "fixed w-full top-0 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[32rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex items-center justify-between p-6 py-2 bg-[#13BFA1] border-b">
          <p className="text-[16px] font-medium text-white uppercase">Add Image Category</p>
          <div className="rounded-full cursor-pointer modal-close ">
            <svg onClick={() => handleAddImageCategoryHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>

        <div className="p-4">
          <button className="text-sm text-gray-600 font-medium p-4 py-2 border border-gray-300 border-b-transparent bg-white -mb-0.5">
            Create Image Category
          </button>
          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">
            {/* 

            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Image:</label>
              <select class="form-select border-1 px-3 py-2 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" aria-label="Default select example" onChange={inputAddImageCategoryChange} id="ImageCategoryCategoryId" name="ImageCategoryCategoryId"
                value={fieldsImageCategory && fieldsImageCategory["ImageCategoryCategoryId"] ? fieldsImageCategory["ImageCategoryCategoryId"] : null} >
                <option selected>Please Select Image</option>
                {
                  allImageCategoryCat && allImageCategoryCat && allImageCategoryCat.length > 0 ?
                    allImageCategoryCat.map((element, index) => (
                      <option value={element && element.id ? element.id : null}>{element && element.name ? element.name : "NA"}</option>
                    )) : null
                }
              </select>
              {errorsImageCategory && errorsImageCategory["ImageCategoryCategoryId"] ?
                <div className="text-xs text-red-600 invalid-feedback">
                  {errorsImageCategory["ImageCategoryCategoryId"]}
                </div>
                : null}
            </div> */}




            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Name : </label>
              <input className={` w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500  ${errorsImageCategory && !errorsImageCategory["name"] ? "border placeholder-gray-500" : "border border-red-500 "}`}
                id="name" name="name" placeholder="Name" value={fieldsImageCategory && fieldsImageCategory.name ? fieldsImageCategory.name : ''} type="text" onChange={inputAddImageCategoryChange} />
              {errorsImageCategory && errorsImageCategory["name"] ?
                <div className="text-xs text-red-500 invalid-feedback">
                  {errorsImageCategory["name"]}
                </div>
                : null}
            </div>

            {/* <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 md:text-left" for="username">Flag : </label>
              <input className={` w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-gray-500  ${errorsImageCategory && !errorsImageCategory["flag"] ? "border placeholder-gray-500" : "border border-red-500 "}`}
                id="flag" name="flag" placeholder="Flag" value={fieldsImageCategory && fieldsImageCategory.flag ? fieldsImageCategory.flag : ''} type="text" onChange={inputAddImageCategoryChange} />
              {errorsImageCategory && errorsImageCategory["flag"] ?
                <div className="text-xs text-red-500 invalid-feedback">
                  {errorsImageCategory["flag"]}
                </div>
                : null}
            </div> */}


          

             <div className="flex justify-between px-2"   >
              <div className="flex flex-wrap w-full py-2">
                <label htmlFor="image">
                  Upload Image 
                </label>
                <input id="image" name="image" type="file" onChange={handleFile} />
                <div className="flex mt-1 space-x-4">

                </div>
              </div>


              {
                filesDetails && filesDetails.imageURL ?
                  <>
                    <div>
                      <div className='flex justify-center'>
                        <img className="object-cover h-14 rounded-sm w-14" src={filesDetails && filesDetails.imageURL ? filesDetails.imageURL : null} alt="not found" />
                      </div>
                    </div>
                  </> :
                  <>
                    <div>
                      <div className='flex justify-center'>
                        <img className="object-cover h-14 rounded-sm w-16" src="/images/profile.png" alt="not found" />
                      </div>
                    </div>
                  </>
              } 





            </div> 

            {/* btns */}
            <div className="flex justify-end py-0 space-x-4">
              <button className="bg-[#13BFA1]  transition duration-150 text-white text-[.8125rem]  px-3 py-2 rounded-[.25rem] flex items-center hover:bg-[#f14646] " type="button"
                onClick={createImageCategorySubmit}
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
