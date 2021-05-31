import axios from 'axios';

const KEY = 'AIzaSyDJ44PEekyHmXoc0iaTioR4q-5KTZI98wo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});