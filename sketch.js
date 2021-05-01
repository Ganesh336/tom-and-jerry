var background
var cat,catImg;
var mouse,mouseImg;



function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    mouseImg = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,100,50,50)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
