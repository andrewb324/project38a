class Player {
  constructor(){

  }
  getCount(){
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", (data)=>{
        playerCount = data.val()
      })
  }
  updateCount(count){
      database.ref("/").update({playerCount:count});
  }

}


//sketch.js


var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1, car2, cars;

function preload() {
backgroundImage = loadImage("./assets/background.png");
car1_img = loadImage("./assets/car1.png")
car2_img = loadImage("./assets/car2.png")
track = loadImage("./assets/track.jpg")
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();
game = new Game();
game.start();
bgImg = backgroundImage;
}

function draw() {
background(bgImg);
if(playerCount === 2){
game.update(1);
}


if(gameState === 1){
  game.play()

}

}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

