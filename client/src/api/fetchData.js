import axios from "axios";

export const fetchData = () => {
    return axios
      .get(
        "http://localhost:3000/api/colors"
      )
      .then(res => {
        return res
      });
  };
