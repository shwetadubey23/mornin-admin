
import { authHeader } from '../_helpers';
import { CONST } from '../_config';

export const creditWithdrawService = {
    login,
    logout,
    // verifyEmail,
    // loginToThisAccount,
    getAllCreditWithdraw,
    createCreditWithdraw,
    updateCreditWithdraw,
    getCreditWithdrawList,
    deleteCreditWithdraw,
    disableCreditWithdraw,
    creditdata,
    depositCredit,
    accountHistory,
    depositChipsPnl,
    withdrawChipsPnl,
    childProfile,
    changePassword,
    updateBetAccountStatus,
    updateUserInfo,
    childListActiveUserCredit,
    depositwithdrawdata,
    childListUser,
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

function childListActiveUserCredit(data) {

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
        // return fetch(`http://api.a2zscore.com/admin-new-apis/user/child-list-active-user`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childListActiveUserCredit: data.data
            }

            console.log("SERVICE____childListActiveUserCredit", userObj);
            return userObj;
        });
}

function childListUser(data) {

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
    return fetch(CONST.BACKEND_URL + `/user/child-list`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childListUser: data.data
            }

            console.log("SERVICE____childListActiveUserCredit", userObj);
            return userObj;
        });
}

function getCreditWithdrawList(data) {
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
    return fetch(CONST.BACKEND_URL + `/getCreditWithdrawList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCreditWithdrawList: data.data
            }
            console.log("i am in service getCreditWithdrawList", userObj);

            return userObj;
        });
}
function getAllCreditWithdraw(data) {
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
    return fetch(CONST.BACKEND_URL + `/getAllCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCreditWithdraw: data.data
            }
            console.log("i am in service getAllCreditWithdraw", userObj);

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

function deleteCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteCreditWithdraw: data.data
            }
            console.log("i am in service''...>> deleteCreditWithdraw ::", userObj);

            return userObj;
        });
}
function disableCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreditWithdrawStatus`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateCreditWithdrawStatus: data.data
            }
            console.log("i am in service''...>> updateCreditWithdrawStatus ::", userObj);

            return userObj;
        });
}

function updateCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCreditWithdraw`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                updateCreditWithdraw: data.data
            }
            console.log("I am in service updateCreditWithdraw", userObj);

            return userObj;
        });
}
function createCreditWithdraw(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/wcr`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/dwc/wcr`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                createCreditWithdraw: data.message
            }
            console.log("I am in service createCreditWithdraw", userObj);

            return userObj;
        });
}
function depositCredit(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/dwc/dcr`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/dwc/dcr`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                depositCredit: data.data
            }
            console.log("I am in service depositCredit", userObj);

            return userObj;
        });
}
function creditdata(data) {

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
    return fetch(CONST.BACKEND_URL + `/dwc/creditdata`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/dwc/creditdata`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                creditdata: data.data
            }
            console.log("SERVICE___creditdata:::", userObj);
            return userObj;
        });
}

function accountHistory(data) {

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
    return fetch(CONST.BACKEND_URL + `/report/account-statement`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                accountHistory: data.data
            }
            console.log("SERVICE___accountHistory:::", userObj);
            return userObj;
        });
}

function depositChipsPnl(data) {

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
    return fetch(CONST.BACKEND_URL + `/dwc/deposit-chips-pnl`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                depositChipsPnl: data.data
            }
            console.log("SERVICE___accountHistory:::", userObj);
            return userObj;
        });
}

function depositwithdrawdata(data) {

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
    return fetch(CONST.BACKEND_URL + `/dwc/depositwithdrawdata`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                depositwithdrawdata: data.data
            }
            console.log("SERVICE___accountHistory:::", userObj);
            return userObj;
        });
}

function withdrawChipsPnl(data) {

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
    return fetch(CONST.BACKEND_URL + `/dwc/withdraw-chips-pnl`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                withdrawChipsPnl: data.message
            }
            console.log("SERVICE____withdrawChipsPnl::22-12-2022:", userObj);
            return userObj;
        });
}

function childProfile(data) {

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
    return fetch(CONST.BACKEND_URL + `/user/child-profile`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                childProfile: data.data
            }
            console.log("SERVICE___accountHistory:::", userObj);
            return userObj;
        });
}

function changePassword(data) {

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
    return fetch(CONST.BACKEND_URL + `/user/change-password-child`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                changePassword: data.message
            }
            console.log("SERVICE___changePassword:::", userObj);
            return userObj;
        });
}

function updateBetAccountStatus(data) {

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
    return fetch(CONST.BACKEND_URL + `/user/update-bet-account-status`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBetAccountStatus: data.message
            }
            console.log("SERVICE___accountHistory:::", userObj);
            return userObj;
        });
}

function updateUserInfo(data) {

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
    return fetch(CONST.BACKEND_URL + `/user/update-user-info`, requestOptions)
        // return fetch(`http://api.a2zscore.com/admin-new-apis/report/account-statement`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateUserInfo: data.message
            }
            console.log("SERVICE___updateUserInfo:::", userObj);
            return userObj;
        });
}

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