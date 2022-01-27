class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();
    
    car1 = createSprite(width/2 - 50, height - 100)
    car1.addImage(car1_img)
    car1.scale = 0.5;



    car2 = createSprite(width/2+100, height -100)
    car2.addImage(car2_img)
    car2.scale = 0.5;
    
     cars= [car1, car2]
  }
getState(){

  var gameStateRef = database.ref("gameState")
  gameStateRef.on("value", function(data){
  gameState = data.val()
  })
}
handleElements(){
form.hide()
form.titleImg.position(40,50)
form.titleImg.class("gameTitleAfterEffect")
}
play(){
this.handleElements()
drawSprites()
}

  update(state){
    database.ref("/").update({
      gameState:state 
    })
  }
}


//form.js

class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 60);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

 /* setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } */

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
    
      playerCount+=1
      console.log(playerCount)
      player.name = this.input.value();
      player.index = playerCount;
      player.updateCount(playerCount)
      //player.addPlayer();
    })
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}
