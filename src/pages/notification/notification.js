import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions, alertActions } from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import moment from 'moment';
import "jspdf-autotable";
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import LoadingOverlay from 'react-loading-overlay';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { LuCopyCheck, LuCopy } from "react-icons/lu";
import { AiFillDelete } from "react-icons/ai";
import { elements } from 'chart.js';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,


    }
  }


  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10,

    }
    this.props.dispatch(userActions.getNotificationListForUser(data));
  }

  deleteUser = (data) => {
    // console.log("delete function inside data:::", data);
    let datatemp = {
      "id": data.id,
    }
    let paginationData = {
      "userType": "ACTIVE",
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size
    }

    confirmAlert({

      title: 'Confirm to Delete?',
      message: `Are you sure to delete ${data.name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(userActions.deleteNotificationUsingNotificationId(datatemp, paginationData))
        },
        {
          label: 'No'
        }
      ]
    });
  }



  handlePageClick = (data) => {
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
    }
    this.props.dispatch(userActions.getNotificationListForUser(datatemp));
  }







  render() {

    let { users } = this.props;
    let { txList, loading, getNotificationListForUser } = users;
    // console.log("overflowTxList_____________RENDER_______", overflowTxList);
    // console.log("overflowTxTotal_____________RENDER_______", overflowTxTotal);


    return (

      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none bg_page">
          <section>
            <div className='overflow-hidden'>
              <div className='overflow-y-auto p-10 space-y-4'>
                {getNotificationListForUser && getNotificationListForUser.length > 0 ? getNotificationListForUser.map((elements, index) => (
                  < div className="bg-white p-5   items-center  shadow-lg rounded-xl w-full">
                    <div className='xl:flex flex-none  justify-start items-center w-full'>
                      <span>
                        <img src="/assets/M7CoinLogo.png" className='rounded-full border-2 border-black w-14 h-14' alt="" />
                      </span>
                      <span className='text-left font-semibold px-6'>
                        <p>{elements && elements.name ? elements.name : "Robin"}</p>
                        <p >{elements && elements.msg ? elements.msg : "Thankyou for completing Bio Preservation Task. You will receive a message once your documents are approved"}</p>
                        <p className='text-gray-500 text-sm '>{moment(new Date(parseInt(elements && elements.createdAt ? elements.createdAt : "-"))).utcOffset("+05:30").format("HH:mm DD-MM-YYYY")}</p>
                      </span>
                     
                    </div>
                    <div className='flex justify-end items-end'>
                      <span className="inline-block pl-1">
                        <button className="  font-medium   flex justify-center items-center " onClick={() => this.deleteUser(elements)}><AiFillDelete size={30} className='text-red-600 hover:text-red-400'/></button>
                      </span>
                    </div>
                  </div>
                )) : null}


              </div>
            </div>
          </section>
        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    setting
  };
}
export default connect(mapStateToProps)(Transaction);
