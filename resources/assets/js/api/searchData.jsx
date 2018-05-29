var axios = require('axios');

const SEARCH_URL = '';

module.exports = {
  search: function (need) {

    var requestUrl = `${SEARCH_URL}&search=${need}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
