//configuration stuff: var, const, let
const socket = io.connect('http://localhost:3000');
var player;
const enemyArr = [];
const foodArr = [];
let numberofenemies = 3;
let numberoffoods = 7;

//const chosenObject = aFunctionWhichReturnsAnObject();

const playerImage = new Image();
playerImage.src = "images/lilit.jpg";//chosenObject.playerImage
const enemyImage = new Image();
enemyImage.src = "images/fish.png"; //chosenObject.enemyImage
const foodImage = new Image();
foodImage.src = "images/soap.png"; //chosenObject.foodImage
const backgroundImage = new Image();
backgroundImage.src = "images/bg.jpg"; //chosenObject.backgroundImage

const cnv = document.getElementById("main");
const ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 700;
const playerHeight = 100; //these are just random numbers, we need to decide the sizes
const playerWidth = 100;
const enemyHeight = 150;
const enemyWidth = 75;
const foodHeight = 150;
const foodWidth = 75;

// const keyEvent = {
//     right: false,
//     left: false,
//     up: false,
//     down: false
// }

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
