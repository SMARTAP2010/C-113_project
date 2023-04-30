function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 220, 150, 200, 200);
    fill(250,0,0);
    rect(73, 30, 482, 40);
    rect(562, 75, 35, 330);
    rect(73, 411, 482, 40);
    rect(30, 75, 35, 330);
    fill(0,128,0);
    circle(50, 50, 60);
    circle(580, 50, 60);
    circle(50, 430, 60);
    circle(580, 430, 60);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}