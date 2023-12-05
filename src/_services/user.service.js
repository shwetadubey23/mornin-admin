
import { authHeader, history } from '../_helpers';
import { CONST, } from '../_config';
import axios from 'axios';

export const userService = {
    marketAnalysisDashboard,
    login,
    logout,
    childListActiveUser,
    activeSport,
    uploadImage,
    uploadMultiImages,
    // creditdata,


    // getTransactions,
    // loginValidateOtp,
    // forgotPassword,
    // sendOtpTX,
    // sendFromWithOTP,
    // resendVerificationLink,
    // register,
    // sendFrom,
    // getUserDetails,
    // verifyEmail,
    // createNotification,
    // validateId,
    // forgotUpdatePassword,


    // addUser,
    // uploadImage,
    // statics,
    // disableUser,
    // updateUser,
    // deleteUser,

    // changePassword,
    // getUserList,
    // createUser,
    // getAllMatchActiveBySportId,
    // changeOwnPassword,
    // getBets,
    // getStatement,
    // deposit,
    // withdraw,
    // getOwnChild,
    // getUserDetailsById,
    // getAllMatchActive,
    // declareResult,
    // getSelectionByMarketId,
    // getPL,
    // getMatchByMatchIdV2,
    // getUserSetting,
    // saveBetData,
    // getWorldFancy,
    // getUserListByUserType,
    // getProfile,
    // getAllSport,
    // createSeries,
    // getAllSeries,
    // getAllMatch,
    // getAllMarket,
    // getAllFancy,
    // createMatch,
    // createMarket,
    // updateFancyStatus,
    // updateMatchStatus,
    // createAppSetting,
    // getAppSettingList,
    // updateAppSetting,
    // deleteAppSetting,
    // disableAppSetting,
    // getMyShare,
    // getAllMatchBySportId,
    // getAllFancyByMatchId,
    // getAllMatchSession,
    // upcomingMatches,
    // liveMatchList,
    // updateMatchfmId
};

function logout() {
    // console.log("yyyyyyyyyyyyyyyyyyy");
    localStorage.removeItem('user');
    history.push(`#/login`);
}
function onerrorlogout() {

    localStorage.removeItem('user');
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

function uploadImage(filedata) {
    // console.log('filedatafiledatafiledatafiledatafiledata', filedata);

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);
    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                filesDetails: res.data
            }
            console.log("servive_uploadImage", userObj);
            return userObj;
        });
}
// function uploadMultiImages(filedata) {
//     // console.log('filedatafiledatafiledatafiledatafiledata', filedata);

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
//     return fetch(CONST.BACKEND_URL + `/uploadMultiImages`, requestOptions)
//         .then(handleResponse)
//         .then(res => {
//             let userObj = {
//                 filesDetails: res.data
//             }
//             console.log("servive_uploadImage", userObj);
//             return userObj;
//         });
// }


function uploadMultiImages(filedata) {
    console.log('filedatafiledatafiledatafiledatafiledata', filedata);

    const header = {
        "Authorization": authHeader().Authorization
    };

    const data = new FormData();
    data.append('images', filedata);

    console.log('datadatadatadatadatadata', data)

    const requestOptions = {
        method: "POST",
        headers: header,
        data: data
    };
console.log('requestOptionsrequestOptionsrequestOptions', requestOptions)
    return axios.post(CONST.BACKEND_URL + `/uploadMultiImages`, data, requestOptions)
        .then(response => {
            let userObj = {
                filesDetails: response.data
            };
            console.log("servive_uploadImage", userObj);
            return userObj;
        })
        .catch(error => {
            // Handle errors here
            console.error("Error in uploadMultiImages:", error);
            throw error; // rethrow the error
        });
}




function marketAnalysisDashboard(data) {

    // console.log("datahjdsdasjkdhsa:", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/market-analysis/dashboard`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                marketAnalysisDashboard: data
            }
            // console.log("SERVICE____marketAnalysisDashboard:::", userObj);
            return userObj;
        });
}

function childListActiveUser(data) {

    // console.log("datahjdsdasjkdhsa:", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/child-list-active-user`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childListActiveUser: data.data
            }

            console.log("userObjuserObj", userObj);
            return userObj;
        });
}

function activeSport() {


    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sport/active-sport-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                activeSport: data.data
            }

            console.log("userObjuserObj", userObj);
            return userObj;
        });
}

// function creditdata(data) {

