const { get } = require("./utils")

module.exports = {
    async getEvents() {
        return await get(`https://api.brawlapi.com/v1/events`)
    },
}