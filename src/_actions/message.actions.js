import { userConstants, messageConstants } from '../_constants';
import { userService, messageService } from '../_services';
import { alertActions } from '.';
// import { toast } from 'react-toastify';
export const messageActions = {

    login,
    logout,
    disableMessage,
    disableMessageCategory,
    getAllMessageCategory,
    getAllQuotesCategory,
    createMessage,
    createQuotesCategory,
    createQuotes,
    createMessageCategory,
    updateMessageCategory,
    updateMessage,
    getMessageList,
    getMessageCategoryList,
    deleteMessage,
    deleteMessageCategory,
    uploadImageClear,
    getMassageUserById,
    updateMassageUserPassword,
    updateQuotesCategory,
    getQuotesCategoryList,
    updateQuotes,
    getQuotesList,
    disableQuotesCategory,
    deleteQuotesCategory,
    disableQuotes,
    deleteQuotes
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

function createMessage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.createMessage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Message Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getMessageList(reqData));
                    // dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.ADD_MESSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.ADD_MESSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.ADD_MESSAGE_FAILURE, error } }
}

function createQuotesCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.createQuotesCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Quotes Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesCategoryList(reqData));
                    dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.ADD_PACKAGE_REQUEST } }
    function success(users) { return { type: messageConstants.ADD_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.ADD_PACKAGE_FAILURE, error } }
}

function createQuotes(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.createQuotes(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Quotes Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesList(reqData));
                    dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.ADD_QUOTES_REQUEST } }
    function success(users) { return { type: messageConstants.ADD_QUOTES_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.ADD_QUOTES_FAILURE, error } }
}

function createMessageCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.createMessageCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Message Category Add Successfully."));
                    dispatch(success(users));
                    dispatch(this.getMessageCategoryList(reqData));
                    // dispatch(this.uploadImageClear());


                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.ADD_MESSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.ADD_MESSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.ADD_MESSAGE_FAILURE, error } }
}
function updateQuotesCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.updateQuotesCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Quotes Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesCategoryList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.UPDATE_PACKAGE_REQUEST } }
    function success(users) { return { type: messageConstants.UPDATE_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.UPDATE_PACKAGE_FAILURE, error } }
}
function updateQuotes(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.updateQuotes(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Quotes Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.UPDATE_QUOTES_REQUEST } }
    function success(users) { return { type: messageConstants.UPDATE_QUOTES_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.UPDATE_QUOTES_FAILURE, error } }
}
function updateMessage(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.updateMessage(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Message Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getMessageList(reqData));
                    // dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.UPDATE_MESSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.UPDATE_MESSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.UPDATE_MESSAGE_FAILURE, error } }
}
function updateMessageCategory(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.updateMessageCategory(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Message Category Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getMessageCategoryList(reqData));
                    // dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.UPDATE_MESSAGE_CATEGORY_REQUEST } }
    function success(users) { return { type: messageConstants.UPDATE_MESSAGE_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.UPDATE_MESSAGE_CATEGORY_FAILURE, error } }
}

