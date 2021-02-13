//Create variables here
var dog;
var happyDog;
var foods;
var foodStock;

function preload()
{
	//load images here
  dog.loadImage = (sprite/dogImg.png)
  happyDog.loadImage (sprite/dogImg1.png)
}

function setup() {
	createCanvas(500,500);
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  dag.addImage= dog
}


function draw() {  
background (46, 139, 87) 
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dog.addImage=happyDog
}
  drawSprites();
  //add styles here
text = "press UP_ARROW key to feed the dog"
}



