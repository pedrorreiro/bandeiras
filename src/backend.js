import axios from 'axios';

export const getAllCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
}

export const getCountry = async (country) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    return response.data;
}