import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/todo-app-2ad7a/us-central1/api'
});

export default instance
