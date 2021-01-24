const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,1000);
    engine = Engine.create();
    world = engine.world;

    Raindrop = new Drops(0,0,50);
}

function draw(){
    
    background("black");
    Raindrop.display();


    
}   

