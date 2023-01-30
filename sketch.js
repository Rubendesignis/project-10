 let seed;
let angle_c;
let colors = [];
let colors1 = "cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
var color_setup;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = int(random(1000));
  colorMode(HSB, 450, 150, 100, 100);
	background(0, 0, 0);
	color_setup = random([colors1]);
	angle_c = 0;
}

function draw() {
  randomSeed(seed);
  background(0,0,0,10);
  translate(width / 2, height / 2);
	rotate(angle_c);
  for (let i = 0; i < 4; i++) {
    colors[0] = random(color_setup);
    colors[1] = random(color_setup);
    colors[2] = random(color_setup);
    colors[3] = random(color_setup);
    colors[4] = random(color_setup);
    circleForm(10, 10, width * 0.3 * (i+2));
  }
	angle_c += TAU/4500/1;
}

function circleForm(x, y, d) {
  
  let branch = int(random(30, 15));
  let ang = TAU / branch;
  let angles = [];
  for (let i = 0; i < branch; i++) {
    angles.push(ang * (i + iteration(0.2, 0.5)));
  }
  for (let i = 0; i < branch; i++) {
    let ang1 = angles[i];
    let ang2 = angles[(i + int(random(6))) % angles.length];
    let dd = d * iteration(0.1, 1);
    noFill();
    stroke(random(colors));
		
    strokeCap(circle);
    strokeWeight(random(2,10));
    arc(x, y, dd, dd, ang1, ang2);
  }

}

function iteration(s, e) {
  let t = random(50,500);
  let v = random(0.01, 0.05);
  return map(cos(t + frameCount * v), -0.5, 0.5, s, e);
}
