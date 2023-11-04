import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8082/api/v1/auth';

class FormService {
  captureUserDetails(user) {
    return axios.post(USER_API_BASE_URL + '/register', user);
  }

  getUser() {
    return axios.get(USER_API_BASE_URL);
  }

  logoutUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  loginByEmailAddress(emailAddress) {
    return axios.post(USER_API_BASE_URL + '/authenticate', emailAddress);
  }
}

export default new FormService();
