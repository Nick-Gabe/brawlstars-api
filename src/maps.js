const { get } = require("./utils")

module.exports = {
    async getMaps(id = '') {
        const maps = (await get(`https://api.brawlapi.com/v1/maps`))?.list

        if(!id) return maps
        return maps.find(x => x.id == id || x.name.toUpperCase() == id.toUpperCase())
    }
}