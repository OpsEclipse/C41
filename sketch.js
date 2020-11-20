const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;
var umbrella;
var maxDrops = 100;


function preload(){
    
}

function setup(){
   createCanvas(400,800);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella;
    
}

function draw(){
    background("black");

    for(var i=0; i<maxDrops; i++){
        drop.push(new Drop(random(0,400),random(0,400),5));
    }
}   

