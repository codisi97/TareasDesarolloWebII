import axios from 'axios';
const API_URL = 'http://localhost:5000';

export const getValorMaximo = async () => {
    const response = await axios.get(`${API_URL}/valores-maximos`);
    return response.data.data;
  }

  export const getStatus = async () => {
    const response = await axios.get(`${API_URL}/status`);
    return response.data.data;
  }

    export const getPlannerCode = async () => {
    const response = await axios.get(`${API_URL}/productocostoso`);
    return response.data.data;
  }
