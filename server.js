const fs = require('fs');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const addScore = function (name, score) {
    const file = "stat.json";
    const object = JSON.parse(fs.readFileSync(file).toString());
    object.scores.push({ name: name, score: score });
    fs.writeFileSync(file, JSON.stringify(object));
    return object;
};


app.use(express.static("./public"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
    console.log("connected");
    socket.on("submit data", function(data){
        addScore(data.name, data.score);
    });
});
