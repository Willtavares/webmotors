const axios = require("axios");

const api = axios.create({
  baseURL: "http://desafioonline.webmotors.com.br/api/OnlineChallenge/",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
