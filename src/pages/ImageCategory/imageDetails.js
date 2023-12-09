import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions, imageActions } from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import moment from 'moment';
import UpdateCategoryModal from './components/UpdateImageModal/UpdateImageModal';

class imageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      UpdateBannerModal: false,
      fieldsBannerUpdate: {},
      errorsBannerMassage: {},
    }
  }


  componentDidMount() {
    let data = {
      "imageSubCategoryId": this.props.match.params.id,
      "keyWord": "",
      "pageNo": 1,
      "size": 10,

    }
    console.log('getImageCategoryListByIdgetImageCategoryListByIdgetImageCategoryListById', data)
    this.props.dispatch(imageActions.getImageCategoryListById(data));
    this.props.dispatch(imageActions.getAllImageCategory())
  }



  static getDerivedStateFromProps(nextProps, prevState) {

    // console.log("STATIC______nextProps.Massage.addUserSuccess", nextProps.massage.addUserSuccess);

    if (nextProps.image.addUserSuccess) {
      return {
        ...nextProps,
        fieldsBanner: {},
        errorsBanner: {},
        fieldsUserPasswordUpdate: {},
        errorsUpdatePassword: {},
        addBannerCreateModal: false,
        UpdateBannerModal: false,
        moreDetailsCreateModal: false,
        creditpasswordOpenModal: false,

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
      // "messageSubCategoryId": "653a2cc444ce87b75b286a30",
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
    }
    // this.props.dispatch(imageActions.getMassageUserById(datatemp));
  }

  deleteBannerCategory = (data) => {
    let datatemp = {
      "id": data.id,
    }
    let paginationData = {
      imageSubCategoryId: this.props.match.params.id,
      "keyWord": this.state.keyWord,
      "pageNo": this.state.pageNo,
      "size": this.state.size
    }

    confirmAlert({

      title: 'Confirm to Delete?',
      message: `Are you sure to delete Image ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(imageActions.deleteImageDetail(datatemp, paginationData))
        },
        {
          label: 'No'
        }
      ]
    });
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

  updateBannerSubmit = () => {
    let { users } = this.props;
    let { filesDetails } = users;
    // let imageArray = filesDetails.map(item => item.imageName);
    if (this.handleValidationUpdateBanner()) {
      let reqData = {
        "id": this.state.fieldsBannerUpdate.id,
        // "name": this.state.fieldsBannerUpdate.name,
        // "imageSubCategoryId": this.state.fieldsBannerUpdate.imageSubCategoryId,
        "imageSubCategoryId": String(this.state.fieldsBannerUpdate.imageSubCategoryId?.id || this.state.fieldsBannerUpdate.imageSubCategoryId), // Ensure it's a string
        "image": this.state && this.state.imageName ? this.state.imageName : this.state.fieldsBannerUpdate.image,
        // "image": imageArray,
      }
      let paginationData = {
        imageSubCategoryId: this.props.match.params.id,
        "keyWord": this.state.keyWord,
        "pageNo": this.state.pageNo,
        "size": this.state.size
      }
      this.props.dispatch(imageActions.updateImageDetail(reqData, paginationData));
      console.log('reqDatareqDatareqDatareqDatareqDatareqData', reqData)
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
    if (!fieldsBannerUpdate["imageSubCategoryId"] || fieldsBannerUpdate["imageSubCategoryId"] === "") {
      formIsValid = false;
      errorsBannerMassage["imageSubCategoryId"] = "Cannot be empty";
    }


    this.setState({ errorsBannerMassage: errorsBannerMassage });
    return formIsValid;
  }
  handleOpenCreateModalUpdatePassword = (data) => {
    this.setState({ UpdateBannerModal: true, fieldsBannerUpdate: data });
  }
  handleUpdatePasswordHideModal = () => {
    this.setState({ UpdateBannerModal: false });
  }

  handleFileUpdate = (event) => {

    const input = event.target;
    const files = input.files;

    const tempimagearray = []


    // You can now handle the selected files, for example, by logging their names.
    for (let i = 0; i < files.length; i++) {

      const element = files[i];
      // element.name=element.name
      tempimagearray.push(element)
      console.log("`Selected file", tempimagearray);
    }

    // this.setState({ selectedFile: event.target.files[0] });

    if (event.target.files[0]) {
      this.setState({ selectedFile: null });
      this.props.dispatch(userActions.uploadImage(event.target.files[event.target.files.length - 1]));

    }
    else {
    }

  }
  render() {

    let { users, image } = this.props;
    let { loading, allImageCategory, totalImageCategory, getAllImageCategory } = image;
    let { filesDetails } = users;

    return (

      <>

        <div>
          <Loader
            active={loading}
            text="Please wait....."
          />
        </div>

        <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none bg_page">
          <section>

            <div className='overflow-hidden'>
              <div className='overflow-y-auto p-10 space-y-4'>
                <div>
                  <h1 className='text-center font-bold text-xl py-3'>
                  {allImageCategory &&  allImageCategory[0]  && allImageCategory[0].imageSubCategoryId && allImageCategory[0].imageSubCategoryId.name ? allImageCategory[0].imageSubCategoryId.name : null}  ({totalImageCategory})
                  </h1>
                </div>

                <div className="  py-10 md:space-y-0 gap-4 xl:gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {allImageCategory && allImageCategory.length > 0 ? allImageCategory.map((elements, index) => (

                    <div className=" bg-white p-10 shadow-lg rounded-lg space-y-4 md:space-y-0 overflow-hidden">
                      {/* {
                        Array.isArray(elements.imageUserLinks) &&
                        elements.imageUserLinks.map((imageName, index) => (
                          <img className='w-72 h-52 rounded-md ' key={index} src={imageName} alt={`Image ${index}`} />
                        ))
                      } */}

                      <img
                        src={elements && elements.imageUserLinks ? elements.imageUserLinks : "https://media.geeksforgeeks.org/wp-content/uploads/20200412121906/skeleton-loading.gif"}
                        alt={elements && elements.name ? elements.name : "Image"}
                        className="w-full h-[200px]"
                      />
                      <div className="relative  p-5">
                        {/* <h3 className="text-base font-bold capitalize leading-snug  line-clamp-1">
                          {elements && elements.name ? elements.name : "Image"}
                        </h3> */}

                      </div>
                      <div className='flex justify-end items-end py-2 px-3'>
                        <p className='text-gray-500 text-sm '>{moment(new Date(parseInt(elements && elements.createdAt ? elements.createdAt : "-"))).utcOffset("+05:30").format("HH:mm DD-MM-YYYY")}</p>
                      </div>

                      <div className='flex space-x-2 justify-end items-end px-4'>
                      
                        <button onClick={() => this.handleOpenCreateModalUpdatePassword(elements)} class="relative inline-block w-20 py-0.5 font-medium group">
                          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                          <span class="relative text-black group-hover:text-white">Edit</span>
                        </button>
                        <button onClick={() => this.deleteBannerCategory(elements)} class="relative inline-block w-20 py-0.5 font-medium group">
                          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                          <span class="absolute inset-0 w-full h-full bg-white border-2 border-red-600 group-hover:bg-red-600"></span>
                          <span class="relative text-red-600 group-hover:text-white">Delete</span>
                        </button>
                      </div>
                    </div>

                  )) :
                    <span className='text-center justify-start items-center text-red-500 font-semibold px-6 w-[500px] '>
                      <p> "This Category have not any Images"</p>
                    </span>
                  }
                </div>

              </div>
            </div>
          </section>
        </div>

        <UpdateCategoryModal
          UpdateBannerModal={this.state.UpdateBannerModal}
          fieldsBannerUpdate={this.state.fieldsBannerUpdate}
          errorsBannerMassage={this.state.errorsBannerMassage}
          inputChangeUpdateBanner={this.inputChangeUpdateBanner}
          updateBannerSubmit={this.updateBannerSubmit}
          getAllImageCategory={getAllImageCategory}

          handleFile={this.handleFile}
          handleFileUpdate={this.handleFileUpdate}
          handleUpdateSelectType={this.handleUpdateSelectType}
          handleUpdateSelectGameType={this.handleUpdateSelectGameType}
          handleUpdateSelectRankType={this.handleUpdateSelectRankType}
          handleUpdatePasswordHideModal={this.handleUpdatePasswordHideModal}
          inputChangeIsVideoUpdate={this.inputChangeIsVideoUpdate}
          isVideoUpdate={this.state.isVideoUpdate}
          filesDetails={filesDetails}
        />
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users, image } = state;
  return {
    users,
    image
  };
}
export default connect(mapStateToProps)(imageDetails);
