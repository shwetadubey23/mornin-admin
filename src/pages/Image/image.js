import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imageActions, userActions, } from '../../_actions';
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


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideo: false,
      isVideoUpdate: false,
      massageRowData: {},
      fieldsBanner: {},
      errorsBanner: {},
      fieldsBannerUpdate: {},
      errorsBannerMassage: {},
      fieldsUserPasswordUpdate: {},
      errorsUpdatePassword: {},
      creditpasswordOpenModal: false,
      viewRowData: {},
      type: null,
      gameType: null,
      rankType: null,
      addBannerCreateModal: false,
      moreDetailsCreateModal: false,
      UpdateBannerCreateModal: false,
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
    this.props.dispatch(imageActions.getImageList())
    this.props.dispatch(imageActions.getAllImageCategory())



  }
  static getDerivedStateFromProps(nextProps, prevState) {

    // console.log("STATIC______nextProps.Massage.addUserSuccess", nextProps.massage.addUserSuccess);

    if (nextProps.image.addUserSuccess) {
      return {
        ...nextProps,
        updatePwdformData: {
          "id": "",
          "password": ""
        },
        fieldsBanner: {},
        errorsBanner: {},
        fieldsUserPasswordUpdate: {},
        errorsUpdatePassword: {},
        addBannerCreateModal: false,
        UpdateBannerCreateModal: false,
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
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size
    }
    this.props.dispatch(imageActions.getImageList(datatemp));
  }
  handleSearch = (event) => {
    event.preventDefault();
    let { value } = event.target;
    this.setState({ keyWord: value, offset: 0 });
    let data = {
      "keyWord": value,
      "pageNo": 1,
      "size": this.state.size
    }
    this.props.dispatch(imageActions.getImageList(data));
  }
  disableBannerCategory = (data) => {
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
          onClick: () => this.props.dispatch(imageActions.disableBanner(datatemp, paginationdata))
        },
        {
          label: 'No'
        }
      ]
    });
  }
  deleteBannerCategory = (data) => {
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
          onClick: () => this.props.dispatch(imageActions.deleteImage(datatemp, paginationData))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  handleOpenCreateModalMoreDetails = (data) => {
    this.setState({ moreDetailsCreateModal: true, massageRowData: data });
  }

  handleMoreDetailsHideModal = () => {
    this.setState({ moreDetailsCreateModal: false });
  }
  handleOpenCreateModalUpdatePassword = (data) => {
    this.setState({ UpdateBannerCreateModal: true, fieldsBannerUpdate: data });
  }
  handleUpdatePasswordHideModal = () => {
    this.setState({ UpdateBannerCreateModal: false });
  }

  handleAddBannerHideModal = () => {
    this.setState({ addBannerCreateModal: false , fieldsBanner:{}, errorsBanner:{}  });
  }

  handleOpenCreateModal = () => {
    this.setState({ addBannerCreateModal: true,  });
  }
  inputAddBannerChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsBanner = this.state.fieldsBanner;
    let errorsBanner = this.state.errorsBanner;
    fieldsBanner[name] = value;
    errorsBanner[name] = "";
    this.setState({ fieldsBanner, errorsBanner });
  }
  inputChangeUpdateBanner = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsBannerUpdate = this.state.fieldsBannerUpdate;
    let errorsBannerMassage = this.state.errorsBannerMassage;
    fieldsBannerUpdate[name] = value;
    errorsBannerMassage[name] = "";
    this.setState({ fieldsBannerUpdate, errorsBannerMassage });
  }

  createBannerSubmit = () => {
    if (this.handleValidationAddBanner()) {
      let reqData = {
        "name": this.state.fieldsBanner.name,
        "imageSubCategoryId": this.state.fieldsBanner.imageSubCategoryId,
        "image": this.state && this.state.imageName ? this.state.imageName : null,
      }
      this.props.dispatch(imageActions.createImage(reqData));
    }

  }

 
  updateBannerSubmit = () => {
    let { users } = this.props;
    let { filesDetails } = users;
    if (this.handleValidationUpdateBanner()) {
      let reqData = {
        "id": this.state.fieldsBannerUpdate.id,
        "name": this.state.fieldsBannerUpdate.name,
        "imageSubCategoryId": this.state.fieldsBannerUpdate.imageSubCategoryId,
        "image": this.state && this.state.imageName ? this.state.imageName : this.state.fieldsBannerUpdate.image,
      }
      let paginationData = {
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size
      }
      this.props.dispatch(imageActions.updateImage(reqData, paginationData));
    }

  }

  handleValidationUpdateBanner = () => {
    let fieldsBannerUpdate = this.state.fieldsBannerUpdate;
    let errorsBannerMassage = {};
    let formIsValid = true;

    //flag
    // if (!fieldsBannerUpdate["flag"] || fieldsBannerUpdate["flag"] === "") {
    //   formIsValid = false;
    //   errorsBannerMassage["flag"] = "Cannot be empty";
    // }


    //name
    if (!fieldsBannerUpdate["name"] || fieldsBannerUpdate["name"] === "") {
      formIsValid = false;
      errorsBannerMassage["name"] = "Cannot be empty";
    }


    this.setState({ errorsBannerMassage: errorsBannerMassage });
    return formIsValid;
  }

  handleValidationAddBanner = () => {
    let fieldsBanner = this.state.fieldsBanner;
    let errorsBanner = {};
    let formIsValid = true;

    //bannerCategoryId
    // if (!fieldsBanner["flag"] || fieldsBanner["flag"] === "") {
    //   formIsValid = false;
    //   errorsBanner["flag"] = "Cannot be empty flag";
    // }
    //name
    if (!fieldsBanner["name"] || fieldsBanner["name"] === "") {
      formIsValid = false;
      errorsBanner["name"] = "Cannot be empty name";
    }




    console.log('errorsMassageerrorsMassageerrorsMassageerrorsMassage', errorsBanner);
    this.setState({ errorsBanner: errorsBanner });
    return formIsValid;
  }



  handleFile = (event) => {
    this.setState({ selectedFile: event.target.files[0] });

    if (event.target.files[0]) {
      this.setState({ selectedFile: null });
      this.props.dispatch(userActions.uploadImage(event.target.files[event.target.files.length - 1]));

    }
    else {
    }

  }
 


  render() {

    let { image, users } = this.props;
    let {  loading, getAllImageCategory,getImageList,
      bannerTotal, } = image;
    let { filesDetails } = users;

   console.log('getAllImageCategorygetAllImageCategory', bannerTotal)

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
                      <h3 className="text-xl font-semibold ">Image List</h3>
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

                      <button className="flex items-center px-2 py-2 text-sm font-medium text-white capitalize bg-[#2a3042]/80  rounded-md " onClick={() => this.handleOpenCreateModal()}><MdAdd style={{ fontSize: "1.5rem" }} className="mr-1.5" />  Add Images Category  </button>

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
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Name </th>
                                {/* <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Flag</th> */}

                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">image</th>
                                {/* <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">image</th> */}
                                <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Date/Time</th>

                                {/* <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Password</th> */}

                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Status </th>
                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Actions</th>
                              </tr>
                            </thead>

                            <tbody>
                              {
                                getImageList && getImageList.length > 0 ?
                                  getImageList.map((element, index) => (<React.Fragment key={element.id}>
                                    <tr key={element.id} className="bg-white border-b border-black border-opacity-10 ">
                                      <td className="px-6 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                                        {this.state.offset + index + 1}</td>


                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.bannerCategoryId && element.bannerCategoryId.name ? element.bannerCategoryId.name : "-"}</td> */}
                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.name ? element.name : "-"}</td>

                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.flag ? element.flag : "-"}</td> */}

                                      <td className="px-6 py-3 text-sm justify-start flex items-center text-gray-600 whitespace-nowrap">
                                        <div className='flex justify-center'>
                                          <img className="object-cover h-10 rounded-sm w-14" src={element && element.imageUserLink
                                            ? element.imageUserLink
                                            : "/dist/img/profile.png"} alt="" />
                                        </div>
                                      </td>

                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <div className='flex justify-center'>
                                          <img className="object-cover h-10 rounded-sm w-14" src={element && element.imageLinkUrl ? element.imageLinkUrl : "NA"} alt="not found" />
                                        </div>
                                      </td> */}

                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{moment(new Date(parseInt(element.createdAt))).utcOffset("+05:30").format("YYYY-MM-DD HH:mm")}</td>
                                      <td className="px-2 py-3 text-sm text-gray-600 whitespace-nowrap">
                                        <span className="flex justify-center pl-1">
                                          {element.isDisable === false ?
                                            <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-green-700 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableBannerCategory(element)}>

                                              <label>Enabled</label>
                                            </div>
                                            : <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-red-500 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableBannerCategory(element)}>

                                              <label>Disabled</label>
                                            </div>}
                                        </span>
                                      </td>


                                      <td className="flex justify-center px-2 py-6 space-x-2 text-center text-gray-600 whitespace-nowrap">
                                        <div className='flex space-x-2'>
                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.handleOpenCreateModalUpdatePassword(element)}>
                                              {/* <span className='top-0 left-0 p-6 mx-auto -mt-8 text-sm text-white bg-gray-500 rounded tooltip-text'>Edit</span> */}

                                              <MdOutlineEdit style={{ fontSize: "1.5rem" }}  title='Edit'/>
                                            </div>
                                          </span>

                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.deleteBannerCategory(element)}>
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
                            bannerTotal && bannerTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={bannerTotal / this.state.size}
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
                            bannerTotal && bannerTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={bannerTotal / this.state.size}
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
          addBannerCreateModal={this.state.addBannerCreateModal}
          fieldsBanner={this.state.fieldsBanner}
          errorsBanner={this.state.errorsBanner}
          getAllImageCategory={getAllImageCategory}
          inputAddBannerChange={this.inputAddBannerChange}
          handleFile={this.handleFile}
          handleFile2={this.handleFile2}
          createBannerSubmit={this.createBannerSubmit}
          handleSelectType={this.handleSelectType}
          handleSelectGameType={this.handleSelectGameType}
          handleSelectRankType={this.handleSelectRankType}
          handleAddBannerHideModal={this.handleAddBannerHideModal}
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
          UpdateBannerCreateModal={this.state.UpdateBannerCreateModal}
          fieldsBannerUpdate={this.state.fieldsBannerUpdate}
          errorsBannerMassage={this.state.errorsBannerMassage}
          inputChangeUpdateBanner={this.inputChangeUpdateBanner}
          updateBannerSubmit={this.updateBannerSubmit}
          getAllImageCategory={getAllImageCategory}

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
  const { image, users, product, } = state;
  return {
    image,
    users,
    product
    // kyc,
    // authentication
  };
}
export default connect(mapStateToProps)(Image);
