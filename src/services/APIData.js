const BASE_URL = 'https://api.spacexdata.com/v4/'



function rocketDataAPI() {
    return fetch(`${BASE_URL}rockets`)
    .then(res => res.json())
}

function crewDataAPI() {
    return fetch(`${BASE_URL}crew`)
    .then(res => res.json())
}

function launchDataAPI() {
    return fetch(`${BASE_URL}launches/upcoming`)
    .then(res => res.json())
}

function roadsterDataAPI() {
    return fetch(`${BASE_URL}roadster`)
    .then(res => res.json())
}

export {
    rocketDataAPI,
    crewDataAPI,
    launchDataAPI,
    roadsterDataAPI
}