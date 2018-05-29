var axios = require('axios');

const SEARCH_URL = 'https://obscure-tor-28783.herokuapp.com/articles?search';

module.exports = {
    search: function (need) {
        var requestUrl = `${SEARCH_URL}=${need}`;
        return axios.get(requestUrl).then(function (res) {
            if (res.data.total > 0) {
                return res.data.data;
            } else {
                return [];
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
