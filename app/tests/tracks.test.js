const assert =require("chai").assert;
const getTracks = require("../services/spotify/spotify.service.js");

destribe("Spotify services"), function() {
    it("get token", async function (){
        const token = await getTracks("bad bunny");
        console.log(result);
    })
}