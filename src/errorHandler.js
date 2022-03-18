module.exports = (err) => {
    switch (err?.response?.status.toString()[0]) {
        case '5':
            throw new Error(`(brawlstars-api) ${err?.response?.status} Server Error: Information and/or server temporarily unavailable, plase contact support at ${err?.response?.request?.host}`)
            break;
        case '4':
            // return undefined
            throw new Error(`(brawlstars-api) ${err?.response?.status} Client Error: The information you tried to acess at ${err?.config?.url} was not found, check your parameters.`)
            break;
        default:
            console.log(err)
            break;
    }
}