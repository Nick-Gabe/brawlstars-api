const { getBrawlers, getIcons } = require('./brawlers');
const { getClub, getClubMembers } = require('./clubs');
const { getEvents } = require('./events');
const { getGamemodes } = require('./gamemodes');
const { getPlayer, getPlayerBattles } = require('./players');
const { getSeasons, getSeasonRanking, getClubRanking, getPlayerRanking, getBrawlerRanking } = require('./rankings');

class bsClient {
    constructor(token) {
        this.token = token;
        this.getPlayer = getPlayer;
        this.getPlayerBattles = getPlayerBattles;
        this.getClub = getClub;
        this.getClubMembers = getClubMembers;
        this.getBrawlers = getBrawlers;
        this.getEvents = getEvents;
        this.getSeasonRanking = getSeasonRanking;
        this.getSeasons = getSeasons;
        this.getClubRanking = getClubRanking;
        this.getPlayerRanking = getPlayerRanking;
        this.getBrawlerRanking = getBrawlerRanking;
        this.getIcons = getIcons;
        this.getGamemodes = getGamemodes;
    }
}

module.exports = bsClient