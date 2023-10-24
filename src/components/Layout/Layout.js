import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, withRouter, } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import MarketAnyalsis from "../../pages/MarketAnyalsis/MarketAnyalsis";
import MarketAnyalsisDetails from "../../pages/MarketAnyalsisDetails/MarketAnyalsisDetails";
// import ActiveUser from "../../pages/ActiveUser/ActiveUser";
import CreditData from "../../pages/CreditData/CreditData";
import CreateAccount from "../../pages/CreateAccount/CreateAccount";
import Bank from "../../pages/Bank/Bank";
import AccountStatement from "../../pages/AccountStatement/AccountStatement";
import CurrentBet from "../../pages/CurrentBet/CurrentBet";
import UserHistory from "../../pages/UserHistory/UserHistory";
import BetHistory from "../../pages/BetHistory/BetHistory";
import CreateApp from "../../pages/CreateApp/CreateApp";
import User from "../../pages/User/User";
import demo from "../../pages/demo/demo";
import PartyWinLoss from "../../pages/PartyWinLoss.js/PartyWinLoss";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ChangePasswordModal from "./Component/ChangePassword";
import MatchOdds from '../../pages/MatchOdds/MatchOdds';
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
              <Route path="/app/marketAnyalsis" component={withRouter(MarketAnyalsis)} />
              <Route path="/app/marketanyalsisdetails" component={withRouter(MarketAnyalsisDetails)} />
              <Route path="/app/createapp" component={withRouter(CreateApp)} />
              {/* <Route path="/app/user" component={withRouter(ActiveUser)} /> */}
              <Route path="/app/user" component={withRouter(User)} />
              <Route path="/app/demo" component={withRouter(demo)} />
              <Route path="/app/activeusers" component={withRouter(CreditData)} />
              <Route path="/app/createaccount" component={withRouter(CreateAccount)} />
              <Route path="/app/bank" component={withRouter(Bank)} />
              <Route path="/app/accountstatement" component={withRouter(AccountStatement)} />
              <Route path="/app/currentbet" component={withRouter(CurrentBet)} />
              <Route path="/app/userhistory" component={withRouter(UserHistory)} />
              <Route path="/app/bethistory" component={withRouter(BetHistory)} />
              <Route path="/app/partywinloss" component={withRouter(PartyWinLoss)} />
              <Route path="/app/dashboard" component={withRouter(Dashboard)} />
              <Route path="/app/match" component={withRouter(MatchOdds)} />
            </Switch>
          </div>
        </div>
      </div>

      <ChangePasswordModal openModal={openModal} setOpenModal={setOpenModal} />

    </div>
  );
}

export default withRouter(Layout);
