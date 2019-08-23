import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://localhost:3030",
});

export default Api;