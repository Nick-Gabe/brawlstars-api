const { get } = require("./utils")

module.exports = {
    async getPlayer(id) {
        if(!id) throw new Error(`(brawlstars-api.js) The player id "${id}" is not a valid id.`)
        
        return await get(`/players/${encodeURIComponent(id)}`, this.token)
    },
    async getPlayerBattles(id) {
        if(!id) throw new Error(`(brawlstars-api.js) The player id "${id}" is not a valid id.`)
        
        return (await get(`/players/${encodeURIComponent(id)}/battlelog`, this.token))?.items
    }
}