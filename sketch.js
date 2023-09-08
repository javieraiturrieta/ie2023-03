function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let circles = [];
let message = "Haz click para ver el timbre:)";
let messageX = -200;

function setup() {
  createCanvas(800, 800);
  background(255, 240, 200);
}

function draw() {
  background(255, 240, 200);

  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.alpha -= 1; // Reduce gradualmente la transparencia
    fill(148, 0, 211, circle.alpha); // Color violeta con transparencia
    ellipse(circle.x, circle.y, 50, 50);
    textSize(24);
    fill(0);
    text(circle.label, circle.x - 10, circle.y + 10);
    
    if (circle.alpha <= 0) {
      // Elimina el círculo cuando la transparencia llega a cero
      circles.splice(i, 1);
    }
  }

  textSize(18);
  fill(0);
  text(message, messageX, 30);
  messageX += 2;

  if (messageX > width) {
    messageX = -message.length * 10;
  }
}

function mousePressed() {
  let circle = {
    x: mouseX,
    y: mouseY,
    alpha: 255, // Inicializa la transparencia en 255 (completamente visible)
    label: circles.length === 0 ? "H" : (circles.length === 1 ? "O" : (circles.length === 2 ? "L" : (circles.length === 3 ? "A" : ":)")))
  };
  circles.push(circle);
  
  // Desaparecer después de 5 segundos
  setTimeout(() => {
    let index = circles.indexOf(circle);
    if (index !== -1) {
      circles.splice(index, 1);
    }
  }, 5000);
}
