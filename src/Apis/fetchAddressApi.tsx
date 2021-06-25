import axios from "axios";


export default axios.create({
    baseURL: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse',
    method: 'GET',
    headers: {
        "x-rapidapi-key": "fc33dc1a41msh998c2c6e14ac90bp197f08jsn0eedd98899d0",
        "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
        "useQueryString": true
    }
});
