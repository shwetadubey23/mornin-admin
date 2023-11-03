import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, withRouter, } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import User from "../../pages/User/User";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ChangePasswordModal from "./Component/ChangePassword";
import image from '../../pages/Image/image';
import Message from '../../pages/Message/Message';
import MessageCategory from '../../pages/MessageCategory/MessageCategory';
import Quotes from '../../pages/Quotes/Quotes';
import QuotesCategory from '../../pages/QuotesCategory /QuotesCategory';
import ImageCategory from '../../pages/ImageCategory/ImageCategory';
function Layout(props) {
  const [open, setOpen] = useState(false);

  // const [openMobile, setOpenMobile] = useState(false); 

  // auto close
  const [openMobile, setOpenMobile] = useState(false);
  const myRef = useRef();

  // const handleClickOutsideTwo = (e) => {
  //   if (!myRef.current.contains(e.target)) {
  //     setOpenMobile(false);
  //   }
  // };
  const handleClickOutsideTwo = (e) => {
     {
      setOpenMobile(false);
    }
  };

  const handleClickInsidetwo = () => setOpenMobile(true);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideTwo);
    return () => document.removeEventListener('mousedown', handleClickOutsideTwo);
  });

  const [openModal, setOpenModal] = useState(false);



  return (
    <div className="overflow-hidden h-screen"  >
      <div className="overflow-hidden">
        <Header history={props.history}
          setOpen={setOpen} open={open}
          setOpenMobile={setOpenMobile}
          openMobile={openMobile}
          handleClickInsidetwo={handleClickInsidetwo}
          openModal={openModal} setOpenModal={setOpenModal}

        />
        <div className="flex h-screen overflow-hidden ">
          <Sidebar open={open} setOpen={setOpen}
            setOpenMobile={setOpenMobile}
            openMobile={openMobile}
            handleClickInsidetwo={handleClickInsidetwo} />
          <div className="w-full  overflow-y-auto bg-[#f3f3f4]  h-[calc(100%-4rem)] ">
            <Switch>
              {/* <Route path="/app/user" component={withRouter(ActiveUser)} /> */}
              <Route path="/app/user" component={withRouter(User)} />
              <Route path="/app/dashboard" component={withRouter(Dashboard)} />
              <Route path="/app/image" component={withRouter(image)} />
              <Route path="/app/message" component={withRouter(Message)} />
              <Route path="/app/messageCategory" component={withRouter(MessageCategory)} />
              <Route path="/app/quotes" component={withRouter(Quotes)} />
              <Route path="/app/quotesCategory" component={withRouter(QuotesCategory)} />
              <Route path="/app/imageCategory" component={withRouter(ImageCategory)} />
            </Switch>
          </div>
        </div>
      </div>

      <ChangePasswordModal openModal={openModal} setOpenModal={setOpenModal} />

    </div>
  );
}

export default withRouter(Layout);
