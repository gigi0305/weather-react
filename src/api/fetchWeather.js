import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '2e3cacda7db0d05a794a25b06681129d'
export
 const fetchWeather = async(query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q:query,
            units: 'metric',
            APPID: apiKey,
        }
    });
    return data;
}
