let tamanho = 100;
let ultimos_vertices = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  randomSeed(12);
  background(255, 0, 0);
}

function draw() {
  
  // translate(width/2, height/2);
  
	let c = random(1) > 0.5 ? 255 : 0;
  stroke(c, 255);
  strokeWeight(floor(random(1, 5))*4);
  noFill();
  if(ultimos_vertices.length == 0 ) {
    forma_aleatoria(width/2, width/2, tamanho, tamanho);
  } else {
		v = ultimos_vertices[floor(random(ultimos_vertices.length))];
		if (v.x >= width || v.x <= 0 || v.y <= 0 || v.y >= height ) {
			v.x = width/2;
			v.y = height/2;
		}
		forma_aleatoria(v.x, v.y, tamanho, tamanho);
	}
  
  
  

}

function forma_aleatoria(x, y, l, a) {
  let r = floor(random(3));

  switch (r) {
    case 2:
      xis(x, y, l, a);
      break;

    case 1:
      cruz(x, y, l, a);
      break;
  
    default:
      quadrado(x, y, l, a);
      break;
  }
}

function xis(x, y, l, a) {
  pA_x = x - l/2;
  pA_y = y - a/2;
  pB_x = x + l/2;
  pB_y = y + a/2;

  pC_x = x - l/2;
  pC_y = y + a/2;
  pD_x = x + l/2;
  pD_y = y - a/2;

  line(pA_x, pA_y, pB_x, pB_y);
  line(pC_x, pC_y, pD_x, pD_y);

  registrar_vertices([pA_x, pA_y, pB_x, pB_y, pC_x, pC_y, pD_x, pD_y]);
}

function cruz(x, y, l, a) {
  pA_x = x;
  pA_y = y - a/2;
  pB_x = x;
  pB_y = y + a/2;

  pC_x = x - l/2;
  pC_y = y;
  pD_x = x + l/2;
  pD_y = y;

  line(pA_x, pA_y, pB_x, pB_y);
  line(pC_x, pC_y, pD_x, pD_y);

  registrar_vertices([pA_x, pA_y, pB_x, pB_y, pC_x, pC_y, pD_x, pD_y]);
}

function quadrado(x, y, l, a) {
  pA_x = x - l/2;
  pA_y = y - a/2;
  
  pB_x = x + l/2;
  pB_y = y - a/2;
  
  pC_x = x + l/2;
  pC_y = y + a/2;
  
  pD_x = x - l/2;
  pD_y = y + a/2;

  beginShape();
  vertex(pA_x, pA_y);
  vertex(pB_x, pB_y);
  vertex(pC_x, pC_y);
  vertex(pD_x, pD_y);
  endShape(CLOSE);

  registrar_vertices(
    [pA_x, pA_y,
    pB_x, pB_y, 
    pC_x, pC_y, 
    pD_x, pD_y]);
}

function registrar_vertices(vertices) {
	ultimos_vertices = [];
  for(let i = 0; i < vertices.length / 2; i++) {
    let v = {
      "x": vertices[i * 2],
      "y": vertices[i * 2 +1],
    }
		ultimos_vertices.push(v);
  }
}