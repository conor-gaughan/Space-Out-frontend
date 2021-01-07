const BASE_URL = 'https://api.spacexdata.com/v4/'



function rocketDataAPI() {
    return fetch(`${BASE_URL}rockets`)
    .then(res => res.json())
    // .then(data => data.active)
}

export {
    rocketDataAPI
}