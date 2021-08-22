import usersApi from "../../api/users-api";
import CryptoJS from "crypto-js";
import {set_request} from "./favorites";
import {set_videos, set_videos_request, set_request_info} from "./videos";

let initialState = {
    id: null,
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload
            }  
        default:
            return state;    
    }
}

export const set_user = (id, isAuth) => ({
    type: "SET_USER",
    payload: {id, isAuth}
});

export const authMe = () => async dispatch => {
    let response = localStorage.getItem("token")
    if(response) {
        let token = CryptoJS.AES.decrypt(`${response}`, `${process.env.REACT_APP_TOKEN_SECRET_KEY}`).toString(CryptoJS.enc.Utf8)
        dispatch(set_user(token, true))
    }
}

export const login = (userLogin, userPassword) => async dispatch => {
    let response = await usersApi.register(userLogin, userPassword);
    if(response.status === 201){
        let {user_login, user_password } = response.data
        dispatch(getUser(user_login, user_password))
    }
}

export const logOut = () => async dispatch => {
    let response = localStorage.removeItem("token")
    if(!response) {
        dispatch(set_user(response, false))
        dispatch(set_request([]))
        dispatch(set_videos([]))
        dispatch(set_videos_request(null))
        dispatch(set_request_info([]))
    }
}

export const getUser = (userLogin, userPassword) => async dispatch => {
    let response = await usersApi.login(userLogin, userPassword)
    if(response.status === 200 && response.data.length){
        let {id} = response.data[0];
        dispatch(set_user(id, true))
        let token = CryptoJS.AES.encrypt(`${id}`, `${process.env.REACT_APP_TOKEN_SECRET_KEY}`).toString();
        localStorage.setItem("token", token)
    }else {
        dispatch(login(userLogin, userPassword))
    }
}

export default userReducer;