import React from "react";


export default function CreditHistoryModal(props) {

  let { creditHistory, handleCreditHistoryHideModal, dataList,
  } = props;


  return (




    <div isOpen={creditHistory} className={creditHistory ? "fixed bg-black/80 w-full h-full inset-0 z-20 overflow-hidden flex justify-center items-center  overflow-y-auto" : "hidden"}  >
      <div className="animate__animated animate__fadeInDown animate__faster border border-teal-500 modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6 w-full">
          {/*Title*/}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Credit History</p>
            <div className="modal-close cursor-pointer z-50">
              <svg onClick={() => handleCreditHistoryHideModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                </path>
              </svg>
            </div>
          </div>
          {/*Body*/}

          <div className="">
            <form autoComplete="off">
              <div className="flex justify-center">

              </div>
            </form>

            <form autoComplete="off">

              <table className="min-w-full divide-y divide-gray-800">
                <thead className="rounded-t">
                  <tr className="text-left text-[13px] font-semibold text-gray-600/80 bg-white">
                    <th scope="col" className="whitespace-nowrap p-2 uppercase bg-gray-100">ID</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">remark</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">pts</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">marketid</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">fromto</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">debit</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">date</th>
                    <th scope="col" className="whitespace-nowrap p-2 capitalize">credit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList && dataList.length > 0 ?
                      dataList.map((element, index) => (
                        <React.Fragment key={index}>
                          <tr className="border-b border-gray-300 border-opacity-10 text-gray-600/80 text-[13px] bg-white">
                            <td className="p-2 whitespace-nowrap">{element && element.sno ? element.sno : "-"}</td>
                            <td className="p-2 whitespace-nowrap" >{element && element.remark ? element.remark : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.pts ? element.pts : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.marketid ? element.marketid : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.fromto ? element.fromto : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.debit ? element.debit : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.date ? element.date : "-"}</td>
                            <td className="p-2 whitespace-nowrap">{element && element.credit ? element.credit : "-"}</td>
                          </tr>
                        </React.Fragment>
                      )) : null
                  }
                </tbody>
              </table>

            </form>

          </div>
          {/*Footer*/}
        </div>
      </div>
    </div>




  );
}
