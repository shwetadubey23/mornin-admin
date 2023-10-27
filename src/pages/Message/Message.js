import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageActions, userActions, } from '../../_actions';
import Loader from '../../components/Loader/Loader';
import moment from 'moment'
import ReactPaginate from 'react-paginate';
import DialogExample from "./components/DialogExample/DialogExample";
import ViewMoreDetailsModal from "./components/ViewMoreDetailsModal/ViewMoreDetailsModal";
import CreateAddCategoryModal from "./components/CreateAddCategoryModal/CreateAddCategoryModal";
import UpdateCategoryModal from "./components/UpdateCategoryModal/UpdateCategoryModal";
import UpdateUserPasswordModal from './components/UpdateUserPasswordModal/UpdateUserPasswordModal';
import { isMobile } from "react-device-detect";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { BiSearch } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAdd,MdOutlineEdit } from "react-icons/md";


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideo: false,
      isVideoUpdate: false,
      massageRowData: {},
      fieldsMessage: {},
      errorsMessage: {},
      fieldsMessageUpdate: {},
      errorsMessageMassage: {},
      fieldsUserPasswordUpdate: {},
      errorsUpdatePassword: {},
      creditpasswordOpenModal: false,
      viewRowData: {},
      type: null,
      gameType: null,
      rankType: null,
      addMessageCreateModal: false,
      moreDetailsCreateModal: false,
      UpdateMessageCreateModal: false,
      loginToThisAccountModal: false,
      offset: 0,
      size: 10,
      pageNo: 1,
      keyWord: '',
      imageName: '',
      updatePwdformData: {
        "id": "",
        "password": ""
      }
    }
  }
  componentDidMount() {
    let temp = {
      "keyWord": "",
      "pageNo": this.state.pageNo,
      "size": this.state.size
    }
    this.props.dispatch(messageActions.getMessageList(temp)) 
    this.props.dispatch(messageActions.getAllMessageCategory())



  }
  static getDerivedStateFromProps(nextProps, prevState) {

    // console.log("STATIC______nextProps.Massage.addUserSuccess", nextProps.massage.addUserSuccess);

    if (nextProps.message.addUserSuccess) {
      return {
        ...nextProps,
        updatePwdformData: {
          "id": "",
          "password": ""
        },
        fieldsMessage: {},
        errorsMessage: {},
        fieldsUserPasswordUpdate: {},
        errorsUpdatePassword: {},
        addMessageCreateModal: false,
        UpdateMessageCreateModal: false,
        moreDetailsCreateModal: false,
        creditpasswordOpenModal: false,

        type: null,
        gameType: null,
        rankType: null,

      }
    }
    // console.log('nextProps.users.isMatchImageUpdate', nextProps.users.filesDetails);
    if (nextProps.users.filesDetails) {
      return {
        ...nextProps,
        imageName: nextProps.users && nextProps.users.filesDetails && nextProps.users.filesDetails.imageName ? nextProps.users.filesDetails.imageName : null

      }
    }


    else {
      return {
        ...nextProps,

      }
    }
  }
  handlePageClick = (data) => {
    // console.log("data  ", data);
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size
    }
    this.props.dispatch(messageActions.getMessageList(datatemp));
  }
  handleSearch = (event) => {
    // // console.log("666666666666666", event.target.value);
    event.preventDefault();
    let { value } = event.target;
    this.setState({ keyWord: value, offset: 0 });
    let data = {
      "keyWord": value,
      "pageNo": 1,
      "size": this.state.size
    }
    this.props.dispatch(messageActions.getMessageList(data));
  }
  disableMessageCategory = (data) => {
    let datatemp = {
      "id": data.id,
    }
    let paginationdata = {
      "keyWord": "",
      "pageNo": 1,
      "size": this.state.size
    }
    confirmAlert({


      title: 'Confirm to Change Status of User?',
      message: `Are you sure about  ${data.name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(messageActions.disableMessage(datatemp, paginationdata))
        },
        {
          label: 'No'
        }
      ]
    });
  }
  deleteMessageCategory = (data) => {
    let datatemp = {
      "id": data.id,
    }
    let paginationData = {
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
          onClick: () => this.props.dispatch(messageActions.deleteMessage(datatemp, paginationData))
        },
        {
          label: 'No'
        }
      ]
    });
    // console.log("alertalertalertalert", alert)
  }


  handleOpenCreateModalMoreDetails = (data) => {
    this.setState({ moreDetailsCreateModal: true, massageRowData: data });
    //  // console.log("fgfdgf1111111111111111111111111111111111",req);
  }

  handleMoreDetailsHideModal = () => {
    this.setState({ moreDetailsCreateModal: false });
  }

  handleOpenCreateModalUpdatePassword = (data) => {
    this.setState({ UpdateMessageCreateModal: true, fieldsMessageUpdate: data });
  }
  handleUpdatePasswordHideModal = () => {
    this.setState({ UpdateMessageCreateModal: false });
  }


  handleAddMessageHideModal = () => {
    this.setState({ addMessageCreateModal: false , fieldsMessage:{}, errorsMessage:{}  });
    // this.setState({ appsettingUpdateModal: false });
  }

  handleOpenCreateModal = () => {
    this.setState({ addMessageCreateModal: true,  });
  }
  inputAddMessageChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsMessage = this.state.fieldsMessage;
    let errorsMessage = this.state.errorsMessage;
    fieldsMessage[name] = value;
    // console.log(name, value);
    errorsMessage[name] = "";
    this.setState({ fieldsMessage, errorsMessage });
  }
  inputChangeUpdateMessage = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsMessageUpdate = this.state.fieldsMessageUpdate;
    let errorsMessageMassage = this.state.errorsMessageMassage;
    fieldsMessageUpdate[name] = value;
    errorsMessageMassage[name] = "";
    // console.log(name, value);
    this.setState({ fieldsMessageUpdate, errorsMessageMassage });
  }

  createMessageSubmit = () => {

    // let { users } = this.props;
    // let { filesDetails,
    //   //  filesDetailsVideo
    // } = users;
    // console.log('filesDetailsfilesDetails__________', filesDetails);
    if (this.handleValidationAddMessage()) {
      let reqData = {
        "message": this.state.fieldsMessage.message,
        "messageSubCategoryId": this.state.fieldsMessage.messageSubCategoryId,
        // "image": this.state && this.state.imageName ? this.state.imageName : null,

      }
      console.log("createRestoCategory>>>>>>>>>>>>>>>>>>>>>>>>>>>>", reqData);
      this.props.dispatch(messageActions.createMessage(reqData));
    }

  }

 
  updateMessageSubmit = () => {
    let { users } = this.props;
    let { filesDetails } = users;
    console.log('filesDetailsfilesDetailsfilesDetailsfilesDetailsfilesDetails::::???', filesDetails);

    if (this.handleValidationUpdateMessage()) {
      let reqData = {
        "id": this.state.fieldsMessageUpdate.id,
        "message": this.state.fieldsMessageUpdate.message,
        "messageSubCategoryId": this.state.fieldsMessageUpdate.messageSubCategoryId,
        // "image": this.state && this.state.imageName ? this.state.imageName : this.state.fieldsMessageUpdate.image,
      }
      let paginationData = {
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size
      }

      // console.log("update>>>>>>>>>>>>>>>>>>>>>>>000000000", reqData);

      this.props.dispatch(messageActions.updateMessage(reqData, paginationData));
    }

  }

  handleValidationUpdateMessage = () => {
    let fieldsMessageUpdate = this.state.fieldsMessageUpdate;
    let errorsMessageMassage = {};
    let formIsValid = true;

    //message
    if (!fieldsMessageUpdate["message"] || fieldsMessageUpdate["message"] === "") {
      formIsValid = false;
      errorsMessageMassage["message"] = "Cannot be empty";
    }


    //name
    if (!fieldsMessageUpdate["messageSubCategoryId"] || fieldsMessageUpdate["messageSubCategoryId"] === "") {
      formIsValid = false;
      errorsMessageMassage["messageSubCategoryId"] = "Cannot be empty";
    }


    this.setState({ errorsMessageMassage: errorsMessageMassage });
    return formIsValid;
  }

  handleValidationAddMessage = () => {
    let fieldsMessage = this.state.fieldsMessage;
    let errorsMessage = {};
    let formIsValid = true;

    //MessageCategoryId
    if (!fieldsMessage["message"] || fieldsMessage["message"] === "") {
      formIsValid = false;
      errorsMessage["message"] = "Cannot be empty message";
    }
    //name
    // if (!fieldsMessage["messageSubCategoryId"] || fieldsMessage["messageSubCategoryId"] === "") {
    //   formIsValid = false;
    //   errorsMessage["messageSubCategoryId"] = "Cannot be empty messageSubCategoryId";
    // }




    console.log('errorsMassageerrorsMassageerrorsMassageerrorsMassage', errorsMessage);
    this.setState({ errorsMessage: errorsMessage });
    return formIsValid;
  }



  handleFile = (event) => {
    console.log("handleFileevent", event);

    this.setState({ selectedFile: event.target.files[0] });

    if (event.target.files[0]) {
      this.setState({ selectedFile: null });
      this.props.dispatch(userActions.uploadImage(event.target.files[event.target.files.length - 1]));

    }
    else {
      // console.log("No File To Upload!")
    }

  }
 


  render() {

    let { message, users } = this.props;
    let {  loading, allMessage,getMessageList,
      MessageCatTotal, } = message;
    let { filesDetails } = users;
    // let { allMassage } = Massage;
    console.log("RENDER111111111111111", getMessageList, );
    // // console.log('this.state.imageName', this.state.imageName);


    return (

      <>
        <div>
        <Loader
            active={loading}
            text = "Please wait....."
          />
        </div>

        <div className="flex flex-col flex-1 overflow-hidden overflow-x-auto overflow-y-auto">
          <main className="relative flex-1">
            <div className="p-3 2xl:p-10 sm:p-5">
              <div className="mx-auto max-w-screen-3xl">
                {/* Transaction Section */}
                <section className="p-6 space-y-6 bg-white border rounded-md">

                  <div className="flex flex-wrap items-center justify-between w-full ">
                    <div className="">
                      <h3 className="text-xl font-semibold ">Message</h3>
                    </div>

                    <div className='flex space-x-6 '>

                      <form action="#" method="GET"  >
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BiSearch style={{ fontSize: '1.5rem' }} className="text-gray-500" />
                          </div>
                          <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" onChange={this.handleSearch} required />
                        </div>
                      </form>

                      <button className="flex items-center px-2 py-2 text-sm font-medium text-white capitalize bg-[#2a3042]/80  rounded-md " onClick={() => this.handleOpenCreateModal()}><MdAdd style={{ fontSize: "1.5rem" }} className="mr-1.5" />  Add Message </button>

                    </div>

                  </div>
                  <div className="pb-2 mt-4 overflow-hidden overflow-x-auto">
                    <div className="max-w-full">
                      <div className="inline-block min-w-full">
                        <div className="">
                          <table className="min-w-full border-0 divide-y">
                            <thead className="bg-gray-200">
                              <tr className="">
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">#</th>
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Message Category </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Message</th>

                                {/* <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">image</th> */}
                                {/* <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">image</th> */}
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Date/Time</th>

                                {/* <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Password</th> */}

                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Status </th>
                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Actions</th>
                              </tr>
                            </thead>

                            <tbody>
                              {
                                getMessageList && getMessageList.length > 0 ?
                                  getMessageList.map((element, index) => (<React.Fragment key={element.id}>
                                    <tr key={element.id} className="bg-white border-b border-black border-opacity-10 ">
                                      <td className="px-6 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                                        {this.state.offset + index + 1}</td>


                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.MessageCategoryId && element.MessageCategoryId.name ? element.MessageCategoryId.name : "-"}</td> */}
                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.messageSubCategoryId ? element.messageSubCategoryId : "-"}</td>

                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.message ? element.message : "-"}</td>

                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <div className='flex justify-center'>
                                          <img className="object-cover h-10 rounded-sm w-14" src={element && element.imageLinkUrl
                                            ? element.imageLinkUrl
                                            : "/dist/img/profile.png"} alt="" />
                                        </div>
                                      </td> */}

                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <div className='flex justify-center'>
                                          <img className="object-cover h-10 rounded-sm w-14" src={element && element.imageLinkUrl ? element.imageLinkUrl : "NA"} alt="not found" />
                                        </div>
                                      </td> */}

                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{moment(new Date(parseInt(element.createdAt))).utcOffset("+05:30").format("YYYY-MM-DD HH:mm")}</td>

                                      {/* <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <span className="flex justify-center pl-1">

                                          <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-gray-700 border rounded-md shadow-sm hover:shadow-lg hover:bg-gray-400 cursor-pointer" onClick={() => this.handlePasswordModal(element)}>

                                            <label>Password</label>
                                          </div>

                                        </span>
                                      </td> */}



                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap ">
                                        <div class="flex justify-center">
                                          <label class="flex items-center cursor-pointer targetablepx-4 tooltip">
                                            <div class="relative" onClick={() => this.disableMessageCategory(element)}>
                                              <input type="checkbox" id="toggleB" class="sr-only" />
                                              <div class="block bg-gray-600 w-10 h-6 rounded-full"></div>
                                              <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                                              <span class='tooltip-text bg-pink-600 p-6 -mt-16 text-white text-sm rounded'>Enable / Disable</span>
                                            </div>
                                          </label>
                                        </div>
                                      </td> */}

                                      <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <span className="flex justify-center pl-1">
                                          {element.isDisable === false ?
                                            <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-green-700 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableMessageCategory(element)}>

                                              <label>Enabled</label>
                                            </div>
                                            : <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-red-500 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableMessageCategory(element)}>

                                              <label>Disabled</label>
                                            </div>}
                                        </span>
                                      </td>


                                      <td className="flex justify-center px-2 py-6 space-x-2 text-center text-gray-600 whitespace-nowrap">
                                        <div className='flex space-x-2'>

                                
                                          {/* <span className="relative ">
                                            {element.isActive ? "ADDED" : <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer  " onClick={() => this.handleOpenCreateModalMoreDetails(element)}>
                                              <span className='top-0 left-0 p-6 mx-auto -mt-8 -ml-6 text-sm text-white bg-gray-500 rounded tooltip-text'>More Details</span>
                                              <BiDetail style={{ fontSize: "1.5rem" }} />
                                            </div>}
                                          </span> */}

                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.handleOpenCreateModalUpdatePassword(element)}>
                                              {/* <span className='top-0 left-0 p-6 mx-auto -mt-8 text-sm text-white bg-gray-500 rounded tooltip-text'>Edit</span> */}

                                              <MdOutlineEdit style={{ fontSize: "1.5rem" }} title='Edit'/>
                                            </div>
                                          </span>

                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.deleteMessageCategory(element)}>
                                              {/* <span className='top-0 left-0 p-6 mx-auto -mt-8 -ml-2 text-sm text-white bg-gray-500 rounded tooltip-text'>Delete</span> */}
                                              <RiDeleteBinLine style={{ fontSize: "1.5rem" }} title='Delete'/>
                                            </div>
                                          </span>
                                        </div>
                                      </td>


                                    </tr>
                                  </React.Fragment>))
                                  : (<tr className="bg-white bg-opacity-5 " >
                                    <td className="col-span-3 px-6 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">Not found</td>
                                  </tr>)
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Table Pagination Section */}
                    {
                      isMobile ?
                        <nav className="relative z-0 flex justify-end mt-5 w-76">
                          {
                            MessageCatTotal && MessageCatTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={MessageCatTotal / this.state.size}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={1}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                pageClassName={'page-cls'}
                                activeClassName={'active'}
                              />
                              : null}
                        </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
                          {
                            MessageCatTotal && MessageCatTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={MessageCatTotal / this.state.size}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                pageClassName={'page-cls'}
                                activeClassName={'active'}
                              />
                              : null}
                        </nav>
                    }
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>

        <DialogExample />

        <CreateAddCategoryModal
          addMessageCreateModal={this.state.addMessageCreateModal}
          fieldsMessage={this.state.fieldsMessage}
          errorsMessage={this.state.errorsMessage}
          allMessage={allMessage}
          inputAddMessageChange={this.inputAddMessageChange}
          handleFile={this.handleFile}
          handleFile2={this.handleFile2}
          createMessageSubmit={this.createMessageSubmit}
          handleSelectType={this.handleSelectType}
          handleSelectGameType={this.handleSelectGameType}
          handleSelectRankType={this.handleSelectRankType}
          handleAddMessageHideModal={this.handleAddMessageHideModal}
          inputChangeIsVideo={this.inputChangeIsVideo}
          isVideo={this.state.isVideo}
          filesDetails={filesDetails}
        />


        <UpdateUserPasswordModal
          creditpasswordOpenModal={this.state.creditpasswordOpenModal}
          fieldsUserPasswordUpdate={this.state.fieldsUserPasswordUpdate}
          errorsUpdatePassword={this.state.errorsUpdatePassword}
          inputChangeUpdatePasswordUser={this.inputChangeUpdatePasswordUser}
          updateUserPasswordSubmit={this.updateUserPasswordSubmit}
          handleAppSeetingHideModal={this.handleCreditpasswordHideModal}
          handleFile={this.handleFile}

        />

        <UpdateCategoryModal
          UpdateMessageCreateModal={this.state.UpdateMessageCreateModal}
          fieldsMessageUpdate={this.state.fieldsMessageUpdate}
          errorsMessageMassage={this.state.errorsMessageMassage}
          inputChangeUpdateMessage={this.inputChangeUpdateMessage}
          updateMessageSubmit={this.updateMessageSubmit}
          allMessage={allMessage}

          handleFile={this.handleFile}
          handleFile2={this.handleFile2}
          handleUpdateSelectType={this.handleUpdateSelectType}
          handleUpdateSelectGameType={this.handleUpdateSelectGameType}
          handleUpdateSelectRankType={this.handleUpdateSelectRankType}
          handleAppSeetingHideModal={this.handleUpdatePasswordHideModal}
          inputChangeIsVideoUpdate={this.inputChangeIsVideoUpdate}
          isVideoUpdate={this.state.isVideoUpdate}
          filesDetails={filesDetails}
        />

        <ViewMoreDetailsModal
          moreDetailsCreateModal={this.state.moreDetailsCreateModal}
          massageRowData={this.state.massageRowData}
          // getProductByCategoryId={getProductByCategoryId}
          handleMoreDetailsHideModal={this.handleMoreDetailsHideModal}
        />

        {/* <ViewloginToThisAccountModal
          loginToThisAccountModal={this.state.loginToThisAccountModal}
          handleloginToThisAccountHideModal={this.handleloginToThisAccountHideModal}
        /> */}
      </>

    );
  }
}
function mapStateToProps(state) {
  const { message, users, product, } = state;
  return {
    message,
    users,
    product
    // kyc,
    // authentication
  };
}
export default connect(mapStateToProps)(Message);