//     console.log("datahjdsdasjkdhsa:", data);

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/dwc/creditdata`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 creditdata: data.data
//             }
//             console.log("SERVICE___creditdata:::", userObj);
//             return userObj;
//         });
// }



// function loginValidateOtp(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/loginValidateOtp`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             if (user.data) {
//                 localStorage.setItem('user', JSON.stringify(user.data));
//             }

//             return userObj;
//         });
// }
// function verifyEmail(data) {

//     const requestOptions = {
//         method: "GET",
//     }
//     return fetch(CONST.BACKEND_URL + `/verifyEmail?id=${data.id}&token=${data.token}`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function validateId(data) {
//     const requestOptions = {
//         method: "GET",
//     }
//     return fetch(CONST.BACKEND_URL + `/validateId?id=${data.id}`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfotoken: user.data
//             }
//             return userObj;
//         });
// }

// function getAllFancyByMatchId(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllFancyByMatchId`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAllFancyByMatchId: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }
// function updateMatchStatus(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateMatchStatus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 updateMatchStatus: data.data
//             }
//             // console.log("i am in service updateMatchStatus ::", userObj);

//             return userObj;
//         });
// }

// function updateMatchfmId(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateMatchfmId`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 updateMatchfmId: data.data
//             }
//             // console.log("i am in service updateMatchfmId ::", userObj);

//             return userObj;
//         });
// }

// function createAppSetting(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createAppSetting`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createAppSetting: data.data
//             }
//             // console.log("i am in service createAppSetting ::", userObj);

//             return userObj;
//         });
// }

// function updateAppSetting(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateAppSetting`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 updateAppSetting: data.data
//             }
//             // console.log("i am in service updateAppSetting ::", userObj);

//             return userObj;
//         });
// }

// function deleteAppSetting(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/deleteAppSetting`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 deleteAppSetting: data.data
//             }
//             // console.log("i am in service deleteAppSetting ::", userObj);

//             return userObj;
//         });
// }

// function disableAppSetting(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/disableAppSetting`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 disableAppSetting: data.data
//             }
//             // console.log("i am in service disableAppSetting ::", userObj);

//             return userObj;
//         });
// }

// function getAllMatchBySportId(data) {

//     console.log("datadatadatadatadatadatadatadata===>", data);

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllMatchBySportId`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAllMatchBySportId: data.data
//             }
//             console.log("!!!!!!!!!!!!!123i am in service getAllMatchBySportId ::", userObj);

//             return userObj;
//         });
// }


// function getMyShare(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getPartnership`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getMyShare: data.data
//             }
//             // console.log("i am in service getMyShare ::", userObj);

//             return userObj;
//         });
// }

// function getAppSettingList(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAppSettingList`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAppSettingList: data.data
//             }
//             // console.log("i am in service getAppSettingList ::", userObj);

//             return userObj;
//         });
// }

// function getAllSport(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         headers: header,
//     }
//     return fetch(CONST.BACKEND_URL + `/getActiveSport`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 AllSport: data.data
//             }
//             // console.log("i am in service allSportallSportallSportallSport ::", userObj);

//             return userObj;
//         });
// }

// function createSeries(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createSeries`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createSerie: data.data
//             }
//             console.log("i am in service createSeriescreateSeriescreateSeriescreateSeries ::", userObj);

//             return userObj;
//         });
// }

// function getAllSeries(sportId) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllSeries?sportId=${sportId}`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 allSeries: data.data
//             }
//             // console.log("i am in service getAllSeriesgetAllSeriesgetAllSeries ::", userObj);

//             return userObj;
//         });
// }

// function getAllMatch(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllMatch?series_id=${data.series_id}&game_id=${data.game_id}`, requestOptions)
//         // return fetch(CONST.BACKEND_URL + `/getAllMatch?sportId=4&seriesId=11365612`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 allMatch: data.data
//             }
//             console.log("i am in service getAllMatchgetAllMatchgetAllMatchgetAllMatch:::::::::::", userObj);

//             return userObj;
//         });
// }

// function getAllMarket(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllMarket?matchId=${data.matchId}`, requestOptions)
//         // return fetch(CONST.BACKEND_URL + `/getAllMarket?matchId=4&seriesId=11365612`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 allMarket: data.data
//             }
//             console.log("i am in service getAllMarket:::::::::::123", userObj);

//             return userObj;
//         });
// }

// function getAllFancy(data) {

//     console.log("i am in service getAllFancy:::::::::::123__data", data.marketId);

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllFancy?marketId=${data.marketId}`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 allFancy: data.data
//             }
//             console.log("i am in service getAllFancy:::::::::::123", userObj);

//             return userObj;
//         });
// }

// function createMatch(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createMatch`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createSerie: data.data
//             }
//             console.log("i am in service createMatchcreateMatchcreateMatchcreateMatch ::", userObj);

//             return userObj;
//         });
// }

// function createMarket(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createMarket`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createMarket: data.data
//             }
//             console.log("i am in service createMarket ::", userObj);

//             return userObj;
//         });
// }

// function updateFancyStatus(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateFancyStatus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 updateFancy: data.data
//             }
//             // console.log("i am in service allSportallSportallSportallSport ::", userObj);

//             return userObj;
//         });
// }

// function forgotPassword(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/forgotPassword`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function resendVerificationLink(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/resendVerificationLink`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function createNotification(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createNotification`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function register(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/register`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function forgotUpdatePassword(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/forgotUpdatePassword`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }
// function getUserDetails(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/overView`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserDetails: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }
// function getBets(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getBets`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getBets: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }
// function withdraw(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/withdraw`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 withdraw: data
//             }
//             //console.log();
//             return userObj;
//         });
// }
// // function deposit(data) {

// //     console.log("deposit____________Service:::", data);


// //     let header = new Headers({
// //         'Content-Type': 'application/json',
// //         "Authorization": authHeader().Authorization
// //     });
// //     const requestOptions = {
// //         method: "POST",
// //         headers: header,
// //         body: JSON.stringify(data)
// //     }

// //     console.log("deposit____________requestOptions:::", requestOptions);


// //     return fetch(CONST.BACKEND_URL + `/deposit`, requestOptions)
// //         .then(handleResponse)
// //         .then(data => {

// //             let userObj = {
// //                 deposit: data.data
// //             }
// //             //console.log();
// //             return userObj;
// //         });
// // }

// function deposit(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions_deposit:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/deposit`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 deposit: data
//             }
//             console.log("SERVICE______--deposit::::", userObj);
//             return userObj;
//         });
// }


// function saveBetData(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     // return fetch(CONST.BACKEND_URL + `/saveBet`, requestOptions)
//     return fetch(`http://localhost:5099/api/v1/saveBet`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 saveBetData: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }


// function getUserDetailsById(data) {
//     console.log("getUserDetailsById__service::", data);
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });

