import axios from "axios";

const request = axios.create({
  baseURL: "https://react-car-detailng-backend.herokuapp.com/",
  validateStatus: false,
});

export default request;
