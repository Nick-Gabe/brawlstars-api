# 📚 Documentation:
All the methods listed here are properties of `client`, so to use them you need to write: `client.method()`.

## Menu:
* Player:
  * [getPlayer](#getPlayer)
  * [getPlayerBattles](#getPlayerBattles)
  * [getPlayerRanking](#getPlayerRanking)
  * [getSeasonRanking](#getSeasonRanking)
* Club:
  * [getClub](#getClub)
  * [getClubMembers](#getClubMembers)
  * [getClubRanking](#getClubRanking)
* Brawler:
  * [getBrawlers](#getBrawlers)
  * [getBrawlerRanking](#getBrawlerRanking)
* Miscellaneous
  * [getEvents](#getEvents)
  * [getSeasons](#getSeasons)
  * [getIcons](#getIcons)
  * [getGamemodes](#getGamemodes)
***
<a href="#getPlayer"><h3 id="getPlayer"><b>.getPlayer(id)</b></h3></a>
Get informations about one specific player. It gives an error if the player hasn't been found.

<br>

<details>
 <summary><b>Parameters</b></summary>

> **id:** The id of the player you're referring to, including the "#" at the start.
</details>

<details>
  <summary><b>Response structure</b></summary>

```javascript
{
  tag: '#TAG',
  name: 'Player name',
  nameColor: '0xff1ba5f5',
  icon: { id: 28000081 },
  trophies: 51032,
  highestTrophies: 53152,
  highestPowerPlayPoints: 1192,
  expLevel: 359,
  expPoints: 656208,
  isQualifiedFromChampionshipChallenge: true,
  '3vs3Victories': 49221,
  soloVictories: 802,
  duoVictories: 3005,
  bestRoboRumbleTime: 11,
  bestTimeAsBigBrawler: 0,
  club: { tag: '#CLUBTAG', name: 'Club name' },
  brawlers: [
    {
      id: 16000000,
      name: 'SHELLY',
      power: 9,
      rank: 30,
      trophies: 864,
      highestTrophies: 1006,
      gears: [],
      starPowers: [
        { id: 23000076, name: 'SHELL SHOCK' },
        { id: 23000135, name: 'BAND-AID' }
      ],
      gadgets: [
        { id: 23000255, name: 'FAST FORWARD' },
        { id: 23000288, name: 'CLAY PIGEONS' }
      ]
    },
    ...
  ]
}
```
</details>

***
<a href="#getPlayerBattles"><h3 id="getPlayerBattles"><b>.getPlayerBattles(id)</b></h3></a>
Retrieve the 25 most recent battles the player participated. It gives an error if the player hasn't been found.

<br>

<details>
<summary><b>Parameters</b></summary>

> **id:** The id of the player you're referring to, including the "#" at the start.

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    battleTime: '20220315T204120.000Z',
    event: {
      id: 15000026,
      mode: 'brawlBall',
      map: 'Pinhole Punt'
    },
    battle: {
      type: 'ranked',
      result: 'victory',
      duration: 128,
      trophyChange: 7,
      starPlayer: {
        tag: '#PLAYERTAG',
        name: 'Player name',
        brawler: {
          id: 16000004,
          name: 'RICO',
          power: 10,
          trophies: 807
        }
      },
      teams: [
        [
          {
            tag: '#TAG',
            name: 'Player name',
            brawler: {
              id: 16000005,
              name: 'SPIKE',
              power: 9,
              trophies: 874
            }
          },
          ...
        ],
        [
          {
            tag: '#TAG',
            name: 'Player name',
            brawler: {
              id: 16000005,
              name: 'SPIKE',
              power: 9,
              trophies: 874
            }
          },
          ...
        ]
      ]
    }
  }
]
```
</details>

***
<a href="#getClub"><h3 id="getClub"><b>.getClub(id)</b></h3></a>
Get informations about one specific club. It gives an error if the club hasn't been found.

<br>

<details>
<summary><b>Parameters</b></summary>

> **id:** The id of the club you're referring to, including the "#" at the start.

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
{
  tag: '#CLUBTAG',
  name: 'Club name',
  description: 'This is the club description.',
  type: 'closed',
  badgeId: 8000006,
  requiredTrophies: 200,
  trophies: 1447451,
  members: [
    {
      tag: '#PLAYERTAG',
      name: 'Player name',
      nameColor: '0xffff8afb',
      role: 'member',
      trophies: 54932,
      icon: { id: 28000053 }
    },
    ...
  ]
}
```
</details>

***
<a href="#getClubMembers"><h3 id="getClubMembers"><b>.getClubMembers(id, params)</b></h3></a>
Retrieves an array with all the Club Members. It gives an error if the club hasn't been found.

<br>

<details>
<summary><b>Parameters</b></summary>

> **id:** The id of the club you're referring to, including the "#" at the start.

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of members to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    tag: '#PLAYERTAG',
    name: 'Player name',
    nameColor: '0xffff8afb',
    role: 'member',
    trophies: 54932,
    icon: { id: 28000053 }
  },
  ...
]
```
</details>

***
<a href="#getBrawlers"><h3 id="getBrawlers"><b>.getBrawlers(id)</b></h3></a>
Retrieves an array with all the Brawlers in the game, or if an id is specified, retrieves only the informations about that specific brawler.

<br>

<details>
<summary><b>Parameters</b></summary>

> *(optional)* **id:** The id of the Brawler, including the "#" at the start, or the Brawler's name (not case-sensitive).

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
{
  id: 16000000,
  avatarId: 28000003,
  name: 'Shelly',
  hash: 'Shelly',
  path: 'Shelly',
  released: true,
  version: 1,
  link: 'https://brawlify.com/brawlers/detail/Shelly',
  imageUrl: 'https://cdn.brawlify.com/brawler/Shelly.png',
  imageUrl2: 'https://cdn.brawlify.com/brawler-bs/Shelly.png',
  imageUrl3: 'https://cdn.brawlify.com/emoji/Shelly.png',
  class: { id: 1, name: 'Fighter' },
  rarity: { id: 1, name: 'Trophy Road', color: '#b9eaff' },
  unlock: 0,
  description: "Shelly's spread-fire shotgun blasts the other team with buckshot. Her Super destroys cover and keeps her opponents at a distance!",
  starPowers: [
    {
      id: 23000076,
      name: 'Shell Shock',
      path: 'Shell-Shock',
      version: 2,
      description: "Shelly's Super shells slow down enemies for 4.5 seconds!",
      imageUrl: 'https://cdn.brawlify.com/star-powers/Shell-Shock.png',
      released: true
    },
    {
      id: 23000135,
      name: 'Band-Aid',
      path: 'Band-Aid',
      version: 2,
      description: 'When Shelly falls below 40% health, she instantly heals for <span class="text-success">2000</span> health. Band-Aid recharges in <span class="text-success">15</span> seconds.',
      imageUrl: 'https://cdn.brawlify.com/star-powers/Band-Aid.png',
      released: true
    }
  ],
  gadgets: [
    {
      id: 23000255,
      name: 'Fast Forward',
      path: 'Fast-Forward',
      version: 2,
      description: 'Shelly dashes ahead, skipping a few unnecessary steps!',
      imageUrl: 'https://cdn.brawlify.com/gadgets/Fast-Forward.png',
      released: true
    },
    {
      id: 23000288,
      name: 'Clay Pigeons',
      path: 'Clay-Pigeons',
      version: 2,
      description: "On activation, for the next 5 seconds Shelly's main attacks focus the fire to a smaller area with an increased range.",
      imageUrl: 'https://cdn.brawlify.com/gadgets/Clay-Pigeons.png',
      released: true
    }
  ],
  videos: [
    {
      type: 0,
      name: "Shelly's Main Attack",
      description: 'Check out how Shelly attacks.',
      duration: 'PT2S',
      videoUrl: 'https://cdn.brawlify.com/videos/Shelly-Main-Attack.mp4',
      previewUrl: 'https://cdn.brawlify.com/videos/preview/Shelly-Main-Attack.jpg',
      uploadDate: '2019-11-04T00:00:00.000Z'
    },
    {
      type: 1,
      name: "Shelly's Super Attack",
      description: 'Check out how Shelly uses the Super.',
      duration: 'PT3S',
      videoUrl: 'https://cdn.brawlify.com/videos/Shelly-Super.mp4',
      previewUrl: 'https://cdn.brawlify.com/videos/preview/Shelly-Super.jpg',
      uploadDate: '2019-11-04T00:00:00.000Z'
    }
  ]
}
```
</details>

***
<a href="#getEvents"><h3 id="getEvents"><b>.getEvents()</b></h3></a>
Retrieves an object with two childs: active and upcoming, including their start time and end time.

<br>
<details>
  <summary><b>Response structure</b></summary>
  
```javascript
{
  active: [
    {
      slot: {
        id: 9,
        name: 'Solo Events 2',
        hash: 'Solo-Events-2',
        listAlone: false,
        hideable: false,
        hideForSlot: null,
        background: null
      },
      startTime: '2022-03-18T08:00:00.000Z',
      endTime: '2022-03-19T08:00:00.000Z',
      reward: 5,
      map: {
        id: 15000460,
        new: true,
        disabled: true,
        name: 'NO SURRENDER',
        hash: 'NO-SURRENDER',
        version: 4,
        link: 'https://brawlify.com/maps/detail/NO-SURRENDER',
        imageUrl: 'https://cdn.brawlify.com/map/NO-SURRENDER.png',
        credit: null,
        environment: {
          id: 64,
          name: 'FightingGame',
          hash: 'event_tigerpit_banner',
          path: 'Tigerpit',
          version: 1,
          imageUrl: 'https://cdn.brawlify.com/environment/Tigerpit.png'
        },
        gameMode: {
          id: 21,
          name: 'Duels',
          hash: 'Duels',
          version: 2,
          color: '#c2ed00',
          link: 'https://brawlify.com/gamemodes/detail/Duels',
          imageUrl: 'https://cdn.brawlify.com/gamemode/Duels.png'
        },
        lastActive: 1647676800,
        dataUpdated: 1647614978,
        stats: [
          {
            brawler: 16000048,
            winRate: 68.4647,
            useRate: 0.703253
          },
          ...
        ],
        teamStats: [
          {
            name: 'Brock, Piper & Nani',
            hash: 'Brock+Piper+Nani',
            brawler1: 16000003,
            brawler2: 16000015,
            brawler3: 16000036,
            data: {
              winRate: 40.85603,
              useRate: 0.67623,
              wins: 105,
              losses: 152,
              draws: 0,
              total: 257
            }
          },
        ]
      },
      modifier: null
    },
    ...
  ],
  upcoming: [...]
  // same structure as active
}
```
</details>

***
<a href="#getSeasonRanking"><h3 id="getSeasonRanking"><b>.getSeasonRanking(countryCode, seasonId, params)</b></h3></a>
Get the power play ranking of a specified season.

<br>

<details>
<summary><b>Parameters</b></summary>

> **countryCode:** Two letter country code like "BR, EN, FR..." or "global" for global rankings.

> **seasonId:** The identifier of the season you want to get the ranking, ex: 60, 87, 118...

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of players to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    tag: '#TAG',
    name: 'Player name',
    nameColor: '0xff1ba5f5',
    icon: { id: 28000016 },
    trophies: 1393,
    rank: 1
  },
  {
    tag: '#TAG',
    name: 'Player name',
    nameColor: '0xfff05637',
    icon: { id: 28000058 },
    trophies: 1378,
    rank: 2,
    club: { name: 'Club name' }
  },
  ...
]
```
</details>

***
<a href="#getSeasons"><h3 id="getSeasons"><b>.getSeasons(countryCode, params)</b></h3></a>
Get all the seasons of a country, including their ids, start and end time.

<br>

<details>
<summary><b>Parameters</b></summary>

> **countryCode:** Two letter country code like "BR, EN, FR..." or "global" for global rankings.

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of seasons to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    id: '56',
    startTime: '20191028T180000.000Z',
    endTime: '20191111T180000.000Z'
  },
  {
    id: '57',
    startTime: '20191111T180000.000Z',
    endTime: '20191125T180000.000Z'
  },
  ...
]
```
</details>

***
<a href="#getClubRanking"><h3 id="getClubRanking"><b>.getClubRanking(countryCode, params)</b></h3></a>
Get a ranking of the clubs in a country or globally. If a country with the code specified hasn't been found, it will return global ranking instead.

<br>

<details>
<summary><b>Parameters</b></summary>

> **countryCode:** Two letter country code like "BR, EN, FR..." or "global" for global rankings.

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of clubs to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    tag: '#CLUBTAG',
    name: 'Club name',
    badgeId: 8000006,
    trophies: 1447531,
    rank: 1,
    memberCount: 30
  },
  {
    tag: '#CLUBTAG',
    name: 'Club name',
    badgeId: 8000055,
    trophies: 1413868,
    rank: 2,
    memberCount: 30
  },
  ...
]
```
</details>

***
<a href="#getPlayerRanking"><h3 id="getPlayerRanking"><b>.getPlayerRanking(countryCode, param)</b></h3></a>
Get a ranking of the players in a country or globally. If a country with the code specified hasn't been found, it will return global ranking instead.

<br>

<details>
<summary><b>Parameters</b></summary>

> **countryCode:** Two letter country code like "BR, EN, FR..." or "global" for global rankings.

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of players to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    tag: '#TAG',
    name: 'Player name',
    nameColor: '0xfff9c908',
    icon: { id: 28000052 },
    trophies: 60004,
    rank: 1,
    club: { name: 'Club name' }
  },
  {
    tag: '#TAG',
    name: 'Player name',
    nameColor: '0xffffffff',
    icon: { id: 28000082 },
    trophies: 56465,
    rank: 2,
  },
  ...
]
```
</details>

***
<a href="#getBrawlerRanking"><h3 id="getBrawlerRanking"><b>.getBrawlerRanking(countryCode, brawlerId, param)</b></h3></a>
Get a ranking of the players using a specific brawler, in a country or globally. If a country with the code specified hasn't been found, it will return global ranking instead.

<br>

<details>
<summary><b>Parameters</b></summary>

> **countryCode:** Two letter country code like "BR, EN, FR..." or "global" for global rankings.

> **brawlerId:** The id of the Brawler, including the "#" at the start.

> *(optional)* **params:**
> An optional object with the following properties
> ```js
> {
>     limit: number
>     // The max number of players to receive.
> }
> ```

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    tag: '#TAG',
    name: 'Player name'
    nameColor: '0xfff05637',
    icon: { id: 28000077 },
    trophies: 1290,
    rank: 1,
  },
  {
    tag: '#TAG',
    name: 'Player name'
    nameColor: '0xfff9c908',
    icon: { id: 28000082 },
    trophies: 1257,
    rank: 2,
    club: { name: 'Club name' }
  },
  ...
]
```
</details>

***
<a href="#getIcons"><h3 id="getIcons"><b>.getIcons(id)</b></h3></a>
Retrieves an object containing all the icons in the game, or just one if the id is specified.

<br>
<details>
<summary><b>Parameters</b></summary>

> **id:** The icon identifier, can be its own id or the id of a brawler associated with the icon.

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
{
    "player": {
        "28000000": {
            "id": 28000000,
            "imageUrl": "https://cdn.brawlify.com/profile/28000000.png?v=1",
            "imageUrl2": "https://cdn.brawlify.com/profile-low/28000000.png?v=1",
            "brawler": null
        }
        ...
    },
    "club": {
        "8000000": {
            "id": 8000000,
            "imageUrl": "https://cdn.brawlify.com/club/8000000.png?v=1"
        }
        ...
    }
}

// response with id specified:
{
  id: 28000053,
  imageUrl: 'https://cdn.brawlify.com/profile/28000053.png',
  imageUrl2: 'https://cdn.brawlify.com/profile-low/28000053.png',
  brawler: 16000038
}
```
</details>

***
<a href="#getGamemodes"><h3 id="getGamemodes"><b>.getGamemodes(id)</b></h3></a>
Retrieves an object containing all the gamemodes in the game, or just one if the id is specified.

<br>
<details>
<summary><b>Parameters</b></summary>

> **id:** The gamemode identifier, can be its own id or name (not case-sensitive).

</details>

<details>
  <summary><b>Response structure</b></summary>
  
```javascript
[
  {
    id: 23,
    name: 'Payload',
    hash: 'Payload',
    scHash: 'payload',
    disabled: false,
    color: '#5140f4',
    version: 1,
    title: '3 vs 3',
    tutorial: "Push your team's minecart by standing near it. The first team to push their minecart to the goal wins the match! Standing near the 
opponent's minecart slows it down. If the time runs out, the team that got the furthest wins!",
    description: "Push your team's minecart by standing near it. The first team to push their minecart to the goal wins the match! Standing near the opponent's minecart slows it down. If the time runs out, the team that got the furthest wins!",
    shortDescription: "Push your team's minecart by standing near it. The first team to push their minecart to the goal wins the match! Standing near the opponent's minecart slows it down. If the time runs out, the team that got the furthest wins!",
    sort1: 20,
    sort2: 20,
    link: 'https://brawlify.com/gamemodes/detail/Payload',
    imageUrl: 'https://cdn.brawlify.com/gamemode/Payload.png',
    imageUrl2: 'https://cdn.brawlify.com/gamemode/header/Payload.png'
  },
  ...
]
```
</details>