function updateMassageUserPassword(data) {
    let reqData = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        messageService.updateMassageUserPassword(data)
            .then(

                users => {
                    // toast("Password Updated successfully.")
                    dispatch(alertActions.success("Password Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getMessageList(reqData));
                    dispatch(this.uploadImageClear());

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.UPDATE_MASSAGE_USER_PASSWORD_REQUEST } }
    function success(users) { return { type: messageConstants.UPDATE_MASSAGE_USER_PASSWORD_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.UPDATE_MASSAGE_USER_PASSWORD_FAILURE, error } }
}

function getAllMessageCategory() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        messageService.getAllMessageCategory()
            .then(
                users => {
                    // console.log("getAllMessageCategory $$$$ action:", users);
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GET_ALL_MESSAGE_CATEGORY_REQUEST } }
    function success(users) { return { type: messageConstants.GET_ALL_MESSAGE_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_ALL_MESSAGE_CATEGORY_FAILURE, error } }
}
function getAllQuotesCategory() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        messageService.getAllQuotesCategory()
            .then(
                users => {
                    // console.log("getAllMessageCategory $$$$ action:", users);
                    dispatch(success(users));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GETALL_PACKAGE_REQUEST } }
    function success(users) { return { type: messageConstants.GETALL_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GETALL_PACKAGE_FAILURE, error } }
}
function getMassageUserById() {
    // console.log(" m kya aa rha h::action:::", );
    return dispatch => {
        dispatch(request());
        messageService.getMassageUserById()
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
    function request() { return { type: messageConstants.GET_ID_MASSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.GET_ID_MASSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_ID_MASSAGE_FAILURE, error } }
}
function getMessageList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        messageService.getMessageList(data)
            .then(
                users => {
                    // console.log("getMessageList $$$$ action:", users);
                    dispatch(success(users));
                    // dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GET_MESSAGE_LIST_REQUEST } }
    function success(users) { return { type: messageConstants.GET_MESSAGE_LIST_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_MESSAGE_LIST_FAILURE, error } }
}
function getQuotesCategoryList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        messageService.getQuotesCategoryList(data)
            .then(
                users => {
                    // console.log("getQuotesCategoryList $$$$ action:", users);
                    dispatch(success(users));
                    dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GET_PT_PACKAGE_LIST_REQUEST } }
    function success(users) { return { type: messageConstants.GET_PT_PACKAGE_LIST_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_PT_PACKAGE_LIST_FAILURE, error } }
}

function getQuotesList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        messageService.getQuotesList(data)
            .then(
                users => {
                    // console.log("getQuotesList $$$$ action:", users);
                    dispatch(success(users));
                    dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GET_QUOTES_LIST_REQUEST } }
    function success(users) { return { type: messageConstants.GET_QUOTES_LIST_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_QUOTES_LIST_FAILURE, error } }
}
function getMessageCategoryList(data) {
    // console.log("data m kya aa rha h::action:::", data);
    return dispatch => {
        dispatch(request());
        messageService.getMessageCategoryList(data)
            .then(
                users => {
                    // console.log("getMessageCategoryList $$$$ action:", users);
                    dispatch(success(users));
                    dispatch(this.uploadImageClear());
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.GET_MESSAGE_CATEGORY_LIST_REQUEST } }
    function success(users) { return { type: messageConstants.GET_MESSAGE_CATEGORY_LIST_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.GET_MESSAGE_CATEGORY_LIST_FAILURE, error } }
}


function deleteMessage(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        messageService.deleteMessage(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(alertActions.success("Delete Message Successfully."));
                    dispatch(this.getMessageList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DELETE_MESSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.DELETE_MESSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DELETE_MESSAGE_FAILURE, error } }
}

function deleteMessageCategory(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        messageService.deleteMessageCategory(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(alertActions.success("Delete Message Category Successfully."));
                    dispatch(this.getMessageCategoryList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DELETE_MESSAGE_CATEGORY_REQUEST } }
    function success(users) { return { type: messageConstants.DELETE_MESSAGE_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DELETE_MESSAGE_CATEGORY_FAILURE, error } }
}

function deleteQuotesCategory(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        messageService.deleteQuotesCategory(data)
            .then(
                users => {
                    dispatch(alertActions.success("Quotes Delete Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesCategoryList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DELETE_PT_PACKAGE_REQUEST } }
    function success(users) { return { type: messageConstants.DELETE_PT_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DELETE_PT_PACKAGE_FAILURE, error } }
}
function deleteQuotes(data, paginationData) {
    // let reqData = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }
    return dispatch => {
        dispatch(request());
        messageService.deleteQuotes(data)
            .then(
                users => {
                    dispatch(alertActions.success("Quotes Delete Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesList(paginationData));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DELETE_QUOTES_REQUEST } }
    function success(users) { return { type: messageConstants.DELETE_QUOTES_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DELETE_QUOTES_FAILURE, error } }
}
function disableMessage(data, paginationData) {

    return dispatch => {
        dispatch(request());
        messageService.disableMessage(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(alertActions.success("Status Update Successfully."));
                    dispatch(this.getMessageList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
                );
            };
    function request() { return { type: messageConstants.DISABLE_MESSAGE_REQUEST } }
    function success(users) { return { type: messageConstants.DISABLE_MESSAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DISABLE_MESSAGE_FAILURE, error } }
}
function disableQuotesCategory(data, paginationData) {
    
    return dispatch => {
        dispatch(request());
        messageService.disableQuotesCategory(data)
            .then(
                users => {
                    dispatch(alertActions.success("Quotes Status Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesCategoryList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DISABLE_PT_PACKAGE_REQUEST } }
    function success(users) { return { type: messageConstants.DISABLE_PT_PACKAGE_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DISABLE_PT_PACKAGE_FAILURE, error } }
}
function disableQuotes(data, paginationData) {
    
    return dispatch => {
        dispatch(request());
        messageService.disableQuotes(data)
            .then(
                users => {
                    dispatch(alertActions.success("Quotes Status Update Successfully."));
                    dispatch(success(users));
                    dispatch(this.getQuotesList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DISABLE_QUOTES_REQUEST } }
    function success(users) { return { type: messageConstants.DISABLE_QUOTES_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DISABLE_QUOTES_FAILURE, error } }
}
function disableMessageCategory(data, paginationData) {

    return dispatch => {
        dispatch(request());
        messageService.disableMessageCategory(data)
            .then(
                users => {
                    dispatch(success(users));
                    dispatch(alertActions.success("Status Update Successfully."));
                    dispatch(this.getMessageCategoryList(paginationData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: messageConstants.DISABLE_MESSAGE_CATEGORY_REQUEST } }
    function success(users) { return { type: messageConstants.DISABLE_MESSAGE_CATEGORY_SUCCESS, users } }
    function failure(error) { return { type: messageConstants.DISABLE_MESSAGE_CATEGORY_FAILURE, error } }
}
