function preload(){

}

function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()

    video = createCapture(VIDEO)
    video.size(400, 300)
    video.position(485 , 285)

}