import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:3000";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/auth/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  register: function(send) {
    return axios.post(`${burl}/auth/register`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  postComment: function(body,username) {
    return axios.post(
      `${burl}/dashboard/postComment`,
      {
        title,
        username,
        content
      },
    );
  },
  getComment: function() {
    return axios.post(`${burl}/dashboard/getComment`);
  },
  logout: function() {
    localStorage.clear();
  },
  getLastComment: function() {
    return axios.get(`${burl}/dashboard/getLastComment`);
  },
  getLastUser: function() {
    return axios.get(`${burl}/auth/getLastUser`);
  }
};
