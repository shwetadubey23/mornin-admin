import React from "react";

import Modal from 'react-modal';


export default function AddUserDialog(props) {

  // let { classes, pdfURL, userCreateModal, handleClose } = props;
  //console.log("userCreateModal  ",userCreateModal);

  return (

    <Modal
    isOpen={false}
    // onAfterOpen={afterOpenModal}
    // onRequestClose={closeModal}
    // style={customStyles}
    contentLabel="Example Modal"
  >

    <h2 >Hello</h2>
    <button >close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>



  );
}


// <Dialog fullScreen open={userCreateModal} onClose={handleClose} >
//       <AppBar className={classes.appBar}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
//             <CloseIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//           </Typography>
//           <Button color="inherit" onClick={handleClose}>
//             Cancel
//       </Button>
//         </Toolbar>
//       </AppBar>
//       <Container component="main" >
//         <CssBaseline />
//         <div >
//           <PDFViewer
//             document={{
//               url: pdfURL
//             }}
//           />
//         </div>
//       </Container>
//     </Dialog>