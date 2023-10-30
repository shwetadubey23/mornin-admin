import { userConstants, imageConstants } from '../_constants';
import { userService, imageService } from '../_services';
import { alertActions } from '.';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
export const imageActions = {

    login,
    logout,
    disableBanner,
    disableBannerCategory,
    getAllImage,
    getAllPTPackage,
    createImage,
    createPTPackage,
    createImageCategory,
    updateImageCategory,
    updateImage,
    getImageList,
    getBannerCategoryList,
    deleteImage,
    deleteImageCategory,
    uploadImageClear,
    getMassageUserById,
    updateMassageUserPassword,
    updatePTPackage,
    getPTPackageList,
    disablePTPackage,
    deletePTPackage
};
function login(data, props) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    props.history.push({ pathname: 'app/dashboard' });
                },
                error => {
                    // console.log("errorerror ", error);
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    // userService.logout();
    return { type: userConstants.LOGOUT };
}

function uploadImageClear() {
    return dispatch => {
        dispatch(success());
    };
    function success(uploadImage) { return { type: userConstants.FILE_UPLOAD_STATUS_SUCCESS, uploadImage } }
}

function createImage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.createImage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Image Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getImageList(reqData));
                    // dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.ADD_BANNER_REQUEST } }
    function success(users) { return { type: imageConstants.ADD_BANNER_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.ADD_BANNER_FAILURE, error } }
}

function createPTPackage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.createPTPackage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Package Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getPTPackageList(reqData));
                    // dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.ADD_PACKAGE_REQUEST } }
    function success(users) { return { type: imageConstants.ADD_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.ADD_PACKAGE_FAILURE, error } }
}

function createImageCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.createImageCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Banner Category Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getBannerCategoryList(reqData));
                    dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.ADD_BANNER_REQUEST } }
    function success(users) { return { type: imageConstants.ADD_BANNER_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.ADD_BANNER_FAILURE, error } }
}
function updatePTPackage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.updatePTPackage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Package Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getPTPackageList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.UPDATE_PACKAGE_REQUEST } }
    function success(users) { return { type: imageConstants.UPDATE_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.UPDATE_PACKAGE_FAILURE, error } }
}
function updateImage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.updateImage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Image Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getImageList(reqData));
                    // dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.UPDATE_BANNER_REQUEST } }
    function success(users) { return { type: imageConstants.UPDATE_BANNER_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.UPDATE_BANNER_FAILURE, error } }
}
function updateImageCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.updateImageCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Banner Category Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getBannerCategoryList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.UPDATE_BANNER_CATEGORY_REQUEST } }
    function success(users) { return { type: imageConstants.UPDATE_BANNER_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.UPDATE_BANNER_CATEGORY_FAILURE, error } }
}

function updateMassageUserPassword(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        imageService.updateMassageUserPassword(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Password Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getImageList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.UPDATE_MASSAGE_USER_PASSWORD_REQUEST } }
    function success(users) { return { type: imageConstants.UPDATE_MASSAGE_USER_PASSWORD_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.UPDATE_MASSAGE_USER_PASSWORD_FAILURE, error } }
}

function getAllImage() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        imageService.getAllImage()
            .then(
                users => {
                    // console.log("getAllImage $$$$ action:", users);
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GET_ALL_BANNER_CATEGORY_REQUEST } }
    function success(users) { return { type: imageConstants.GET_ALL_BANNER_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GET_ALL_BANNER_CATEGORY_FAILURE, error } }
}
function getAllPTPackage() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        imageService.getAllPTPackage()
            .then(
                users => {
                    // console.log("getAllImage $$$$ action:", users);
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GETALL_PACKAGE_REQUEST } }
    function success(users) { return { type: imageConstants.GETALL_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GETALL_PACKAGE_FAILURE, error } }
}
function getMassageUserById() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        imageService.getMassageUserById()
            .then(
                users => {
                    // console.log("getMassageUserById $$$$ action:", users);
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GET_ID_MASSAGE_REQUEST } }
    function success(users) { return { type: imageConstants.GET_ID_MASSAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GET_ID_MASSAGE_FAILURE, error } }
}
function getImageList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        imageService.getImageList(data)
            .then(
                users => {
                    // console.log("getImageList $$$$ action:", users);
                    dispatch(success(users));
                    // dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GET_BANNER_LIST_REQUEST } }
    function success(users) { return { type: imageConstants.GET_BANNER_LIST_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GET_BANNER_LIST_FAILURE, error } }
}
function getPTPackageList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        imageService.getPTPackageList(data)
            .then(
                users => {
                    // console.log("getPTPackageList $$$$ action:", users);
                    dispatch(success(users));
                    dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GET_PT_PACKAGE_LIST_REQUEST } }
    function success(users) { return { type: imageConstants.GET_PT_PACKAGE_LIST_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GET_PT_PACKAGE_LIST_FAILURE, error } }
}
function getBannerCategoryList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        imageService.getBannerCategoryList(data)
            .then(
                users => {
                    // console.log("getBannerCategoryList $$$$ action:", users);
                    dispatch(success(users));
                    dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.GET_BANNER_CATEGORY_LIST_REQUEST } }
    function success(users) { return { type: imageConstants.GET_BANNER_CATEGORY_LIST_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.GET_BANNER_CATEGORY_LIST_FAILURE, error } }
}


function deleteImage(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        imageService.deleteImage(data)
            .then(
                users => {
                    dispatch(alertActions.success("Image Delete Successfully."));
                    dispatch(success(users));
                    dispatch(this.getImageList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.DELETE_BANNER_REQUEST } }
    function success(users) { return { type: imageConstants.DELETE_BANNER_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DELETE_BANNER_FAILURE, error } }
}

function deleteImageCategory(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        imageService.deleteImageCategory(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getBannerCategoryList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.DELETE_BANNER_CATEGORY_REQUEST } }
    function success(users) { return { type: imageConstants.DELETE_BANNER_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DELETE_BANNER_CATEGORY_FAILURE, error } }
}

function deletePTPackage(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        imageService.deletePTPackage(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getPTPackageList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.DELETE_PT_PACKAGE_REQUEST } }
    function success(users) { return { type: imageConstants.DELETE_PT_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DELETE_PT_PACKAGE_FAILURE, error } }
}
function disableBanner(data, paginationData) {

    return dispatch => {
        dispatch(request());
        imageService.disableBanner(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getImageList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
                );
            };
    function request() { return { type: imageConstants.DISABLE_BANNER_REQUEST } }
    function success(users) { return { type: imageConstants.DISABLE_BANNER_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DISABLE_BANNER_FAILURE, error } }
}
function disablePTPackage(data, paginationData) {
    
    return dispatch => {
        dispatch(request());
        imageService.disablePTPackage(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getPTPackageList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.DISABLE_PT_PACKAGE_REQUEST } }
    function success(users) { return { type: imageConstants.DISABLE_PT_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DISABLE_PT_PACKAGE_FAILURE, error } }
}
function disableBannerCategory(data, paginationData) {

    return dispatch => {
        dispatch(request());
        imageService.disableBannerCategory(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(this.getBannerCategoryList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: imageConstants.DISABLE_BANNER_CATEGORY_REQUEST } }
    function success(users) { return { type: imageConstants.DISABLE_BANNER_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: imageConstants.DISABLE_BANNER_CATEGORY_FAILURE, error } }
}
