import {
  messageConstants
} from '../_constants';

export function message(state = {}, action) {
  //  console.log("fgvbfghhrj>>>>>>>>>>>>>>", action);
  switch (action.type) {
    case messageConstants.GET_ID_MASSAGE_REQUEST:
      return {
        ...state
      };
    case messageConstants.GET_ID_MASSAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        allrestaurent: action.users.getRestaurantUserById,
      };
    case messageConstants.GET_ID_MASSAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.ADD_PACKAGE_REQUEST:
      return {
        ...state
      };
    case messageConstants.ADD_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.ADD_PACKAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.ADD_QUOTES_REQUEST:
      return {
        ...state
      };
    case messageConstants.ADD_QUOTES_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.ADD_QUOTES_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.ADD_MESSAGE_REQUEST:
      return {
        ...state
      };
    case messageConstants.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.ADD_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.ADD_MESSAGE_CATEGORY_REQUEST:
      return {
        ...state
      };
    case messageConstants.ADD_MESSAGE_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.ADD_MESSAGE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.GET_MESSAGE_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GET_MESSAGE_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        getMessageCategoryList: action.users.getMessageCategoryList.list,
        messageTotal: action.users.getMessageCategoryList.total
      };
    case messageConstants.GET_MESSAGE_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case messageConstants.GET_MESSAGE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GET_MESSAGE_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        getMessageList: action.users.getMessageList.list,
        messageTotal: action.users.getMessageList.total
      };
    case messageConstants.GET_MESSAGE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case messageConstants.GETALL_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GETALL_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        AllQuotes: action.users.getAllQuotesCategory,
        // allrestaurentTotal: action.users.getAllrestaurent
      };
    case messageConstants.GETALL_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case messageConstants.GET_ALL_MESSAGE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GET_ALL_MESSAGE_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allMessage: action.users.getAllMessageCategory,
        // allrestaurentTotal: action.users.getAllrestaurent
      };
    case messageConstants.GET_ALL_MESSAGE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case messageConstants.UPDATE_PACKAGE_REQUEST:
      return {
        ...state
      };
    case messageConstants.UPDATE_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.UPDATE_PACKAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.UPDATE_QUOTES_REQUEST:
      return {
        ...state
      };
    case messageConstants.UPDATE_QUOTES_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.UPDATE_QUOTES_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.UPDATE_MESSAGE_REQUEST:
      return {
        ...state
      };
    case messageConstants.UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.UPDATE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case messageConstants.UPDATE_MESSAGE_CATEGORY_REQUEST:
      return {
        ...state
      };
    case messageConstants.UPDATE_MESSAGE_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.UPDATE_MESSAGE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case messageConstants.UPDATE_MASSAGE_USER_PASSWORD_REQUEST:
      return {
        ...state
      };
    case messageConstants.UPDATE_MASSAGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case messageConstants.UPDATE_MASSAGE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case messageConstants.DELETE_MESSAGE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DELETE_MESSAGE_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DELETE_MESSAGE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case messageConstants.DISABLE_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DISABLE_MESSAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DISABLE_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case messageConstants.DISABLE_MESSAGE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DISABLE_MESSAGE_CATEGORY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DISABLE_MESSAGE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    case messageConstants.GET_PT_PACKAGE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GET_PT_PACKAGE_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        QuotesItems: action.users.getQuotesCategoryList.list,
        QuotesTotal: action.users.getQuotesCategoryList.total
      };
    case messageConstants.GET_PT_PACKAGE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case messageConstants.DISABLE_PT_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DISABLE_PT_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DISABLE_PT_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case messageConstants.DELETE_PT_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DELETE_PT_PACKAGE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DELETE_PT_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case messageConstants.GET_QUOTES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.GET_QUOTES_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        Quotes: action.users.getQuotesList.list,
        Quotestotal: action.users.getQuotesList.total
      };
    case messageConstants.GET_QUOTES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case messageConstants.DISABLE_QUOTES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DISABLE_QUOTES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DISABLE_QUOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case messageConstants.DELETE_QUOTES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case messageConstants.DELETE_QUOTES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case messageConstants.DELETE_QUOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };










    default:
      return state
  }
}