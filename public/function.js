//put all the functions here


const submitData = function () {
    socket.emit("submit data", { name: player.name, score: player.score });
}