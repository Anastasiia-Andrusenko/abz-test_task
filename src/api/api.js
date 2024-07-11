import axios from "axios";

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';


// ----------- fetch token
// 
const fetchToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/token`);
    return response.data.token;

  } catch (error) {
    console.error('error fetching token:' , error);
    throw error;
  }
};

// ----------- fetch users
// 
export const fetchUsers = async (page = 1) => {

  try {
    const token = await fetchToken();
    const response = await axios.get(`${API_URL}/users`, {
      params: {page, count: 6},
      headers: {
        'Token': token,
      }
    });
    return response.data;

  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// ----------- fetch position
// 
export const fetchPositions = async () => {
  try {
    const response = await axios.get(`${API_URL}/positions`);
    return response.data;

  } catch (error) {
    console.log('Error fetching positions:', error);
    throw error;
  }
};

// ----------- register user
// 
export const registerUser = async (userData) => {
  try {
    const token = await fetchToken();
    const response = await axios.post(`${API_URL}/users`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': token,
      }
    });
    return response.data;
  } catch (error) {
    console.log('Error register user:', error)
    throw error;
  }
};