import {
  imageConstants
} from '../_constants';

export function image(state = {}, action) {
  //  console.log("imageimageimageimageimageimage", action.users);
  switch (action.type) {
    case imageConstants.GET_ID_MASSAGE_REQUEST:
      return {
        ...state
      };
    case imageConstants.GET_ID_MASSAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        allImageCategory: action.users.getImageCategoryListById.list,
        totalImageCategory: action.users.getImageCategoryListById.total,
      };
    case imageConstants.GET_ID_MASSAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.ADD_PACKAGE_REQUEST:
      return {
        ...state
      };
    case imageConstants.ADD_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case imageConstants.ADD_PACKAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.ADD_BANNER_REQUEST:
      return {
        ...state
      };
    case imageConstants.ADD_BANNER_SUCCESS:
      return {
        ...state,
        loading: true,
        addUserSuccess: true
      };
    case imageConstants.ADD_BANNER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.ADD_BANNER_CATEGORY_REQUEST:
      return {
        ...state
      };
    case imageConstants.ADD_BANNER_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: true,
        addUserSuccess: true
      };
    case imageConstants.ADD_BANNER_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.GET_BANNER_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.GET_BANNER_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        ImageCarItems: action.users.getImageCategoryList.list,
        ImageCatTotal: action.users.getImageCategoryList.total
      };
    case imageConstants.GET_BANNER_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case imageConstants.GET_BANNER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.GET_BANNER_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        getImageList: action.users.getImageList.list,
        bannerTotal: action.users.getImageList.total
      };
    case imageConstants.GET_BANNER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case imageConstants.GETALL_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.GETALL_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allPackage: action.users.getAllPtPackage,
        // allrestaurentTotal: action.users.getAllrestaurent
      };
    case imageConstants.GETALL_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case imageConstants.GET_ALL_BANNER_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.GET_ALL_BANNER_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        getAllImageCategory: action.users.getAllImageCategory,
        // allrestaurentTotal: action.users.getAllrestaurent
      };
    case imageConstants.GET_ALL_BANNER_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case imageConstants.UPDATE_PACKAGE_REQUEST:
      return {
        ...state
      };
    case imageConstants.UPDATE_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case imageConstants.UPDATE_PACKAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.UPDATE_BANNER_REQUEST:
      return {
        ...state
      };
    case imageConstants.UPDATE_BANNER_SUCCESS:
      return {
        ...state,
        loading: true,
        addUserSuccess: true
      };
    case imageConstants.UPDATE_BANNER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case imageConstants.UPDATE_BANNER_CATEGORY_REQUEST:
      return {
        ...state
      };
    case imageConstants.UPDATE_BANNER_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case imageConstants.UPDATE_BANNER_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case imageConstants.UPDATE_MASSAGE_USER_PASSWORD_REQUEST:
      return {
        ...state
      };
    case imageConstants.UPDATE_MASSAGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case imageConstants.UPDATE_MASSAGE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case imageConstants.DELETE_BANNER_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.DELETE_BANNER_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case imageConstants.DELETE_BANNER_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case imageConstants.DISABLE_BANNER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.DISABLE_BANNER_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case imageConstants.DISABLE_BANNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case imageConstants.DISABLE_BANNER_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.DISABLE_BANNER_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case imageConstants.DISABLE_BANNER_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    case imageConstants.GET_PT_PACKAGE_LIST_REQUEST:
      return {
        ...state,
        loading: false
      };
    case imageConstants.GET_PT_PACKAGE_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        // packageItems: action.users.getPTPackageList.list,
        // packageTotal: action.users.getPTPackageList.total
      };
    case imageConstants.GET_PT_PACKAGE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case imageConstants.DISABLE_PT_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.DISABLE_PT_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case imageConstants.DISABLE_PT_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case imageConstants.DELETE_PT_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case imageConstants.DELETE_PT_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case imageConstants.DELETE_PT_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };










    default:
      return state
  }
}