module.exports = (err) => {
    switch (err?.response?.status.toString()[0]) {
        case '5':
            throw new Error(`(brawlstars-api.js) ${err?.response?.status} Server Error: Information and/or server temporarily unavailable, plase contact support at ${err?.response?.request?.host}`)
            break;
        case '4':
            if (err?.response?.status == 403) {
                switch (err?.response?.data?.reason) {
                    case 'accessDenied.invalidIp':
                        throw new Error(`(brawlstars-api.js) ${err?.response?.status} Client Error: ${err?.response?.data?.message}`)
                        break;
                    case 'accessDenied':
                        throw new Error(`(brawlstars-api.js) ${err?.response?.status} Client Error: The token used is invalid.`)
                        break;
                    default:
                        console.log(err)
                        break;
                }
            }
            else throw new Error(`(brawlstars-api.js) ${err?.response?.status} Client Error: The information you tried to acess at ${err?.config?.url} was not found, check your parameters.`)
            break;
        default:
            console.log(err)
            break;
    }
}