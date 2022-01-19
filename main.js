right_wristX=0;
left_wristX=0;
difference=0;

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
    textSize(difference);
    fill("purple");
    text("Avanya",20,200);

}

function gotPoses(result) {
    if (result.length>0) {
        console.log(result);
        right_wristX=result[0].pose.rightWrist.x;
        left_wristX=result[0].pose.leftWrist.x;
        console.log("Right Wrist ="+right_wristX+"Left Wrist ="+left_wristX);

        difference=Math.floor(left_wristX-right_wristX);
        console.log("Difference ="+difference);
    }
}

function modelLoaded() {
    console.log("Posenet is Initialized");
}