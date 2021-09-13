nose_x=0; nose_y=0;
function preload(){
clownnose=loadImage("https://i.postimg.cc/3rvgHJHg/moustache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);

}
function modelloaded(){
    console.log("modelloaded");

}
function getposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-45;
        nose_y=results[0].pose.nose.y;
    }
}
function draw(){
image(video,0,0,300,300);
image(clownnose,nose_x,nose_y,100,50);
}
function takesnapshot(){
    save("anyfilename.png");
}