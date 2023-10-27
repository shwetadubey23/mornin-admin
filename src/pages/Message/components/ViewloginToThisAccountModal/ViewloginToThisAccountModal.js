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


export default function ViewloginToThisAccountModal(props) {

  let { loginToThisAccountModal, handleloginToThisAccountHideModal, loginToThisAccountItems,
    //  errorsappsetting, inputChange, appSettingSubmit
  } = props;
  // console.log("loginToThisAccountItems data inside:::: ", loginToThisAccountItems);
  function openTab(URL) {
    window.open(URL);
  }
  return (

    <Modal
      isOpen={loginToThisAccountModal}
    // contentLabel="Example Modal"
    >


      <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style={{ background: 'rgba(0,0,0,.7)' }}>
        <div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            {/*Title*/}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">ThisAccount details</p>
              <div className="modal-close cursor-pointer z-50">
                <svg onClick={() => handleloginToThisAccountHideModal()} className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                  </path>
                </svg>
              </div>
            </div>
            {/*Body*/}
            <div >
              <Typography style={{ fontSize: "17px" }} component="h1" variant="h5">

                <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>EMAIL  : </b>{loginToThisAccountItems && loginToThisAccountItems.email ? loginToThisAccountItems.email : "NA"}</Box>
                {/* <Box style={{ textOverflow: "ellipsis", overflow: "hidden" }}><b>TOKEN  : </b>{loginToThisAccountItems && loginToThisAccountItems.token ? loginToThisAccountItems.token : "NA"}</Box> */}
                <Box className={`underline hover:underline cursor-pointer	`} style={{ textOverflow: "ellipsis", overflow: "hidden" }} onClick={()=>openTab(loginToThisAccountItems && loginToThisAccountItems.completeURL ? loginToThisAccountItems.completeURL : "NA")}><b>URL  : </b>{loginToThisAccountItems && loginToThisAccountItems.completeURL ? loginToThisAccountItems.completeURL : "NA"}</Box>

              </Typography>
            </div>
            {/*Footer*/}
          </div>
        </div>
      </div>


    </Modal>



  );
}
