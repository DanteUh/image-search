/* Create your own unsplash.js file so we don't commit Authorization keys */
import axios from 'axios';

// Creating axios from here so we only have to import this file for automatic baseURL and Authorization
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID <Your private Access Key here>'
  }
});
