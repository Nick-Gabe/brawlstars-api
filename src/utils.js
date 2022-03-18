const { default: axios } = require("axios");
const errorHandler = require("./errorHandler");
const baseUrl = 'https://api.brawlstars.com/v1';

module.exports = {
    async get(endpoint, token, params) {
        try {
            const header = { headers: {} };

            if (token) header.headers['Authorization'] = `Bearer ${token}`
            if (params) header.params = { ...params }

            const response = await axios.get(
                endpoint.startsWith('/') ?
                    baseUrl + endpoint : endpoint
                , header)
            if (response) return response.data
        } catch (err) {
            errorHandler(err)
        }
    }
}