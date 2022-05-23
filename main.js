noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('Nose X =' + noseX + 'Nose Y =' + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX-rightWristX);
        console.log('Left Wrist X =' + leftWristX + 'Right Wrist X =' + rightWristX + 'Difference =' + difference);
    }
}

function draw(){
    background('grey');
    text(2048,noseX,noseY);
    textSize(difference);
    fill('rgb(235, 168, 44)');
    stroke('rgb(235, 168, 44)');
}