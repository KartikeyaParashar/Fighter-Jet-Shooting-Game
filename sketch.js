var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bullet_jet1, bullet_jet2, bullet_jet3, bullet_jet4, bullet_jet5;
var bullet_img;

var bg = "../images/day.jpg";

var form, player, game;

var jets, jet1, jet2, jet3, jet4, jet5;

var jet1_img, jet2_img, jet3_img, jet4_img, jet5_img;

function preload(){
  jet1_img = loadImage("../images/jet_1.png");
  jet2_img = loadImage("../images/jet_2.png");
  jet3_img = loadImage("../images/jet_3.png");
  jet4_img = loadImage("../images/jet_4.png");
  jet5_img = loadImage("../images/jet_5.png");
  bullet_jet1 = loadImage("../images/bullet.png");
  bullet_jet2 = loadImage("../images/bullet.png");
  bullet_jet3 = loadImage("../images/bullet.png");
  bullet_jet4 = loadImage("../images/bullet.png");
  bullet_jet5 = loadImage("../images/bullet.png");

  bullet_img = loadImage("../images/bullet.png");

  getBackgroundImg();
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/day.jpg";
  }
  else{
      bg = "sprites/night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
