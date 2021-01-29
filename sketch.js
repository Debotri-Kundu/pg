const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,division,partical,particals=[],plinko1=[],plinko2=[],plinko3=[];
var plinko4=[],plinko5=[],plinko6=[];

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
     
     ground = new Ground(400,height,800,20);
     border=new Ground(470,800,10,1600);
     border2=new Ground(20,800,10,1600)
    division=new Division(450,height-100,6,440)
    division2=new Division(380,height-100,6,440)
    division3=new Division(310,height-100,6,440)
    division4=new Division(240,height-100,6,440)
    division5=new Division(170,height-100,6,440)
    division6=new Division(100,height-100,6,440)
    division7=new Division(30,height-100,6,440)
    for(var i=40;i<450;i=i+60){
        plinko1.push( new Plinko (i,100,10))
        }
     for(var i=70;i<480;i=i+60){
         plinko2.push( new Plinko (i,160,10))
         }
     for(var i=40;i<450;i=i+60){
         plinko3.push( new Plinko (i,220,10))
         } 
    for(var i=70;i<480;i=i+60){
         plinko4.push( new Plinko (i,280,10))
         }
     for(var i=40;i<450;i=i+60){
         plinko5.push( new Plinko (i,340,10))
         }
     for(var i=70;i<480;i=i+60){
         plinko6.push( new Plinko (i,400,10))
         }
     
    
    
}

function draw(){
    background("black")
    Engine.update(engine)
    fill("white")
    ground.display();
    division.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();
  
    for(var k=0;k<plinko1.length;k++){
        plinko1[k].display();
        plinko2[k].display();
        plinko3[k].display();
        plinko4[k].display();
        plinko5[k].display();
        plinko6[k].display();
     }
    if(frameCount % 60===0){
        partical=new Partical(random(50,400),0,10)
        particals.push(partical)
        }
    for(var j=0;j<particals.length;j++){
    particals[j].display();
    }
    fill("red")
    border.display();
    border2.display();
}
