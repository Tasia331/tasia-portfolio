let a;
//stroke("#143990") //for color
let x, y;
let bigR = 0;
let startTime;

function setup() {
  createCanvas(500, 500);
  background(20, 57, 114);
  x = mouseX;
  y = mouseY;
  startTime = millis();
}

function draw() {
  // //可拖动的画布大小
  // if (mouseIsPressed) {
  //   createCanvas(mouseX, mouseY);
  //   background(20, 57, 114);
  // }

  //set scale
  a = min(width / 40, height / 60);

  bigCircle(color(20, 57, 114), color("#a8b5dc"), (a / 10) * 30);

  //set middle
  translate((width - 40 * a) / 2 + 0.5 * a, (height - 60 * a) / 2 - 1.25 * a);

  whiteBG();
  darkLine();
}


function bigCircle(bgColor, circleColor, w) {
  let progress = constrain((millis() - startTime) / 3000, 0, 1);
  //透明度随 3 秒渐变淡出，且不出现负数
  let alpha = 255 * (1 - progress * 1.2);
  // 大圆
  let maxR = dist(0, 0, width, height);
  let bigR = maxR * progress;

  //整理颜色
  noFill();
  let c = color(circleColor);
  //透明度
  c.setAlpha(alpha * 0.7);
  stroke(c);

  strokeWeight(w / 2);
  circle(x, y, bigR * 2);

  strokeWeight(w);
  circle(x, y, bigR * 1.8);

  strokeWeight(w / 3);
  circle(x, y, bigR);

  background(20, 57, 114, 70);

  // 鼠标按住时更新起始点与时间
  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    startTime = millis();
    background(20, 57, 114);
  }
}

function whiteBG() {
  push(); //background()
  fill(225, 225, 225);
  noStroke();
  beginShape();
  // 左边：从下到上
  vertex(-0.2 * a, 60 * a);
  vertex(1 * a, 48 * a);
  vertex(4 * a, 44 * a);
  vertex(3 * a, 42 * a);
  vertex(10 * a, 36 * a);
  vertex(10 * a, 34 * a);
  vertex(4.5 * a, 27 * a);
  vertex(3.5 * a, 22 * a);
  vertex(0.7 * a, 19.2 * a);
  vertex(3.5 * a, 8.5 * a);
  vertex(12.5 * a, 2.5 * a);
  // 右边：从上到下
  vertex(20 * a, 3.5 * a);
  vertex(25.6 * a, 7 * a);
  vertex(28.5 * a, 14.5 * a);
  vertex(27.3 * a, 19.5 * a);
  vertex(25.9 * a, 21.5 * a);
  vertex(27.1 * a, 21.5 * a);
  vertex(26.5 * a, 26.5 * a);
  vertex(22.9 * a, 28.1 * a);
  vertex(22.9 * a, 31.8 * a);
  vertex(25 * a, 33 * a);
  vertex(27 * a, 37 * a);
  vertex(36 * a, 47 * a);
  vertex(39 * a, 57 * a);
  vertex(39 * a, 60 * a);

  endShape(CLOSE);
  pop();
}

