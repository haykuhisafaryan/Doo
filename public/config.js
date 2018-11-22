//configuration stuff: var, const, let
const socket = io.connect('http://localhost:3000');
const player;
const enemyArr = [];
const foodArr = [];

//const chosenObject = aFunctionWhichReturnsAnObject();

const playerImage = ""; //chosenObject.playerImage
const enemyImage = ""; //chosenObject.enemyImage
const foodImage = ""; //chosenObject.foodImage
const backgroundImage = ""; //chosenObject.backgroundImage

const cnv = document.getElementById("main");
const ctx = cnv.getContext("2d");

const playerHeight = 150; //these are just random numbers, we need to decide the sizes
const playerWidth = 75;
const enemyHeight = 150;
const enemyWidth = 75;
const foodHeight = 150;
const foodWidth = 75;
