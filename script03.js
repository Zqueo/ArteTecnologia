//compilei meu coração  
//mas o erro era lógico:  
//esperava de ti  
//um retorno  
//que nunca foi declarado  

var step;

// setup for the canvas and colors
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("sketch-holder");

  step = 50;

  colors = ["#eaa690", "#60403f", "#f68366", "#fd9848","#ffc56d"]
  noLoop();

}

// randomly making a diagonal line one way or the other
function cross(x, y, width, height) {
  var change = random() >= 0.5;
  if (change){
    line(x, y, x+ width, y + height);
  }
  else {
    line(x + width, y, x, y + height);
  }
}


// decreases the step value when mouse is pressed in the canvas, and redraws
function mousePressed() {
  if (0 <= mouseX && 0 <= mouseY && mouseX <= width && mouseY <= height) {
    if (step <= 30) {
      step = 50;
    }
    step -= 2;
    redraw();
  }

}

// draws the lines in each grid piece
function draw() {
  background(255);
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      stroke(random(colors));
      strokeWeight(5);
      cross(x, y, step, step);
    }
  }
}

/*
Maze
A maze made with randomly generated diagonal lines. Although it is quite simple, the result in my opinion is pretty cool. Make the lines smaller and smaller by clicking the mouse on the canvas.

Reset using the R key on your keyboard. Pause the piece at any time using the S key on your keyboard.

, "#ccff00", "#ff0078", "#253a44", "#ffde59"
*/