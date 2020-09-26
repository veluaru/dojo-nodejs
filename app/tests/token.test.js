const assert =require("chai").assert;
const getToken = require("../services/token.service.js");

destribe("Spotify services"), function() {
    it("get token", async function (){
        const token = await getToken();
    })
}