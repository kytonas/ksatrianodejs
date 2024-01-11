import https from "https";

const endpoint = "https://eoaevqvgzhzx1p9.m.pipedream.net";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive Data : ${data.toString()}`)
    });
});

const body = JSON.stringify({
    firstName: "Ksatria",
    lastName: "Nasywaan",
});

request.write(body);
request.end();