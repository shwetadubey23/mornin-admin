import React from 'react';
import { connect } from 'react-redux';
import UserHistoryLogin from '../../components/UserHistory/UserHistoryLogin';
import UserHistorypassword from '../../components/UserHistory/UserHistorypassword';
class UserHistory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      declareMatchModal: false,
      setFmatchId: false,
      declareMatchDetails: {},
      fieldsMatch: {},
      errorsMatch: {},
      currentCount: "UserHistoryLogin"
    }
  }

  componentDidMount() {

  }

  inputChangeCurrentCount = (event) => {
    this.setState({ currentCount: event });
  }

  render() {

    return (
      <div className='relative w-full h-full page_bg overflow-y-auto'>
        <div className='px-[12px] py-[4px] space-y-0' >
        <div className='flex justify-between pb-4' >
            <h2 className='xl:text-[16px] text-[14px]  font-semibold text-gray-600 uppercase'>User History</h2>
            <p className='text-[0.8125rem]  text-[#74788d] '>  <b className='font-normal text-[#495057]' >Home</b> / User History </p>
          </div>

          <div className=' w-full flex items-center font-medium text-[.8125rem]  '>
            <span onClick={() => this.inputChangeCurrentCount("UserHistoryLogin")} className={this.state.currentCount === "UserHistoryLogin" ? "px-4 py-2 cursor-pointer bg-white   border-l border-r border-gray-300 text-slate-600 -mb-0.5 border-t-[3px] border-t-[#23292e]" : "px-4 py-2 cursor-pointer text-slate-600 border  border-transparent hover:border-inherit -mb-0.5"}  >login history</span>

            <span onClick={() => this.inputChangeCurrentCount("UserHistorypassword")} className={this.state.currentCount === "UserHistorypassword" ? "px-4 py-2 cursor-pointer bg-white   border-l border-r border-gray-300 text-slate-600 -mb-0.5 border-t-[3px] border-t-[#23292e]" : "px-4 py-2 cursor-pointer text-slate-600 border border-transparent hover:border-inherit -mb-0.5"}  >Change Password history</span>
          </div> 
          {this.state.currentCount === "UserHistoryLogin" ?
            <UserHistoryLogin />
            : null
          }

          {this.state.currentCount === "UserHistorypassword" ?
            <UserHistorypassword /> :
            null
          }

        </div>


      </div>

    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  console.log("users:::ACTIVE_MATCH::", users);

  return {
    users
  };
}

export default connect(mapStateToProps)(UserHistory);

