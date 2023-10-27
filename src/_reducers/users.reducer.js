import {
  userConstants
} from '../_constants';

export function users(state = {}, action) {

  switch (action.type) {
    case userConstants.ACTIVE_SPORT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.ACTIVE_SPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        activeSportItems: action.users.activeSport
      };
    case userConstants.ACTIVE_SPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.MARKET_ANALYSIS_DASHBORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.MARKET_ANALYSIS_DASHBORD_SUCCESS:
      return {
        ...state,
        loading: false,
        marketAnalysisItems: action.users.marketAnalysisDashboard
      };
    case userConstants.MARKET_ANALYSIS_DASHBORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.CHILD_LIST_ACTIVE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CHILD_LIST_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        childListActiveItems: action.users.childListActiveUser
      };
    case userConstants.CHILD_LIST_ACTIVE_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    // case userConstants.CREDIT_DATA_REQUEST:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case userConstants.CREDIT_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     creditdataItems: action.users.creditdata
    //   };
    // case userConstants.CREDIT_DATA_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error
    //   };









    case userConstants.UPDATE_MATCH_FIM_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_MATCH_FIM_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        loading: false,
      };
    case userConstants.UPDATE_MATCH_FIM_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.LIVE_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false
      };
    case userConstants.LIVE_MATCHES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        liveMatchItems: action.users.liveMatchList,
      };
    case userConstants.LIVE_MATCHES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.UPCOMING_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false
      };
    case userConstants.UPCOMING_MATCHES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        upcomingMatchesList: action.users.upcomingMatches,
        // total: action.users.listOfRestaurant
      };
    case userConstants.UPCOMING_MATCHES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_ALL_MATCH_SESSION_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false
      };
    case userConstants.GET_ALL_MATCH_SESSION_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getAllMatchSessionItems: action.users.getAllMatchSession,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_ALL_MATCH_SESSION_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_BETS_BY_MATCH_ID_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false
      };
    case userConstants.GET_BETS_BY_MATCH_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getBetsByMatchIdItems: action.users.getBetsByMatchId.list,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_BETS_BY_MATCH_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_ALL_FANCY_BY_MATCH_ID_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false
      };
    case userConstants.GET_ALL_FANCY_BY_MATCH_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getAllFancyByMatchIdItems: action.users.getAllFancyByMatchId.list,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_ALL_FANCY_BY_MATCH_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_ALL_MATCH_BY_SPORTID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_MATCH_BY_SPORTID_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        loading: false,
        getAllMatchBySportId: action.users.getAllMatchBySportId,
      };
    case userConstants.GET_ALL_MATCH_BY_SPORTID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GET_MY_SHARE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_MY_SHARE_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        loading: false,
        getMyShare: action.users.getMyShare,
      };
    case userConstants.GET_MY_SHARE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GET_APP_SETTING_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_APP_SETTING_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        appSettingList: action.users.getAppSettingList.list,
      };
    case userConstants.GET_APP_SETTING_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.DISABLE_APP_SETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.DISABLE_APP_SETTING_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case userConstants.DISABLE_APP_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.UPDATE_APP_SETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_APP_SETTING_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        loading: false,
      };
    case userConstants.UPDATE_APP_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.DELETE_APP_SETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.DELETE_APP_SETTING_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
      };
    case userConstants.DELETE_APP_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.CREATE_APP_SETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CREATE_APP_SETTING_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        loading: false,
      };
    case userConstants.CREATE_APP_SETTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.UPDATE_MATCH_STATUS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_MATCH_STATUS_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        updateMatchStatus: action.users.updateMatchStatus,
        // total: action.users.getUserActive.total
      };
    case userConstants.UPDATE_MATCH_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.UPDATE_FANCY_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        // allFancy: null,
      };
    case userConstants.UPDATE_FANCY_STATUS_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        updateFancy: action.users.updateFancy,
        // total: action.users.getUserActive.total
      };
    case userConstants.UPDATE_FANCY_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.CREATE_MARKET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CREATE_MARKET_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        createMarketItems: action.users.createMarket,
        // total: action.users.getUserActive.total
      };
    case userConstants.CREATE_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.ADD_MATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.ADD_MATCH_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        createMatch: action.users.createMatch,
        // total: action.users.getUserActive.total
      };
    case userConstants.ADD_MATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GET_ALL_FANCY_REQUEST:
      return {
        ...state,
        loading: true,
        // allFancy: null,
      };
    case userConstants.GET_ALL_FANCY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allFancy: action.users.allFancy,
        // total: action.users.getUserActive.total
      };
    case userConstants.GET_ALL_FANCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GETALL_MARKET_REQUEST:
      return {
        ...state,
        loading: true,
        allMarket: null,
      };
    case userConstants.GETALL_MARKET_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allMarket: action.users.allMarket,
        // total: action.users.getUserActive.total
      };
    case userConstants.GETALL_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GETALL_MATCH_REQUEST:
      return {
        ...state,
        loading: true,
        allMatch: null,
      };
    case userConstants.GETALL_MATCH_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        // addUserSuccess: true,
        allMatch: action.users.allMatch,
        allMarket: null,
        // total: action.users.getUserActive.total
      };
    case userConstants.GETALL_MATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GETALL_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
        allSeries: null,
      };
    case userConstants.GETALL_SERIES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allSeries: action.users.allSeries,
        allMarket: null,
        allMatch: null
      };
    case userConstants.GETALL_SERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.ADD_SERIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.ADD_SERIES_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        createSerie: action.users.createSerie,
        // total: action.users.getUserActive.total
      };
    case userConstants.ADD_SERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GETALL_SPORT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SPORT_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        loading: false,
        allSport: action.users.AllSport,
        allSeries: null,
        // total: action.users.getUserActive.total
      };
    case userConstants.GETALL_SPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.GET_PL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_PL_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getPLItems: action.users.getPL
      };
    case userConstants.GET_PL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.SAVE_BET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SAVE_BET_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        // userSettingItems: action.users.getUserSetting,
        // total: action.users.listOfRestaurant
      };
    case userConstants.SAVE_BET_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_USER_SETTING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_USER_SETTING_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        userSettingItems: action.users.getUserSetting,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_USER_SETTING_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_USER_LIST_BY_USER_TYPE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_USER_LIST_BY_USER_TYPE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        UserListByUserType: action.users.getUserListByUserType.list,
        total: action.users.getUserListByUserType.total,
      };
    case userConstants.GET_USER_LIST_BY_USER_TYPE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_WORLD_FANCY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_WORLD_FANCY_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getWorldFancy: action.users.getWorldFancy,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_WORLD_FANCY_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_MATCH_BY_MATCH_ID_V2_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_MATCH_BY_MATCH_ID_V2_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        matchByMatchIdV2Items: action.users.getMatchByMatchIdV2,
        // total: action.users.listOfRestaurant
      };
    case userConstants.GET_MATCH_BY_MATCH_ID_V2_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_SELECTION_BY_MARKET_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_SELECTION_BY_MARKET_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        selectionIdMarketWise: action.users.getSelectionByMarketId
      };
    case userConstants.GET_SELECTION_BY_MARKET_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.DECLARE_RESULT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.DECLARE_RESULT_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        declareResult: action.users.declareResult
      };
    case userConstants.DECLARE_RESULT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_ALL_MATCH_ACTIVE_REQUEST:
      return {
        ...state,
        loading: true,
        addUserSuccess: false,
      };
    case userConstants.GET_ALL_MATCH_ACTIVE_SUCCESS:
      return {
        ...state,
        activeMatch: action.users.getAllMatchActive
      };
    case userConstants.GET_ALL_MATCH_ACTIVE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_USER_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_USER_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        UserDetailsById: action.users.getUserDetailsById
      };
    case userConstants.GET_USER_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_OWN_CHILD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_OWN_CHILD_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getOwnChild: action.users.getOwnChild
      };
    case userConstants.GET_OWN_CHILD_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.WITHDRAW_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        withdraw: action.users.withdraw
      };
    case userConstants.WITHDRAW_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.DEPOSIT_SUCCESS:
      return {
        ...state,
        addUserSuccess: true,
        deposit: action.users.deposit
      };
    case userConstants.DEPOSIT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_STATEMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_STATEMENT_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getStatementItems: action.users.getStatement
      };
    case userConstants.GET_STATEMENT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        addUserSuccess: false
      };
    case userConstants.CREATE_USER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.CHANGE_OWN_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CHANGE_OWN_PASSWORD_SUCCESS:
      return {
        ...state,
        addUserSuccess: true
      };
    case userConstants.CHANGE_OWN_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        addUserSuccess: false
      };
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_ALL_MATCH_BY_SPORT_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_MATCH_BY_SPORT_ID_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getAllMatch: action.users.getAllMatchActiveBySportId,
        // userListTotal: action.users.getAllMatchActiveBySportId.total
      };
    case userConstants.GET_ALL_MATCH_BY_SPORT_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_BETS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_BETS_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getBetsItems: action.users.getBets,
        // userListTotal: action.users.getAllMatchActiveBySportId.total
      };
    case userConstants.GET_BETS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_PROFILE_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        getProfile: action.users.getProfile,
        // userListTotal: action.users.getAllMatchActiveBySportId.total
      };
    case userConstants.GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GET_USER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        userListItems: action.users.getUserList.list,
        total: action.users.getUserList.total
      };
    case userConstants.GET_USER_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        items: action.users.listOfRestaurant.list,
        total: action.users.listOfRestaurant.total
      };
    case userConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.TOKEN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.TOKEN_SUCCESS:
      return {
        ...state,
        addUserSuccess: false,
        userinfotoken: action.users.userinfotoken
      };
    case userConstants.TOKEN_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.SEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SEND_SUCCESS:
      return {
        ...state,
        sendCoinSuccess: true,
      };
    case userConstants.SEND_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.SEND_OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SEND_OTP_SUCCESS:
      return {
        ...state,
        sendCoinTXOTPSuccess: true,
      };
    case userConstants.SEND_OTP_FAILURE:
      return {
        ...state,
        error: action.error
      };



    case userConstants.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_DETAILS_SUCCESS:
      return {
        ...state,
        sendCoinSuccess: false,
        sendCoinTXOTPSuccess: false,
        overview: action.users.getUserDetails
      };
    case userConstants.USER_DETAILS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.USER_TX_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_TX_SUCCESS:
      return {
        ...state,
        // sendCoinSuccess: false,
        // sendCoinTXOTPSuccess: false,
        getTxData: action.users.getTxData
      };
    case userConstants.USER_TX_FAILURE:
      return {
        ...state,
        error: action.error
      };
      case userConstants.FILE_UPLOAD_STATUS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case userConstants.FILE_UPLOAD_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          imageUploadSuccess: true,
          // filesDetails: action.uploadImage.filesDetails
        };
  
      case userConstants.FILE_UPLOAD_STATUS_FAILURE:
        return {
          ...state,
          imageUploadClearSuccess: true,
          filesDetails: null
        };
    case userConstants.GETALL_USER_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GETALL_USER_NOTIFY_SUCCESS:
      return {
        ...state,
        listOfNotification: action.users.listOfNotification.list,
        listOfNotificationtotal: action.users.listOfNotification.total
      };
    case userConstants.GETALL_USER_NOTIFY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case userConstants.UPDATE_USER_NOTIFY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPDATE_USER_NOTIFY_SUCCESS:
      return {
        ...state,
      };
    case userConstants.UPDATE_USER_NOTIFY_FAILURE:
      return {
        ...state,
        error: action.error
      };


    default:
      return state
  }
}