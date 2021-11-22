import axios from 'axios';

const KEY = 'AIzaSyBdv6AliqfpmtW0_eI8ABpyveU-Cm__eaY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
