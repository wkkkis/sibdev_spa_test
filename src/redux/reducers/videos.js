import videosApi from "../../api/youtube-api";

let initialState = {
    videos_item: [],
    videos_request: null,
    request_info: []
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VIDEO":
            return {
                ...state,
                videos_item: action.payload
            }  
        case "SET_REQUEST_INFO":
            return {
                ...state,
                request_info: action.payload
            }  
        case "SET_VIDEO_REQUEST":
            return {
                ...state,
                videos_request: action.payload
            }  
        default:
            return state;       
    }
}

export const set_videos = (videos) => ({type:"SET_VIDEO", payload: videos})
export const set_videos_request = (request) => ({type:"SET_VIDEO_REQUEST", payload: request})
export const set_request_info = (info) => ({type:"SET_REQUEST_INFO", payload: info})

export const getVideoThunk = (request, number=12, order="date") => async dispatch => {
    let response = await videosApi.getVideo(request, number, order)
    dispatch(set_request_info(response.data.pageInfo))
    dispatch(set_videos(response.data.items))
    dispatch(set_videos_request(request))
}

export default videoReducer;