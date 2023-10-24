
import { authHeader, history } from '../_helpers';
import { CONST, } from '../_config';

export const createAccountService = {
    login,
    logout,
    appDetail,
    createUser,
};

function logout() {
    console.log("yyyyyyyyyyyyyyyyyyy");
    localStorage.removeItem('user');
    history.push(`#/login`);
}
function onerrorlogout() {

    console.log("zzzzzzzzzzzzzzz");

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
    return fetch(CONST.BACKEND_URL + `/login/auth`, requestOptions)
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
function appDetail() {


    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/admin/app-detail`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                appDetail: data.data
            }

            console.log("userObjuserObj", userObj);
            return userObj;
        });
}
function createUser(data) {


    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/user/create-user-vg`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                createUser: data
            }

            console.log("userObjuserObj", userObj);
            return userObj;
        });
}
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