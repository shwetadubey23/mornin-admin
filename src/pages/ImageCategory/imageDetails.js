import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions, imageActions } from '../../_actions';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import moment from 'moment';

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
      imageSubCategoryId: this.props.match.params.id,
      "keyWord": "",
      "pageNo": 1,
      "size": 10,

    }
    this.props.dispatch(imageActions.getImageCategoryListById(data));
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







  render() {

    let { users, image } = this.props;
    let { loading, allImageCategory, totalImageCategory } = image;
    console.log('getMassageUserById111111111111', allImageCategory)
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
                    Images ({totalImageCategory})
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:gap-10  py-10">
                  {allImageCategory && allImageCategory.length > 0 ? allImageCategory.map((elements, index) => (

                    <div className=" bg-white p-10 shadow-lg rounded-lg space-y-4 md:space-y-0 gap-4 xl:gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
                      {
                        Array.isArray(elements.imageUserLinks) &&
                        elements.imageUserLinks.map((imageName, index) => (
                          <img className='w-72 h-52 rounded-md ' key={index} src={imageName} alt={`Image ${index}`} />
                        ))
                      }

                      {/* <img
                        src={elements && elements.imageUserLinks && elements.imageUserLinks[0] ? elements.imageUserLinks[0] : "https://media.geeksforgeeks.org/wp-content/uploads/20200412121906/skeleton-loading.gif"}
                        alt={elements && elements.name ? elements.name : "Image"}
                        className="w-full h-[200px]"
                      /> */}
                      <div className="relative  p-5">
                        {/* <h3 className="text-base font-bold capitalize leading-snug  line-clamp-1">
                          {elements && elements.name ? elements.name : "Image"}
                        </h3> */}

                      </div>
                      <div className='flex justify-end items-end py-2 px-3'>
                        <p className='text-gray-500 text-sm '>{moment(new Date(parseInt(elements && elements.createdAt ? elements.createdAt : "-"))).utcOffset("+05:30").format("HH:mm DD-MM-YYYY")}</p>
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
export default connect(mapStateToProps)(messageDetails);
