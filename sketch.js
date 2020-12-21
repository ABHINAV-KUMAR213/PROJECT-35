//Create variables here
var dog,dogImage;
var happyDog;
var database;
var foodS, foodStock;

function preload(){
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}
function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.1; 
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}
function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(dogImage);
   // milk.visible=false;
  }
  drawSprites();
  textSize(20);
  fill("yellow")
  text("Food Remaining  "+foodS,170,310);

  textSize(15);
  strokeWeight(0.5);
  stroke("blue");
  fill("red");
  text("Press UP_ARROW Key To Feed Drago Milk!",80,50);
  //add styles here
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else(
    x= x-1
  )
  database.ref('/').update({
    Food:x 
  })
}