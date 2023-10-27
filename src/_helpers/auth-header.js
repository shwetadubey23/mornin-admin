// import React from 'react'
// import  { Redirect } from 'react-router-dom'
// return <Redirect to='/login'  />

export function authHeader() {
    // return authorization header with jwt token

    let user = JSON.parse(localStorage.getItem('user'));
    // console.log("usersssssssss : ",user );
    
    if (user && user.data && user.data.token) {
        return { 'Authorization': 'Bearer ' + user.data.token };
    } else {
        return {};
    }
}