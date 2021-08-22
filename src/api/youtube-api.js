import { youtube_instance } from "./api";

const videosApi = {
    getVideo (request, number, order) {
        return youtube_instance.get(`search?part=snippet&order=${order}&type=video&q=${request}&maxResults=${number}&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
    }
}

export default videosApi;