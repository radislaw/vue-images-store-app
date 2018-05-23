import qs from 'qs';

const CLIENT_ID = '1cdb3c52a0380c3';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/autorize?${qs.stringify(queryString)}`
  }
};