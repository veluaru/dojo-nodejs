const axios = require("axios").default;
const qs =require("querystring");

const config ={
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
}

let token ="";

const getToken = async()=> {
    let token = "";
    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({
            grant_type: "client_credentials",
            client_id: "23e3961d01cc4c58ba1a5a0e4d91d2ab",
            client_secret: "ff0324287cef46e5989cc1c84e71bd91"
        }),
        config
    );
    token = promise.data;
    return token.access_token;
}

module.exports = getToken;