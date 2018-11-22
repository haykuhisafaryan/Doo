//put all the functions here

const submitData = function () {
    socket.emit("submit data", { name: player.name, score: player.score });
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === leftKey) {
        player.xDelta = -5;
    }

    if (event.keyCode === rightKey) {
        player.xDelta = 5;
    }

    if (event.keyCode === upKey) {
        player.yDelta = -5;
    }

    if (event.keyCode === downKey) {
        player.yDelta = 5;
    }

}, false);


document.addEventListener('keyup', function (event) {
    if (event.keyCode === leftKey || event.keyCode === rightKey) {
        player.xDelta = 0;
    }
    if (event.keyCode === upKey || event.keyCode === downKey) {
        player.yDelta = 0;
    }

}, false);
