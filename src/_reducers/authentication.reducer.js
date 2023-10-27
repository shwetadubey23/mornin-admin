import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(
  state = initialState,
   action) {

  console.log("action", action);

  switch (action.type) {
    // case userConstants.LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     loggingIn: true,
    //     user: action.user
    //   };
    // case userConstants.LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     loggedIn: true,
    //     user: action.user.userinfo.data
    //   };
    // case userConstants.LOGIN_FAILURE:
    //   return {...state};

    case userConstants.LOGIN_FIRST_REQUEST:
      return {
        ...state,
      };
    case userConstants.LOGIN_FIRST_SUCCESS:
      return {
        ...state,
        otpSent: true,
        userDetails: action.user.userinfo
      };
    case userConstants.LOGIN_FIRST_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}