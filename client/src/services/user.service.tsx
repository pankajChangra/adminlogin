import axios from "axios";
import * as config from "../config/config";
import getOptions from "./http.header";

function fetchUsers() {
    return axios
      .get(config.API_URL + "/users-detail", getOptions())
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
}

export const userService = {
  fetchUsers,
};