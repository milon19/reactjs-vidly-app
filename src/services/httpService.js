import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    console.log("dukse");
    return response;
  },

  (error) => {
    console.log("miss");
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    console.log("Error    ", error.response);
    console.log(expectedError);
    if (!expectedError) {
      console.log("logging the error", error);
      alert("An unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
