class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    jet1 = createSprite(20,150);
    jet1.addImage("jet1",jet1_img);
    jet2 = createSprite(100,150);
    jet2.addImage("jet2",jet2_img);
    jet3 = createSprite(77,89);
    jet3.addImage("jet3",jet3_img);
    jet4 = createSprite(91,54);
    jet4.addImage("jet4",jet4_img);
    jet5 = createSprite(102,10);
    jet5.addImage("jet5",jet5_img);
    jets[jet1, jet2, jet3, jet4, jet5];

    bullet[bullet_jet1, bullet_jet2, bullet_jet3, bullet_jet4, bullet_jet5];

    //bullet = createSprite();
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    //player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(backgroundImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the jet;
      var x = World.mouseX;
      var y = World.mouseY;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        //x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyDown("space")){
      createBullet();
    }

   // if(keyIsDown(UP_ARROW) && player.index !== null){
   //   player.y = -5;
   //   player.update();
   // }
   // if(keyIsDown(DOWN_ARROW) && player.index !== null){
    //  player.y = 5;
   //   player.update();
    //}

    
    //if(player.distance > 3860){
    //  gameState = 2;
    //  player.rank +=1
    //  Player.updateCarsAtEnd(player.rank)
   // }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    //console.log(player.rank);
  }
}

function createBullet(){
  var bullet = createSprite(100,100,30,30);
  bullet.addImage(bullet_img);
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.velocityX = 
}