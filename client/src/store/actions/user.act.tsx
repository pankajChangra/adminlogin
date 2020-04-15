import {
    GET_USER_DETAIL_START,
    GET_USER_DETAIL_SUCCESS,
    GET_USER_DETAIL_FAIL,
} from "./actionTypes/user";

import { userService } from "../../services/user.service"

export const userDetailStart = () => {
    return {
      type: GET_USER_DETAIL_START
    };
};

export const userDetailSuccess = (data:string[]) => {
    return {
        type: GET_USER_DETAIL_SUCCESS,
        data: data,
    }
}

export const userDetailFail = (message :any) => {
    return {
        type: GET_USER_DETAIL_FAIL,
        message: message,
    }
}

export const userDetailSignup = () => {
    return (dispatch:any) => {
      dispatch(userDetailStart());
      userService
        .fetchUsers()
        .then(res => {
            console.log(res)
        //   if (res.data.status === 200) {
        //     dispatch(userDetailSuccess(email));
        //   } else if(res.data.error.status === 409){
        //     dispatch(userDetailFail(res.data.error.message));
        //   }
        })
        .catch(err => {
            dispatch(userDetailFail(err))
        });
    };
}