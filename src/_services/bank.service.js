
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const bankService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllBank,
    createBank,
    updateBank,
    getBankList,
    deleteBank,
    disableBank,
    getBankById,
    bankDepositWithdraw,
};
function logout() {
    // localStorage.removeItem('adminuser');
    // // window.location.href = "#/login";
    // history.push(`#/login`);
    // window.location.reload();


}
function login(data) {

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
                userinfo: user.data
            }
            if (user.data) {
                localStorage.setItem('adminuser', JSON.stringify(user.data));
            }

            return userObj;
        });
}

function getBankList(data) {
    // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBankList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBankList: data.data
            }
            console.log("i am in service getBankList", userObj);

            return userObj;
        });
}

function bankDepositWithdraw(data) {
    // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/bank-deposit-withdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                bankDepositWithdraw: data.data
            }
            console.log("i am in service bankDepositWithdraw", userObj);

            return userObj;
        });
}
function getAllBank(data) {
    // console.log("data m kya aa rha h::service:::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllBank`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllBank: data.data
            }
            console.log("i am in service getAllBank", userObj);

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
//             console.log("i am in service''...>> verifyEmail ::", userObj);

//             return userObj;
//         });
// }

function deleteBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteBank`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteBank: data.data
            }
            console.log("i am in service''...>> deleteBank ::", userObj);

            return userObj;
        });
}

function getBankById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBankById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBankById: data.data
            }
            console.log("i am in service''...>> getBankById ::", userObj);

            return userObj;
        });
}
function disableBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBankStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBankStatus: data.data
            }
            console.log("i am in service''...>> updateBankStatus ::", userObj);

            return userObj;
        });
}

function updateBank(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBank`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateBank: data.data
            }
            console.log("I am in service updateBank", userObj);

            return userObj;
        });
}
function createBank(data, selectedFile) {

    console.log("selectedFile____selectedFile:::", selectedFile);


    let header = new Headers({
        // 'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    var event = new FormData();
    event.append('logo', selectedFile, selectedFile.name);
    event.append('appname', data.appname);
    event.append('appurl', data.appurl);
    event.append('lupassword', data.lupassword);

    console.log("SERVICE__APP__formData:::", event);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: event
    }
    return fetch(CONST.BACKEND_URL + `/admin/create-app-detail`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createBank: data.data
            }
            console.log("I am in service createBank", userObj);

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
//             console.log("I am in service UpdatePasswordUser", userObj);

//             return userObj;
//         });
// }

// function loginToThisAccount(data) {
//     // console.log("data m kya aa rha h::service:::", data);
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
//             console.log("i am in service loginToThisAccount {{{{{{{}}}}}}}::", userObj);

//             return userObj;
//         });
// }

// function getProfile(data) {
//     // console.log("data m kya aa rha h::service:::", data);
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
//             console.log("i am in service loginToThisAccount {{{{{{{}}}}}}}::", userObj);

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
//             console.log();

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
//             console.log();

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
//             console.log();

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
//             console.log();

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
//             console.log();

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
//             console.log();

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
//             console.log("userObj  ",userObj);

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
//             console.log("userObj  ",userObj);
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
// function disableCategory(data) {
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
//                 disableCategory: data.data
//             }
//             return userObj;
//     });
// }
// function deleteCategory(data) {
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
//                 deleteCategory: data.data
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

// function updateCategory(data) {
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
//                 updateCategory: data.data
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
    // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            console.log("datadatadata ", response);

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log("datadatadatadatadata   ", data.error);
        if (data.error) {
            console.log("datadatadatadatadata   ", data);
            if (data.code === 3) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}