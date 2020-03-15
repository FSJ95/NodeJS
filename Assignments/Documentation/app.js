const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    return response.sendFile(__dirname + '/public/html/index.html');
});

app.get("/css", (request, response) => {
    return response.sendFile(__dirname + '/public/html/css.html');
});

app.get("/hypertextmarkuplanguage", (request, response) => {
    return response.sendFile(__dirname + '/public/html/html.html');
});

app.get("/javascript", (request, response) => {
    return response.sendFile(__dirname + '/public/html/javascript.html');
});

app.get("/jquery", (request, response) => {
    return response.sendFile(__dirname + '/public/html/jquery.html');
});

app.get("/commands", (request, response) => {
    return response.sendFile(__dirname + '/public/html/commands.html');
});

app.get("/nodejs", (request, response) => {
    return response.sendFile(__dirname + '/public/html/nodejs.html');
});

app.listen(80, (error) => {
    if (error) {
        console.log(error)
    }
    console.log('Server is running')
});