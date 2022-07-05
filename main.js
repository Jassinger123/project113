canvas=document.getElementById("canvas_1");
function take_snapshot(){
    createCanvas(480,220);
    // Draw a circle at location (30, 30) with a diameter of 20.
    circle(30, 30, 20);
    describe('white circle with black outline in mid of gray canvas');
    
    ellipse(56, 46, 55, 55);
    describe('white ellipse with black outline in middle of a gray canvas');
    
    // Draw a rectangle with rounded corners, each having a radius of 20.
    rect(30, 20, 55, 55, 20);
    describe(
      'white rect with black outline and round edges in mid-right of canvas'
    );    
}
