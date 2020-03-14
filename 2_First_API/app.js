// Import express from node_modules & request.
const express = require("express");
const request = require('request');

// Instancite express / call the function.
const app = express();

// ALL ABOVE CAN BE DONE IN ONE SINGLE LINE:
// const app = require("express")();


// Create a get request, with a callback-function that takes a request and a response.
app.get("/", (request, response) => {
    response.send({message: "hello thasd"});
});

const aboutMe = {
    name: "Frederik Jensen",
    age: 24,
    dateOfBirth: "29/09-1995",
};

app.get("/aboutMe", (request, response) => {
    response.send(aboutMe);
});


app.get("/time", (request, response) => {
    let date = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const r = {
        day: days[date.getDay() ],
        date: date.getDate(),
        month: (date.getMonth() + 1) ,
        monthname: months[date.getMonth()],
        year: date.getFullYear(),
        time: date.toLocaleTimeString(),
        hej: "hej"
    }
    response.send(r);
})




app.get("/search", (request, response) => {

    let page = request.query.page;
    let limit = request.query.limit;

    return response.send({page: page, limit: limit})
});




app.get("/user/:id", (request, response) => {

    console.log(request.params);
    return response.send(request.params);

});

app.get("/aboutThisWebsite", (request, response) => {
    const aboutThisWebsite = {
        owner: aboutMe,
        lastUpdate: "neverrrrr"
    }
    response.send(aboutThisWebsite);
});

//Start the server with a port and a callback-function.
app.listen(80, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port 80");
});


//////   REQUEST
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

app.get("/google", (req, res) => {
    request('http://www.google.com', (error, response, body) => {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return res.send(body);
    });
    
});

app.get("/documentation", (req, res) => {

    console.log(__dirname);
    //return res.redirect("/documentationtwo");
    return res.sendFile(__dirname + "/public/documentation.html");
})

app.get("/documentationtwo", (req, res) => {

    console.log(__dirname);
    return res.sendFile(__dirname + "/public/documentationtwo.html");
})