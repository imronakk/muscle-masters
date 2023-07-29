import axios from 'axios';

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    headers: {
        'X-RapidAPI-Key': '1890bd3ea3msh73034f1bf974242p1b0f8ajsnedad9ebc9801',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const response = await axios.request(`${BASE_URL}/${url}`, options);
        return response.data;
    } catch (error) {
        console.log(error, "While Fetching Data");
    }
}