//     // console.log("getUserDetailsById_____header:^^^::", header.Authorization);

//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     // console.log("getUserDetailsById_____requestOptions:#$%^::", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getUserDetailsById`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserDetailsById: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getOwnChild(data) {
//     console.log("getOwnChild__service::", data);
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions____requestOptions:::", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getOwnChild`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getOwnChild: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getStatement(data) {
//     console.log("getStatement___service::", data);
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions____requestOptions:::", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getStatement`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getStatement: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getSelectionByMarketId(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions_getUserList:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getSelectionByMarketId`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getSelectionByMarketId: data.data
//             }
//             console.log("userObj::", userObj);
//             return userObj;
//         });
// }

// function declareResult(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions_getUserList:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/declareResult`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 declareResult: data.data
//             }
//             console.log("userObj::", userObj);
//             return userObj;
//         });
// }


// function getUserSetting() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getUserSetting`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserSetting: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getProfile(data) {
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
//             //console.log();
//             return userObj;
//         });
// }

// function upcomingMatches() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/upcomingMatches`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 upcomingMatches: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function liveMatchList() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/liveMatchList`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 liveMatchList: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getUserListByUserType(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getUserListByUserType`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserListByUserType: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getWorldFancy(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "GET",
//         headers: header,
//         // body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getWorldFancy?marketid=${data.marketid}`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getWorldFancy: data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getAllMatchSession(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllMatchSession?marketId=${data.marketId}`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAllMatchSession: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getMatchByMatchIdV2(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getMatchByMatchIdV2`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getMatchByMatchIdV2: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }

// function getPL() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//     }

//     console.log("requestOptions_getUserList:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getPL`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getPL: data.data
//             }
//             console.log("userObj::", userObj);
//             return userObj;
//         });
// }

// function getAllMatchActive() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//     }

//     console.log("requestOptions_getUserList:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getAllMatchActive`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAllMatchActive: data.data
//             }
//             console.log("userObj::", userObj);
//             return userObj;
//         });
// }

// function getUserList(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }

//     console.log("requestOptions_getUserList:", requestOptions);

//     return fetch(CONST.BACKEND_URL + `/getUserList`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserList: data.data
//             }
//             //console.log();
//             return userObj;
//         });
// }
// function getTransactions(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getTransactions`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getTxData: data.data
//             }
//             //console.log();
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
//         .then(user => {
//             let userObj = {
//                 userinfo: user.data
//             }
//             return userObj;
//         });
// }
// function sendFromWithOTP(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/sendFromWithOTP`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user.data
//             }
//             return userObj;
//         });
// }
// function sendOtpTX(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/sendOtpTX`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             let userObj = {
//                 userinfo: user
//             }
//             return userObj;
//         });
// }

// function getAllMatchActiveBySportId(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/getAllMatchActiveBySportId`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getAllMatchActiveBySportId: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }

// function createUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/createUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 createUser: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }

// function addUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/addUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 addUser: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }
// function disableUser(data) {
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
//                 addUser: data.data
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
//                 addUser: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }
// function changeOwnPassword(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/changeOwnPassword`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 changeOwnPassword: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }

// function changePassword(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/changePassword`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 addUser: data.data
//             }
//             console.log();

//             return userObj;
//         });
// }

// function updateUser(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/updateUser`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 addUser: data.data
//             }
//             console.log();

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
// function statics() {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header
//     }
//     return fetch(CONST.BACKEND_URL + `/statics`, requestOptions)
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
        // console.log("response22222   ", data);
        if (!response.ok) {


            console.log("response.status___handleResponse::", response.status);

            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            console.log("datadatadatadatadata   ", data);
            if (data.code === 3) {

                onerrorlogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}