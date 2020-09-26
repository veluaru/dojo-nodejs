const axios = require("axios").default;
const getToken = require("../token.service.js");

async function getTracks(criteria) {
    const headers = await getHeaders();
    const data = await axios
        .get("https://api.spotify.com/v1/search", {
            headers: headers.headers,
            params: {
                c: criteria,
                type: 'track',
                market: 'CO',
                limit: 1
            }
        }).then(res => res.data.tracks.items).then(items => {
            track = {}
            for (i in items) {
                track.name = item[i].album.name;
                track.url = item[i].uri;
                track.id = item[i].id;
                track.img = item[i].album.images
            }
        }).catch(e => console.log(e))
        return data;
}

async function getHeaders() {
    const token = await getToken();
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    };
    return config;
}
module.exports = getTracks;