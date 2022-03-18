const { get } = require("./utils")

module.exports = {
    async getBrawlers(id = '') {
        const brawlers = (await get(`https://api.brawlapi.com/v1/brawlers`))?.list

        if (!id) return brawlers
        return brawlers.find(x => x.id == id || x.name.toUpperCase() == id.toUpperCase())
    },
    async getIcons(id = '') {
        let icons = await get('https://api.brawlapi.com/v1/icons')
        if(!id) return icons
        
        icons = [ ...Object.values(icons.player), ...Object.values(icons.club) ]
        return icons.find(x => x?.brawler == id || x.id == id)
    }
}