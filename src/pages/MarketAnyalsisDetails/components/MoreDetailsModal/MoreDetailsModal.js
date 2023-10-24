import React from "react";


export default function CreditHistoryModal(props) {

  let { moreDetails, handleMoreDetailsHideModal} = props;


  return (
    <div isOpen={moreDetails} className={moreDetails ? "fixed bg-black/80 w-full h-full inset-0 z-40 overflow-hidden flex justify-center items-start overflow-y-auto px-[2.5px] py-[5px] " : "hidden"} >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  2xl:w-8/12 xl:w-6/12 w-full mx-auto rounded shadow-lg  overflow-y-auto ">

        {/*modal header*/}
        <div className="flex justify-between items-center border-b p-6 py-2 bg-white">

          <p className="text-[16px] font-medium text-[#495057] capitalize ">View More  </p>
          <div className="modal-close cursor-pointer rounded-full ">
            <svg onClick={() => handleMoreDetailsHideModal()} className="fill-current text-black/60 hover:text-black/100 " xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
              </path>
            </svg>
          </div>

        </div>

        {/*Body*/}

        <div className=" p-[1rem]">
          <div className="border border-gray-300 p-3">
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div class="col-span-2 md:col-span-1">
                <label for="1" class="text-[.8125rem] font-[500]  text-[#495057] ">Username</label>
                <input id="1" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm" placeholder="Serach Username" />
              </div>

              <div class="">
                <label for="1" class="text-[.8125rem] font-[500]  text-[#495057] whitespace-nowrap ">Amount From</label>
                <input id="1" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm" placeholder="0" />
              </div>
              <div class="">
                <label for="1" class="text-[.8125rem] font-[500]  text-[#495057] ">Amount To</label>
                <input id="1" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm" placeholder="0" />
              </div>

              <div class="col-span-2 md:col-span-1">
                <label for="1" class="text-[.8125rem] font-[500]  text-[#495057] ">IP Address</label>
                <input id="1" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none mt-1 text-sm" placeholder="IP Address" />
              </div>
              <div className="flex space-x-4 items-end ">
                <div class="">
                  <button class="p-2 px-3 bg-[#23292E] text-white rounded-md">Serach</button>
                </div>
                <div class="">
                  <button class="p-2 px-3 bg-[#eff2f7] text-gray-800 rounded-md hover:bg-[#d6ddea]">reset</button>
                </div>
              </div>
            </div>
            <div className="md:flex justify-between py-3">
              <div className="flex space-x-4 items-center xl:text-sm text-xs"><label className=" font-medium text-slate-600 cursor-pointer flex space-x-2 ">
                <input name="rtwo" type="radio" checked="" /><span>All</span></label><label className=" font-medium text-slate-600 cursor-pointer flex space-x-2 ">
                  <input name="rtwo" type="radio" /><span>Back</span></label><label className=" font-medium text-slate-600 cursor-pointer flex space-x-2 "><input name="rtwo" type="radio" /><span>Lay</span></label></div>
              <div className="flex space-x-2 font-medium text-gray-600">
                <p>Total Soda: <span className="text-green-700">0</span></p>
                <p>Total Amount: <span className="text-green-700">0</span></p>
              </div>
            </div>

            <div className="overflow-x-auto ">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-left text-sm  text-gray-600 border-b border-t bg-white" >
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Username
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Nation
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Rate
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Amount
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Date
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      IP
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      B Details
                    </th>
                    <th className="whitespace-nowrap font-medium p-2 capitalize">
                      Action
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

          </div>


        </div>
        {/*Footer*/}

      </div>
    </div>


  );
}
