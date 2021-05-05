//Create variables here
var database;
var dog,happyDog;
var dogImg,happyDogImg;
var foodS;
var foodStock;

function preload(){
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref("food");
  foodStock.on("value",readStock);

  dog = createSprite(250,350,50,100);
  dog.addImage(dogImg);
  dog.scale = 0.25;
  
}


function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);

  }

  fill(255);
  stroke(0);
  text("Note: Press UP_ARROW to Feed Tommy with Milk !!!",100,20);

  textSize(20);
  text("Food Remaining: " + foodS,150,200)


  drawSprites();
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if (x<=0){
    x=0
  } else {
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}



