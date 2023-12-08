import React from "react";

export default function ViewMoreDetailsModal(props) {

  let { moreDetailsCreateModal, handleMoreDetailsHideModal, imageRowData } = props;
  console.log("imageRowData__MODAL", imageRowData);

  return (

    <div className={moreDetailsCreateModal ? "fixed w-full top-0 lg:left-28 left-0 h-full inset-0 z-40 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[38rem]  w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex items-center justify-between p-6 py-2 bg-blue-500 border-b">
          <p className="text-[16px] font-medium text-white uppercase">Images</p>
          <div className="rounded-full cursor-pointer modal-close ">
            <svg onClick={() => handleMoreDetailsHideModal()} className="fill-current text-white/60 hover:text-white/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>
        </div>

        <div className="p-4">
          <button className="text-base text-gray-600 p-4 py-2 border border-gray-300 border-b-transparent bg-white -mb-0.5 font-bold">
            See All Images
          </button>
          <form autoComplete="off" className="p-4 space-y-4 capitalize border border-gray-300 ">
            <div className="flex justify-start p-4">

              <div className="grid grid-cols-3 gap-4">
                {
                  Array.isArray(imageRowData.imageUserLinks) &&
                  imageRowData.imageUserLinks.map((imageName, index) => (
                    <img className='object-cover h-36 rounded-sm w-36' key={index} src={imageName} alt={`Image ${index}`} />
                  ))
                }
              </div>
            </div>



          </form>

        </div>
        {/*Footer*/}

      </div>
    </div>




  );
}
