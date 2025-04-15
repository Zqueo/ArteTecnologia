var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];
let looping = true;

// Setup function
function setup() {
  var c = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  c.parent('sketch-holder');
  cols = w / scl;
  rows = h / scl;

  resetSketch();
  frameRate(10);
}

function resetSketch() {
  terrain = [];
  flying = random(1000);
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

// Draws the terrain
function draw() {
  flying -= 0.18;
  var yoff = flying;

  // Maps each vertex in the terrain to a z value from Perlin noise and adds it to the 2d array
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2; // .2
    }
    yoff += 0.2; // .2
  }

  // Draws each vertex in 3d space
  clear();
  translate(0, 50);
  rotateX(PI / 3);
  fill(200);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}

/*
Rolling Hills
3D terrain generated using 2D Perlin noise. I first made a mesh with triangles and then use Perlin noise to determine the height of each vertex in the mesh in order to create the terrain look.

Reset using the R key on your keyboard. Pause the piece at any time using the S key on your keyboard.

*/