import React from "react";

import Modal from 'react-modal';
import {
  // Dialog,
  // AppBar,
  // Toolbar,
  // IconButton,
  // Container,
  // CssBaseline,
  // Grid,
  Typography,
  Box
} from "@material-ui/core";
const customStyles = {
  content: {
    background: '(255,255,255,0.005)',
    border: 'none',
  },
};

export default function ViewMoreDetailsModal(props) {

  let { moreDetailsCreateModal, handleMoreDetailsHideModal, viewRowData,
    //  errorsappsetting, inputChange, appSettingSubmit
  } = props;
  // console.log("viewRowData  ", viewRowData);

  return (

    <Modal
      isOpen={moreDetailsCreateModal}
      style={customStyles}
      ariaHideApp={false}
    // contentLabel="Example Modal"
    >


      {viewRowData && viewRowData.user ?
        <div className="main-modal fixed w-full h-500 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" /* style={{ background: 'rgba(0,0,0,.7)' }} */>
          <div className="border border-teal-500 shadow-lg modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">More Details</p>
                <div className="modal-close cursor-pointer z-50">
                  <svg onClick={() => handleMoreDetailsHideModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                    </path>
                  </svg>
                </div>
              </div>
              
              <div >
                <Typography style={{ fontSize: "17px" }} component="h1" variant="h5">
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>NAME  : </b>{viewRowData.user.name}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>EMAIL  : </b>{viewRowData.user.email}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>REF_CODE  : </b>{viewRowData.user.refCode}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>KYC  : </b>{viewRowData.user.kyc?"Done":"No"}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>BPC Balance  : </b>{viewRowData.wallet.bpcBal}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>BTC Balance  : </b>{viewRowData.wallet.btcBal}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>BPC Address  : </b>{viewRowData.wallet.bpcAddr}</Box>
                  <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>BTC Address  : </b>{viewRowData.wallet.btcAddr}</Box>
                </Typography>
              </div>
              
            </div>
          </div>
        </div>
        : null
      }


    </Modal>



  );
}
