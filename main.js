video= "";
status= "";
text="";

function setup(){
    canvas= createCanvas(480, 380)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 0, 0, 480, 380)
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modeLoaded)
    document.getElementById("status").innerHTML= "Status: Detecting Objects"
    text= document.getElementById("input_box").value;
}

function modeLoaded(){
    console.log("Model Loaded!")
    status= true;
}