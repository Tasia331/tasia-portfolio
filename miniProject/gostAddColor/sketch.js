//AI was used to generate cloth's color palettes in batches and write code to formate images & scale them according to canvas dimensions. 

let tintR;
let tintG;
let tintB;
let tintHair;

let B1;
let B2;
let B3;

let cloth1;
let cloth2;
let cloth3;

let hair1;
let hair2;
let hair3;

let cav;
let pic;

let twoX;
let twoY;

let bg;
let rx;
let ry;

// 画布基准尺寸
let baseW = 1200;
let baseH = 1000;

// 图片统一缩放比例
let imgScale;

// 起步位置
let b3x = 600;
let b3y = 0;
let der3x = 2;
let der3y = 1;

function setup() {
  createCanvas(800,600);

imgScale = min(width / 1200, height / 1000);
cav = width / 3;

  b3x = width * 0.5;
  b3y = 0;

  randomClothColor();
  tintHair = random(0, 256);

  imagePrepare();

  bg = random(200, 300);
}

function mouseClicked() {
  randomClothColor();
  tintHair = random(0, 100);
}

function draw() {
  background(bg);

  if (mouseX < cav && mouseX >= 0) {
    stageOne();
  }

  if (mouseX < cav * 2 && mouseX >= cav) {
    stageTwo();
  }

  if (mouseX < cav * 3 && mouseX >= cav * 2) {
    stageThree();
  }
}

async function imagePrepare() {
  B1 = await loadImage("B1.png");
  B2 = await loadImage("B2.png");
  B3 = await loadImage("B3.png");

  cloth1 = await loadImage("cloth1.png");
  cloth2 = await loadImage("cloth2.png");
  cloth3 = await loadImage("cloth3.png");

  hair1 = await loadImage("hair1.png");
  hair2 = await loadImage("hair2.png");
  hair3 = await loadImage("hair3.png");
}

function stageOne() {
  setOne();
}

function stageTwo() {
  if (!B2) return;

  mapTwoX();
  mapTwoY();

  setTwo();
  setOne();
}

function mapTwoX() {
  let currentX = mouseX - cav;

  twoX = map(
    currentX,
    0,
    cav,
    B2.width * imgScale - width * 0.04,
    B2.width * imgScale + width * 0.04
  );

  twoX = constrain(twoX, 1, width);

  return twoX;
}

function mapTwoY() {
  let currentY = mouseY;

  twoY = map(
    currentY,
    height,
    0,
    B2.height * imgScale - height * 0.04,
    B2.height * imgScale + height * 0.04
  );

  twoY = constrain(twoY, 1, height);

  return twoY;
}

function stageThree() {
  if (!B3) return;

  let w = B3.width * imgScale;
  let h = B3.height * imgScale;

  // 左右碰撞
  if (
    (b3x <= 0 && der3x < 0) ||
    (b3x + w >= width && der3x > 0)
  ) {
    rx = random(1, 4);
    der3x = (-der3x / abs(der3x)) * rx;
  }

  // 上下碰撞
  if (
    (b3y <= 0 && der3y < 0) ||
    (b3y + h >= height && der3y > 0)
  ) {
    ry = random(1, 2);
    der3y = (-der3y / abs(der3y)) * ry;
  }

  // 移动位置
  b3x += der3x * imgScale;
  b3y += der3y * imgScale;

  // 限制在画布内
  b3x = constrain(b3x, 0, max(0, width - w));
  b3y = constrain(b3y, 0, max(0, height - h));

  // 原有叠加效果
  setOne();

  push();
  noStroke();
  fill(bg, 100);
  rect(0, 0, width, height);
  pop();

  setThree();
}

function setOne() {
  tint(tintR, tintG, tintB);

  if (cloth1) {
    image(
      cloth1,
      0,
      height - cloth1.height * imgScale,
      cloth1.width * imgScale,
      cloth1.height * imgScale
    );
  }

  noTint();

  tint(tintHair);

  if (hair1) {
    image(
      hair1,
      0,
      height - hair1.height * imgScale,
      hair1.width * imgScale,
      hair1.height * imgScale
    );
  }

  noTint();

  if (B1) {
    image(
      B1,
      0,
      height - B1.height * imgScale,
      B1.width * imgScale,
      B1.height * imgScale
    );
  }
}

function setTwo() {
  let x = cav * 0.5;
  let y = height - twoY;

  tint(tintR, tintG, tintB, 150);

  if (cloth2) {
    image(cloth2, x, y, twoX, twoY);
  }

  noTint();

  tint(tintHair, 100);

  if (hair2) {
    image(hair2, x, y, twoX, twoY);
  }

  noTint();

  tint(225, 150);

  if (B2) {
    image(B2, x, y, twoX, twoY);
  }

  noTint();
}

function setThree() {
  tint(tintR, tintG, tintB, 200);

  if (cloth3) {
    image(
      cloth3,
      b3x,
      b3y,
      cloth3.width * imgScale,
      cloth3.height * imgScale
    );
  }

  noTint();

  tint(tintHair, 200);

  if (hair3) {
    image(
      hair3,
      b3x,
      b3y,
      hair3.width * imgScale,
      hair3.height * imgScale
    );
  }

  noTint();

  tint(225, 200);

  if (B3) {
    image(
      B3,
      b3x,
      b3y,
      B3.width * imgScale,
      B3.height * imgScale
    );
  }

  noTint();
}

function randomClothColor() {
  let palette = floor(random(6));

  if (palette == 0) {
    tintR = random(120, 165);
    tintG = random(135, 170);
    tintB = random(160, 195);
  } else if (palette == 1) {
    tintR = random(135, 165);
    tintG = random(155, 180);
    tintB = random(135, 160);
  } else if (palette == 2) {
    tintR = random(150, 180);
    tintG = random(140, 160);
    tintB = random(165, 190);
  } else if (palette == 3) {
    tintR = random(180, 200);
    tintG = random(145, 165);
    tintB = random(150, 170);
  } else if (palette == 4) {
    tintR = random(180, 200);
    tintG = random(175, 190);
    tintB = random(140, 160);
  } else {
    tintR = random(125, 150);
    tintG = random(165, 185);
    tintB = random(165, 185);
  }
}
