# BrawlStars-API
[brawlstars-api]() is a library made to interact with the [Official Brawl Stars api](), listing all of their endpoints in one place.

## ✨ How to install:
```js
npm install brawlstars-api
```

## 🧩 How to use:
First you need a token generated by the official brawl stars api, which you can create here: [BrawlStars Developer Page](https://developer.brawlstars.com/#/).

With your token in hands, you need to import the `brawlstars-api` and initialize it by passing the token as a string.
```js
const bsClient = require("brawlstars-api")
const client = new bsClient("token")
```
After creating your client with a token, you can already interact with the API!

## 📚 [Documentation](https://github.com/Nick-Gabe/brawlstars-api):
Here are some of the basic functionalities, but they return a promise, so you need to resolve them before obtaining the result, this can be done with [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or [.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then).
```js
await client.getPlayer('#208UR80')
await client.getPlayerBattles('#208UR80')
await client.getClub('#2GJ9UV8PJ')
await client.getBrawlers('colt')
// View the documentation to read about all the functionalities
```
**[Click here to see the full documentation.](https://github.com/Nick-Gabe/brawlstars-api)**

## 🔧 Extras
* This project is currently open source, feel free to help and contribute in the [project repository](https://github.com/Nick-Gabe/brawlstars-api) at GitHub.
* Found a bug? Just create an [Issue report](https://github.com/Nick-Gabe/brawlstars-api/issues/new) documenting what happened.
* Liked the module? Thanks :), maybe leave a star on the [repository](https://github.com/Nick-Gabe/brawlstars-api)!