//main file: here the code will run

const draw = function () {
    ctx.drawImage(backgroundImage, 0, 0, cnv.width, cnv.height);
    // for (let i = 0; i < gameData.badGuys.length; i++) {
    //     gameData.badGuys[i].draw();
    // }
    // soap.draw();
    // gameData.hero.draw();
    for (let i = 0; i < enemyArr.length; i++) {
        enemyArr[i].draw();
    };
    player.draw();
}
const update = function () {
    // for (let i = 0; i < gameData.badGuys.length; i++) {
    //     gameData.badGuys[i].update();
    // }
    // soap.collision(gameData.hero);
    // gameData.hero.update();
    for (let i = 0; i < enemyArr.length; i++) {
        enemyArr[i].update();
    player.update();
}
const loop = function () {
    draw();
    update();
    // h3.innerHTML = "SCORE: " + score;
    // if (!gameData.hero.dead)
    requestAnimationFrame(loop);
}

loop();

