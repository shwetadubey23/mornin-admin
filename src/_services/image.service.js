
import { authHeader, history } from '../_helpers';
import { CONST } from '../_config';

export const imageService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllImage,
    getAllPtPackage,
    createImage,
    updateImage,
    getImageList,
    deleteImage,
    disableBanner,
    createPTPackage,
    createImageCategory,
    updateImageCategory,
    getBannerCategoryList,
    deleteImageCategory,
    disableBannerCategory,
    getMassageUserById,
    updateMassageUserPassword,
    updatePTPackage,
    getPTPackageList,
    disablePTPackage,
    deletePTPackage,

};
function logout() {
    localStorage.removeItem('user');
    // window.location.href = "#/login";
    history.push(`#/login`);
    window.location.reload();


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
                localStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}

function getPTPackageList(data) {
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
    return fetch(CONST.BACKEND_URL + `/getPTPackageList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getPTPackageList: data.data
            }
            // console.log("i am in service getPTPackageList", userObj);

            return userObj;
        });
}

function getImageList(data) {
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
    return fetch(CONST.BACKEND_URL + `/getImageList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getImageList: data.data
            }
            // console.log("i am in service getImageList", userObj);

            return userObj;
        });
}

function getBannerCategoryList(data) {
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
    return fetch(CONST.BACKEND_URL + `/getBannerCategoryList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getBannerCategoryList: data.data
            }
            // console.log("i am in service getBannerCategoryList", userObj);

            return userObj;
        });
}

function getAllImage() {
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
    return fetch(CONST.BACKEND_URL + `/getAllImage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllImage: data.data
            }
            // console.log("i am in service getAllImage", userObj);

            return userObj;
        });
}

function getAllPtPackage() {
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
    return fetch(CONST.BACKEND_URL + `/getAllPtPackage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllPtPackage: data.data
            }
            // console.log("i am in service getAllPtPackage", userObj);

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

function deleteImage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteImage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteImage: data.data
            }
            // console.log("i am in service''...>> deleteImage ::", userObj);

            return userObj;
        });
}
function deletePTPackage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deletePTPackage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deletePTPackage: data.data
            }
            // console.log("i am in service''...>> deletePTPackage ::", userObj);

            return userObj;
        });
}
function deleteImageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteImageCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteImageCategory: data.data
            }
            // console.log("i am in service''...>> deleteImageCategory ::", userObj);

            return userObj;
        });
}
function disablePTPackage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updatePTPackageStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updatePTPackageStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}
function disableBanner(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateImageStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateImageStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}
function disableBannerCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateImageCategoryStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateImageCategoryStatus: data.data
            }
            // console.log("i am in service''...>> updateMassageUserStatus ::", userObj);

            return userObj;
        });
}

function updateImageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateImageCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateImageCategory: data.data
            }
            // console.log("I am in service updateImageCategory", userObj);

            return userObj;
        });
}

function updateImage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateImage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateImage: data.data
            }
            // console.log("I am in service updateImage", userObj);

            return userObj;
        });
}

function updatePTPackage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updatePTPackage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updatePTPackage: data.data
            }
            // console.log("I am in service updatePTPackage", userObj);

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
function createPTPackage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createPTPackage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createPTPackage: data.data
            }
            // console.log("I am in service createPTPackage", userObj);

            return userObj;
        });
}
function createImage(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createImage`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createImage: data.data
            }
            // console.log("I am in service createImage", userObj);

            return userObj;
        });
}
function createImageCategory(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createImageCategory`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createImageCategory: data.data
            }
            // console.log("I am in service createImageCategory", userObj);

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
// function deleteImage(data) {
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
//                 deleteImage: data.data
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