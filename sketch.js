var x
var y
var w
var h
var bl
var tr
var bl
var br
var r 
var g
var b
let colourPicker;

function setup(){
    createCanvas(windowWidth/1.5,windowHeight/1.5);
    frameRate(1);
}

function draw(){
    background(20);
    r = random(200);
    g = random(200);
    b = random(200);
    colourPicker = color(r,g,b);

    for(var i=0; i<10; i++) {
        x=random(width/2)
        y=random(height/2)
        w=random(width/2)
        h=random(height/2)
        tl=random(200)
        tr=random(200)
        bl=random(200)
        br=random(200)

        fill(colourPicker);
        rect(x,y,w,h,tl,tr,bl,br);

        push();
        translate(x/1.5,y/1.5);
        scale(.5,.5);
        fill(40,200,40);
        rect(x,y,w,h,tl,tr,bl,br);
        pop();

        push();
        translate(x/1.1,y/1.1);
        scale(.3,.3);
        fill(230,40,40);
        rect(x,y,w,h,tl,tr,bl,br);
        pop();
    }
}