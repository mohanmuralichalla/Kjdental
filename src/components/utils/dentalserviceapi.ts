import axios from 'axios';
import { Buffer } from 'buffer';
import  DentalService  from '../types/dentalservicelist';

const clientId = 'ewnsthemes';
const clientSecret = 'Laxmidevi@99';
var token;

const base64Auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

function getBearerTokenFromUrl(url:string) {
  const urlParams = new URLSearchParams(url);
  const accessToken = urlParams.get('access_token');
  return accessToken;
}

const data = 'grant_type=client_credentials&scope=api.read&client_id=ewnsthemes&client_secret=Laxmidevi@99';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const postViewForm = async () => {
  try {
    const response = await axios.post('https://identityserver.ewns.in/connect/token', data, { headers });
    token = response.data.access_token; // Assuming the token is in the 'access_token' field
    console.log('Token:', token);
    // Use the token for subsequent requests
  } catch (error) {
    console.error('Error submitting view form:', error);
  }
};

postViewForm();
const api = axios.create({
  baseURL: 'https://api.ewns.in/api/Services/kjsdentalhospital/list?skip=0&limit=9',
  headers: {
    'Authorization': `bearer ${token}`,
    'Content-Type': 'application/json'
  },
});

export const fetchDentalServices = async (): Promise<DentalService[]> => {
  try {
    const url = 'https://kjsdental.co.in/'; // Replace with actual URL
    const token = getBearerTokenFromUrl(url); // Extract token from URL (if needed)


    const headers = token ? { 'Authorization': `Bearer ${token}` } : {}; // Add authorization header if token exists
   console.log(token)
    const response = await api.get<DentalService[]>('', { headers }); // Use the headers object
    return response.data;
  } catch (error) {
    console.error('Error fetching dental services:', error);
    throw error;
  }
};