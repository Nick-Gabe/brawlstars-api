const { get } = require("./utils")

module.exports = {
    async getSeasonRanking(countryCode, seasonId, params = { limit: Infinity }) {
        if(!countryCode) throw new Error(`(brawlstars-api) "${countryCode}" id not a valid Two letter country code.`)
        else if(!seasonId) throw new Error(`(brawlstars-api) The season id "${seasonId}" is not a valid id.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/rankings/${encodeURIComponent(countryCode)}/powerplay/seasons/${seasonId || undefined}`, this.token, params))?.items
    },
    async getSeasons(countryCode, params = { limit: Infinity }) {
        if(!countryCode) throw new Error(`(brawlstars-api) "${countryCode}" id not a valid Two letter country code.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/rankings/${encodeURIComponent(countryCode)}/powerplay/seasons`, this.token, params))?.items
    },
    async getClubRanking(countryCode, params = { limit: Infinity }) {
        if(!countryCode) throw new Error(`(brawlstars-api) "${countryCode}" id not a valid Two letter country code.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/rankings/${encodeURIComponent(countryCode)}/clubs`, this.token, params))?.items
    },
    async getPlayerRanking(countryCode, params = { limit: Infinity }) {
        if(!countryCode) throw new Error(`(brawlstars-api) "${countryCode}" id not a valid Two letter country code.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/rankings/${encodeURIComponent(countryCode)}/players`, this.token, params))?.items
    },
    async getBrawlerRanking(countryCode, brawlerId, params = { limit: Infinity }) {
        if(!countryCode) throw new Error(`(brawlstars-api) "${countryCode}" id not a valid Two letter country code.`)
        else if(!brawlerId) throw new Error(`(brawlstars-api) The brawler id "${brawlerId}" is not a valid id.`)
        params.limit === Infinity && delete params.limit

        return (await get(`/rankings/${encodeURIComponent(countryCode)}/brawlers/${brawlerId}`, this.token, params))?.items
    }
}