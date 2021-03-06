class Game {
  constructor(){}
  
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
    player= new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists())
    {
      playerCount=playerCountRef.val();
      player.getPlayer();
    }
    form = new Form()
    form.display();
    }
    car1 = createSprite(100,100);
    car1.addImage(car1img)

    car2 = createSprite(300,100);
    car2.addImage(car2img)

    car3 = createSprite(500,100);
    car3.addImage(car3img)

    car4 = createSprite(700,100);
    car4.addImage(car4img)

    car=[car1,car2,car3,car4];
    
  }
  play()
  {
    form.hide();

    Player.getplayerinfo();
    
    if(allPlayer !== undefined){
     
      image(trackImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index =0;

     
      var x =200;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

      
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
  
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }
}
