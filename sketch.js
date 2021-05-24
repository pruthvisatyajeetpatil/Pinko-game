const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
//I made a change here
var divisions =[];

//removed s from particle spelling
var particle;

var divisionHeight=300;
var score =0;
var count = 0;

// Added var gamestate
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  // Added text for each of the compartment
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  // you forgot to display ground
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }
  
if(score>199 && score<201){
  fill("lightBlue")
  textSize(70);
  text("Keep going", 170, 350);
}

if(score>399 && score<401){
  fill("skyBlue")
  textSize(70);
  text("Nice", 170, 350);
}
if(score>599 && score<601){
  fill("yellow")
  textSize(70);
  text("Good", 170, 350);
}
if(score>799 && score<801){
  fill("orange")
  textSize(70);
  text("Excellent", 170, 350);
}

if(score>999 && score<1001){
  fill("pink")
  textSize(70);
  text("Extraordinary", 170, 350);
}

if(score>1199 && score<1201){
  fill("lightGreen")
  textSize(70);
  text("Magnificent", 170, 350);
}

if(score>1399 && score<1401){
  fill("white")
  textSize(70);
  text("Fascinating", 170, 350);
}

if(score>1599 && score<1601){
  fill("gold")
  textSize(70);
  text("Unbelievable", 170, 350);
}

if(score>1799 && score<1801){
  fill("lightPink")
  textSize(70);
  text("Outstanding", 170, 350);
}

if(score>1999 && score<2001){
  fill("indigo")
  textSize(70);
  text("Fascinating", 170, 350);
}

if(score>2199 && score<2201){
  fill("purple")
  textSize(70);
  text("Exceptional", 170, 350);
}


if(score>2399 && score<2401){
  fill("lightRed")
  textSize(70);
  text("Marvellous", 170, 350);
}


if(score>2499 && score<2501){
  fill("yellow")
  textSize(70);
  text("Champion!!!", 170, 350);
}

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 // for particles following I added the following condition
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}