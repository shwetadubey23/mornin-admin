import { alertConstants } from '../_constants';//Raman
import { toast } from 'react-toastify';


export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    let messagetest = message.toString();
    // toast(messagetest)
    toast.success(messagetest, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    let messagetest = message.toString();
    // toast(messagetest)
    toast.error(messagetest, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return { type: alertConstants.ERROR, message: messagetest };
}

function clear() {
    return { type: alertConstants.CLEAR };
}