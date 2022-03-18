const { get } = require("./utils")

module.exports = {
    async getGamemodes(id = '') {
        let gamemodes = (await get(`https://api.brawlapi.com/v1/gamemodes`))?.list

        if(!id) return gamemodes
        return gamemodes.find(x => x.id == id || x.name.toUpperCase() == id.toUpperCase())
    }
}