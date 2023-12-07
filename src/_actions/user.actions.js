import { toast } from 'react-toastify';
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
//import { history } from '../_helpers';
export const userActions = {
    login,
    logout,
    marketAnalysisDashboard,
    childListActiveUser,
    activeSport,
    uploadImage,
    uploadMultiImages,
   
};

function login(data, props) {
    console.log("login___props::", props);

    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));

                    console.log("useruseruser09122022:", user);

                    dispatch(alertActions.success("Login Successfully."));
                    props.history.push(`/app/dashboard`)
                    // history.push({ pathname: '#/app/mainpage' });
                    // window.location.reload();
                    console.log("props.history  ",props.history);
                },
                error => {
                    console.log("errorerror ", error);
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_FIRST_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_FIRST_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FIRST_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function marketAnalysisDashboard(data) {
    return dispatch => {
        dispatch(request());
        userService.marketAnalysisDashboard(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_REQUEST } }
    function success(users) { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_SUCCESS, users } }
    function failure(error) { return { type: userConstants.MARKET_ANALYSIS_DASHBORD_FAILURE, error } }
}


function uploadImage(data){
    return dispatch => {
        dispatch(request());
        userService.uploadImage(data)
        .then(
            uploadImage => {
                toast("Image Uploaded Successfully");
                dispatch(success(uploadImage));
            },
            error =>{
                dispatch(alertActions.error(error));
                dispatch(failure(error))
            }

        )
    };
    function request(){
        return{
            type:userConstants.FILE_UPLOAD_STATUS_REQUEST
        }
    }
    function success(uploadImage) {
        return {
            type:userConstants.FILE_UPLOAD_STATUS_SUCCESS , uploadImage
        }
    }
    function failure(error) {
        return {
            type: userConstants.FILE_UPLOAD_STATUS_FAILURE, error
        }
    }
}

function uploadMultiImages(data){
    console.log('datadatadatadatadataaaaaaaaaaaaaaaa', data)
    return dispatch => {
        dispatch(request());
        userService.uploadMultiImages(data)
        .then(
            users => {
                toast("Image Uploaded Successfully");
                dispatch(success(users));
            },
            error =>{
                dispatch(alertActions.error(error));
                dispatch(failure(error))
            }

        )
    };
    function request(){
        return{
            type:userConstants.FILE_UPLOAD_MULTI_STATUS_REQUEST
        }
    }
    function success(users) {
        return {
            type:userConstants.FILE_UPLOAD_MULTI_STATUS_SUCCESS , users
        }
    }
    function failure(error) {
        return {
            type: userConstants.FILE_UPLOAD_MULTI_STATUS_FAILURE, error
        }
    }
}

function childListActiveUser(data) {
    return dispatch => {
        dispatch(request());
        userService.childListActiveUser(data)
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.CHILD_LIST_ACTIVE_USER_REQUEST } }
    function success(users) { return { type: userConstants.CHILD_LIST_ACTIVE_USER_SUCCESS, users } }
    function failure(error) { return { type: userConstants.CHILD_LIST_ACTIVE_USER_FAILURE, error } }
}

function activeSport() {
    return dispatch => {
        dispatch(request());
        userService.activeSport()
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.ACTIVE_SPORT_REQUEST } }
    function success(users) { return { type: userConstants.ACTIVE_SPORT_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ACTIVE_SPORT_FAILURE, error } }
}
