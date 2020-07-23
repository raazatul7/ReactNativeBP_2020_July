import {Toast} from 'native-base';
import LocalStorage from './LocalStorage';

var Utils = {
  validatePassword: function (val) {
    return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(val);
  },

  emailValidation: (emailId) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailId) !== false) {
      return true;
    }
    return false;
  },

  urlValidation: (url) => {
    let isValidUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (isValidUrl.test(url)) {
      return true;
    }
    return false;
  },

  toast: (message, type) => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      duration: 3000,
      type: type,
      buttonTextStyle: {color: '#000'},
      buttonStyle: {backgroundColor: '#fff'},
    });
  },

  isEmpty: (text) => {
    if (text.toString().trim() === '') {
      return true;
    } else {
      return false;
    }
  },

  onChangeNumber: (text) => {
    let newText = '';
    let numbers = '0123456789';
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    return newText;
  },

  onChangeCharacter: (text) => {
    let newText = '';
    let ch = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    for (var i = 0; i < text.length; i++) {
      if (ch.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    return newText.replace(/\s/g, '');
  },

  logout: () => {
    LocalStorage.save('isLogin', JSON.stringify(false));
    LocalStorage.flushQuestionKeys();

    GLOBAL.EMAIL = '';
    GLOBAL.PASS = '';
    GLOBAL.USERNAME = '';
    GLOBAL.LOGGED_IN = false;
    GLOBAL.AUTH_TOKEN = '';
  },
};

module.exports = Utils;
