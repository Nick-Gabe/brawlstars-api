const { get } = require("./utils")

module.exports = {
    async getClub(id) {
        if(!id) throw new Error(`(brawlstars-api) The club id "${id}" is not a valid id.`)
        
        return await get(`/clubs/${encodeURIComponent(id)}`, this.token)
    },
    async getClubMembers(id, params = { limit: Infinity }) {
        if(!id) throw new Error(`(brawlstars-api) The club id "${id}" is not a valid id.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/clubs/${encodeURIComponent(id)}/members`, this.token, params))?.items
    }
}