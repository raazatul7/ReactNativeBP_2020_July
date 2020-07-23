import axios from 'axios';
import LocalStorage from './LocalStorage';

const axiosInstance = axios.create({
  timeout: 1500,
});

var apiCalling = {
  getApi: async (url, successCallback, errorCallback) => {
    const token = await LocalStorage.read('token');
    console.log('getApi url >>', url);
    const apiHeaders = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .get(url, apiHeaders)
      .then((response) => {
        console.log('GET API Response >> ', response);
        successCallback(response);
      })
      .catch((error) => {
        console.log('GET API Error >> ', error);
        errorCallback(error);
      });
  },

  postApi: async (url, params, successCallback, errorCallback) => {
    const token = await LocalStorage.read('token');
    console.log('postApi url >>', url);
    const apiHeaders = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .post(url, params, apiHeaders)
      .then((response) => {
        console.log('POST API Response >> ', response);
        successCallback(response);
      })
      .catch((error) => {
        console.log('POST API Error >> ', error);
        errorCallback(error);
      });
  },

  deleteApi: async (url, successCallback, errorCallback) => {
    const token = await LocalStorage.read('token');
    console.log('postApi url >>', url);
    const apiHeaders = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .delete(url, apiHeaders)
      .then((response) => {
        console.log('DELETE API Response >> ', response);
        successCallback(response);
      })
      .catch((error) => {
        console.log('DELETE API Error >> ', error);
        errorCallback(error);
      });
  },

  getApiWithoutHeader: (url, successCallback, errorCallback) => {
    console.log('getApiWithoutHeader url >>', url);
    axiosInstance
      .get(url)
      .then((response) => {
        console.log('GET/WH API Response >> ', response);
        successCallback(response);
      })
      .catch((error) => {
        console.log('GET/WH API Error >> ', error);
        errorCallback(error);
      });
  },

  postApiWithoutHeader: (url, params, successCallback, errorCallback) => {
    console.log('postApiWithoutHeader url >>', url);
    axiosInstance
      .post(url, params)
      .then((response) => {
        console.log('POST/WH API Response >> ', response);
        successCallback(response);
      })
      .catch((error) => {
        console.log('POST/WH API Error >> ', error);
        errorCallback(error);
      });
  },
};
module.exports = apiCalling;
