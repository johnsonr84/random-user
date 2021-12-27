import axios from "axios";

const API = {
  getMembers: function() {
    return axios.get("https://randomuser.me/api/?nat=us&results=30")
  },
}

export default API;