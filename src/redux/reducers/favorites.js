import requestApi from "../../api/request-api";

let initialState = {
    requests: [],
    notification: false
}

const userFavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return {
                ...state,
                requests: action.payload
            }  
        case "SET_NOTIFICATION_INFO":
            return {
                ...state,
                notification: action.payload
            }      
        default:
            return state;       
    }
}

export const set_request = (requests) => ({type: "SET_FAVORITES", payload: requests})
export const set_notification_info = (info) => ({type: "SET_NOTIFICATION_INFO", payload: info})

export const requestInfoAThunk = () => async dispatch => {
    dispatch(set_notification_info(true))
    setTimeout(() => {
        dispatch(set_notification_info(false))
        debugger
    }, 5000)
}

export const getFavoritesThunk = (id) => async dispatch => {
    let response = await requestApi.getFavorites(id)
    let request_data = response.data.length ? response.data : "request_no"
    dispatch(set_request(request_data))
}

export const addFavoriteThunk = (object) => async dispatch => {
    let {id, request, sort_variant, title, videos_number} = object;
    let response = await requestApi.addFavorite(request, id, videos_number, sort_variant, title)
    if(response.status === 201) {
        dispatch(getFavoritesThunk(id))
        dispatch(requestInfoAThunk())
    }
}

export const editFavoriteThunk = (object) => async dispatch => {
    let {id, user_id, request, sort_variant, title, videos_number} = object;
    let response = await requestApi.editFavorite(id, request, user_id, videos_number, sort_variant, title)
    if(response.status === 200) {
        dispatch(getFavoritesThunk(user_id))
        dispatch(requestInfoAThunk())
    }
}

export const removeFavoriteThunk = (id, userId) => async dispatch => {
    let response = await requestApi.removeFavorite(id)
    if(response.status === 200) {
        dispatch(getFavoritesThunk(userId))
        dispatch(requestInfoAThunk())
    }
}

export default userFavoritesReducer;