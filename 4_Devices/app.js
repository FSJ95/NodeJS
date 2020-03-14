const app = require("express")();

const info = {
    Information: "This API displays information about devices"
};

const devices = [
    {   
        id: 1,
        type: "Computer",
        brand: "Apple",
        name: "Macbook Pro"
    },
    {   
        id: 2,
        type: "Phone",
        brand: "Apple",
        name: "iPhone X"
    }
]

app.get("/", (request, response) => {


    return response.send(info);
});


app.get("/devices", (request, response) => {

    return response.send(devices);

});

app.get("/devices/:id", (request, response) => {
    const device = devices.find(device => device.id == Number(request.params.id))
    return response.send({ device: device });

});

app.post("/test", (request, response) => {
    response.send({});
})

app.listen(80, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running...")
});