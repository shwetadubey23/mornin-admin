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
import { BiSearch, BiDetail } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAdd,MdOutlineEdit } from "react-icons/md";


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideo: false,
      isVideoUpdate: false,
      massageRowData: {},
      fieldsImageCategory: {},
      errorsImageCategory: {},
      fieldsImageCategoryUpdate: {},
      errorsImageCategoryMassage: {},
      fieldsUserPasswordUpdate: {},
      errorsUpdatePassword: {},
      creditpasswordOpenModal: false,
      viewRowData: {},
      type: null,
      gameType: null,
      rankType: null,
      addImageCategoryCreateModal: false,
      moreDetailsCreateModal: false,
      UpdateImageCategoryCreateModal: false,
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
    this.props.dispatch(imageActions.getImageCategoryList())
    // this.props.dispatch(imageActions.getAllImageCategoryCategory())



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
        fieldsImageCategory: {},
        errorsImageCategory: {},
        fieldsUserPasswordUpdate: {},
        errorsUpdatePassword: {},
        addImageCategoryCreateModal: false,
        UpdateImageCategoryCreateModal: false,
        moreDetailsCreateModal: false,
        creditpasswordOpenModal: false,
        type: null,
        gameType: null,
        rankType: null,

      }
    }
    console.log('nextProps.users.isMatchImageUpdate', nextProps.users.filesDetails);
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
    this.props.dispatch(imageActions.getImageList(datatemp));
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
    this.props.dispatch(imageActions.getImageList(data));
  }
  disableImageCategoryCategory = (data) => {
    let datatemp = {
      "id": data.id,
    }
    let paginationdata = {
      "keyWord": "",
      "pageNo": 1,
      "size": this.state.size
    }
    confirmAlert({


      title: 'Confirm to Change Status ?',
      message: `Are you sure about  ${data.name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(imageActions.disableImageCategory(datatemp, paginationdata))
        },
        {
          label: 'No'
        }
      ]
    });
  }
  deleteImageCategoryCategory = (data) => {
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
          onClick: () => this.props.dispatch(imageActions.deleteImageCategory(datatemp, paginationData))
        },
        {
          label: 'No'
        }
      ]
    });
    // console.log("alertalertalertalert", alert)
  }


  handleOpenCreateModalMoreDetails = (data) => {
    this.props.history.push('/app/imageDetails/'+ data.id)
    // this.setState({ moreDetailsCreateModal: true, massageRowData: data });
     console.log("fgfdgf1111111111111111111111111111111111",data);
  }

  handleMoreDetailsHideModal = () => {
    this.setState({ moreDetailsCreateModal: false });
  }
  handleOpenCreateModalUpdatePassword = (data) => {
    this.setState({ UpdateImageCategoryCreateModal: true, fieldsImageCategoryUpdate: data });
  }
  handleUpdatePasswordHideModal = () => {
    this.setState({ UpdateImageCategoryCreateModal: false });
  }

  handleAddImageCategoryHideModal = () => {
    this.setState({ addImageCategoryCreateModal: false , fieldsImageCategory:{}, errorsImageCategory:{}  });
    // this.setState({ appsettingUpdateModal: false });
  }

  handleOpenCreateModal = () => {
    this.setState({ addImageCategoryCreateModal: true,  });
  }
  inputAddImageCategoryChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsImageCategory = this.state.fieldsImageCategory;
    let errorsImageCategory = this.state.errorsImageCategory;
    fieldsImageCategory[name] = value;
    // console.log(name, value);
    errorsImageCategory[name] = "";
    this.setState({ fieldsImageCategory, errorsImageCategory });
  }
  inputChangeUpdateImageCategory = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsImageCategoryUpdate = this.state.fieldsImageCategoryUpdate;
    let errorsImageCategoryMassage = this.state.errorsImageCategoryMassage;
    fieldsImageCategoryUpdate[name] = value;
    errorsImageCategoryMassage[name] = "";
    // console.log(name, value);
    this.setState({ fieldsImageCategoryUpdate, errorsImageCategoryMassage });
  }

  createImageCategorySubmit = () => {

    if (this.handleValidationAddImageCategory()) {
      let reqData = {
        "name": this.state.fieldsImageCategory.name,
        // "image": this.state && this.state.imageName ? this.state.imageName : null,
      }
      this.props.dispatch(imageActions.createImageCategory(reqData));
    }

  }

 
  updateImageCategorySubmit = () => {

    if (this.handleValidationUpdateImageCategory()) {
      let reqData = {
        "id": this.state.fieldsImageCategoryUpdate.id,
        "name": this.state.fieldsImageCategoryUpdate.name,
        // "image": this.state && this.state.imageName ? this.state.imageName : this.state.fieldsImageCategoryUpdate.image,
      }
      let paginationData = {
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size
      }

      // console.log("update>>>>>>>>>>>>>>>>>>>>>>>000000000", reqData);

      this.props.dispatch(imageActions.updateImageCategory(reqData, paginationData));
    }

  }

  handleValidationUpdateImageCategory = () => {
    let fieldsImageCategoryUpdate = this.state.fieldsImageCategoryUpdate;
    let errorsImageCategoryMassage = {};
    let formIsValid = true;

    //name
    if (!fieldsImageCategoryUpdate["name"] || fieldsImageCategoryUpdate["name"] === "") {
      formIsValid = false;
      errorsImageCategoryMassage["name"] = "Cannot be empty";
    }


    this.setState({ errorsImageCategoryMassage: errorsImageCategoryMassage });
    return formIsValid;
  }

  handleValidationAddImageCategory = () => {
    let fieldsImageCategory = this.state.fieldsImageCategory;
    let errorsImageCategory = {};
    let formIsValid = true;

   
    //name
    if (!fieldsImageCategory["name"] || fieldsImageCategory["name"] === "") {
      formIsValid = false;
      errorsImageCategory["name"] = "Cannot be empty name";
    }

    this.setState({ errorsImageCategory: errorsImageCategory });
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

    let { image, users } = this.props;
    let {  loading, allImageCategoryCat,ImageCarItems,
      ImageCatTotal, } = image;
    let { filesDetails } = users;
    // let { allMassage } = Massage;
    console.log('ImageCatTotalImageCatTotalImageCatTotal', ImageCatTotal);


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
                      <h3 className="text-xl font-semibold ">Image Category</h3>
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

                      <button className="flex items-center px-2 py-2 text-sm font-medium text-white capitalize bg-[#2a3042]/80  rounded-md " onClick={() => this.handleOpenCreateModal()}><MdAdd style={{ fontSize: "1.5rem" }} className="mr-1.5" />  Add Image Category  </button>

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
                               <th className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase whitespace-nowrap">Date/Time</th>

                                {/* <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Password</th> */}

                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Status </th>
                                <th className="px-6 py-3 text-sm font-semibold text-center text-gray-500 uppercase whitespace-nowrap">Actions</th>
                              </tr>
                            </thead>

                            <tbody>
                              {
                                ImageCarItems && ImageCarItems.length > 0 ?
                                  ImageCarItems.map((element, index) => (<React.Fragment key={element.id}>
                                    <tr key={element.id} className="bg-white border-b border-black border-opacity-10 ">
                                      <td className="px-6 py-3 text-sm font-medium text-gray-600 whitespace-nowrap">
                                        {this.state.offset + index + 1}</td>


                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.ImageCategoryCategoryId && element.ImageCategoryCategoryId.name ? element.ImageCategoryCategoryId.name : "-"}</td> */}
                                      <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.name ? element.name : "-"}</td>

                                      {/* <td className="px-6 py-3 text-sm text-gray-600 whitespace-nowrap">{element && element.flag ? element.flag : "-"}</td> */}


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
                                            <div class="relative" onClick={() => this.disableImageCategoryCategory(element)}>
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
                                            <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-green-700 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableImageCategoryCategory(element)}>

                                              <label>Enabled</label>
                                            </div>
                                            : <div class="targetablepx-4 tooltip px-3 py-1 font-medium tracking-wider text-blue-100 bg-red-500 border rounded-md shadow-sm hover:shadow-lg hover:bg-green-400 cursor-pointer" onClick={() => this.disableImageCategoryCategory(element)}>

                                              <label>Disabled</label>
                                            </div>}
                                        </span>
                                      </td>


                                      <td className="flex justify-center px-2 py-6 space-x-2 text-center text-gray-600 whitespace-nowrap">
                                        <div className='flex space-x-2'>

                                
                                          <span className="relative ">
                                         <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer  " onClick={() => this.handleOpenCreateModalMoreDetails(element)}>
                                              
                                              <BiDetail style={{ fontSize: "1.5rem" }} title="Image Category Details" />
                                            </div>
                                          </span>

                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.handleOpenCreateModalUpdatePassword(element)}>
                                              <MdOutlineEdit style={{ fontSize: "1.5rem" }}  title='Edit'/>
                                            </div>
                                          </span>

                                          <span className="relative">
                                            <div class="targetablepx-4 tooltip p-2 rounded-full  font-medium    hover:bg-blue-100 cursor-pointer" onClick={() => this.deleteImageCategoryCategory(element)}>
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
                            ImageCatTotal && ImageCatTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={ImageCatTotal / this.state.size}
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
                            ImageCatTotal && ImageCatTotal > 10 ?
                              <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={ImageCatTotal / this.state.size}
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
          addImageCategoryCreateModal={this.state.addImageCategoryCreateModal}
          fieldsImageCategory={this.state.fieldsImageCategory}
          errorsImageCategory={this.state.errorsImageCategory}
          allImageCategoryCat={allImageCategoryCat}
          inputAddImageCategoryChange={this.inputAddImageCategoryChange}
          handleFile={this.handleFile}
          handleFile2={this.handleFile2}
          createImageCategorySubmit={this.createImageCategorySubmit}
          handleSelectType={this.handleSelectType}
          handleSelectGameType={this.handleSelectGameType}
          handleSelectRankType={this.handleSelectRankType}
          handleAddImageCategoryHideModal={this.handleAddImageCategoryHideModal}
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
          UpdateImageCategoryCreateModal={this.state.UpdateImageCategoryCreateModal}
          fieldsImageCategoryUpdate={this.state.fieldsImageCategoryUpdate}
          errorsImageCategoryMassage={this.state.errorsImageCategoryMassage}
          inputChangeUpdateImageCategory={this.inputChangeUpdateImageCategory}
          updateImageCategorySubmit={this.updateImageCategorySubmit}
          allImageCategoryCat={allImageCategoryCat}

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
