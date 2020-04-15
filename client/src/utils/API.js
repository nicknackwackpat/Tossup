import axios from "axios";

export default {
  // Gets all election votes
  getResults: function() {
    return axios.get("/api/election");
  },
  // Gets the election results with the given id
  getResult: function(id) {
    return axios.get("/api/election/" + id);
  }
}