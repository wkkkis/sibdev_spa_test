import axios from "axios"

export const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const youtube_instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/'
})