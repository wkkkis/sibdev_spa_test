import { instance } from "./api"

const requestApi = {
    getFavorites(id) {
        return instance.get(`requests?user_id=${id}`)
    },
    addFavorite(request, userId, video_number, sort, title) {
        return instance.post(`requests`, {
            request: request,
            title: title,
            video_number: video_number,
            sort_variant: sort,
            user_id: userId
        })
    },
    editFavorite(id, request, userId, video_number, sort, title) {
        return instance.put(`requests/${id}`, {
            request: request,
            title: title,
            video_number: video_number,
            sort_variant: sort,
            user_id: userId
        })
    },
    removeFavorite(id) {
        return instance.delete(`requests/${id}`)
    }
}

export default requestApi;