import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8080";

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
  postComment: function(send) {
    return axios.post(`${burl}/dashboard/postComment`, send, {headers: headers});
  },
  getComment: function() {
    return axios.get(`${burl}/dashboard/getComment`);
  },
  logout: function() {
    localStorage.clear();
  },
  getLastComment: function() {
    return axios.get(`${burl}/dashboard/getLastComment`);
  },
  getLastUser: function() {
    return axios.get(`${burl}/auth/getLastUser`);
  },
  getUser: function() {
    return axios.get(`${burl}/auth/getUser`);
  },
  getProduct: function() {
    return axios.get(`${burl}/product/getProduct`);
  },
  getLastProduct: function() {
    return axios.get(`${burl}/product/getLastProduct`);
  },
  getByIdProduct: function(id) {
    return axios.get(`${burl}/product/getByIdProduct/` + id);
  },
  getSeminaries: function(){
    return axios.get(`${burl}/product/getSeminaries/`);
  },
  getTrainings: function(){
    return axios.get(`${burl}/product/getTrainings/`);
  }

};
