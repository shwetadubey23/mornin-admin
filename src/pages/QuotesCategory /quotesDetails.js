import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions,messageActions} from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import moment from 'moment';
import "jspdf-autotable";
import { AiFillDelete } from "react-icons/ai";

class messageDetails extends Component {
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
      quotesSubCategoryId: this.props.match.params.id,
      "keyWord": "",
      "pageNo": 1,
      "size": 10,

    }
    console.log('datadatadatadatadatadatadata11111111111111111', data)
    this.props.dispatch(messageActions.getQuotesCategoryListById(data));
  }





  handlePageClick = (data) => {
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      // "messageSubCategoryId": "653a2cc444ce87b75b286a30",
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
    }
    // this.props.dispatch(messageActions.getMassageUserById(datatemp));
  }







  render() {

    let { users, message } = this.props;
    let {  loading, getQuotesCategoryListById, totalQuotes } = message;
    console.log('getMassageUserById111111111111', getQuotesCategoryListById)
    return (

      <>

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}

        <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none bg_page">
          <section>
          
            <div className='overflow-hidden'>
              <div className='overflow-y-auto p-10 space-y-4'>
              <div>
              <h1 className='text-center font-bold text-xl py-3'>
                Quotes ({totalQuotes})
              </h1>
            </div>
                {getQuotesCategoryListById && getQuotesCategoryListById.length > 0 ? getQuotesCategoryListById.map((elements, index) => (
                  < div className="bg-white p-5   items-center  shadow-lg rounded-xl w-full">
                    <div className='xl:flex flex-none  justify-start items-center w-full'>
                      {/* <span>
                        <img src="/assets/M7CoinLogo.png" className='rounded-full border-2 border-black w-14 h-14' alt="" />
                      </span> */}
                      <span className='text-left font-semibold px-6'>
                        <p>{elements && elements.quotesSubCategoryId && elements.quotesSubCategoryId.name ? elements.quotesSubCategoryId.name : "Robin"}</p>
                        <p >{elements && elements.quotes ? elements.quotes : ""}</p>
                      </span>
                     
                    </div>
                    <div className='flex justify-end items-end py-2'>
                        <p className='text-gray-500 text-sm '>{moment(new Date(parseInt(elements && elements.createdAt ? elements.createdAt : "-"))).utcOffset("+05:30").format("HH:mm DD-MM-YYYY")}</p>
                        </div>
                  </div>
                )) :
                <span className='text-center justify-center items-center text-red-500 font-semibold px-6'>
                <p> "This Category have not any Quotes"</p>
              </span>
                }


              </div>
            </div>
          </section>
        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users , message } = state;
  return {
    users,
     message
  };
}
export default connect(mapStateToProps)(messageDetails);