function darkLine() {
  stroke(0);
  strokeWeight((a / 10) * 4); //scale for stroke

  line(0, 57 * a, a, 48 * a); //左边衬衫
  line(4 * a, 54 * a, 6 * a, 49 * a);
  line(1 * a, 48 * a, 4 * a, 44 * a);
  line(3 * a, 42 * a, 4 * a, 44 * a);
  line(4 * a, 44 * a, 6 * a, 49 * a);
  line(3 * a, 42 * a, 10 * a, 36 * a);
  line(6 * a, 48 * a, 10 * a, 40 * a);

  line(8 * a, 44 * a, 7 * a, 52 * a); //inner
  line(7 * a, 52 * a, 14 * a, 53 * a);

  line(23 * a, 32 * a, 25 * a, 33 * a); //右边衣服
  line(25 * a, 33 * a, 27 * a, 37 * a);
  line(27 * a, 37 * a, 22 * a, 46 * a);
  line(22 * a, 46 * a, 20 * a, 50 * a);
  line(20 * a, 50 * a, 16 * a, 47 * a);
  line(16 * a, 47 * a, 13 * a, 48 * a);

  line(25 * a, 33 * a, 19 * a, 39 * a); //长的衣领线
  line(19 * a, 39 * a, 13 * a, 48 * a);
  line(13 * a, 48 * a, 16 * a, 56 * a);
  line(16 * a, 56 * a, 16 * a, 60 * a);

  line(27 * a, 51 * a, 25 * a, 59 * a); //肩位和手
  line(28 * a, 37.5 * a, 36 * a, 47 * a);
  line(36 * a, 47 * a, 37 * a, 49 * a);
  line(37 * a, 49 * a, 39 * a, 57 * a);
  line(39 * a, 57 * a, 39 * a, 60 * a);

  line(3.7 * a, 22 * a, 4.5 * a, 27 * a); //脖子和脸轮廓
  line(4.5 * a, 27 * a, 10 * a, 34 * a);
  line(10 * a, 34 * a, 15 * a, 34.5 * a);
  line(15 * a, 34.5 * a, 22 * a, 29 * a);
  line(22 * a, 29 * a, 23 * a, 28 * a);
  line(23 * a, 29 * a, 23 * a, 34 * a);
  line(10 * a, 34 * a, 10 * a, 42 * a);

  line(24.5 * a, 21.5 * a, 27 * a, 21.25 * a); //耳朵
  line(27 * a, 21.25 * a, 26.5 * a, 26.5 * a);
  line(26.5 * a, 26.5 * a, 24 * a, 28 * a);

  line(1 * a, 18 * a, 3.5 * a, 8.5 * a); //发顶
  line(3.5 * a, 8.5 * a, 12 * a, 3 * a);
  line(12.5 * a, 2.5 * a, 18 * a, 4 * a);
  line(18 * a, 4 * a, 19.5 * a, 6.5 * a);
  line(21 * a, 4 * a, 26 * a, 7 * a);
  line(25.5 * a, 7.5 * a, 28.5 * a, 14.5 * a);
  line(28.5 * a, 14.5 * a, 27.3 * a, 19.5 * a);

  line(2 * a, 19.5 * a, 7 * a, 14 * a); //左发沿
  line(7 * a, 14 * a, 7.5 * a, 16 * a);
  line(7.5 * a, 16 * a, 9.5 * a, 13.5 * a);
  line(10 * a, 14 * a, 15 * a, 13.5 * a);
  line(15.5 * a, 14.5 * a, 15.7 * a, 12.7 * a);
  line(15.7 * a, 12.7 * a, 17 * a, 14 * a);

  line(19 * a, 13 * a, 21.5 * a, 18.5 * a); //右发沿
  line(21.5 * a, 18.5 * a, 22.6 * a, 16.2 * a);
  line(23 * a, 17 * a, 23.3 * a, 19 * a);
  line(23.3 * a, 19 * a, 25 * a, 18.9 * a);

  line(22.5 * a, 20 * a, 22 * a, 23.5 * a); //鬓角
  line(22 * a, 23.5 * a, 24.6 * a, 20.7 * a);

  line(5.8 * a, 18.2 * a, 8.8 * a, 18.1 * a); //左眉毛
  line(8.8 * a, 18.1 * a, 9.2 * a, 18.2 * a);

  line(15 * a, 18.5 * a, 16.2 * a, 18.6 * a); //右眉毛
  line(16.2 * a, 18.6 * a, 19.2 * a, 20.5 * a);

  line(5.8 * a, 20.4 * a, 6.2 * a, 20.4 * a); //左眼
  line(6.2 * a, 20.4 * a, 9.3 * a, 21.7 * a);

  line(14 * a, 22 * a, 17.8 * a, 21.8 * a); //右眼
  line(17.8 * a, 21.8 * a, 18.1 * a, 22 * a);

  line(11.2 * a, 21.1 * a, 10.5 * a, 25.8 * a); //nose

  line(9.1 * a, 28.8 * a, 12.1 * a, 29.4 * a); //mouth
  line(12.1 * a, 29.4 * a, 16.6 * a, 29.3 * a);

  stroke(200, 40, 70);
  line(3.4 * a, 20 * a, 4.7 * a, 21 * a); //left galsses
  line(4.5 * a, 21 * a, 5 * a, 25 * a);
  line(5 * a, 25 * a, 9.6 * a, 26 * a);
  line(9.6 * a, 26 * a, 10.4 * a, 21.4 * a);
  line(10.5 * a, 22 * a, 12 * a, 22.3 * a);

  line(12.3 * a, 21.8 * a, 12.4 * a, 26 * a); //right galsses
  line(12.4 * a, 26 * a, 19.5 * a, 26 * a);
  line(19.5 * a, 26 * a, 20 * a, 22 * a);
  line(20 * a, 22 * a, 25 * a, 21 * a);
}