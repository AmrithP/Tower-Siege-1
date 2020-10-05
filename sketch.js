//Namespaces are created

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Variables are declared

var engine, world;

var backgroundImg;

var ground, plat1, plat2;

var polygon, slinghsot;

//Pyramid 1 boxes

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

//Pyramid 2 boxes

var box17, box18, box19, box20, box21, box22, box23, box24, box25;

//Image variables

var polygonIMG, textIMG;

var dateTime;

var score = 0;


function preload(){

  //Images are loaded

  polygonIMG = loadImage("polygon.png");
  //bIMG = loadImage("b.jpg");
  textIMG = loadImage("text.png");

  getTime();


}


function setup() {

  //Canvas is created

  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  //All objects are created from blurprints
  
  ground = new Ground(500,390,1000,20);

  plat1 = new Platform(435,300,155,15);
  plat2 = new Platform(750,175,125,15);

  //Left Pyramid, 1st Layer

  box1 = new Box(375,275);
  box2 = new Box(395,275);
  box3 = new Box(415,275);
  box4 = new Box(435,275);
  box5 = new Box(455,275);
  box6 = new Box(475,275);
  box7 = new Box(495,275);

  //Left Pyramid, 2nd Layer

  box8 = new Box(395,240)
  box9 = new Box(415,240)
  box10 = new Box(435,240)
  box11 = new Box(455,240)
  box12 = new Box(475,240)

  //Left Pyramid, 3rd Layer

  box13 = new Box(415,205);
  box14 = new Box(435,205);
  box15 = new Box(455,205);

  //Left Pyramid, 4th Layer

  box16 = new Box(435,170)

  //Right Pyramid, 1st Layer

  box17 = new Box(710,150)
  box18 = new Box(730,150)
  box19 = new Box(750,150)
  box20 = new Box(770,150)
  box21 = new Box(790,150)

  //Right Pyramid, 2nd Layer

  box22 = new Box(730,115);
  box23 = new Box(750,115);
  box24 = new Box(770,115);
  
  //Right Pyramid, 3rd Layer

  box25 = new Box(750,80);

  //Polygon is created

  var options ={

    density: 3

  }

  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  //Slingshot is created are attached to a bodyA which is our polygon and a location on the coordinate

  slingshot = new Slingshot(this.polygon,{x:200,y:200});


}

function draw() {

  if(backgroundImg){

    background(backgroundImg);

  }  

  Engine.update(engine);


  //All of our objects, texts and images get displayed

  ground.display();

  plat1.display();
  plat2.display();

  image(textIMG,50,10,200,200);


  imageMode(CENTER);
  image(polygonIMG,polygon.position.x,polygon.position.y,40,40);
  

  
  fill("pink")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();  
  box7.display();

  fill("orange")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("lime");
  box13.display();
  box14.display();
  box15.display();

  fill("violet");
  box16.display();

  fill("orange");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("lime");
  box22.display();
  box23.display();
  box24.display();

  fill("violet");
  box25.display();

  slingshot.display();





  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();  
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  

  fill("grey")
  text(score, 750, 40);



}

//Mouse dragged and released function allows us to drag and release on the polygon

function mouseDragged(){

	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
	
}
	
function mouseReleased(){
	
	slingshot.fly();
	
}

//if we press space our slingshot gets careted again and player gets a second chance to shoot

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(this.polygon,{x:200, y:200});
		slingshot = new Slingshot(this.polygon,{x:200,y:200});

	}

}


async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/EST")

  var responseJson = await response.json();

  dateTime = responseJson.datetime;


  var hour = dateTime.slice(11,13);



  if(hour>=06 && hour<=19){

      bg = "b.jpg";
  

  } else {

      bg = "b2.jpg";

  }

  backgroundImg = loadImage(bg);



}