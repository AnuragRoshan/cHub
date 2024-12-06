import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'd2132124';

export const fetchMovieDetails = async () => {
    try {
        const response = await axios.get(`${API_URL}?i=tt3896198&apikey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
};
