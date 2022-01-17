function setup() {
    canvas=createCanvas(500,500);
    canvas.position(700,120);

    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(150,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("pink");
    text("Avanya",100,100);
}

function gotPoses(result) {
    if (result.length>0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log("Posenet is Initialized");
}