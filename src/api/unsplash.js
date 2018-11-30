import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID c9070f265e858465b3335f0d476c3c531e367f48ba384f282e879f134caa50c9'
    }
});