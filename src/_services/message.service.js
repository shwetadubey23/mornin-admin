
import { authHeader, history } from '../_helpers';
import { CONST } from '../_config';

export const messageService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllMessageCategory,
    getAllQuotesCategory,
    createMessage,
    updateMessage,
    getMessageList,
    deleteMessage,
    disableMessage,
    createQuotesCategory,
    createQuotes,
    createMessageCategory,
    updateMessageCategory,
    getMessageCategoryList,
    deleteMessageCategory,
    disableMessageCategory,
    getMassageUserById,
    updateMassageUserPassword,
    updateQuotesCategory,
    getQuotesCategoryList,
    disableQuotesCategory,
    deleteQuotesCategory,
    updateQuotes,
    getQuotesList,
    disableQuotes,
    deleteQuotes,

};
function logout() {
    localStorage.removeItem('user');
    window.location.href = "#/login";
    history.push(`#/login`);
    window.location.reload();


}
function login(data) {

    // console.log("datadatadata::`!@#$%^&*()_+:", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }

            console.log("useruseruser:::", user);

            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return userObj;
        });
}

function getQuotesCategoryList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // console.log('requestOptionsrequestOptionsrequestOptionsrequestOptionsrequestOptions', requestOptions);
    return fetch(CONST.BACKEND_URL + `/getQuotesSubCategoryList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getQuotesCategoryList: data.data
            }
            // console.log("i am in service getQuotesCategoryList", userObj);

            return userObj;
        });
}

function getQuotesList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // console.log('requestOptionsrequestOptionsrequestOptionsrequestOptionsrequestOptions', requestOptions);
    return fetch(CONST.BACKEND_URL + `/getQuotesList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getQuotesList: data.data
            }
            // console.log("i am in service getQuotesList", userObj);

            return userObj;
        });
}

function getMessageList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    console.log("headerheaderheaderheader", header.Authorization);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // console.log('requestOptionsrequestOptionsrequestOptionsrequestOptionsrequestOptions', requestOptions);
    return fetch(CONST.BACKEND_URL + `/getMessageList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getMessageList: data.data
            }
            console.log("i am in service getMessageList", userObj);

            return userObj;
        });
}

function getMessageCategoryList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    // console.log('requestOptionsrequestOptionsrequestOptionsrequestOptionsrequestOptions', requestOptions);
    return fetch(CONST.BACKEND_URL + `/getMessageSubCategoryList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getMessageCategoryList: data.data
            }
            // console.log("i am in service getMessageCategoryList", userObj);

            return userObj;
        });
}

function getAllMessageCategory() {
    // // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllMessageSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllMessageCategory: data.data
            }
            // console.log("i am in service getAllMessageCategory", userObj);

            return userObj;
        });
}

function getAllQuotesCategory() {
    // // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllQuotesSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllQuotesCategory: data.data
            }
            // console.log("i am in service getAllQuotesCategory", userObj);

            return userObj;
        });
}

function getMassageUserById() {
    // // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getMassageUserById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getMassageUserById: data.data
            }
            // console.log("i am in service getMassageUserById", userObj);

            return userObj;
        });
}

// function verifyEmail(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/validateOtpAdmin`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 verifyEmail: data.data
//             }
//             // console.log("i am in service''...>> verifyEmail ::", userObj);

//             return userObj;
//         });
// }

function deleteMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteMessgae`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteMessage: data.data
            }
            // console.log("i am in service''...>> deleteMessage ::", userObj);

            return userObj;
        });
}
function deleteQuotesCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteQuotesSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteQuotesCategory: data.data
            }
            // console.log("i am in service''...>> deleteQuotesCategory ::", userObj);

            return userObj;
        });
}
function deleteMessageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteMessageSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteMessageCategory: data.data
            }
            // console.log("i am in service''...>> deleteMessageCategory ::", userObj);

            return userObj;
        });
}
function disableQuotesCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateQuotesSubCategoryStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateQuotesCategoryStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}
function deleteQuotes(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteQuotesSub`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteQuotes: data.data
            }
            // console.log("i am in service''...>> deleteQuotes ::", userObj);

            return userObj;
        });
}

function disableQuotes(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateQuotesSubStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateQuotesStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}
function disableMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMessageStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateMessageStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}
function disableMessageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMessageSubCategoryStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateMessageCategoryStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}

function updateMessageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMessageSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateMessageCategory: data.data
            }
            // console.log("I am in service updateMessageCategory", userObj);

            return userObj;
        });
}

function updateMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMessage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateMessage: data.data
            }
            // console.log("I am in service updateMessage", userObj);

            return userObj;
        });
}

function updateQuotesCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateQuotesSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateQuotesCategory: data.data
            }
            // console.log("I am in service updateQuotesCategory", userObj);

            return userObj;
        });
}

