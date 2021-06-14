function preload() {
 
}

function setup()
{
    canvas = createCanvas(360,300) ;
 
    canvas.position(600, 200) ;
}

function draw() {
    
}

function take_snapshot()
{
    save('myLipstickFilterPic') ;
}

function back()
{
   window.location = "Index.html"
}
