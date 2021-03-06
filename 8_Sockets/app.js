const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log("Socket joined", socket.id)
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html")
});

server.listen(3000);