function updateQuotes(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateQuotes`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateQuotes: data.data
            }
            // console.log("I am in service updateQuotes", userObj);

            return userObj;
        });
}

function updateMassageUserPassword(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateMassageUserPassword`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateMassageUser: data.data
            }
            // console.log("I am in service updateMassageUserPassword", userObj);

            return userObj;
        });
}
function createQuotesCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createQuotesSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createQuotesCategory: data.data
            }
            // console.log("I am in service createQuotesCategory", userObj);

            return userObj;
        });
}
function createQuotes(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createQuotes`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createQuotes: data.data
            }
            // console.log("I am in service createQuotes", userObj);

            return userObj;
        });
}
function createMessage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createMessage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createMessage: data.data
            }
            console.log("I am in service createMessage", userObj);

            return userObj;
        });
}
function createMessageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createMessageSubCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createMessageCategory: data.data
            }
            // console.log("I am in service createMessageCategory", userObj);

            return userObj;
        });
}
// function updateUserPasswordSubmit(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/UpdatePasswordUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 UpdatePasswordUser: data.data
//             }
//             // console.log("I am in service UpdatePasswordUser", userObj);

//             return userObj;
//         });
// }

// function loginToThisAccount(data) {
//     // // console.log("data m kya aa rha h::service:::", data);
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/loginToUserAccount`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 loginToThisAccount: data.data
//             }
//             // console.log("i am in service loginToThisAccount {{{{{{{}}}}}}}::", userObj);

//             return userObj;
//         });
// }

// function getProfile(data) {
//     // // console.log("data m kya aa rha h::service:::", data);
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getProfile`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getProfile: data.data
//             }
//             // console.log("i am in service loginToThisAccount {{{{{{{}}}}}}}::", userObj);

//             return userObj;
//         });
// }

// function getRestaurant(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/useroverView`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 restaurantDetails: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }
// function getAllNotification(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getNotificationList`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 listOfNotification: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }
// function updateNotificationStatus(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateNotificationStatus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 listOfNotification: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }
// function createNewUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createNewUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createNewUser: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }
// function deleteUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/deleteUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 deleteUser: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }

// function addMenu(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/addMenu`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 addMenu: data.data
//             }
//             // console.log();

//             return userObj;
//         });
// }

// function addItem(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/addItem`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 addItem: data.data
//             }
//             return userObj;
//         });
// }

// function updatePasswordUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updatePasswordUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 addItem: data.data
//             }
//             return userObj;
//         });
// }
// function sendFrom(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/sendFrom`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 addItem: data.data
//             }
//             return userObj;
//         });
// }

// function uploadImage(filedata) {

//     let header = new Headers({
//         "Authorization": authHeader().Authorization
//     });
//     var data = new FormData();
//     data.append('image', filedata);

//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: data
//     }
//     return fetch(CONST.BACKEND_URL + `/uploadFile`, requestOptions)
//         .then(handleResponse)
//         .then(res => {
//             let userObj = {
//                 filesDetails: res.data
//             }
//             return userObj;
//         });
// }

// function onChangeImageFile(filedata,id) {

//     let header = new Headers({
//         "Authorization": authHeader().Authorization
//     });
//     var data = new FormData();
//     data.append('image', filedata);

//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: data
//     }
//     return fetch(CONST.BACKEND_URL + `/uploadFile`, requestOptions)
//         .then(handleResponse)
//         .then(res => {
//             let userObj={
//                 "id": id,
//                 "isAdd": true,
//                 "imageName": res.data.uploadedImageName
//             }
//             // console.log("userObj  ",userObj);

//             return this.addOrRemoveImageInRestaurant(userObj)

//         });
// }
// function onChangeImageFileLogo(filedata,id) {
//     let header = new Headers({
//         "Authorization": authHeader().Authorization
//     });
//     var data = new FormData();
//     data.append('image', filedata);
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: data
//     }
//     return fetch(CONST.BACKEND_URL + `/uploadFile`, requestOptions)
//         .then(handleResponse)
//         .then(res => {
//             let userObj={
//                 "restaurantId": id,
//                 "imageName": res.data.uploadedImageName
//             }
//             // console.log("userObj  ",userObj);
//             return this.updateRestaurantLogo(userObj)
//         });
// }
// function addOrRemoveImageInRestaurant(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/addOrRemoveImageInRestaurant`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 addImageRestaurant: data.data
//             }
//             return userObj;
//         });
// }
// function updateRestaurantLogo(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateRestaurantLogo`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 addImageRestaurant: data.data
//             }
//             return userObj;
//         });
// }
// function deleteItem(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/deleteItem`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 delItem: data.data
//             }
//             return userObj;
//         });
// }
// function disableItem(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/disableItem`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 disableItem: data.data
//             }
//             return userObj;
//         });
// }

// function deleteRestaurant(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/verifyEmail`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 deleteRestaurant: data.data
//             }
//             return userObj;
//     });
// }

// function disableRestaurant(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/disableUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 disableRestaurant: data.data
//             }
//             return userObj;
//     });
// }
// function disableMassage(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/disableMenu`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 disableMassage: data.data
//             }
//             return userObj;
//     });
// }
// function deleteMessage(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/deleteMenu`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 deleteMessage: data.data
//             }
//             return userObj;
//     });
// }

// function updateRestaurant(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateRestaurant`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updateRestaurant: data.data
//             }
//             return userObj;
//     });
// }

// function updateMassageUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateMenu`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updateMassageUser: data.data
//             }
//             return userObj;
//     });
// }


// function updateItem(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateItem`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updateItem: data.data
//             }
//             return userObj;
//     });
// }

// function statics() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header
//     }
//     return fetch(CONST.BACKEND_URL + `/adminoverView`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 statics: data.data
//             }
//             return userObj;
//         });
// }

function handleResponse(response) {
    // // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            // console.log("datadatadata ", response);

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        //// console.log("datadatadatadatadata   ", data.error);
        if (data.error) {
            // console.log("datadatadatadatadata   ", data);
            if (data.code === 3) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}